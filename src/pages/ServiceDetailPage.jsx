import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';
import { weddingHalls } from '../data/mockData';
import { getServiceTypeBadgeColor, getVenueStyleBadgeColor, getTypeBadgeColor } from '../utils/badgeStyles';
import { useBookings } from '../context/BookingContext';
import { StarIcon, ShieldCheckIcon, HeartIcon, TagIcon, MapPinIcon, CurrencyDollarIcon, XMarkIcon, ChevronDownIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

function ServiceDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const service = weddingHalls.find(item => item.id === parseInt(id));
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [likedServices, setLikedServices] = useState(() => {
    const saved = localStorage.getItem('likedServices');
    return saved ? JSON.parse(saved) : {};
  });
  const { bookings, addOrUpdateBooking, addMessageToBooking } = useBookings();

  const currentBooking = bookings.find(b => b.serviceId === service.id && b.type === 'service');
  const hasOngoingConsultation = !!currentBooking;

  useEffect(() => {
    localStorage.setItem('likedServices', JSON.stringify(likedServices));
  }, [likedServices]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('openChat') === 'true') {
      setIsChatOpen(true);
    }
  }, [location.search]);

  const handleLikeToggle = (serviceId) => {
    setLikedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const handleConsultationClick = () => {
    if (!hasOngoingConsultation) {
      addOrUpdateBooking({
        serviceId: service.id,
        serviceName: service.name,
        type: 'service',
        status: '상담 중',
        bookingDate: new Date().toISOString().slice(0, 10),
        price: service.price,
        details: '서비스 상담 시작',
        messages: [{ sender: 'system', text: '안녕하세요! 무엇을 도와드릴까요?' }],
      });
    }
    setIsChatOpen(true);
  };

  const handleSendMessage = useCallback((text) => {
    addMessageToBooking(service.id, { sender: 'user', text });

    // Simulate a bot response for demonstration
    setTimeout(() => {
      addMessageToBooking(service.id, { sender: 'partner', text: '네, 확인했습니다. 잠시만 기다려주세요.' });
    }, 1000);
  }, [addMessageToBooking, service.id]);

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentType, setPaymentType] = useState(''); // 'deposit' or 'balance'

  const handleProceedToBooking = () => {
    setPaymentAmount(service.price * 0.1);
    setPaymentType('deposit');
    setIsPaymentModalOpen(true);
  };

  const handleCompletePayment = () => {
    setPaymentAmount(service.price - (service.price * 0.1)); // 잔금 계산
    setPaymentType('balance');
    setIsPaymentModalOpen(true);
  };

  const processPayment = () => {
    if (paymentType === 'deposit') {
      addOrUpdateBooking({
        serviceId: service.id,
        type: 'service',
        status: '계약금 결제 완료',
        depositAmount: paymentAmount,
        details: '계약금 결제 완료',
      });
      alert(`계약금 ${ paymentAmount.toLocaleString() }원 결제가 완료되었습니다.`);
    } else if (paymentType === 'balance') {
      addOrUpdateBooking({
        serviceId: service.id,
        type: 'service',
        status: '예약 확정',
        depositAmount: service.price, // 총 금액으로 변경
        details: '잔금 결제 완료',
      });
      alert('잔금 결제가 완료되었습니다!');
    }
    setIsPaymentModalOpen(false);
    setIsChatOpen(false);
  };

  if (!service) {
    console.error(`Service not found for ID: ${id}`);
    return <div className="container mx-auto p-4 text-center text-red-500 font-bold">서비스를 찾을 수 없습니다. (ID: {id})</div>;
  }

  // Ensure reviews, averageRating, and reviewCount are always present
  const currentService = {
    ...service,
    reviews: service.reviews || [],
    averageRating: service.averageRating || 0,
    reviewCount: service.reviewCount || 0,
  };

  return (
    <div className="bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* --- 상단 이미지 및 기본 정보 --- */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h1 className="text-4xl font-bold text-white">{service.name}</h1>
            <p className="text-xl text-gray-200 mt-2">{service.location}</p>
            <button
              className="absolute top-4 right-4 btn btn-circle btn-sm bg-white bg-opacity-80 border-none"
              onClick={() => handleLikeToggle(service.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${likedServices[service.id] ? 'text-red-500' : 'text-gray-400'}`}
                fill={likedServices[service.id] ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- 좌측: 상세 정보 --- */}
          <div className="lg:col-span-2">
            {/* 소개 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">서비스 소개</h2>
              <p className="text-base-content leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>

            {/* 태그 */}
            <div className="flex gap-2 my-4 flex-wrap">
              <div className={`badge badge-lg badge-outline ${getServiceTypeBadgeColor(service.serviceType)}`}>{service.serviceType}</div>
              {service.venueStyle && <div className={`badge badge-lg badge-outline ${getVenueStyleBadgeColor(service.venueStyle)}`}>{service.venueStyle}</div>}
              <div className={`badge badge-lg badge-outline ${getTypeBadgeColor(service.type)}`}>{service.type}</div>
            </div>

            <div className="divider"></div>

            {/* 위치 정보 */}
            <div>
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">위치 정보</h2>
              <p className="text-base-content mb-4">{service.address}</p>
              {/* 지도 영역은 임시로 비워둡니다 */}
              <div className="w-full h-80 rounded-lg shadow-md bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">지도 정보 로딩 중...</p>
              </div>
            </div>

            {/* 리뷰 섹션 */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold border-b pb-4 mb-4">리뷰 ({currentService.reviewCount})</h2>
              {currentService.reviews && currentService.reviews.length > 0 ? (
                <div className="space-y-6">
                  {currentService.reviews.map(review => (
                    <div key={review.id} className="bg-base-100 p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center mb-2">
                        <div className="avatar mr-3">
                          <div className="w-10 h-10 rounded-full">
                            <img src={review.authorImage} alt={review.author} />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{review.author}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{review.rating}</span>
                            <span className="ml-2">{review.createdAt}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">아직 작성된 리뷰가 없습니다. 첫 리뷰를 남겨주세요!</p>
              )}
              <Link to={`/service/${currentService.id}/review`} className="btn btn-primary mt-6">리뷰 작성</Link>
            </div>
          </div>

          {/* --- 우측: 가격 및 상담 버튼 --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 card bg-base-200 shadow-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">서비스 가격</span>
                <div className="flex items-center">
                  {service.isVerified && (
                    <div className="tooltip" data-tip="정부에서 확인된 정찰가입니다.">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <span className="text-2xl font-bold text-primary">{service.price.toLocaleString()}원</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">평점</span>
                <span className="text-2xl font-bold">⭐ {currentService.averageRating} ({currentService.reviewCount} 리뷰)</span>
              </div>
              {currentBooking?.status === '예약 확정' ? (
                 <button className="btn btn-disabled w-full">상담 및 예약이 확정되었습니다.</button>
              ) : (
                <button className="btn btn-primary w-full" onClick={handleConsultationClick}>
                  {hasOngoingConsultation ? '상담 이어하기' : '실시간 상담하기'}
                </button>
              )}
              
              {currentBooking && currentBooking.status === '상담 중' && (
                <button className="btn btn-success w-full mt-4" onClick={handleProceedToBooking}>계약금 결제하기</button>
              )}
              {currentBooking && currentBooking.status === '계약금 결제 완료' && (
                <button className="btn btn-info w-full mt-4" onClick={handleCompletePayment}>잔금 결제하기</button>
              )}
            </div>
          </div>
        </div>

        {isChatOpen && currentBooking && (
          <ChatRoom
            serviceName={service.name}
            messages={currentBooking.messages || []}
            onSendMessage={handleSendMessage}
            onClose={() => setIsChatOpen(false)}
          />
        )}

        {isPaymentModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-sm w-full">
              <h2 className="text-2xl font-bold mb-4">결제 진행</h2>
              <p className="mb-2">서비스: {service.name}</p>
              <p className="mb-2">결제 종류: {paymentType === 'deposit' ? '계약금' : '잔금'}</p>
              <p className="text-lg font-semibold mb-6">결제 금액: {paymentAmount.toLocaleString()}원</p>
              <div className="flex justify-end gap-4">
                <button className="btn" onClick={() => setIsPaymentModalOpen(false)}>취소</button>
                <button className="btn btn-primary" onClick={processPayment}>결제 확정</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailPage;
