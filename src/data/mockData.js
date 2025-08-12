const initialWeddingHalls = [
  // --- 웨딩 베뉴 ---
  {
    id: 1,
    name: '강남구민회관 예식장',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내', // subCategory 대신 사용
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 삼성로 154',
    price: 500000,
    image: 'https://i.imgur.com/gNAp2hT.png',
    gallery: ['https://i.imgur.com/gNAp2hT.png', 'https://i.imgur.com/5nB2aE7.png', 'https://i.imgur.com/sA1t2fA.png'],
    isVerified: true,
    description: '강남구민회관은 합리적인 가격으로 격식 있는 예식을 올릴 수 있는 공공 예식 공간입니다.',
    includedItems: ['기본 대관 (3시간)', '신부대기실 사용', '기본 음향 및 조명', '폐백실 사용료'],
    vendorInfo: { name: '강남구시설관리공단', ceo: '홍길동', license: '123-45-67890', phone: '02-123-4567', email: 'gangnam@gongdan.go.kr' },
    reviews: [ { id: 101, rating: 5, author: '김예신', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=Y', comment: '가성비 최고!', createdAt: '2024-06-15' } ]
  },
  {
    id: 2,
    name: '엘리에나 호텔 웨딩',
    type: '민간',
    serviceType: '웨딩 베뉴',
    venueStyle: '호텔', // subCategory 대신 사용
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 논현로 645',
    price: 25000000,
    image: 'https://i.imgur.com/sA1t2fA.png',
    gallery: ['https://i.imgur.com/sA1t2fA.png', 'https://i.imgur.com/gNAp2hT.png', 'https://i.imgur.com/5nB2aE7.png'],
    isVerified: true,
    description: '엘리에나 호텔은 당신의 꿈을 현실로 만들어 드리는 최고의 웨딩 장소입니다.',
    website: 'http://www.elienahotel.com/eliena/content.php?co_id=wedding0_kr',
    hallInfo: {
      type: '호텔',
      menu: '뷔페',
      mealPrice: '95,000원 ~ 150,000원',
      guarantee: '최소 300명',
      interval: '180분',
      parking: '600대 가능 (3시간 무료)'
    },
    detailedInfo: {
      hallName: '5F 컨벤션홀',
      capacity: '최대 500명 (착석 300명)',
      rentalFee: '10,000,000원',
      productionFee: '5,000,000원 (조명, 음향 포함)',
      flowerDecor: '8,000,000원 ~ (협의 가능)',
    },
    includedItems: ['호텔 예식홀 대관', '플라워 데코레이션', '웨딩 케이크 및 샴페인', '신혼부부 스위트룸 1박'],
    vendorInfo: { name: '(주)엘리에나호텔', ceo: '이몽룡', license: '111-22-33333', phone: '02-344-3333', email: 'wedding@elienahotel.com' },
    reviews: [ { id: 201, rating: 5, author: '이서준', authorImage: 'https://placehold.co/32x32/B3E5FC/03A9F4?text=L', comment: '최고급 서비스와 아름다운 홀!', createdAt: '2024-07-01' } ]
  },
  // --- 플래너 ---
  {
    id: 16,
    name: '베리굿웨딩',
    type: '민간',
    serviceType: '플래너',
    subCategory: '동행플래너',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 테헤란로 521',
    price: 800000,
    image: 'https://i.imgur.com/wJ0L1J.png',
    gallery: ['https://i.imgur.com/wJ0L1J.png'],
    isVerified: true,
    description: '경험 많은 웨딩플래너가 예식 준비의 모든 과정을 함께하며 최고의 선택을 도와드립니다.',
    includedItems: ['웨딩홀, 스드메 등 모든 제휴업체 섭외 및 일정 관리', '결혼 준비과정 동행 서비스'],
    vendorInfo: { name: '베리굿웨딩컴퍼니', ceo: '김대표', license: '999-99-99999', phone: '02-514-9933', email: 'verygood@example.com' },
    reviews: []
  },
  {
    id: 22,
    name: '더블유디렉팅',
    type: '민간',
    serviceType: '플래너',
    subCategory: '디렉팅',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 도산대로 123',
    price: 2500000,
    image: 'https://i.imgur.com/Z8aG8bF.png',
    gallery: ['https://i.imgur.com/Z8aG8bF.png'],
    isVerified: true,
    description: '결혼식의 시작부터 끝까지, 모든 것을 총괄하는 전문 웨딩 디렉팅 서비스입니다.',
    includedItems: ['컨셉 기획', '업체 섭외', '예산 관리', '당일 현장 총괄'],
    vendorInfo: { name: '더블유디렉팅', ceo: '최디렉', license: '141-41-41414', phone: '02-111-2222', email: 'wdirect@example.com' },
    reviews: []
  },
  {
    id: 23,
    name: '파티오케이터링',
    type: '민간',
    serviceType: '플래너',
    subCategory: '케이터링',
    location: '서울시 서초구',
    city: '서울시',
    address: '서울시 서초구 신반포로 321',
    price: 1000000,
    image: 'https://i.imgur.com/Y7pP1cG.png',
    gallery: ['https://i.imgur.com/Y7pP1cG.png'],
    isVerified: true,
    description: '야외 웨딩, 스몰 웨딩을 위한 고품격 맞춤 케이터링 서비스를 제공합니다.',
    includedItems: ['뷔페 메뉴 (50인 기준)', '테이블 세팅', '음료', '디저트'],
    vendorInfo: { name: '파티오케이터링', ceo: '박셰프', license: '151-51-51515', phone: '02-333-4444', email: 'patio@example.com' },
    reviews: []
  },
  // --- 스드메 & 촬영 ---
  {
    id: 7,
    name: '오브라마에스트라',
    type: '민간',
    serviceType: '스드메 & 촬영',
    subCategory: '스튜디오',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 선릉로152길 15',
    price: 1800000,
    image: 'https://i.imgur.com/5nB2aE7.png',
    gallery: ['https://i.imgur.com/5nB2aE7.png', 'https://i.imgur.com/sA1t2fA.png', 'https://i.imgur.com/gNAp2hT.png'],
    isVerified: true,
    description: '인물 중심의 깔끔하고 세련된 웨딩 사진을 추구합니다.',
    includedItems: ['촬영 원본 데이터', '20페이지 압축 앨범 1권', '20R 기본 액자 1개'],
    vendorInfo: { name: '오브라마에스트라', ceo: '성춘향', license: '456-78-90123', phone: '02-555-6666', email: 'info@obramaestra.co.kr' },
    reviews: [ { id: 701, rating: 5, author: '김지훈', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=K', comment: '인생샷 건졌어요!', createdAt: '2024-07-12' } ]
  },
  {
    id: 9,
    name: '시그니처 엘리자베스',
    type: '민간',
    serviceType: '스드메 & 촬영',
    subCategory: '드레스',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 선릉로145길 15',
    price: 3000000,
    image: 'https://i.imgur.com/jX6aD8C.png',
    gallery: ['https://i.imgur.com/jX6aD8C.png'],
    isVerified: true,
    description: '클래식하고 우아한 A라인 드레스가 시그니처인 엘리자베스 드레스샵입니다.',
    includedItems: ['본식 드레스 1벌', '촬영용 드레스 2벌', '악세사리 일체'],
    vendorInfo: { name: '엘리자베스', ceo: '최대표', license: '222-22-22222', phone: '02-512-5458', email: 'elizabeth@example.com' },
    reviews: []
  },
  {
    id: 10,
    name: '정샘물 인스피레이션',
    type: '민간',
    serviceType: '스드메 & 촬영',
    subCategory: '메이크업',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 압구정로60길 22',
    price: 880000,
    image: 'https://i.imgur.com/kL3bN9D.png',
    gallery: ['https://i.imgur.com/kL3bN9D.png'],
    isVerified: true,
    description: '피부 본연의 아름다움을 살리는 투명하고 내추럴한 메이크업을 전문으로 합니다.',
    includedItems: ['신랑, 신부 헤어 & 메이크업', '혼주 2인 헤어 & 메이크업'],
    vendorInfo: { name: '정샘물 인스피레이션', ceo: '정샘물', license: '333-33-33333', phone: '02-518-8100', email: 'jsm@example.com' },
    reviews: []
  },
  // --- 본식 ---
  {
    id: 11,
    name: '언아더데이',
    type: '민간',
    serviceType: '본식',
    subCategory: '본식스냅',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 도산대로55길 47',
    price: 1500000,
    image: 'https://i.imgur.com/mN4cO0E.png',
    gallery: ['https://i.imgur.com/mN4cO0E.png'],
    isVerified: false,
    description: '두 명의 작가가 다양한 각도에서 결혼식의 모든 순간을 놓치지 않고 담아드립니다.',
    includedItems: ['2인 작가 촬영', '원본 전체', '보정본 100컷', '14x11인치 앨범 3권'],
    vendorInfo: { name: '언아더데이', ceo: '박대표', license: '444-44-44444', phone: '02-547-3697', email: 'anotherday@example.com' },
    reviews: []
  },
  {
    id: 19,
    name: '김철수 주례',
    type: '민간',
    serviceType: '본식',
    subCategory: '주례',
    location: '온라인',
    city: '온라인',
    address: '온라인 및 전국 출장',
    price: 300000,
    image: 'https://i.imgur.com/L8aG8bF.png',
    gallery: ['https://i.imgur.com/L8aG8bF.png'],
    isVerified: false,
    description: '따뜻하고 감동적인 메시지로 예식의 품격을 높여드리는 전문 주례 서비스입니다.',
    includedItems: ['주례사 협의 및 작성', '예식 당일 주례 진행'],
    vendorInfo: { name: '김철수', ceo: '김철수', license: '프리랜서', phone: '010-1234-5678', email: 'chulsoo@example.com' },
    reviews: []
  },
  {
    id: 20,
    name: '퍼스트 뮤직',
    type: '민간',
    serviceType: '본식',
    subCategory: '축가',
    location: '온라인',
    city: '온라인',
    address: '온라인 및 전국 출장',
    price: 400000,
    image: 'https://i.imgur.com/O3pP1cG.png',
    gallery: ['https://i.imgur.com/O3pP1cG.png'],
    isVerified: true,
    description: '감미로운 목소리의 실력파 보컬이 두 분의 결혼을 축하하는 노래를 선물합니다.',
    includedItems: ['축가 1곡', 'MR 제공', '사전 협의'],
    vendorInfo: { name: '퍼스트 뮤직', ceo: '이대표', license: '131-31-31313', phone: '02-3444-5678', email: 'firstmusic@example.com' },
    reviews: []
  },
  {
    id: 21,
    name: '바른손카드',
    type: '민간',
    serviceType: '본식',
    subCategory: '청첩장',
    location: '온라인',
    city: '온라인',
    address: '온라인 주문',
    price: 150000,
    image: 'https://i.imgur.com/D9Z3A0s.png',
    gallery: ['https://i.imgur.com/D9Z3A0s.png'],
    isVerified: true,
    description: '다양한 디자인과 합리적인 가격의 청첩장으로 소중한 분들께 기쁜 소식을 전하세요.',
    includedItems: ['청첩장 100매', '모바일 청첩장', '식권'],
    vendorInfo: { name: '바른손카드', ceo: '박대표', license: '242-42-42424', phone: '1644-0708', email: 'barunson@example.com' },
    reviews: []
  },
  // --- 혼수 & 소품 ---
  {
    id: 12,
    name: '비단빔',
    type: '민간',
    serviceType: '혼수 & 소품',
    subCategory: '한복',
    location: '서울시 종로구',
    city: '서울시',
    address: '서울시 종로구 종로 235-1',
    price: 450000,
    image: 'https://i.imgur.com/fP5qR1F.png',
    gallery: ['https://i.imgur.com/fP5qR1F.png'],
    isVerified: true,
    description: '전통의 미와 현대적 감각이 어우러진 고운 빛깔의 한복을 만나보세요.',
    includedItems: ['신랑, 신부 한복 대여 (1회)', '속치마, 버선, 노리개 등 소품 일체'],
    vendorInfo: { name: '비단빔', ceo: '김실장', license: '555-55-55555', phone: '02-766-6331', email: 'bidanbim@example.com' },
    reviews: []
  },
  {
    id: 13,
    name: '해리슨테일러',
    type: '민간',
    serviceType: '혼수 & 소품',
    subCategory: '예복',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 선릉로146길 27-8',
    price: 1200000,
    image: 'https://i.imgur.com/gH6iS2G.png',
    gallery: ['https://i.imgur.com/gH6iS2G.png'],
    isVerified: false,
    description: '최고급 원단과 장인의 기술로 당신만을 위한 완벽한 핏의 맞춤 예복을 제작합니다.',
    includedItems: ['맞춤 수트 1벌', '맞춤 셔츠 1매', '넥타이, 보타이'],
    vendorInfo: { name: '해리슨테일러', ceo: '이대표', license: '666-66-66666', phone: '02-546-0840', email: 'harrison@example.com' },
    reviews: []
  },
  {
    id: 14,
    name: '골든듀',
    type: '민간',
    serviceType: '혼수 & 소품',
    subCategory: '예물',
    location: '전국 백화점',
    city: '전국',
    address: '전국 백화점 매장',
    price: 1500000,
    image: 'https://i.imgur.com/tI7uJ8H.png',
    gallery: ['https://i.imgur.com/tI7uJ8H.png'],
    isVerified: true,
    description: '두 사람의 사랑을 약속하는 영원한 빛, 골든듀의 아름다운 커플링 컬렉션.',
    includedItems: ['커플링 1쌍', '품질 보증서', '평생 무상 세척 서비스'],
    vendorInfo: { name: '(주)골든듀', ceo: '이필성', license: '777-77-77777', phone: '1588-6576', email: 'goldendew@example.com' },
    reviews: []
  },
  // --- 신혼여행 ---
  {
    id: 15,
    name: '허니문리조트',
    type: '민간',
    serviceType: '신혼여행',
    subCategory: null, // 하위 분류 없음
    location: '온라인',
    city: '온라인',
    address: '온라인 상담',
    price: 4500000,
    image: 'https://i.imgur.com/uV9xK0I.png',
    gallery: ['https://i.imgur.com/uV9xK0I.png'],
    isVerified: true,
    description: '몰디브, 하와이, 발리 등 전 세계 최고의 휴양지로 떠나는 꿈의 허니문을 디자인해드립니다.',
    includedItems: ['왕복 항공권', '리조트 숙박', '여행자 보험'],
    vendorInfo: { name: '(주)허니문리조트', ceo: '박팀장', license: '888-88-88888', phone: '02-548-2222', email: 'hmresort@example.com' },
    reviews: []
  },
];

// Function to calculate average rating and review count
const calculateServiceRatings = (services) => {
  return services.map(service => {
    if (service.reviews && service.reviews.length > 0) {
      const totalRating = service.reviews.reduce((sum, review) => sum + review.rating, 0);
      const averageRating = (totalRating / service.reviews.length).toFixed(1);
      return {
        ...service,
        averageRating: parseFloat(averageRating),
        reviewCount: service.reviews.length,
      };
    }
    return {
      ...service,
      averageRating: 0, // Default to 0 if no reviews
      reviewCount: 0,   // Default to 0 if no reviews
    };
  });
};

export const weddingHalls = calculateServiceRatings(initialWeddingHalls);

export const mockRequests = [
  {
    id: 1,
    authorId: 'user123',
    title: '10월 서울, 100명 규모 스몰웨딩 스드메 구해요',
    type: '민간',
    serviceType: '스드메 & 촬영',
    location: '서울시 강남구',
    city: '서울시',
    budget: 3000000,
    author: '김예신',
    authorImage: 'https://placehold.co/256x256/FBCFE8/9D27B0?text=Y',
    createdAt: '2025-08-12',
    details: '따뜻하고 자연스러운 분위기의 스튜디오와 본식 스냅을 원합니다. 헤어/메이크업 포함 견적 부탁드려요.',
    proposals: [
      {
        id: 1, // This is the proposal ID
        requestId: 1,
        serviceId: 7,
        proposerName: '오브라마에스트라 스튜디오',
        proposerImage: 'https://placehold.co/32x32/F0B8C9/FFFFFF?text=O',
        message: '안녕하세요! 스드메 견적 요청 잘 보았습니다. 원하시는 분위기에 맞춰 최고의 스냅을 제공해 드릴 수 있습니다. 자세한 내용은 상담을 통해 안내해 드릴게요.',
        receivedAt: '2024-05-22',
        price: 1800000,
        newMessagesCount: 1,
        read: false,
      }
    ]
  },
  {
    id: 2,
    authorId: 'user456',
    title: '내년 봄, 한강공원 야외 결혼식 도와주실 분!',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 마포구',
    city: '서울시',
    budget: 5000000,
    author: '결혼준비중',
    authorImage: 'https://placehold.co/32x32/A7F3D0/047857?text=K',
    createdAt: '2024-05-20',
    details: '한강공원에서 소규모 야외 결혼식을 계획중입니다. 전체 디렉팅 및 케이터링 업체 추천 가능하신 분 찾아요.',
    proposals: [
       {
        id: 2, // This is the proposal ID
        requestId: 2,
        serviceId: 15,
        proposerName: '더블유디렉팅',
        proposerImage: 'https://placehold.co/32x32/C2A8D9/FFFFFF?text=W',
        message: '한강공원 야외 결혼식 디렉팅 문의 주셨네요. 저희는 자연 친화적인 스몰 웨딩 전문입니다. 특별한 날을 위한 맞춤형 기획을 제안해 드립니다.',
        receivedAt: '2024-05-23',
        price: 3000000,
        newMessagesCount: 2, // Example with 2 new messages
        read: false,
      }
    ]
  },
  {
    id: 3,
    authorId: 'user789',
    title: '부산 해운대, 150명 수용 가능한 오션뷰 웨딩홀 찾아요',
    type: '민간',
    serviceType: '웨딩 베뉴',
    venueStyle: '호텔',
    location: '부산시 해운대구',
    city: '부산시',
    budget: 15000000,
    author: '바다사랑',
    authorImage: 'https://placehold.co/32x32/99d5fa/FFFFFF?text=B',
    createdAt: '2024-06-10',
    details: '하객 150명 정도 예상하고 있고, 해운대 바다가 보이는 예쁜 웨딩홀이었으면 좋겠습니다. 식사는 뷔페 선호합니다. 관련 업체분들 견적 부탁드려요.'
  },
  {
    id: 4,
    authorId: 'user101',
    title: '겨울 유럽 신혼여행(이탈리아, 스위스) 패키지 문의',
    type: '민간',
    serviceType: '신혼여행',
    location: '온라인',
    city: '온라인',
    budget: 10000000,
    author: '유럽드리머',
    authorImage: 'https://placehold.co/32x32/facc15/FFFFFF?text=E',
    createdAt: '2024-06-15',
    details: '12월에 출발하는 이탈리아, 스위스 신혼여행 패키지 찾고 있습니다. 10일~12일 일정으로, 자유시간이 어느정도 보장되었으면 좋겠어요. 항공, 숙소, 주요 관광 포함된 견적 원합니다.'
  },
  {
    id: 5,
    authorId: 'user112',
    title: '결혼식 사회자(주례없음) 및 축가(재즈) 구합니다.',
    type: '민간',
    serviceType: '본식',
    location: '서울시 종로구',
    city: '서울시',
    budget: 800000,
    author: '음악애호가',
    authorImage: 'https://placehold.co/32x32/d8b4fe/FFFFFF?text=M',
    createdAt: '2024-06-20',
    details: '주례 없는 결혼식이라 사회자 역할이 중요합니다. 위트있고 깔끔한 진행 가능하신 분 찾아요. 축가는 재즈 보컬 & 피아노 구성으로 2곡 생각하고 있습니다. 포트폴리오와 함께 제안해주세요.'
  },
];

export const mockReceivedProposals = [
  {
    id: 1,
    requestId: 1, // Links to mockRequests.id 1
    serviceId: 7, // Links to weddingHalls.id 7
    proposerName: '오브라마에스트라 스튜디오',
    proposerImage: 'https://placehold.co/32x32/F0B8C9/FFFFFF?text=O',
    message: '안녕하세요! 스드메 견적 요청 잘 보았습니다. 원하시는 분위기에 맞춰 최고의 스냅을 제공해 드릴 수 있습니다. 자세한 내용은 상담을 통해 안내해 드릴게요.',
    receivedAt: '2024-05-22',
    status: '새로운 제안',
    read: false,
    price: 1800000,
  },
  {
    id: 2,
    requestId: 2, // Links to mockRequests.id 2
    serviceId: 15, // Links to weddingHalls.id 15
    proposerName: '더블유디렉팅',
    proposerImage: 'https://placehold.co/32x32/C2A8D9/FFFFFF?text=W',
    message: '한강공원 야외 결혼식 디렉팅 문의 주셨네요. 저희는 자연 친화적인 스몰 웨딩 전문입니다. 특별한 날을 위한 맞춤형 기획을 제안해 드립니다.',
    receivedAt: '2024-05-23',
    status: '새로운 제안',
    read: false,
    price: 3000000,
  },
];

export const mockCommunityPosts = [
  {
    id: 1,
    title: '신혼여행지 추천해주세요! (휴양 vs 관광)',
    author: '여행가고파',
    authorImage: 'https://placehold.co/32x32/B3E5FC/03A9F4?text=T',
    createdAt: '2024-07-25',
    views: 98,
    likes: 8,
    comments: 5,
    category: '질문과답변',
    content: '신혼여행지를 정해야 하는데 너무 고민돼요. 몰디브 같은 휴양지가 좋을까요, 아니면 유럽처럼 관광할 곳이 많을까요? 경험 있으신 분들 추천 부탁드립니다!',
    commentData: [
      {
        id: 301,
        author: '여행고수',
        authorImage: 'https://placehold.co/32x32/A7F3D0/047857?text=T',
        createdAt: '2024-07-26',
        content: '저는 몰디브 다녀왔는데 정말 좋았어요! 아무것도 안 하고 쉬는 게 최고더라고요. :)'
      },
    ]
  },
];