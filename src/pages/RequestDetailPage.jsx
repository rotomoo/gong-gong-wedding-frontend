import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { weddingHalls } from '../data/mockData'; // Keep for service details
import ChatRoom from '../components/ChatRoom';
import PaymentModal from '../components/common/PaymentModal';
import { useNotifications } from '../context/NotificationContext';
import { useBookings } from '../context/BookingContext';
import { ChatBubbleLeftRightIcon, BellIcon } from '@heroicons/react/24/solid';

const CURRENT_USER_ID = 'user123';

function RequestDetailPage() {
  const { id } = useParams();
  const { getRequestById, markNotificationAsRead } = useNotifications();
  const { bookings, addOrUpdateBooking, addMessageToBooking } = useBookings();

  const [activeChat, setActiveChat] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const request = getRequestById(id);

  const handleSendMessage = useCallback((text) => {
    if (!activeChat) return;
    addMessageToBooking(activeChat.serviceId, { sender: 'user', text });
    setTimeout(() => {
      addMessageToBooking(activeChat.serviceId, { sender: 'partner', text: '네, 문의 확인했습니다. 곧 답변 드리겠습니다.' });
    }, 1000);
  }, [activeChat, addMessageToBooking]);

  if (!request) {
    return <div className="container mx-auto p-8 text-center text-xl">존재하지 않는 견적 요청입니다.</div>;
  }

  const isMyRequest = request.authorId === CURRENT_USER_ID;
  const proposals = request.proposals || [];

  const handleProposalClick = (proposal) => {
    if (!isMyRequest) return;

    const bookingExists = bookings.some(b => b.serviceId === proposal.serviceId);
    if (!bookingExists) {
      const initialMessage = { sender: 'partner', text: proposal.message };
      addOrUpdateBooking({
        serviceId: proposal.serviceId,
        serviceName: proposal.proposerName,
        type: 'proposal',
        status: '상담 중',
        price: proposal.price,
        messages: [initialMessage],
      });
    }
    setActiveChat(proposal);
    markNotificationAsRead(request.id, proposal.id);
  };

  const handleAcceptProposal = (proposal) => {
    addOrUpdateBooking({ serviceId: proposal.serviceId, status: '예약 가능', finalPrice: proposal.price });
    const userMessage = `${proposal.proposerName} 업체의 제안을 수락하고 예약을 진행하겠습니다.`;
    addMessageToBooking(proposal.serviceId, { 
      sender: 'user', 
      text: userMessage
    });
    setActiveChat(proposal);
  };

  const openPaymentModal = (type, booking) => {
    const service = weddingHalls.find(h => h.id === booking.serviceId);
    const totalPrice = booking.finalPrice || service.price;
    if (type === 'deposit') {
      setPaymentInfo({ type: 'deposit', title: '계약금 결제', amount: totalPrice * 0.1, totalPrice, depositPaid: 0 });
    } else if (type === 'balance') {
      const depositPaid = booking.depositAmount || 0;
      setPaymentInfo({ type: 'balance', title: '잔금 결제', amount: totalPrice - depositPaid, totalPrice, depositPaid });
    }
    setIsPaymentModalOpen(true);
  };

  const handlePaymentConfirm = (paymentMethod, amount) => {
    const booking = bookings.find(b => b.serviceId === activeChat.serviceId);
    const newStatus = paymentInfo.type === 'deposit' ? '계약금 결제 완료' : '예약 확정';
    addOrUpdateBooking({ serviceId: booking.serviceId, status: newStatus, depositAmount: paymentInfo.type === 'deposit' ? amount : booking.depositAmount + amount, paymentMethod });
    setIsPaymentModalOpen(false);
    alert(`${paymentInfo.title}이(가) 완료되었습니다.`);
  };

  const renderProposalActions = (proposal) => {
    const booking = bookings.find(b => b.serviceId === proposal.serviceId);
    if (!booking || booking.status === '상담 중') {
      return <button onClick={() => handleAcceptProposal(proposal)} className="btn btn-primary btn-sm w-full mt-2">제안 수락하기</button>;
    }
    switch (booking.status) {
      case '예약 가능':
        return <button className="btn btn-success btn-sm w-full mt-2" onClick={() => openPaymentModal('deposit', booking)}>계약금 결제하기</button>;
      case '계약금 결제 완료':
        return <button className="btn btn-info btn-sm w-full mt-2" onClick={() => openPaymentModal('balance', booking)}>잔금 결제하기</button>;
      case '예약 확정':
        return <div className="text-center p-2 mt-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold">예약 확정됨</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
          <div className={isMyRequest ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="bg-white p-8 rounded-2xl shadow-md h-full">
              <div className="flex justify-between items-start">
                 <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{request.title}</h1>
                 {!isMyRequest && (
                    <button onClick={() => alert('업체만 견적을 제안할 수 있습니다. (프로토 타입)')} className="btn btn-primary ml-4 flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                      견적 제안하기
                    </button>
                  )}
              </div>
              <div className="flex items-center text-sm text-gray-500"><span>작성자: {request.author}</span><span className="mx-2">·</span><span>{request.createdAt}</span></div>
              <div className="divider my-6"></div>
              <h2 className="text-xl font-semibold mb-4">상세 요청 내용</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{request.details}</p>
            </div>
          </div>

          {isMyRequest && (
            <div className="lg:col-span-1">
              <div className="sticky top-24 card bg-white shadow-md p-6 rounded-2xl">
                <h2 className="text-xl font-bold mb-4">받은 제안 목록</h2>
                {proposals.length > 0 ? (
                  <div className="space-y-4">
                    {proposals.map(proposal => (
                      <div key={proposal.id} className="p-4 border border-gray-200 rounded-lg hover:bg-base-100 transition-colors duration-200">
                        <div onClick={() => handleProposalClick(proposal)} className="cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="avatar"><div className="w-10 h-10 rounded-full"><img src={proposal.proposerImage} alt={proposal.proposerName} /></div></div>
                              <div><p className="font-semibold text-gray-800">{proposal.proposerName}</p><p className="text-xs text-gray-400">{proposal.receivedAt}</p></div>
                            </div>
                            {proposal.newMessagesCount > 0 && (
                              <div className="indicator">
                                <span className="indicator-item badge badge-error">{proposal.newMessagesCount}</span>
                                <BellIcon className="h-6 w-6 text-primary" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 mt-2">{proposal.message}</p>
                          <p className="text-right font-bold text-primary mt-2">제안가: {proposal.price.toLocaleString()}원</p>
                        </div>
                        <div className="divider my-2"></div>
                        {renderProposalActions(proposal)}
                      </div>
                    ))}
                  </div>
                ) : <p className="text-gray-500">아직 받은 제안이 없습니다.</p>}
              </div>
            </div>
          )}
        </div>
      </div>

      {activeChat && (
        <ChatRoom
          serviceName={`${activeChat.proposerName}님과의 상담`}
          messages={bookings.find(b => b.serviceId === activeChat.serviceId)?.messages || []}
          onSendMessage={handleSendMessage}
          onClose={() => setActiveChat(null)}
        />
      )}

      {isPaymentModalOpen && (
        <PaymentModal 
          service={activeChat} 
          paymentInfo={paymentInfo}
          onClose={() => setIsPaymentModalOpen(false)} 
          onConfirm={handlePaymentConfirm} 
        />
      )}
    </div>
  );
}

export default RequestDetailPage;