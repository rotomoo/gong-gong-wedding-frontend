import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { weddingHalls } from '../data/mockData';
import { useBookings } from '../context/BookingContext';
import { TagIcon, MapPinIcon, CurrencyDollarIcon, XMarkIcon, ChevronDownIcon, CalendarDaysIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메', '신혼여행', '혼주', '디렉팅', '케이터링'];
const allLocations = ['서울시', '부산시', '제주도'];
const allTypes = ['공공', '민간'];
const allBookingStatuses = ['상담 중', '계약금 결제 완료', '예약 확정'];

function BookingListPage() {
  const { bookings } = useBookings();
  const [filters, setFilters] = useState({
    serviceType: [],
    location: [],
    type: [],
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
    setFilters({ serviceType: [], location: [], type: [], status: [] });
    setSortBy('latest');
  };

  const filteredAndSortedBookings = useMemo(() => {
    let result = bookings
      .filter(booking => booking.type === 'service')
      .map(booking => ({
        ...booking,
        service: weddingHalls.find(item => item.id === booking.serviceId),
      }))
      .filter(booking => booking.service); // service가 없는 booking은 제외

    result = result
      .filter(booking => filters.serviceType.length === 0 || filters.serviceType.includes(booking.service.serviceType))
      .filter(booking => filters.location.length === 0 || filters.location.includes(booking.service.city))
      .filter(booking => filters.type.length === 0 || filters.type.includes(booking.service.type))
      .filter(booking => filters.status.length === 0 || filters.status.includes(booking.status));

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.bookingDate) - new Date(a.bookingDate);
      // `service.price`를 기준으로 정렬하도록 수정
      if (sortBy === 'price_asc') return a.service.price - b.service.price;
      if (sortBy === 'price_desc') return b.service.price - a.service.price;
      return 0;
    });

    return result;
  }, [bookings, filters, sortBy]);

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

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case '상담 중': return 'badge-info';
      case '계약금 결제 완료': return 'badge-warning';
      case '예약 확정': return 'badge-success';
      default: return 'badge-neutral';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">내 상담 내역</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">진행 중인 상담 및 예약 내역을 확인하고 관리하세요.</p>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1">
                <FilterDropdown title="서비스 종류" options={allServiceTypes} selected={filters.serviceType} onSelect={(val) => handleMultiSelectFilter('serviceType', val)} />
                <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                <FilterDropdown title="시설 구분" options={allTypes} selected={filters.type} onSelect={(val) => handleMultiSelectFilter('type', val)} />
                <FilterDropdown title="상담 상태" options={allBookingStatuses} selected={filters.status} onSelect={(val) => handleMultiSelectFilter('status', val)} />
              </div>
              <button className="btn btn-ghost btn-sm md:btn-md" onClick={resetFilters}>전체 초기화</button>
            </div>
            { (filters.serviceType.length > 0 || filters.location.length > 0 || filters.type.length > 0 || filters.status.length > 0) &&
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
            <option value="price_desc">가격 높은 순</option>
            <option value="price_asc">가격 낮은 순</option>
          </select>
        </div>

        {filteredAndSortedBookings.length > 0 ? (
          <div className="space-y-6">
            {filteredAndSortedBookings.map(({ id, status, bookingDate, service }) => (
              <Link to={`/service/${service.id}?openChat=true`} key={id} className="block">
                <div className="card lg:card-side bg-white shadow-xl hover:bg-base-100 transition-colors duration-200 border border-gray-200 rounded-lg overflow-hidden">
                  <figure className="lg:w-1/3 h-48 lg:h-auto relative">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body lg:w-2/3 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="card-title text-xl font-bold text-gray-800">{service.name}</h2>
                      <span className={`badge ${getStatusBadgeColor(status)}`}>{status}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1"><MapPinIcon className="h-4 w-4 inline-block mr-1 text-gray-500" />{service.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      <span className="text-xs font-bold text-gray-700">{service.averageRating}</span>
                      <span className="text-xs text-gray-500">({service.reviewCount} 리뷰)</span>
                    </div>

                    <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <CalendarDaysIcon className="h-4 w-4 text-gray-500" />
                        <span>상담일: {bookingDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {service.isVerified && (
                          <div className="tooltip" data-tip="기관 인증">
                            <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                          </div>
                        )}
                        <span className="text-lg font-bold text-gray-900">{service.price.toLocaleString()}원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">상담 내역이 없습니다.</p>
            <p className="mt-2 text-gray-400">관심 있는 서비스에 상담을 신청해보세요.</p>
            <Link to="/search" className="btn btn-primary mt-8">서비스 둘러보러 가기</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingListPage;