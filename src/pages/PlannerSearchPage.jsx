import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { weddingHalls } from '../data/mockData';
import { ShieldCheckIcon, StarIcon, HeartIcon, PlusCircleIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { getTypeBadgeColor } from '../utils/badgeStyles'; // getTypeBadgeColor 임포트

// 카테고리 구조 수정
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

function PlannerSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState(null);
  const [filters, setFilters] = useState({
    subCategory: [],
    location: [],
    type: [],
  });
  const [sortBy, setSortBy] = useState('review_desc');
  const [likedServiceIds, setLikedServiceIds] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('likedServices');
    if (saved) setLikedServiceIds(JSON.parse(saved));
  }, []);

  const handleLikeToggle = (e, serviceId) => {
    e.preventDefault();
    setLikedServiceIds(prev => {
      const newLikedServices = { ...prev, [serviceId]: !prev[serviceId] };
      localStorage.setItem('likedServices', JSON.stringify(newLikedServices));
      return newLikedServices;
    });
  };

  const handleServiceTypeSelect = (serviceType) => {
    const newServiceType = serviceType === '전체' ? null : serviceType;
    setSelectedServiceType(prev => (prev === newServiceType ? null : newServiceType));
    setFilters(prev => ({ ...prev, subCategory: [], location: [], type: [] })); // 카테고리 변경 시 모든 필터 초기화
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
    setSortBy('review_desc');
  };

  const filteredAndSortedHalls = useMemo(() => {
    let result = weddingHalls
      .filter(hall => hall.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(hall => !selectedServiceType || hall.serviceType === selectedServiceType)
      .filter(hall => {
        if (filters.subCategory.length === 0) return true;
        if (selectedServiceType === '웨딩 베뉴') {
          return filters.subCategory.includes(hall.venueStyle);
        }
        return filters.subCategory.includes(hall.subCategory);
      })
      .filter(hall => filters.location.length === 0 || filters.location.includes(hall.city))
      .filter(hall => filters.type.length === 0 || filters.type.includes(hall.type));
      
    result.sort((a, b) => {
      if (sortBy === 'review_desc') return (b.reviewCount || 0) - (a.reviewCount || 0);
      if (sortBy === 'rating') return (b.averageRating || 0) - (a.averageRating || 0);
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">서비스 둘러보기</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">원하는 조건으로 최고의 웨딩 서비스를 찾아보세요.</p>
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
              <Link to="/service-register" className="btn btn-primary btn-sm md:btn-md">
                <PlusCircleIcon className="h-5 w-5 mr-1" />
                서비스 등록
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
          <input type="text" placeholder="업체명으로 검색..." className="input input-ghost w-full sm:max-w-xs border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200 pb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-ghost select-sm sm:w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200">
            <option value="review_desc">리뷰많은순</option>
            <option value="rating">평점순</option>
            <option value="price_desc">가격 높은 순</option>
            <option value="price_asc">가격 낮은 순</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
          {filteredAndSortedHalls.map(hall => (
            <Link to={`/service/${hall.id}`} key={hall.id} className="card bg-white group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <figure className="relative h-40 w-full">
                <img 
                  src={hall.image} 
                  alt={hall.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/300x200/EFEFEF/AAAAAA?text=${encodeURIComponent(hall.name)}`; e.currentTarget.onerror = null; }}
                />
                <button 
                  className="absolute top-2 right-2 btn btn-circle btn-xs bg-white/80 backdrop-blur-sm border-none text-gray-700 hover:text-red-500"
                  onClick={(e) => handleLikeToggle(e, hall.id)}
                >
                  <HeartIcon className={`h-4 w-4 ${likedServiceIds[hall.id] ? 'text-red-500' : ''}`} fill={likedServiceIds[hall.id] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} />
                </button>
              </figure>
              <div className="card-body p-3">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`badge badge-outline badge-sm`}>{hall.serviceType}</span>
                  {(hall.subCategory || hall.venueStyle) && <span className="badge badge-outline badge-sm badge-info">{hall.subCategory || hall.venueStyle}</span>}
                  <span className={`badge badge-outline badge-sm ${getTypeBadgeColor(hall.type)}`}>{hall.type}</span>
                </div>
                <h2 className="card-title text-base font-semibold truncate text-gray-800">
                  {hall.name}
                </h2>
                <p className="text-xs text-gray-500 truncate">{hall.location}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{hall.averageRating || 0}</span>
                    <span className="text-xs text-gray-500">({hall.reviewCount || 0})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hall.isVerified && (
                      <div className="tooltip" data-tip="기관 인증">
                        <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                      </div>
                    )}
                    <p className="text-right text-lg font-bold text-gray-900">{hall.price.toLocaleString()}원</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filteredAndSortedHalls.length === 0 && (
          <div className="text-center py-16 col-span-full">
            <p className="text-gray-500">선택한 조건에 맞는 서비스가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlannerSearchPage;
