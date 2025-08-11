import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

const policies = [
  {
    category: '주거 지원',
    title: '신혼희망타운',
    description: '육아와 보육에 특화된 공공주택으로, 시세보다 저렴하게 분양받을 수 있습니다.',
    link: 'https://www.lh.or.kr/menu.es?mid=a10402010200',
    siteName: 'LH청약플러스',
    siteAction: '분양 정보 확인 및 청약 신청'
  },
  {
    category: '주거 지원',
    title: '행복주택',
    description: '신혼부부, 대학생, 사회초년생을 위한 임대주택으로, 저렴한 임대료로 거주할 수 있습니다.',
    link: 'https://www.myhome.go.kr/',
    siteName: '마이홈포털',
    siteAction: '공공주택 정보 확인'
  },
  {
    category: '주거 지원',
    title: '신혼부부 특별공급',
    description: '민영 및 공공분양 주택의 일정 물량을 신혼부부에게 우선 공급하는 제도입니다.',
    link: 'https://www.myhome.go.kr/hws/portal/cont/selectYouthPolicyHoneyMoonSpecialView.do#guide=RH114',
    siteName: '청약홈',
    siteAction: '청약 신청 및 당첨 확인'
  },
  {
    category: '금융 지원',
    title: '신혼부부전용 전세자금 대출',
    description: '전세자금이 부족한 신혼부부를 위한 저금리 대출 상품입니다.',
    link: 'https://nhuf.molit.go.kr/FP/FP05/FP0502/FP05020401.jsp',
    siteName: '주택도시기금',
    siteAction: '대출 정보 확인 및 신청'
  },
  {
    category: '금융 지원',
    title: '내집 마련 디딤돌 대출',
    description: '주택 구입 자금을 지원하는 저금리 대출 상품입니다.',
    link: 'https://nhuf.molit.go.kr/FP/FP05/FP0503/FP05030101.jsp',
    siteName: '주택도시기금',
    siteAction: '대출 정보 확인 및 신청'
  },
  {
    category: '세금 혜택',
    title: '결혼 세액공제',
    description: '혼인신고 시 일정 금액의 세액공제 혜택을 제공합니다.',
    link: 'https://www.nts.go.kr/nts/na/ntt/selectNttInfo.do?nttSn=1339712&mi=2201',
    siteName: '국세청 홈택스',
    siteAction: '연말정산 및 종합소득세 신고'
  },
];

function PolicyInfoPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">신혼부부 정책 안내</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">결혼을 준비하는 신혼부부를 위한 정부의 다양한 지원 정책을 확인해보세요.</p>
        </div>

        <div className="space-y-8">
          {['주거 지원', '금융 지원', '세금 혜택'].map(category => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {policies.filter(p => p.category === category).map(policy => (
                  <div key={policy.title} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg flex flex-col">
                    <div className="card-body flex-grow">
                      <h3 className="card-title text-xl font-semibold text-gray-800">{policy.title}</h3>
                      <p className="text-gray-600 flex-grow mt-2">{policy.description}</p>
                    </div>
                    <div className="card-body pt-0">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-semibold text-gray-700">관련 사이트: {policy.siteName}</p>
                        <p className="text-sm text-gray-500 mt-1">주요 기능: {policy.siteAction}</p>
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <a href={policy.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                          자세히 보기
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PolicyInfoPage;