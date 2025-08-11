import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, DocumentTextIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { useBookings } from '../context/BookingContext';
import { useNotifications } from '../context/NotificationContext';
import { mockRequests } from '../data/mockData';

const CURRENT_USER_ID = 'user123';

function MyPage() {
  const { bookings } = useBookings();
  const { unreadProposalsCount } = useNotifications();

  const likedServicesCount = useMemo(() => {
    const saved = localStorage.getItem('likedServices');
    return saved ? Object.keys(JSON.parse(saved)).length : 0;
  }, []);

  const user = useMemo(() => ({
    id: CURRENT_USER_ID,
    name: '김예신',
    email: 'yeshin@example.com',
    userType: '예비부부',
    profileImage: mockRequests.find(req => req.authorId === CURRENT_USER_ID)?.authorImage || 'https://placehold.co/256x256/FBCFE8/9D27B0?text=Y',
  }), []);

  const myRequestsCount = mockRequests.filter(req => req.authorId === user.id).length;
  const bookingHistoryCount = bookings.length;

  const mainActions = [
    { title: '내 상담 내역', description: '예약된 상담 및 서비스 내역을 확인합니다.', count: bookingHistoryCount, icon: CalendarDaysIcon, link: '/bookings', newCount: 0 },
    { title: '내 견적 요청 내역', description: '내가 요청한 견적들을 확인하고 관리합니다.', count: myRequestsCount, icon: DocumentTextIcon, link: '/request-history', newCount: unreadProposalsCount },
    { title: '찜한 서비스', description: '마음에 드는 업체를 모아보세요.', count: likedServicesCount, icon: HeartIcon, link: '/liked-services', newCount: 0 },
  ];

  const handleProfileImageChange = () => {
    alert('프로토타입에서는 프로필 이미지 변경을 지원하지 않습니다.');
  };

  return (
    <div className="bg-neutral min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">마이페이지</h1>
          <p className="mt-4 text-lg text-gray-600">나의 웨딩 준비 현황을 한눈에 확인하세요.</p>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainActions.map(action => (
            <Link to={action.link} key={action.title} className="card bg-gradient-to-br from-white to-base-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden">
              <div className="card-body p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <action.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-primary-focus">{action.count}</span>
                    {action.newCount > 0 && 
                      <span className="badge badge-primary ml-2">{action.newCount} NEW</span>
                    }
                  </div>
                </div>
                <h2 className="card-title text-xl font-bold text-gray-800 mb-2">{action.title}</h2>
                <p className="text-gray-500 text-sm">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* User Info */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-base-100 p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">회원 정보</h2>
            <div className="flex flex-col items-center text-center">
                <div className="avatar mb-4">
                    <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center overflow-hidden">
                        <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                <button onClick={handleProfileImageChange} className="btn btn-sm btn-outline btn-primary rounded-full px-4 py-1 text-sm">
                  프로필 이미지 변경
                </button>
                <p className="font-bold text-3xl mt-4 text-gray-900">{user.name}</p>
                <p className="text-gray-600 text-lg">{user.email}</p>
                <p className="badge badge-lg badge-secondary mt-3 px-4 py-2 text-base font-medium">{user.userType}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;