import React, { useState, useMemo, useCallback } from 'react';
import { CalendarIcon, ClockIcon, SparklesIcon, PlusCircleIcon, XCircleIcon, CurrencyYenIcon } from '@heroicons/react/24/solid';

// Helper functions for date logic
const isWeekend = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
};

const isPeakSeason = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth() is 0-indexed
  // Example peak seasons: Spring (4,5), Fall (9,10)
  return [4, 5, 9, 10].includes(month);
};

function ReservationRequestModal({ service, onClose, onConfirm }) {
  const [dates, setDates] = useState([new Date().toISOString().slice(0, 10)]);
  const [currentDateInput, setCurrentDateInput] = useState(new Date().toISOString().slice(0, 10));
  const [times, setTimes] = useState({ morning: true, afternoon: false, evening: false });

  const basePrice = service.price || 0;

  const priceDetails = useMemo(() => {
    if (dates.length === 0) return { finalPrice: basePrice, adjustments: [] };

    let calculatedPrice = basePrice;
    const adjustments = [];
    const firstDate = dates[0]; // For simplicity, calculate based on the first selected date

    if (isPeakSeason(firstDate)) {
      calculatedPrice *= 1.2;
      adjustments.push({ reason: '성수기 할증', amount: basePrice * 0.2, type: 'increase' });
    }
    if (isWeekend(firstDate)) {
      calculatedPrice *= 1.1;
      adjustments.push({ reason: '주말/공휴일 할증', amount: basePrice * 0.1, type: 'increase' });
    }

    return { finalPrice: Math.round(calculatedPrice), adjustments };
  }, [basePrice, dates]);

  const handleTimeChange = (time) => {
    setTimes(prev => ({ ...prev, [time]: !prev[time] }));
  };

  const addDate = () => {
    if (currentDateInput && !dates.includes(currentDateInput)) {
      setDates([...dates, currentDateInput]);
    }
  };

  const removeDate = (dateToRemove) => {
    setDates(dates.filter(date => date !== dateToRemove));
  };

  const handleSubmit = () => {
    const selectedTimes = Object.entries(times).filter(([, value]) => value).map(([key]) => key);
    if (dates.length === 0 || selectedTimes.length === 0) {
      alert('적어도 하나의 날짜와 시간대를 선택해야 합니다.');
      return;
    }
    onConfirm({ 
      dates,
      times: selectedTimes,
      finalPrice: priceDetails.finalPrice,
    });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-2xl">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-2xl mb-4">예약 요청하기</h3>
        <p className="mb-6 text-gray-600">{service.name} 서비스에 대한 예약을 요청합니다. 희망 날짜와 옵션을 선택해주세요.</p>
        
        <div className="space-y-6">
          {/* Date Selection */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold flex items-center"><CalendarIcon className="h-5 w-5 mr-2"/>희망 날짜 (여러 개 선택 가능)</span></label>
            <div className="flex gap-2">
              <input type="date" value={currentDateInput} onChange={e => setCurrentDateInput(e.target.value)} className="input input-bordered flex-grow" />
              <button onClick={addDate} className="btn btn-primary"><PlusCircleIcon className="h-6 w-6"/></button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {dates.map(date => (
                <div key={date} className="badge badge-lg badge-outline gap-2">
                  {date}
                  <XCircleIcon className="h-4 w-4 cursor-pointer" onClick={() => removeDate(date)} />
                </div>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="form-control w-full">
            <label className="label"><span className="label-text font-semibold flex items-center"><ClockIcon className="h-5 w-5 mr-2"/>희망 시간대 (중복 선택 가능)</span></label>
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-base-200 rounded-lg">
              {['morning', 'afternoon', 'evening'].map(time => (
                <label key={time} className="label cursor-pointer flex-grow justify-start gap-2 p-2 rounded-md hover:bg-base-100">
                  <input type="checkbox" checked={times[time]} onChange={() => handleTimeChange(time)} className="checkbox checkbox-primary" />
                  <span className="label-text">{time === 'morning' ? '오전' : time === 'afternoon' ? '오후' : '저녁'}</span> 
                </label>
              ))}
            </div>
          </div>

          {/* Final Price */}
          <div className="divider"></div>
          <div className="text-right bg-base-200 p-4 rounded-lg">
            <p className="text-gray-500">기본 서비스 가격: {basePrice.toLocaleString()}원</p>
            {priceDetails.adjustments.map((adj, i) => (
              <p key={i} className="text-sm text-red-500">+ {adj.reason}: {adj.amount.toLocaleString()}원</p>
            ))}
            <p className="font-bold text-xl mt-2">예상 총액: <span className="text-primary">{priceDetails.finalPrice.toLocaleString()}원</span></p>
            <p className="text-xs text-gray-400 mt-1">* 최종 가격은 첫 번째 선택된 날짜 기준으로 계산됩니다.</p>
          </div>
        </div>

        <div className="modal-action mt-6">
          <button onClick={handleSubmit} className="btn btn-primary w-full">업체에 예약 가능 여부 문의하기</button>
        </div>
      </div>
    </div>
  );
}

export default ReservationRequestModal;