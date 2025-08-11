import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../context/NotificationContext';
import { mockRequests } from '../data/mockData';

const CURRENT_USER_ID = 'user123';

function Header() {
  const { unreadProposalsCount } = useNotifications();

  const profileImage = useMemo(() => {
    return mockRequests.find(req => req.authorId === CURRENT_USER_ID)?.authorImage || 'https://placehold.co/256x256/FBCFE8/9D27B0?text=Y';
  }, []);

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
              <li>
                <Link to="/mypage" className="flex justify-between">
                  마이페이지
                  {unreadProposalsCount > 0 && <span className="badge badge-error badge-sm">{unreadProposalsCount}</span>}
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl font-bold text-gray-800 flex items-center">
            <img src="/img/free-icon-couple-721853.png" alt="공공 웨딩 플래너 로고" className="h-8 w-8 mr-2" />
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
        <div className="navbar-end">
          <Link to="/mypage" className="flex items-center gap-3 btn btn-ghost normal-case py-1 px-3 rounded-full hover:bg-gray-200 transition-all duration-300">
            <div className="indicator">
              {unreadProposalsCount > 0 && 
                <span className="indicator-item badge badge-error badge-xs p-1.5 top-1 right-1"></span>
              }
              <div className="avatar">
                <div className="w-8 h-8 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2 flex-shrink-0">
                  <img src={profileImage} alt="Profile" />
                </div>
              </div>
            </div>
            <span className="hidden md:inline text-base font-semibold text-gray-700">마이페이지</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;