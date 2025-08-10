import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatRoom from '../components/ChatRoom';
import { mockReceivedProposals } from '../data/mockData';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function ConsultationChatPage() {
  const { id } = useParams(); // This 'id' is the proposal.id
  const navigate = useNavigate();
  const proposal = mockReceivedProposals.find(p => p.id === parseInt(id));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (proposal) {
      // Mark proposal as read when entering chat
      // In a real app, this would update backend and local storage
      console.log(`Marking proposal ${proposal.id} as read.`);
      // For mock data, we can simulate marking as read if needed for UI updates
    }
    // Simulate fetching messages
    setMessages([
      { id: 1, sender: 'proposer', text: `안녕하세요! ${proposal?.proposerName}입니다. ${proposal?.message}`, timestamp: '10:00 AM' },
      { id: 2, sender: 'user', text: '네, 안녕하세요! 제안 잘 봤습니다. 몇 가지 궁금한 점이 있어요.', timestamp: '10:05 AM' },
      { id: 3, sender: 'proposer', text: '네, 어떤 점이 궁금하신가요? 편하게 말씀해주세요.', timestamp: '10:10 AM' },
    ]);
  }, [proposal]);

  const handleSendMessage = (text) => {
    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    // In a real app, send message to backend
  };

  if (!proposal) {
    return <div className="container mx-auto p-4 text-center">상담을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm normal-case text-gray-600">
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            뒤로 가기
          </button>
        </div>

        <ChatRoom
          chatPartnerName={proposal.proposerName}
          chatPartnerImage={proposal.proposerImage}
          initialMessages={messages}
          onSendMessage={handleSendMessage}
          onCloseChat={() => navigate(-1)} // Close chat navigates back
        />
      </div>
    </div>
  );
}

export default ConsultationChatPage;
