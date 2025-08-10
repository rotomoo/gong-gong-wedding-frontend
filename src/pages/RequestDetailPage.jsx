import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockRequests } from '../data/mockData';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import ChatRoom from '../components/ChatRoom';
import { useNotifications } from '../context/NotificationContext';

const CURRENT_USER_ID = 'user123';

function RequestDetailPage() {
  const { id } = useParams();
  const { proposals, myRequestIds, markProposalAsRead } = useNotifications();

  const request = mockRequests.find(req => req.id === parseInt(id));
  
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const isMyRequest = request?.authorId === CURRENT_USER_ID;

  const receivedProposals = proposals.filter(p => p.requestId === request?.id);

  useEffect(() => {
    if (activeChat) {
      const fullProposal = proposals.find(p => p.id === activeChat.id);
      const initialMessages = fullProposal.messages || [{ sender: 'partner', text: fullProposal.message }];
      setMessages(initialMessages);
    }
  }, [activeChat, proposals]);

  if (!request) {
    return <div className="container mx-auto p-8 text-center text-xl">존재하지 않는 견적 요청입니다.</div>;
  }

  const handleProposeClick = () => {
    alert('업체 회원만 견적을 제안할 수 있습니다. (프로토타입 안내)');
  };

  const handleProposalClick = (proposal) => {
    setActiveChat(proposal);
    markProposalAsRead(proposal.id);
  };

  const handleSendMessage = useCallback((text) => {
    if (!activeChat) return;

    const newMessage = { sender: 'user', text };
    setMessages(prev => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { sender: 'partner', text: '메시지 확인했습니다. 감사합니다.' };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  }, [activeChat]);

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
          <div className={isMyRequest ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="bg-white p-8 rounded-2xl shadow-md h-full">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{request.title}</h1>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>작성자: {request.author}</span>
                    <span className="mx-2">·</span>
                    <span>{request.createdAt}</span>
                  </div>
                </div>
                {!isMyRequest && (
                  <button onClick={handleProposeClick} className="btn btn-primary ml-4 flex-shrink-0">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                    견적 제안하기
                  </button>
                )}
              </div>
              <div className="divider my-6"></div>
              <h2 className="text-xl font-semibold mb-4">상세 요청 내용</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {request.details}
              </p>
            </div>
          </div>

          {isMyRequest && (
            <div className="lg:col-span-1">
              <div className="sticky top-24 card bg-white shadow-md p-6 rounded-2xl">
                <h2 className="text-xl font-bold mb-4">받은 제안</h2>
                {receivedProposals.length > 0 ? (
                  <div className="space-y-4">
                    {receivedProposals.map(proposal => (
                      <div key={proposal.id} onClick={() => handleProposalClick(proposal)} className="block p-3 border border-gray-200 rounded-lg hover:bg-base-100 transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="avatar">
                            <div className="w-8 h-8 rounded-full">
                              <img src={proposal.proposerImage} alt={proposal.proposerName} />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{proposal.proposerName}</p>
                            <p className="text-xs text-gray-400">{proposal.receivedAt}</p>
                          </div>
                          {!proposal.read && <span className="badge badge-primary ml-auto">New</span>}
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mt-2">{proposal.message}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">아직 받은 제안이 없습니다.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {activeChat && (
        <ChatRoom
          serviceName={`${activeChat.proposerName}님과의 상담`}
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setActiveChat(null)}
        />
      )}
    </div>
  );
}

export default RequestDetailPage;
