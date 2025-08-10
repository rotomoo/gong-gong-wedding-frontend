import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { weddingHalls } from '../data/mockData';
import { ShieldCheckIcon, StarIcon, HeartIcon, PlusCircleIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메', '신혼여행', '혼주', '디렉팅', '케이터링'];
const allLocations = ['서울시', '부산시', '제주도']; // 광역 지역으로 유지
const allTypes = ['공공', '민간'];
const allVenueStyles = ['실내', '야외'];

function PlannerSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    serviceType: [],
    location: [], // 단일 location 필터로 변경
    type: [],
    venueStyle: [],
  });
  const [sortBy, setSortBy] = useState('rating');
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
    setSearchTerm('');
    setSortBy('rating');
  };

  const filteredAndSortedHalls = useMemo(() => {
    let result = weddingHalls
      .filter(hall => hall.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(hall => filters.serviceType.length === 0 || filters.serviceType.includes(hall.serviceType))
      .filter(hall => filters.location.length === 0 || filters.location.includes(hall.city))
      .filter(hall => filters.type.length === 0 || filters.type.includes(hall.type))
      .filter(hall => filters.venueStyle.length === 0 || (hall.serviceType === '웨딩 베뉴' && filters.venueStyle.includes(hall.venueStyle)));
      
    result.sort((a, b) => {
      if (sortBy === 'rating') return b.averageRating - a.averageRating;
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      return 0;
    });

    return result;
  }, [searchTerm, filters, sortBy]);

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">서비스 둘러보기</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">원하는 조건으로 최고의 웨딩 서비스를 찾아보세요.</p>
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
              <Link to="/service-register" className="btn btn-primary btn-sm md:btn-md">
                <PlusCircleIcon className="h-5 w-5 mr-1" />
                서비스 등록
              </Link>
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
                <button className="btn btn-ghost btn-xs" onClick={resetFilters}>전체 초기화</button>
              </div>
            }
          </div>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input type="text" placeholder="업체명으로 검색..." className="input input-ghost w-full sm:max-w-xs border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200 pb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-ghost select-sm sm:w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200">
            <option value="rating">평점순</option>
            <option value="price_desc">가격 높은 순</option>
            <option value="price_asc">가격 낮은 순</option>
          </select>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8">
          {filteredAndSortedHalls.map(hall => (
            <Link to={`/service/${hall.id}`} key={hall.id} className="card bg-white group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <figure className="relative h-40 w-full">
                <img src={hall.image} alt={hall.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <button 
                  className="absolute top-2 right-2 btn btn-circle btn-xs bg-white/80 backdrop-blur-sm border-none text-gray-700 hover:text-red-500"
                  onClick={(e) => handleLikeToggle(e, hall.id)}
                >
                  <HeartIcon className={`h-4 w-4 ${likedServiceIds[hall.id] ? 'text-red-500' : ''}`} fill={likedServiceIds[hall.id] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} />
                </button>
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title text-sm font-semibold truncate text-gray-800 mt-2">
                  {hall.name}
                </h2>
                <p className="text-xs text-gray-500 truncate">{hall.location}</p>
                {hall.serviceType === '웨딩 베뉴' && hall.venueStyle && (
                  <p className="text-xs text-gray-500 truncate">{hall.venueStyle}</p>
                )}
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{hall.averageRating}</span>
                    <span className="text-xs text-gray-500">({hall.reviewCount} 리뷰)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {hall.isVerified && (
                      <div className="tooltip" data-tip="기관 인증">
                        <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                      </div>
                    )}
                    <span className="text-sm font-bold text-gray-900">{hall.price.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlannerSearchPage;