import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div className="hero min-h-[60vh] bg-neutral">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              투명하고 합리적인 결혼 준비,
              <br />
              <span className="text-primary">공공 웨딩 플래너</span>에서 시작하세요.
            </h1>
            <p className="py-6 text-lg text-gray-600">
              공공기관이 인증한 신뢰할 수 있는 정보로, 불필요한 걱정 없이 두 분의 가장 소중한 날을 준비할 수 있도록 돕겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/search" className="btn btn-primary btn-lg">서비스 둘러보기</Link>
              <Link to="/requests" className="btn btn-outline btn-lg">맞춤 견적 요청하기</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">왜 공공 웨딩인가요?</h2>
            <p className="text-lg text-gray-500 mt-4">공공 웨딩은 기존 웨딩 시장의 문제를 해결하고, 모두에게 공정한 기회를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">공공기관 인증</h3>
              <p className="text-gray-600">지자체가 인증한 공공시설과 정찰제 업체 정보로 신뢰를 더합니다.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">투명한 직접 소통</h3>
              <p className="text-gray-600">광고가 아닌, 내가 설정한 조건으로 업체를 찾고 직접 소통하세요.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">정책 연계 확인</h3>
              <p className="text-gray-600">결혼 관련 정부 지원 정책을 한 곳에서 확인하고 신청까지 간편하게.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;