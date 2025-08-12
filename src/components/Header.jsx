import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../context/NotificationContext';
import { BellIcon } from '@heroicons/react/24/solid';

function Header() {
  const { totalUnreadCount, myRequests, markNotificationAsRead } = useNotifications();

  const profileImage = useMemo(() => {
    return myRequests.find(req => req.authorImage)?.authorImage || 'https://placehold.co/256x256/FBCFE8/9D27B0?text=Y';
  }, [myRequests]);

  const notifications = useMemo(() => {
    const allNotifications = [];
    myRequests.forEach(req => {
      req.proposals?.forEach(p => {
        allNotifications.push({
          id: p.id,
          requestId: req.id,
          text: `'${p.proposerName}'님으로부터 ${p.newMessagesCount > 0 ? `${p.newMessagesCount}개의 새 메시지` : '새 제안'}가 있습니다.`,
          read: p.read,
          newMessagesCount: p.newMessagesCount,
        });
      });
    });
    return allNotifications.sort((a, b) => (b.newMessagesCount || 0) - (a.newMessagesCount || 0));
  }, [myRequests]);

  

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/search">서비스 둘러보기</Link></li>
              <li><Link to="/requests">견적 요청</Link></li>
              <li><Link to="/community">커뮤니티</Link></li>
              <li><Link to="/policy-info">정책 정보</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-gray-800 flex items-center">
            <img src="/free-icon-couple-721853.png" alt="공공 웨딩 플래너 로고" className="h-8 w-8 mr-2" />
            <span>공공 웨딩 플래너</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/search" className="font-semibold">서비스 둘러보기</Link></li>
            <li><Link to="/requests" className="font-semibold">견적 요청</Link></li>
            <li><Link to="/community" className="font-semibold">커뮤니티</Link></li>
            <li><Link to="/policy-info" className="font-semibold">정책 정보</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BellIcon className="h-6 w-6" />
                {totalUnreadCount > 0 && <span className="badge badge-sm badge-error indicator-item">{totalUnreadCount}</span>}
              </div>
            </label>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{notifications.length > 0 ? '알림' : '새로운 알림이 없습니다.'}</span>
                <div className="divider my-1"></div>
                <ul className="menu menu-sm max-h-60 overflow-y-auto">
                  {notifications.map(notif => (
                    <li key={notif.id}>
                      {console.log('Notification object:', notif)}
                      <Link to={`/request/${notif.requestId}`} className={`${notif.newMessagesCount > 0 ? 'bg-blue-100' : ''}`}>
                        {notif.newMessagesCount > 0 && <span className="badge badge-xs badge-error mr-2">{notif.newMessagesCount}</span>}
                        {notif.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/mypage" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring-2 ring-offset-2 ring-offset-base-100 ring-primary">
              <img src={profileImage} alt="Profile" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
