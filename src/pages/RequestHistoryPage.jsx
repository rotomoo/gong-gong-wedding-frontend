import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockRequests } from '../data/mockData';
import { TagIcon, MapPinIcon, CurrencyDollarIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메', '신혼여행', '혼주', '디렉팅', '케이터링'];
const allLocations = ['서울시 강남구', '서울시 마포구', '부산시 해운대구', '제주도'];
const allTypes = ['공공', '민간'];
const allVenueStyles = ['실내', '야외'];

function RequestHistoryPage() {
  const currentUser = { name: '김예신' }; // 현재 로그인한 사용자 (김예신) 가정

  const [filters, setFilters] = useState({
    serviceType: [],
    location: [],
    type: [],
    venueStyle: [],
  });
  const [sortBy, setSortBy] = useState('latest');

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
    setFilters({ serviceType: [], location: [], type: [], venueStyle: [] });
    setSortBy('latest');
  };

  const filteredAndSortedRequests = useMemo(() => {
    let result = mockRequests.filter(req => req.author === currentUser.name);

    result = result
      .filter(req => filters.serviceType.length === 0 || filters.serviceType.includes(req.serviceType))
      .filter(req => filters.location.length === 0 || filters.location.includes(req.location))
      .filter(req => filters.type.length === 0 || filters.type.includes(req.type))
      .filter(req => filters.venueStyle.length === 0 || (req.serviceType === '웨딩 베뉴' && req.venueStyle && filters.venueStyle.includes(req.venueStyle)));

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'budget_asc') return a.budget - b.budget;
      if (sortBy === 'budget_desc') return b.budget - a.budget;
      return 0;
    });

    return result;
  }, [filters, sortBy, currentUser.name]);

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
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">내 견적 요청 내역</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">내가 요청한 견적들을 확인하고 관리합니다.</p>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1">
                <FilterDropdown title="서비스 종류" options={allServiceTypes} selected={filters.serviceType} onSelect={(val) => handleMultiSelectFilter('serviceType', val)} />
                {filters.serviceType.includes('웨딩 베뉴') && (
                  <FilterDropdown title="베뉴 스타일" options={allVenueStyles} selected={filters.venueStyle} onSelect={(val) => handleMultiSelectFilter('venueStyle', val)} />
                )}
                <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                <FilterDropdown title="시설 구분" options={allTypes} selected={filters.type} onSelect={(val) => handleMultiSelectFilter('type', val)} />
              </div>
              <button className="btn btn-ghost btn-sm md:btn-md" onClick={resetFilters}>전체 초기화</button>
            </div>
            { (filters.serviceType.length > 0 || filters.location.length > 0 || filters.type.length > 0 || filters.venueStyle.length > 0) &&
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
                {filters.venueStyle.map(item => (
                  <div key={item} className="badge badge-info gap-2">
                    <span>{item}</span>
                    <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('venueStyle', item)} />
                  </div>
                ))}
              </div>
            }
          </div>
        </div>

        {/* Sort */}
        {/* Sort */}
        <div className="flex justify-end items-center mb-6">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-bordered select-sm">
            <option value="latest">최신순</option>
            <option value="budget_desc">예산 높은 순</option>
            <option value="budget_asc">예산 낮은 순</option>
          </select>
        </div>

        {filteredAndSortedRequests.length > 0 ? (
          <div className="space-y-6">
            {filteredAndSortedRequests.map(req => (
              <Link to={`/request/${req.id}`} key={req.id} className="block">
                <div className="card lg:card-side bg-white shadow-xl hover:bg-base-100 transition-colors duration-200 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="card-body lg:w-full p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="card-title text-xl font-bold text-gray-800">{req.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="avatar">
                          <div className="w-6 h-6 rounded-full">
                            <img src={req.authorImage} alt={req.author} />
                          </div>
                        </div>
                        <span>{req.author}</span>
                        <span>{req.createdAt}</span>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <TagIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                        <span>{req.serviceType} {req.serviceType === '웨딩 베뉴' && req.venueStyle && `(${req.venueStyle})`}</span>
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
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">작성한 견적 요청이 없습니다.</p>
            <p className="mt-2 text-gray-400">새로운 견적 요청을 작성해보세요.</p>
            <Link to="/request-form" className="btn btn-primary mt-8">견적 요청 작성하기</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestHistoryPage;
