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

function RequestFormPage() {
  const [formState, setFormState] = useState({
    title: '',
    serviceType: '',
    subCategory: '',
    city: '',
    district: '',
    date: '',
    budget: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => {
      const newState = { ...prevState, [name]: value };
      if (name === 'city') {
        newState.district = '';
      }
      if (name === 'serviceType') {
        newState.subCategory = '';
      }
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formState);
    alert('견적 요청이 성공적으로 등록되었습니다.\n(현재는 프로토타입으로, 실제 데이터가 저장되지는 않습니다.)');
    // 폼 초기화
    setFormState({
      title: '',
      serviceType: '',
      subCategory: '',
      city: '',
      district: '',
      date: '',
      budget: '',
      details: '',
    });
  };

  const availableDistricts = useMemo(() => {
    return formState.city ? districtsByCity[formState.city] || [] : [];
  }, [formState.city]);

  const availableSubCategories = useMemo(() => {
    return formState.serviceType ? categories[formState.serviceType] || [] : [];
  }, [formState.serviceType]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-center mb-2">나만의 맞춤 견적 요청하기</h1>
        <p className="text-center mb-8 text-gray-600">원하는 조건을 상세히 알려주시면, 검증된 플래너들이 맞춤 견적을 제안합니다.</p>
        
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="title" className="text-lg font-semibold">제목</label>
            <input type="text" id="title" name="title" value={formState.title} onChange={handleInputChange} placeholder="예: 10월 서울, 100명 규모 스몰웨딩 스드메 구해요" className="input input-bordered w-full mt-2" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="serviceType" className="text-lg font-semibold">서비스 종류</label>
              <select id="serviceType" name="serviceType" value={formState.serviceType} onChange={handleInputChange} className="select select-bordered w-full mt-2" required>
                <option value="">선택</option>
                {categoryOrder.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subCategory" className="text-lg font-semibold">상세 분류</label>
              <select id="subCategory" name="subCategory" value={formState.subCategory} onChange={handleInputChange} className="select select-bordered w-full mt-2" required disabled={availableSubCategories.length === 0}>
                <option value="">선택</option>
                {availableSubCategories.map(subCat => (
                  <option key={subCat} value={subCat}>{subCat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="text-lg font-semibold">희망 도/시</label>
              <select id="city" name="city" value={formState.city} onChange={handleInputChange} className="select select-bordered w-full mt-2" required>
                <option value="">선택</option>
                {allCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="district" className="text-lg font-semibold">희망 군/구</label>
              <select id="district" name="district" value={formState.district} onChange={handleInputChange} className="select select-bordered w-full mt-2" required disabled={!formState.city}>
                <option value="">선택</option>
                {availableDistricts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="text-lg font-semibold">희망 날짜</label>
            <input type="date" id="date" name="date" value={formState.date} onChange={handleInputChange} className="input input-bordered w-full mt-2" required />
          </div>

          <div>
            <label htmlFor="budget" className="text-lg font-semibold">예산 (원)</label>
            <input type="number" id="budget" name="budget" value={formState.budget} onChange={handleInputChange} placeholder="숫자만 입력" className="input input-bordered w-full mt-2" required />
          </div>

          <div>
            <label htmlFor="details" className="text-lg font-semibold">상세 내용</label>
            <textarea id="details" name="details" value={formState.details} onChange={handleInputChange} className="textarea textarea-bordered w-full mt-2" rows="5" placeholder="원하시는 웨딩 스타일, 분위기, 필수 조건 등을 자유롭게 작성해주세요."></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">견적 요청 등록하기</button>
        </form>
      </div>
    </div>
  );
}

export default RequestFormPage;