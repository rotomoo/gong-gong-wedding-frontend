import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockRequests } from '../data/mockData';
import { TagIcon, MapPinIcon, CurrencyDollarIcon, PlusCircleIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메', '신혼여행', '혼주', '디렉팅', '케이터링'];
const allLocations = ['서울시', '부산시', '제주도']; // 광역 지역으로 유지
const allTypes = ['공공', '민간'];

function RequestListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    serviceType: [],
    location: [], // 단일 location 필터로 변경
    type: [],
  });
  const [sortBy, setSortBy] = useState('latest');
  const [activeChat, setActiveChat] = useState(null);

  const handleMultiSelectFilter = (filterName, value) => {
    setFilters(prev => {
      const currentValues = prev[filterName];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [filterName]: newValues };
    });
  };

  const resetFilters = () => {
    setFilters({ serviceType: [], location: [], type: [] });
    setSearchTerm('');
    setSortBy('latest');
  };

  const filteredAndSortedRequests = useMemo(() => {
    let result = mockRequests
      .filter(req => req.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(req => filters.serviceType.length === 0 || filters.serviceType.includes(req.serviceType))
      .filter(req => filters.location.length === 0 || filters.location.includes(req.city)) // req.city 사용
      .filter(req => filters.type.length === 0 || filters.type.includes(req.type));

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'budget_asc') return a.budget - b.budget;
      if (sortBy === 'budget_desc') return b.budget - a.budget;
      return 0;
    });

    return result;
  }, [searchTerm, filters, sortBy]);

  const handleProposeClick = (request) => {
    setActiveChat(request);
  };

  const FilterDropdown = ({ title, options, selected, onSelect }) => (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-sm md:btn-md normal-case font-medium">
        {title} <ChevronDownIcon className="h-4 w-4 ml-1" />
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
        {options.map(option => (
          <li key={option} onClick={() => onSelect(option)}>
            <label className="label cursor-pointer">
              <span className="label-text">{option}</span> 
              <input type="checkbox" checked={selected.includes(option)} className="checkbox checkbox-primary checkbox-sm" readOnly />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">실시간 맞춤 견적 요청</h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">원하는 서비스를 요청하고, 여러 업체로부터 합리적인 견적을 받아보세요.</p>
          </div>

          {/* Filters */}
          <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
            <div className="card-body p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1">
                  <FilterDropdown title="서비스 종류" options={allServiceTypes} selected={filters.serviceType} onSelect={(val) => handleMultiSelectFilter('serviceType', val)} />
                  <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                  <FilterDropdown title="시설 구분" options={allTypes} selected={filters.type} onSelect={(val) => handleMultiSelectFilter('type', val)} />
                </div>
                <Link to="/request-form" className="btn btn-primary btn-sm md:btn-md">
                  <PlusCircleIcon className="h-5 w-5 mr-1" />
                  내 견적 요청하기
                </Link>
              </div>
              { (filters.serviceType.length > 0 || filters.location.length > 0 || filters.type.length > 0) &&
                <div className="mt-4 px-2 flex flex-wrap items-center gap-2">
                  {filters.serviceType.map(item => (
                    <div key={item} className="badge badge-primary gap-2">
                      <span>{item}</span>
                      <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('serviceType', item)} />
                    </div>
                  ))}
                  {filters.location.map(item => (
                    <div key={item} className="badge badge-secondary gap-2">
                      <span>{item}</span>
                      <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('location', item)} />
                    </div>
                  ))}
                  {filters.type.map(item => (
                    <div key={item} className="badge badge-accent gap-2">
                      <span>{item}</span>
                      <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('type', item)} />
                    </div>
                  ))}
                  <button className="btn btn-ghost btn-xs" onClick={resetFilters}>전체 초기화</button>
                </div>
              }
            </div>
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <input type="text" placeholder="요청 제목으로 검색..." className="input input-ghost w-full sm:max-w-xs border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200 pb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-ghost select-sm sm:w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200">
              <option value="latest">최신순</option>
              <option value="budget_desc">예산 높은 순</option>
              <option value="budget_asc">예산 낮은 순</option>
            </select>
          </div>

          {/* Request Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8">
            {filteredAndSortedRequests.map(req => (
              <Link to={`/request/${req.id}`} key={req.id} className="card bg-white group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={req.authorImage} alt={req.author} />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-800">{req.author}</div>
                      <div className="text-xs text-gray-500">{req.createdAt}</div>
                    </div>
                  </div>
                  <h2 className="card-title text-md font-semibold text-gray-800 leading-snug hover:text-primary transition-colors truncate-2-lines h-12">
                    {req.title}
                  </h2>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <TagIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                      <span>{req.serviceType}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                      <span>{req.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CurrencyDollarIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                      <span>{(req.budget / 10000).toLocaleString()} 만원</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Chat UI - This remains for the detail page link, but the button is removed from the list item */}
      {activeChat && (
        <div className="fixed bottom-0 right-0 md:right-12 w-full md:w-96 h-[60vh] bg-white shadow-2xl rounded-t-lg flex flex-col z-50">
          <div className="flex justify-between items-center p-4 bg-primary text-primary-content">
            <h3 className="font-bold">{activeChat.author}님께 제안하기</h3>
            <button className="btn btn-sm btn-ghost" onClick={() => setActiveChat(null)}><XMarkIcon className="h-6 w-6" /></button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">안녕하세요! '{activeChat.title}' 건 보고 연락드렸습니다.</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble">네, 안녕하세요! 어떤 제안을 주실 수 있나요?</div>
            </div>
          </div>
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input type="text" placeholder="메시지를 입력하세요" className="input input-bordered w-full" />
              <button className="btn btn-primary" onClick={() => alert('프로토타입에서는 실제 메시지 전송을 지원하지 않습니다.')}>전송</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RequestListPage;
