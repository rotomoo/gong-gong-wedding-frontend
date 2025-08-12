import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { weddingHalls } from '../data/mockData';
import { useBookings } from '../context/BookingContext';
import ChatRoom from '../components/ChatRoom'; // Import ChatRoom
import { MapPinIcon, StarIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const allServiceTypes = ['웨딩 베뉴', '플래너', '스드메 & 촬영', '본식', '혼수 & 소품', '신혼여행'];
const allLocations = ['서울시', '부산시', '제주도'];
const allTypes = ['공공', '민간'];
const allBookingStatuses = ['상담 중', '계약금 결제 완료', '예약 확정'];

function BookingListPage() {
  const { bookings, addMessageToBooking } = useBookings();
  const [activeChat, setActiveChat] = useState(null); // State to manage active chat

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
      .map(booking => ({
        ...booking,
        service: weddingHalls.find(item => item.id === booking.serviceId),
      }))
      .filter(booking => booking.service);

    result = result
      .filter(booking => filters.serviceType.length === 0 || filters.serviceType.includes(booking.service.serviceType))
      .filter(booking => filters.location.length === 0 || filters.location.includes(booking.service.city))
      .filter(booking => filters.type.length === 0 || filters.type.includes(booking.service.type))
      .filter(booking => filters.status.length === 0 || filters.status.includes(booking.status));

    result.sort((a, b) => {
      const dateA = a.bookingDate ? new Date(a.bookingDate) : 0;
      const dateB = b.bookingDate ? new Date(b.bookingDate) : 0;
      if (sortBy === 'latest') return dateB - dateA;
      if (sortBy === 'price_asc') return a.service.price - b.service.price;
      if (sortBy === 'price_desc') return b.service.price - a.service.price;
      return 0;
    });

    return result;
  }, [bookings, filters, sortBy]);
  
  const handleSendMessage = useCallback((text) => {
    if (!activeChat) return;
    addMessageToBooking(activeChat.serviceId, { sender: 'user', text });
    // Simulate partner response
    setTimeout(() => {
      addMessageToBooking(activeChat.serviceId, { sender: 'partner', text: '네, 확인했습니다. 감사합니다.' });
    }, 1000);
  }, [activeChat, addMessageToBooking]);

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
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">내 예약 내역</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">진행 중인 상담 및 확정된 예약 내역을 확인하고 관리하세요.</p>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1">
                <FilterDropdown title="서비스 종류" options={allServiceTypes} selected={filters.serviceType} onSelect={(val) => handleMultiSelectFilter('serviceType', val)} />
                <FilterDropdown title="희망 지역" options={allLocations} selected={filters.location} onSelect={(val) => handleMultiSelectFilter('location', val)} />
                <FilterDropdown title="시설 구분" options={allTypes} selected={filters.type} onSelect={(val) => handleMultiSelectFilter('type', val)} />
                <FilterDropdown title="예약 상태" options={allBookingStatuses} selected={filters.status} onSelect={(val) => handleMultiSelectFilter('status', val)} />
              </div>
              <button className="btn btn-ghost btn-sm md:btn-md" onClick={resetFilters}>전체 초기화</button>
            </div>
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
            {filteredAndSortedBookings.map((booking) => (
              <div key={booking.id} className="card lg:card-side bg-white shadow-xl border border-gray-200 rounded-lg overflow-hidden">
                <figure className="lg:w-1/3 h-48 lg:h-auto relative">
                  <Link to={`/service/${booking.service.id}`}>
                    <img src={booking.service.image} alt={booking.service.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </Link>
                </figure>
                <div className="card-body lg:w-2/3 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="card-title text-xl font-bold text-gray-800">
                      <Link to={`/service/${booking.service.id}`} className="hover:text-primary">{booking.service.name}</Link>
                    </h2>
                    <span className={`badge ${getStatusBadgeColor(booking.status)}`}>{booking.status}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1"><MapPinIcon className="h-4 w-4 inline-block mr-1 text-gray-500" />{booking.service.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{booking.service.averageRating}</span>
                    <span className="text-xs text-gray-500">({booking.service.reviewCount} 리뷰)</span>
                  </div>

                  <div className="card-actions justify-end mt-auto pt-2 border-t border-gray-100">
                    <Link to={`/service/${booking.service.id}/review`} className="btn btn-secondary btn-sm">
                      리뷰 작성하기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">예약 내역이 없습니다.</p>
            <p className="mt-2 text-gray-400">관심 있는 서비스에 상담을 신청하고 예약을 진행해보세요.</p>
            <Link to="/search" className="btn btn-primary mt-8">서비스 둘러보러 가기</Link>
          </div>
        )}
      </div>

      {activeChat && (
        <ChatRoom
          serviceName={`${activeChat.service.name}님과의 상담`}
          messages={activeChat.messages || []}
          onSendMessage={handleSendMessage}
          onClose={() => setActiveChat(null)}
        />
      )}
    </div>
  );
}

export default BookingListPage;
