import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockRequests } from '../data/mockData';
import { TagIcon, MapPinIcon, CurrencyDollarIcon, PlusCircleIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

// PlannerSearchPage와 동일한 카테고리 구조 사용
const categories = {
  '웨딩 베뉴': ['실내', '야외', '호텔', '컨벤션', '하우스웨딩'],
  '플래너': ['동행플래너', '비동행플래너', '디렉팅', '케이터링'],
  '스드메 & 촬영': ['스튜디오', '드레스', '메이크업', '토탈촬영'],
  '본식': ['본식스냅', '주례', '사회자', '축가', '웨딩카', '청첩장'],
  '혼수 & 소품': ['한복', '예복', '예물', '답례품'],
  '신혼여행': [],
};
const categoryOrder = ['웨딩 베뉴', '플래너', '스드메 & 촬영', '본식', '혼수 & 소품', '신혼여행'];

const allLocations = ['서울시', '부산시', '제주도', '전국', '온라인'];
const allTypes = ['공공', '민간'];

function RequestListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [filters, setFilters] = useState({
    subCategory: [],
    location: [],
    type: [],
  });
  const [sortBy, setSortBy] = useState('latest');

  const handleServiceTypeSelect = (serviceType) => {
    const newServiceType = serviceType === '전체' ? null : serviceType;
    setSelectedServiceType(prev => (prev === newServiceType ? null : newServiceType));
    setFilters(prev => ({ ...prev, subCategory: [], location: [], type: [] }));
  };

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
    setSelectedServiceType(null);
    setFilters({ subCategory: [], location: [], type: [] });
    setSearchTerm('');
    setSortBy('latest');
  };

  const filteredAndSortedRequests = useMemo(() => {
    let result = mockRequests
      .filter(req => req.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(req => !selectedServiceType || req.serviceType === selectedServiceType)
      .filter(req => {
        if (filters.subCategory.length === 0) return true;
        if (selectedServiceType === '웨딩 베뉴') {
          return filters.subCategory.includes(req.venueStyle);
        }
        return filters.subCategory.includes(req.subCategory);
      })
      .filter(req => filters.location.length === 0 || filters.location.includes(req.city))
      .filter(req => filters.type.length === 0 || filters.type.includes(req.type));

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'budget_asc') return a.budget - b.budget;
      if (sortBy === 'budget_desc') return b.budget - a.budget;
      return 0;
    });

    return result;
  }, [searchTerm, filters, sortBy, selectedServiceType]);

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

  const hasActiveFilters = selectedServiceType || Object.values(filters).some(f => f.length > 0);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">실시간 맞춤 견적 요청</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">원하는 서비스를 요청하고, 여러 업체로부터 합리적인 견적을 받아보세요.</p>
        </div>

        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center gap-2 border-b pb-4">
              <span className="font-semibold mr-2">서비스 종류:</span>
              <button 
                className={`btn btn-sm ${!selectedServiceType ? 'btn-primary' : 'btn-ghost'}`}
                onClick={() => handleServiceTypeSelect('전체')}
              >
                전체
              </button>
              {categoryOrder.map(cat => (
                <button 
                  key={cat} 
                  className={`btn btn-sm ${selectedServiceType === cat ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => handleServiceTypeSelect(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-2 pt-4">
              <div className="flex flex-wrap items-center gap-1">
                {selectedServiceType && categories[selectedServiceType]?.length > 0 && (
                  <FilterDropdown title="상세 분류" options={categories[selectedServiceType]} selected={filters.subCategory} onSelect={(val) => handleMultiSelectFilter('subCategory', val)} />
                )}
                {selectedServiceType !== '신혼여행' && (
                  <>
                    <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                    <FilterDropdown title="시설 구분" options={allTypes} selected={filters.type} onSelect={(val) => handleMultiSelectFilter('type', val)} />
                  </>
                )}
              </div>
              <Link to="/request-form" className="btn btn-primary btn-sm md:btn-md">
                <PlusCircleIcon className="h-5 w-5 mr-1" />
                내 견적 요청하기
              </Link>
            </div>

            { hasActiveFilters &&
              <div className="mt-4 px-2 flex flex-wrap items-center gap-2 border-t pt-4">
                <span className="font-semibold text-sm mr-2">선택된 필터:</span>
                {selectedServiceType && (
                  <div className="badge badge-primary gap-2">
                    <span>{selectedServiceType}</span>
                    <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleServiceTypeSelect(selectedServiceType)} />
                  </div>
                )}
                {filters.subCategory.map(item => (
                  <div key={item} className="badge badge-info gap-2">
                    <span>{item}</span>
                    <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('subCategory', item)} />
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input type="text" placeholder="요청 제목으로 검색..." className="input input-ghost w-full sm:max-w-xs border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200 pb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-ghost select-sm sm:w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200">
            <option value="latest">최신순</option>
            <option value="budget_desc">예산 높은 순</option>
            <option value="budget_asc">예산 낮은 순</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
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
                    <span>{req.serviceType}{req.subCategory ? ` > ${req.subCategory}` : ''}{req.venueStyle ? ` > ${req.venueStyle}` : ''}</span>
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
        {filteredAndSortedRequests.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-gray-500">선택한 조건에 맞는 요청이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestListPage;