import React, { useState, useMemo } from 'react';

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

const allCities = ['서울시', '부산시', '제주도', '전국', '온라인'];
const districtsByCity = {
  '서울시': ['강남구', '강북구', '마포구', '성동구', '종로구', '중구', '서초구'],
  '부산시': ['해운대구', '수영구', '남구'],
  '제주도': ['제주시', '서귀포시'],
};

function ServiceRegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: '',
    subCategory: '', // venueStyle 대신 subCategory 사용
    type: '',
    city: '',
    district: '',
    address: '',
    price: '',
    description: '',
    image: null,
  });

  const publicPrivateTypes = ['공공', '민간'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newState = { ...prev, [name]: value };
      if (name === 'city') {
        newState.district = ''; 
      }
      if (name === 'serviceType') {
        newState.subCategory = ''; // 메인 카테고리 변경 시 하위 카테고리 초기화
      }
      return newState;
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
  };

  const availableDistricts = useMemo(() => {
    return formData.city ? districtsByCity[formData.city] || [] : [];
  }, [formData.city]);

  const availableSubCategories = useMemo(() => {
    return formData.serviceType ? categories[formData.serviceType] || [] : [];
  }, [formData.serviceType]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-center mb-2">서비스 등록하기</h1>
        <p className="text-center mb-8 text-gray-600">공공 웨딩 플래너와 함께할 파트너를 찾습니다. 정보를 입력하시면 검토 후 등록됩니다.</p>
        
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg space-y-6">
          <div>
            <label className="label"><span className="label-text font-semibold">서비스명</span></label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="예: 엘리에나 호텔 웨딩" className="input input-bordered w-full" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">서비스 종류</span></label>
              <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="select select-bordered w-full" required>
                <option value="">선택</option>
                {categoryOrder.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">상세 분류</span></label>
              <select name="subCategory" value={formData.subCategory} onChange={handleChange} className="select select-bordered w-full" required disabled={availableSubCategories.length === 0}>
                <option value="">선택</option>
                {availableSubCategories.map(subCat => (
                  <option key={subCat} value={subCat}>{subCat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">기관 타입</span></label>
            <select name="type" value={formData.type} onChange={handleChange} className="select select-bordered w-full" required>
              <option value="">선택</option>
              {publicPrivateTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label"><span className="label-text font-semibold">도/시</span></label>
              <select name="city" value={formData.city} onChange={handleChange} className="select select-bordered w-full" required>
                <option value="">선택</option>
                {allCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label"><span className="label-text font-semibold">군/구</span></label>
              <select name="district" value={formData.district} onChange={handleChange} className="select select-bordered w-full" required disabled={!formData.city}>
                <option value="">선택</option>
                {availableDistricts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">상세 주소</span></label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="예: 테헤란로 123" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">가격 (원)</span></label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="예: 2500000" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">상세 설명</span></label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="서비스에 대한 자세한 설명을 입력해주세요." className="textarea textarea-bordered h-32 w-full" required></textarea>
          </div>

          <div>
            <label className="label"><span className="label-text font-semibold">대표 이미지</span></label>
            <input type="file" name="image" onChange={handleImageChange} className="file-input file-input-bordered w-full" accept="image/*" />
          </div>

          <button type="submit" className="btn btn-primary w-full">서비스 등록 요청</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceRegisterPage;