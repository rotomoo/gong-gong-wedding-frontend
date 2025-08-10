import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="p-10 bg-gray-800 text-gray-300">
      <div className="container mx-auto footer grid-cols-1 md:grid-cols-3">
        <div className="mb-6 md:mb-0">
          <p className="text-2xl font-bold text-white">공공 웨딩 플래너</p>
          <p>투명하고 합리적인 결혼 준비의 시작</p>
        </div>
        
        <div className="md:place-self-center">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">이용약관</a>
          <a className="link link-hover">개인정보처리방침</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
