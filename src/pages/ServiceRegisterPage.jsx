import React, { useState, useMemo } from 'react';
import { getServiceTypeBadgeColor, getVenueStyleBadgeColor, getTypeBadgeColor } from '../utils/badgeStyles';

const allCities = ['서울시', '부산시', '제주도'];
const districtsByCity = {
  '서울시': ['강남구', '강북구', '마포구', '성동구', '종로구', '중구'],
  '부산시': ['해운대구', '수영구', '남구'],
  '제주도': ['제주시', '서귀포시'],
};

function ServiceRegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '',
    venueStyle: '',
    type: '',
    city: '', // city 추가
    district: '', // district 추가
    address: '',
    price: '',
    description: '',
    image: null,
  });

  const serviceTypes = ['웨딩 베뉴', '플래너', '스드메', '신혼여행', '혼주'];
  const venueStyles = ['실내', '야외'];
  const publicPrivateTypes = ['공공', '민간'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      if (name === 'city') {
        return { ...prev, [name]: value, district: '' }; // 시/도 변경 시 군/구 초기화
      }
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('서비스 등록 폼 데이터:', formData);
    alert('서비스 등록 요청이 접수되었습니다. (프로토타입)');
    // 실제 서비스에서는 여기에 API 호출 로직이 들어갑니다.
  };

  const availableDistricts = useMemo(() => {
    return formData.city ? districtsByCity[formData.city] || [] : [];
  }, [formData.city]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-center mb-2">서비스 등록하기</h1>
        <p className="text-center mb-8 text-gray-600">공공 웨딩 플래너와 함께할 파트너를 찾습니다. 정보를 입력하시면 검토 후 등록됩니다.</p>
        
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg space-y-6">
          {/* 서비스명 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">서비스명</span>
            </label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="예: 엘리에나 호텔 웨딩" className="input input-bordered w-full" required />
          </div>

          {/* 서비스 타입 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">업체 타입</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceTypes.map(type => (
                <button
                  key={type}
                  type="button"
                  name="serviceType"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: type, venueStyle: type !== '웨딩 베뉴' ? '' : prev.venueStyle }))}
                  className={`btn btn-sm ${formData.serviceType === type ? 'btn-primary' : 'btn-outline'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 베뉴 스타일 (웨딩 베뉴 선택 시에만 표시) */}
          {formData.serviceType === '웨딩 베뉴' && (
            <div>
              <label className="label">
                <span className="label-text font-semibold">베뉴 스타일</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {venueStyles.map(style => (
                  <button
                    key={style}
                    type="button"
                    name="venueStyle"
                    onClick={() => setFormData(prev => ({ ...prev, venueStyle: style }))}
                    className={`btn btn-sm ${formData.venueStyle === style ? 'btn-accent' : 'btn-outline btn-accent'}`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 기관 타입 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">기관 타입</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {publicPrivateTypes.map(type => (
                <button
                  key={type}
                  type="button"
                  name="type"
                  onClick={() => setFormData(prev => ({ ...prev, type: type }))}
                  className={`btn btn-sm ${formData.type === type ? 'btn-primary' : 'btn-outline'}`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* 지역 (도/시, 군/구) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">도/시</span>
              </label>
              <select name="city" value={formData.city} onChange={handleChange} className="select select-bordered w-full" required>
                <option value="">선택</option>
                {allCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">군/구</span>
              </label>
              <select name="district" value={formData.district} onChange={handleChange} className="select select-bordered w-full" required disabled={!formData.city}>
                <option value="">선택</option>
                {availableDistricts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 상세 주소 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">상세 주소</span>
            </label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="예: 테헤란로 123" className="input input-bordered w-full" required />
          </div>

          {/* 가격 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">가격 (원)</span>
            </label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="예: 2500000" className="input input-bordered w-full" required />
          </div>

          {/* 상세 설명 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">상세 설명</span>
            </label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="서비스에 대한 자세한 설명을 입력해주세요." className="textarea textarea-bordered h-32 w-full" required></textarea>
          </div>

          {/* 이미지 업로드 */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">대표 이미지</span>
            </label>
            <input type="file" name="image" onChange={handleImageChange} className="file-input file-input-bordered w-full" accept="image/*" />
          </div>

          <button type="submit" className="btn btn-primary w-full">서비스 등록 요청</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceRegisterPage;
