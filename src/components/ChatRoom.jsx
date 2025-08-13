import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

function ChatRoom({
  serviceName,
  messages = [],
  onSendMessage,
  onClose,
}) {
  const [newMessage, setNewMessage] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50">
      <div className="flex justify-between items-center p-4 bg-primary text-white rounded-t-lg">
        <h3 className="font-bold text-lg">{serviceName}</h3>
        {/* X (닫기) 버튼 추가 */}
        <button onClick={onClose} className="btn btn-ghost btn-circle btn-sm">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <div ref={chatBodyRef} className="flex-grow p-4 overflow-y-auto bg-base-100">
        {messages.map((msg, index) => (
          <div key={index} className={`chat ${msg.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
            <div className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-primary' : ''}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-base-200">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="메시지를 입력하세요..."
            className="input input-bordered w-full"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="btn btn-primary">
            전송
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
