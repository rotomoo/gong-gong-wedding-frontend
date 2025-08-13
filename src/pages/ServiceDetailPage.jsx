import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';
import PaymentModal from '../components/common/PaymentModal';
import ReservationRequestModal from '../components/common/ReservationRequestModal';
import { weddingHalls } from '../data/mockData';
import { getServiceTypeBadgeColor, getVenueStyleBadgeColor, getTypeBadgeColor, getDetailBadgeColor } from '../utils/badgeStyles';
import { useBookings } from '../context/BookingContext';
import { StarIcon, ShieldCheckIcon, BuildingOfficeIcon, UserIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon, GiftIcon, InformationCircleIcon, ArrowTopRightOnSquareIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const InfoListItem = ({ icon, children }) => (
  <li className="flex items-start"><span className="mr-3 text-primary">{icon}</span><span>{children}</span></li>
);

const DetailListItem = ({ label, value }) => (
  <div className="flex border-b py-3">
    <span className="w-1/3 font-semibold text-gray-600">{label}</span>
    <span className="w-2/3 text-gray-800">{value}</span>
  </div>
);

function ServiceDetailPage() {
  const { id } = useParams();
  const service = weddingHalls.find(item => item.id === parseInt(id));
  
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState(service?.gallery?.[0] || service?.image);
  const [isChatRoomOpen, setIsChatRoomOpen] = useState(false); // 이 줄 추가

  const { bookings, addOrUpdateBooking, addMessageToBooking } = useBookings();
  const currentBooking = bookings.find(b => b.serviceId === service?.id);

  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!currentBooking) {
      addOrUpdateBooking({
        serviceId: service.id, serviceName: service.name, type: 'service', status: '상담 중',
        bookingDate: new Date().toISOString().slice(0, 10), price: service.price, details: '서비스 상담 시작',
        messages: [{ sender: 'system', text: '안녕하세요! 무엇을 도와드릴까요?' }],
      });
    }
  }, [currentBooking, addOrUpdateBooking, service]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
    script.onload = () => window.kakao.maps.load(() => setIsSdkLoaded(true));
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (isSdkLoaded && service?.address && mapContainer.current) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(service.address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          const map = new window.kakao.maps.Map(mapContainer.current, { center: coords, level: 3 });
          new window.kakao.maps.Marker({ map, position: coords });
          map.setCenter(coords);
        }
      });
    }
  }, [isSdkLoaded, service?.address]);

  const handleSendMessage = useCallback((text) => {
    addMessageToBooking(service.id, { sender: 'user', text });
    setTimeout(() => {
      addMessageToBooking(service.id, { sender: 'partner', text: '네, 확인했습니다. 잠시만 기다려주세요.' });
    }, 1000);
  }, [addMessageToBooking, service.id]);

  const handleReservationRequest = (details) => {
    addOrUpdateBooking({ serviceId: service.id, type: 'service', status: '예약 요청됨', ...details });
    setIsReservationModalOpen(false);
    const userMessage = `[예약 요청]\n- 희망 날짜: ${details.dates.join(', ')}\n- 희망 시간대: ${details.times.join(', ')}`;
    addMessageToBooking(service.id, { sender: 'user', text: userMessage });
    setTimeout(() => {
      addOrUpdateBooking({ serviceId: service.id, type: 'service', status: '예약 가능' });
      addMessageToBooking(service.id, { 
        sender: 'partner', 
        text: '고객님이 요청하신 날짜에 예약이 가능합니다! 계약금 결제를 진행해주세요.'
      });
    }, 3000);
  };

  const openPaymentModal = (type) => {
    const totalPrice = currentBooking?.finalPrice || service.price;
    if (type === 'deposit') {
      setPaymentInfo({ type: 'deposit', title: '계약금 결제', amount: totalPrice * 0.1, totalPrice, depositPaid: 0 });
    } else if (type === 'balance') {
      const depositPaid = currentBooking?.depositAmount || 0;
      setPaymentInfo({ type: 'balance', title: '잔금 결제', amount: totalPrice - depositPaid, totalPrice, depositPaid });
    }
    setIsPaymentModalOpen(true);
  };

  const handlePaymentConfirm = (paymentMethod, amount) => {
    const newStatus = paymentInfo.type === 'deposit' ? '계약금 결제 완료' : '예약 확정';
    addOrUpdateBooking({
      serviceId: service.id, type: 'service', status: newStatus,
      depositAmount: paymentInfo.type === 'deposit' ? amount : (currentBooking?.depositAmount || 0) + amount,
      paymentMethod: paymentMethod,
    });
    setIsPaymentModalOpen(false);
    alert(`${paymentInfo.title}이(가) 완료되었습니다.`);
  };

  const renderBookingActions = () => {
    if (!currentBooking) return <button className="btn btn-primary w-full">실시간 상담하기</button>;
    switch (currentBooking.status) {
      case '상담 중': return <button className="btn btn-primary w-full" onClick={() => setIsReservationModalOpen(true)}>예약하기</button>;
      case '예약 요청됨': return <button className="btn btn-disabled w-full">업체 응답 대기 중...</button>;
      case '예약 가능': return <button className="btn btn-success w-full" onClick={() => openPaymentModal('deposit')}>계약금 결제하기</button>;
      case '계약금 결제 완료': return <button className="btn btn-info w-full" onClick={() => openPaymentModal('balance')}>잔금 결제하기</button>;
      case '예약 확정': return <button className="btn btn-disabled w-full">예약 확정됨</button>;
      default: return <button className="btn btn-primary w-full">실시간 상담하기</button>;
    }
  };

  if (!service) return <div className="container mx-auto p-4 text-center text-red-500 font-bold">서비스를 찾을 수 없습니다.</div>;

  const currentService = { ...service, reviews: service.reviews || [], averageRating: service.averageRating || 0, reviewCount: service.reviewCount || 0 };

  return (
    <div className="bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-3">
            <img src={mainImage} alt={service.name} className="w-full h-96 object-contain rounded-lg shadow-lg"/>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {service.gallery?.map((img, index) => <img key={index} src={img} alt={`${service.name} gallery ${index + 1}`} className={`w-full h-24 object-cover rounded-md cursor-pointer ${mainImage === img ? 'ring-2 ring-primary' : ''}`} onClick={() => setMainImage(img)} />)}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
            <p className="text-md text-gray-500 mt-2">{service.location}</p>
            <div className="flex gap-2 my-4 flex-wrap">
              <div className={`badge badge-lg badge-outline ${getServiceTypeBadgeColor(service.serviceType)}`}>{service.serviceType}</div>
              {service.venueStyle && <div className={`badge badge-lg badge-outline ${getVenueStyleBadgeColor(service.venueStyle)}`}>{service.venueStyle}</div>}
              {service.subCategory && <div className={`badge badge-lg badge-outline ${getDetailBadgeColor(service.subCategory)}`}>{service.subCategory}</div>}
              <div className={`badge badge-lg badge-outline ${getTypeBadgeColor(service.type)}`}>{service.type}</div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">서비스 가격</span>
              <div className="flex items-center">
                {service.isVerified && <div className="tooltip" data-tip="정부에서 확인된 정찰가입니다."><ShieldCheckIcon className="h-6 w-6 text-info mr-2"/></div>}
                <span className="text-2xl font-bold text-primary">{service.price.toLocaleString()}원</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg">평점</span>
              <span className="text-xl font-bold flex items-center"><StarIcon className="h-5 w-5 text-yellow-400 mr-1"/> {currentService.averageRating} ({currentService.reviewCount} 리뷰)</span>
            </div>
            <div className="mt-auto">
              {/* 상담방 아이콘 추가 */}
              <button
                className="btn btn-outline btn-primary w-full mb-2"
                onClick={() => {
                  // ChatRoom 컴포넌트가 열리도록 하는 로직 (예: 상태 변경)
                  // 현재 ChatRoom은 currentBooking이 있을 때만 렌더링되므로,
                  // currentBooking이 없으면 생성하고, 있으면 그냥 열리도록 유도
                  if (!currentBooking) {
                    addOrUpdateBooking({
                      serviceId: service.id, serviceName: service.name, type: 'service', status: '상담 중',
                      bookingDate: new Date().toISOString().slice(0, 10), price: service.price, details: '서비스 상담 시작',
                      messages: [{ sender: 'system', text: '안녕하세요! 무엇을 도와드릴까요?' }],
                    });
                  }
                  setIsChatRoomOpen(true); // 이 줄 추가
                }}
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                상담방 열기
              </button>
              {renderBookingActions()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg"><h2 className="text-2xl font-bold border-b pb-4 mb-4">서비스 소개</h2><p className="text-base-content leading-relaxed whitespace-pre-line">{service.description}</p></div>
            
            {service.includedItems && <div className="bg-white p-6 rounded-lg shadow-lg"><h2 className="text-2xl font-bold border-b pb-4 mb-4">포함 내역</h2><ul className="space-y-3">{service.includedItems?.map((item, index) => <InfoListItem key={index} icon={<CheckCircleIcon className="h-6 w-6"/>}>{item}</InfoListItem>)}</ul></div>}
            
            {service.benefits?.length > 0 && <div className="bg-white p-6 rounded-lg shadow-lg"><h2 className="text-2xl font-bold border-b pb-4 mb-4">특별 혜택</h2><ul className="space-y-3">{service.benefits.map((item, index) => <InfoListItem key={index} icon={<GiftIcon className="h-6 w-6"/>}>{item}</InfoListItem>)}</ul></div>}

            {service.hallInfo && (() => {
              const mealPrice = String(service.hallInfo.mealPrice || '');
              const displayMealPrice = mealPrice.includes('~') ? mealPrice.split('~')[0].trim() : mealPrice;

              return (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold border-b pb-4 mb-4">홀 기본 정보</h2>
                  <div className="space-y-2">
                    <DetailListItem label="홀 타입" value={service.hallInfo.type} />
                    <DetailListItem label="메뉴 종류" value={service.hallInfo.menu} />
                    <DetailListItem label="식대" value={displayMealPrice} />
                    <DetailListItem label="보증 인원" value={service.hallInfo.guarantee} />
                    <DetailListItem label="예식 간격" value={service.hallInfo.interval} />
                    <DetailListItem label="주차" value={service.hallInfo.parking} />
                  </div>
                </div>
              );
            })()}

            {service.detailedInfo && (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold border-b pb-4 mb-4">상세 정보 ({service.detailedInfo.hallName})</h2>
                <div className="space-y-2">
                  <DetailListItem label="수용 인원" value={service.detailedInfo.capacity} />
                </div>
              </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">업체 정보 및 위치</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">업체 정보</h3>
                  <ul className="space-y-3">
                    <InfoListItem icon={<BuildingOfficeIcon className="h-6 w-6"/>}><b>상호명:</b> {service.vendorInfo?.name}</InfoListItem>
                    <InfoListItem icon={<UserIcon className="h-6 w-6"/>}><b>대표자:</b> {service.vendorInfo?.ceo}</InfoListItem>
                    <InfoListItem icon={<InformationCircleIcon className="h-6 w-6"/>}><b>사업자번호:</b> {service.vendorInfo?.license}</InfoListItem>
                    <InfoListItem icon={<PhoneIcon className="h-6 w-6"/>}><b>연락처:</b> {service.vendorInfo?.phone}</InfoListItem>
                    <InfoListItem icon={<EnvelopeIcon className="h-6 w-6"/>}><b>이메일:</b> {service.vendorInfo?.email}</InfoListItem>
                  </ul>
                  {service.website && (
                    <a href={service.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-primary mt-4">
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                      공식 홈페이지 방문
                    </a>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">위치 정보</h3>
                  <p className="text-base-content mb-4">{service.address}</p>
                  <div id="map" ref={mapContainer} style={{ width: '100%', height: '320px' }} className="rounded-lg shadow-md"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">리뷰 ({currentService.reviewCount})</h2>
              {currentService.reviews.length > 0 ? (
                <div className="space-y-6 max-h-[40rem] overflow-y-auto pr-2">
                  {currentService.reviews.map(review => (
                    <div key={review.id} className="bg-base-100 p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="avatar mr-3"><div className="w-10 h-10 rounded-full"><img src={review.authorImage} alt={review.author} /></div></div>
                        <div>
                          <p className="font-semibold text-gray-800">{review.author}</p>
                          <div className="flex items-center text-sm text-gray-500"><StarIcon className="h-4 w-4 text-yellow-400 mr-1" /><span>{review.rating}</span><span className="ml-2">{review.createdAt}</span></div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">아직 작성된 리뷰가 없습니다.</p>
              )}
              
            </div>
          </div>
        </div>

        {currentBooking && isChatRoomOpen && ( // isChatRoomOpen 조건 추가
          <ChatRoom
            serviceName={service.name}
            messages={currentBooking.messages || []}
            onSendMessage={handleSendMessage}
            onClose={() => setIsChatRoomOpen(false)} // onClose prop 추가
          />
        )}
        {isReservationModalOpen && <ReservationRequestModal service={service} onClose={() => setIsReservationModalOpen(false)} onConfirm={handleReservationRequest} />}
        {isPaymentModalOpen && <PaymentModal service={service} paymentInfo={paymentInfo} onClose={() => setIsPaymentModalOpen(false)} onConfirm={handlePaymentConfirm} />}
      </div>
    </div>
  );
}

export default ServiceDetailPage;
