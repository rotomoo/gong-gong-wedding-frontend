import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockRequests, mockReceivedProposals } from '../data/mockData';
import { useBookings } from '../context/BookingContext';
import { TagIcon, MapPinIcon, CurrencyDollarIcon, PlusCircleIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

const CURRENT_USER_ID = 'user123';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메 & 촬영', '본식', '혼수 & 소품', '신혼여행'];
const allLocations = ['서울시', '부산시', '제주도', '경기도']; // Example locations, adjust as needed
const allRequestStatuses = ['제안 대기중', '제안 도착', '계약 진행중', '결제 대기중', '계약 완료']; // Simplified statuses for filter

// Helper function to determine the status of a request
const getRequestStatus = (requestId, proposals, bookings) => {
  const relevantProposals = proposals.filter(p => p.requestId === requestId);
  if (relevantProposals.length === 0) {
    return { text: '제안 대기중', color: 'badge-ghost' };
  }

  const relevantBookings = bookings.filter(b => 
    relevantProposals.some(p => p.serviceId === b.serviceId)
  );

  if (relevantBookings.some(b => b.status === '예약 확정')) {
    return { text: '계약 완료', color: 'badge-success' };
  }
  if (relevantBookings.some(b => b.status === '계약금 결제 완료')) {
    return { text: '계약 진행중', color: 'badge-info' };
  }
  if (relevantBookings.some(b => b.status === '예약 가능')) {
    return { text: '결제 대기중', color: 'badge-warning' };
  }
  
  return { text: `${relevantProposals.length}개 제안 도착`, color: 'badge-primary' };
};

function RequestHistoryPage() {
  const { bookings } = useBookings();

  const [filters, setFilters] = useState({
    serviceType: [],
    location: [],
    status: [],
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
    setFilters({ serviceType: [], location: [], status: [] });
    setSortBy('latest');
  };

  const filteredAndSortedRequests = useMemo(() => {
    let result = mockRequests.filter(req => req.authorId === CURRENT_USER_ID);

    result = result
      .filter(req => filters.serviceType.length === 0 || filters.serviceType.includes(req.serviceType))
      .filter(req => filters.location.length === 0 || filters.location.includes(req.location))
      .filter(req => {
        if (filters.status.length === 0) return true;
        const statusText = getRequestStatus(req.id, mockReceivedProposals, bookings).text;
        // Handle the dynamic "N개 제안 도착" status
        if (filters.status.includes('제안 도착') && statusText.includes('개 제안 도착')) {
          return true;
        }
        return filters.status.includes(statusText);
      });

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'budget_asc') return a.budget - b.budget;
      if (sortBy === 'budget_desc') return b.budget - a.budget;
      return 0;
    });

    return result;
  }, [mockRequests, filters, sortBy, bookings]);

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
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">내 견적 요청 내역</h1>
            <p className="mt-4 text-lg text-gray-500">내가 작성한 견적 요청들의 진행 상황을 확인하세요.</p>
          </div>
          <Link to="/request-form" className="btn btn-primary">
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            새로운 견적 요청하기
          </Link>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1">
                <FilterDropdown title="서비스 종류" options={allServiceTypes} selected={filters.serviceType} onSelect={(val) => handleMultiSelectFilter('serviceType', val)} />
                <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                <FilterDropdown title="요청 상태" options={allRequestStatuses} selected={filters.status} onSelect={(val) => handleMultiSelectFilter('status', val)} />
              </div>
              <button className="btn btn-ghost btn-sm md:btn-md" onClick={resetFilters}>전체 초기화</button>
            </div>
            { (filters.serviceType.length > 0 || filters.location.length > 0 || filters.status.length > 0) &&
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
                {filters.status.map(item => (
                  <div key={item} className="badge badge-info gap-2">
                    <span>{item}</span>
                    <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('status', item)} />
                  </div>
                ))}
              </div>
            }
          </div>
        </div>

        {/* Sort */}
        <div className="flex justify-end items-center mb-6">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-bordered select-sm">
            <option value="latest">최신순</option>
            <option value="budget_desc">예산 높은 순</option>
            <option value="budget_asc">예산 낮은 순</option>
          </select>
        </div>

        {/* Request Grid */}
        {filteredAndSortedRequests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedRequests.map(req => {
              const status = getRequestStatus(req.id, mockReceivedProposals, bookings);
              return (
                <Link to={`/request/${req.id}`} key={req.id} className="card bg-base-100 group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="card-body p-5">
                    <div className="flex justify-between items-start">
                      <div className="text-xs text-gray-500">{req.createdAt}</div>
                      <div className={`badge ${status.color}`}>{status.text}</div>
                    </div>
                    <h2 className="card-title text-lg font-semibold text-gray-800 leading-snug hover:text-primary transition-colors truncate-2-lines h-14 mt-2">
                      {req.title}
                    </h2>
                    <div className="divider my-2"></div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <TagIcon className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                        <span>{req.serviceType}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                        <span>{req.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <CurrencyDollarIcon className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400" />
                        <span>예산: {(req.budget / 10000).toLocaleString()} 만원</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 border-2 border-dashed rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">아직 작성한 견적 요청이 없습니다.</h3>
            <p className="text-gray-500 mt-2">새로운 견적을 요청하고 여러 업체로부터 맞춤 제안을 받아보세요.</p>
            <Link to="/request-form" className="btn btn-primary mt-6">첫 견적 요청하러 가기</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestHistoryPage;