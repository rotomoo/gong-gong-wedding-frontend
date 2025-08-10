const initialWeddingHalls = [
  // 웨딩 베뉴 (실내)
  {
    id: 1,
    name: '강남구민회관 예식장',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 삼성로 154',
    price: 500000,
    image: 'https://placehold.co/600x400/a2c2a8/ffffff?text=Public+Hall',
    isVerified: true,
    description: '강남구민회관은 합리적인 가격으로 격식 있는 예식을 올릴 수 있는 공공 예식 공간입니다. 넓은 주차 공간과 편리한 교통이 장점이며, 최대 200명의 하객을 수용할 수 있습니다. 전통적인 분위기의 폐백실도 완비되어 있습니다.',
    reviews: [
      { id: 101, rating: 5, author: '김예신', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=Y', comment: '가성비 최고! 시설도 깔끔하고 직원분들도 친절해요.', createdAt: '2024-06-15' },
      { id: 102, rating: 4, author: '박지혜', authorImage: 'https://placehold.co/32x32/FFD1DC/E91E63?text=P', comment: '교통은 편리한데 주차가 조금 아쉬웠어요. 그래도 만족합니다.', createdAt: '2024-06-20' },
    ]
  },
  {
    id: 2,
    name: '엘리에나 호텔 웨딩',
    type: '민간',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 논현로 645',
    price: 2500000,
    image: 'https://placehold.co/600x400/d9a8c5/ffffff?text=Hotel+Wedding',
    isVerified: true,
    description: '엘리에나 호텔은 당신의 꿈을 현실로 만들어 드리는 최고의 웨딩 장소입니다. 최첨단 조명과 음향 시설, 그리고 전문 플라워팀이 디자인한 화려한 꽃장식이 어우러져 잊지 못할 순간을 선사합니다. 호텔 셰프가 선보이는 최고급 웨딩 메뉴로 하객들에게 감사의 마음을 전하세요.',
    reviews: [
      { id: 201, rating: 5, author: '이서준', authorImage: 'https://placehold.co/32x32/B3E5FC/03A9F4?text=L', comment: '최고급 서비스와 아름다운 홀! 모든 것이 완벽했습니다.', createdAt: '2024-07-01' },
      { id: 202, rating: 5, author: '최민준', authorImage: 'https://placehold.co/32x32/C8E6C9/4CAF50?text=C', comment: '음식이 정말 맛있고 분위기가 고급스러워요. 추천합니다.', createdAt: '2024-07-05' },
      { id: 203, rating: 4, author: '강지우', authorImage: 'https://placehold.co/32x32/D1C4E9/673AB7?text=K', comment: '가격은 비싸지만 그만큼의 가치를 합니다. 만족스러운 결혼식이었어요.', createdAt: '2024-07-10' },
    ]
  },
  {
    id: 3,
    name: '시민청 시민플라자',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 중구',
    city: '서울시',
    address: '서울시 중구 세종대로 110',
    price: 300000,
    image: 'https://placehold.co/600x400/a2c2a8/ffffff?text=Citizen+Hall',
    isVerified: true,
    description: '서울의 중심, 시청사에 위치한 시민청에서 특별한 결혼식을 만들어보세요. 독특한 구조의 이벤트홀은 자유로운 공간 연출이 가능하며, 개성있는 스몰 웨딩을 꿈꾸는 커플에게 안성맞춤입니다.',
    reviews: [
      { id: 301, rating: 4, author: '정수민', authorImage: 'https://placehold.co/32x32/FFCCBC/FF5722?text=J', comment: '독특한 공간에서 특별한 결혼식을 올릴 수 있었어요. 만족합니다.', createdAt: '2024-06-01' },
    ]
  },
  // 웨딩 베뉴 (야외)
  {
    id: 9,
    name: '서울숲 야외 결혼식',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 성동구',
    city: '서울시',
    address: '서울시 성동구 뚝섬로 273',
    price: 800000,
    image: 'https://placehold.co/600x400/b7d5ac/ffffff?text=Outdoor',
    isVerified: true,
    description: '도심 속 자연, 서울숲에서 꿈꾸던 야외 결혼식을 실현하세요. 푸른 잔디와 아름다운 나무들이 어우러진 공간에서 영화같은 결혼식을 경험할 수 있습니다. 계절의 아름다움을 만끽하며 특별한 추억을 만드세요.',
    reviews: [
      { id: 901, rating: 5, author: '김아름', authorImage: 'https://placehold.co/32x32/A7F3D0/047857?text=K', comment: '날씨가 좋아서 정말 완벽한 야외 결혼식이었어요!', createdAt: '2024-05-25' },
      { id: 902, rating: 4, author: '박선우', authorImage: 'https://placehold.co/32x32/BFDBFE/1D4ED8?text=P', comment: '자연 속에서 하는 결혼식이라 특별했어요. 벌레가 좀 있었지만 감수할만해요.', createdAt: '2024-05-30' },
    ]
  },
  {
    id: 10,
    name: '북서울꿈의숲',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 강북구',
    city: '서울시',
    address: '서울시 강북구 월계로 173',
    price: 600000,
    image: 'https://placehold.co/600x400/b7d5ac/ffffff?text=Dream+Forest',
    isVerified: true,
    description: '넓은 잔디밭과 아름다운 연못이 있는 북서울꿈의숲에서 자연과 함께하는 결혼식을 올릴 수 있습니다. 전망대에서는 서울의 멋진 경치를 감상할 수 있으며, 하객들에게도 특별한 경험을 선사할 것입니다.',
    reviews: []
  },
  // 스드메
  {
    id: 7,
    name: '오브라마에스트라 스튜디오',
    type: '민간',
    serviceType: '스드메',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 선릉로152길 15',
    price: 1800000,
    image: 'https://placehold.co/600x400/f0b8c9/ffffff?text=Studio',
    isVerified: true,
    description: '오브라마에스트라는 인물 중심의 깔끔하고 세련된 웨딩 사진을 추구합니다. 다년간의 노하우를 가진 전문 포토그래퍼가 두 분의 가장 아름다운 순간을 영원히 간직할 수 있도록 도와드립니다. 다양한 컨셉의 세트장에서 다채로운 사진을 촬영해 보세요.',
    reviews: [
      { id: 701, rating: 5, author: '김지훈', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=K', comment: '인생샷 건졌어요! 작가님 최고!', createdAt: '2024-07-12' },
      { id: 702, rating: 4, author: '이지은', authorImage: 'https://placehold.co/32x32/FFD1DC/E91E63?text=L', comment: '자연스러운 분위기가 마음에 들어요. 보정본도 기대됩니다.', createdAt: '2024-07-15' },
    ]
  },
  {
    id: 8,
    name: '클로드 원스',
    type: '민간',
    serviceType: '스드메',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 압구정로71길 29',
    price: 2200000,
    image: 'https://placehold.co/600x400/f0b8c9/ffffff?text=S-D-M',
    isVerified: false,
    description: '클로드 원스는 자연광을 활용한 따뜻하고 로맨틱한 분위기의 사진으로 유명합니다. 최고급 드레스와 전문 메이크업 아티스트의 손길로 신부님의 아름다움을 극대화해 드립니다. 프라이빗한 공간에서 편안하게 촬영을 즐겨보세요.',
    reviews: []
  },
  // 플래너
  {
    id: 11,
    name: '베리굿 웨딩플래너',
    type: '민간',
    serviceType: '플래너',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 테헤란로 503',
    price: 1200000,
    image: 'https://placehold.co/600x400/f5d0a9/ffffff?text=Planner',
    isVerified: true,
    description: '결혼 준비의 모든 것을 도와드리는 든든한 동반자, 베리굿 웨딩플래너입니다. 신랑, 신부님의 예산과 스타일에 맞춰 최고의 업체들을 추천하고, 복잡한 예약과 일정 관리를 대신해 드립니다. 스트레스 없는 결혼 준비를 경험하세요.',
    reviews: [
      { id: 1101, rating: 5, author: '김예신', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=Y', comment: '플래너님 덕분에 결혼 준비가 너무 편했어요! 강추합니다.', createdAt: '2024-07-20' },
      { id: 1102, rating: 5, author: '박서준', authorImage: 'https://placehold.co/32x32/B3E5FC/03A9F4?text=P', comment: '꼼꼼하게 잘 챙겨주시고, 제가 원하는 스타일을 정확히 파악해주셨어요.', createdAt: '2024-07-22' },
    ]
  },
  // 혼주
  {
    id: 12,
    name: '한복더단',
    type: '민간',
    serviceType: '혼주',
    venueStyle: null,
    location: '서울시 종로구',
    city: '서울시',
    address: '서울시 종로구 자하문로 21',
    price: 800000,
    image: 'https://placehold.co/600x400/a9d0f5/ffffff?text=Hanbok',
    isVerified: true,
    description: '결혼식의 또 다른 주인공, 혼주님을 위한 최고의 한복을 선보입니다. 최고급 원단과 장인의 바느질로 완성된 명품 한복으로 품격을 더하세요. 다양한 디자인과 색상의 한복이 준비되어 있습니다.',
    reviews: []
  },
  // 신혼여행
  {
    id: 13,
    name: '허니문리조트',
    type: '민간',
    serviceType: '신혼여행',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 영동대로 738',
    price: 4500000,
    image: 'https://placehold.co/600x400/f5a9d0/ffffff?text=Honeymoon',
    isVerified: false,
    description: '일생에 단 한 번뿐인 허니문, 허니문리조트가 완벽하게 만들어 드립니다. 몰디브, 하와이, 발리 등 전 세계 최고의 휴양지 리조트 상품을 보유하고 있으며, 커플의 취향에 맞는 맞춤 플랜을 제공합니다. 로맨틱한 허니문을 위한 모든 것이 준비되어 있습니다.',
    reviews: [
      { id: 1301, rating: 5, author: '정우성', authorImage: 'https://placehold.co/32x32/A7F3D0/047857?text=J', comment: '꿈같은 허니문이었어요! 다음에 또 이용하고 싶어요.', createdAt: '2024-07-01' },
    ]
  },
  {
    id: 14,
    name: '참좋은여행',
    type: '민간',
    serviceType: '신혼여행',
    venueStyle: null,
    location: '서울시 중구',
    city: '서울시',
    address: '서울시 중구 서소문로 106',
    price: 3800000,
    image: 'https://placehold.co/600x400/f5a9d0/ffffff?text=Travel',
    isVerified: true,
    description: '합리적인 가격으로 즐기는 고품격 허니문, 참좋은여행과 함께하세요. 유럽, 동남아 등 인기 신혼여행지 상품을 다양하게 제공하며, 자유여행과 패키지여행의 장점을 결합한 세미-패키지 상품으로 만족도를 높였습니다.',
    reviews: []
  },
  // 디렉팅
  {
    id: 15,
    name: '더블유디렉팅',
    type: '민간',
    serviceType: '디렉팅',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 학동로 338',
    price: 3000000,
    image: 'https://placehold.co/600x400/c2a8d9/ffffff?text=Directing',
    isVerified: true,
    description: '더블유디렉팅은 신랑 신부님의 개성을 담은 맞춤 웨딩을 기획하고 연출합니다. 작은 디테일까지 놓치지 않는 섬세한 디렉팅으로 꿈꾸던 결혼식을 현실로 만들어 드립니다.',
    reviews: [
      { id: 1501, rating: 5, author: '김예신', authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=Y', comment: '정말 만족스러운 디렉팅이었어요! 덕분에 완벽한 결혼식을 올렸습니다.', createdAt: '2024-07-25' },
    ]
  },
  // 케이터링
  {
    id: 16,
    name: '파티오나인 케이터링',
    type: '민간',
    serviceType: '케이터링',
    venueStyle: null,
    location: '서울시 강남구',
    city: '서울시',
    address: '서울시 강남구 논현로 751',
    price: 1500000,
    image: 'https://placehold.co/600x400/a8d9c2/ffffff?text=Catering',
    isVerified: true,
    description: '파티오나인 케이터링은 최고급 식재료와 전문 셰프의 손길로 완성된 품격 있는 웨딩 케이터링을 제공합니다. 하객들의 입맛을 사로잡을 다채로운 메뉴와 아름다운 플레이팅으로 특별한 식사를 선사합니다.',
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
    authorId: 'user123', // 작성자 ID 추가
    title: '10월 서울, 100명 규모 스몰웨딩 스드메 구해요',
    type: '민간',
    serviceType: '스드메',
    location: '서울시 강남구',
    city: '서울시',
    budget: 3000000,
    author: '김예신',
    authorImage: 'https://placehold.co/256x256/FBCFE8/9D27B0?text=Y',
    createdAt: '2024-05-21',
    details: '따뜻하고 자연스러운 분위기의 스튜디오와 본식 스냅을 원합니다. 헤어/메이크업 포함 견적 부탁드려요.'
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
    details: '한강공원에서 소규모 야외 결혼식을 계획중입니다. 전체 디렉팅 및 케이터링 업체 추천 가능하신 분 찾아요.'
  },
  {
    id: 3,
    title: '부산, 200명 규모 호텔 웨딩홀 찾습니다',
    type: '민간',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '부산시 해운대구',
    city: '부산시',
    budget: 15000000,
    author: '부산커플',
    authorImage: 'https://placehold.co/32x32/BFDBFE/1D4ED8?text=B',
    createdAt: '2024-05-19',
    details: '해운대 근처 교통이 편리한 호텔 웨딩홀을 찾고 있습니다. 식대 포함 총 예산입니다.'
  },
  {
    id: 4,
    title: '제주도 신혼여행 항공권+숙소 문의',
    type: '민간',
    serviceType: '신혼여행',
    location: '제주도',
    city: '제주도',
    budget: 2500000,
    author: '허니문가자',
    authorImage: 'https://placehold.co/32x32/FED7AA/F97316?text=H',
    createdAt: '2024-05-22',
    details: '7월 초 출발, 4박 5일 일정입니다. 5성급 호텔과 항공권 포함된 견적 원해요.'
  },
  {
    id: 5,
    title: '소규모 웨딩 디렉팅 문의',
    type: '민간',
    serviceType: '디렉팅',
    location: '서울시 용산구',
    city: '서울시',
    budget: 3500000,
    author: '스몰웨딩꿈나무',
    authorImage: 'https://placehold.co/32x32/D1C4E9/673AB7?text=S',
    createdAt: '2024-05-23',
    details: '야외에서 진행되는 소규모 웨딩의 전체적인 디렉팅을 맡아주실 분을 찾습니다. 컨셉 기획부터 현장 총괄까지 가능하신 분이면 좋겠습니다.'
  },
  {
    id: 6,
    title: '하객 150명 출장 케이터링 견적 요청',
    type: '민간',
    serviceType: '케이터링',
    location: '서울시 강남구',
    city: '서울시',
    budget: 7000000,
    author: '미식가신부',
    authorImage: 'https://placehold.co/32x32/FFCCBC/FF5722?text=M',
    createdAt: '2024-05-24',
    details: '호텔 뷔페식 또는 코스 요리 가능한 출장 케이터링 업체를 찾습니다. 하객 150명 기준이며, 시식 가능 여부도 알려주세요.'
  },
];

export const mockReceivedProposals = [
  {
    id: 1,
    requestId: 1, // Links to mockRequests.id 1
    proposerName: '오브라마에스트라 스튜디오',
    proposerImage: 'https://placehold.co/32x32/F0B8C9/FFFFFF?text=O',
    message: '안녕하세요! 스드메 견적 요청 잘 보았습니다. 원하시는 분위기에 맞춰 최고의 스냅을 제공해 드릴 수 있습니다. 자세한 내용은 상담을 통해 안내해 드릴게요.',
    receivedAt: '2024-05-22',
    status: '새로운 제안',
    read: false,
  },
  {
    id: 2,
    requestId: 2, // Links to mockRequests.id 2
    proposerName: '더블유디렉팅',
    proposerImage: 'https://placehold.co/32x32/C2A8D9/FFFFFF?text=W',
    message: '한강공원 야외 결혼식 디렉팅 문의 주셨네요. 저희는 자연 친화적인 스몰 웨딩 전문입니다. 특별한 날을 위한 맞춤형 기획을 제안해 드립니다.',
    receivedAt: '2024-05-23',
    status: '새로운 제안',
    read: false,
  },
  {
    id: 3,
    requestId: 3, // Links to mockRequests.id 3
    proposerName: '엘리에나 호텔 웨딩',
    proposerImage: 'https://placehold.co/32x32/D9A8C5/FFFFFF?text=E',
    message: '부산 호텔 웨딩홀 문의 감사합니다. 200명 규모에 적합한 다양한 홀과 맞춤형 메뉴를 제안해 드립니다. 편하신 시간에 방문 상담 예약 부탁드립니다.',
    receivedAt: '2024-05-20',
    status: '확인 완료',
    read: true,
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
    content: '신혼여행지를 정해야 하는데 너무 고민돼요. 몰디브 같은 휴양지가 좋을까요, 아니면 유럽처럼 관광할 곳이 많은 곳이 좋을까요? 경험 있으신 분들 추천 부탁드립니다!',
    commentData: [
      {
        id: 301,
        author: '여행고수',
        authorImage: 'https://placehold.co/32x32/A7F3D0/047857?text=T',
        createdAt: '2024-07-26',
        content: '저는 몰디브 다녀왔는데 정말 좋았어요! 아무것도 안 하고 쉬는 게 최고더라고요. :)'
      },
      {
        id: 302,
        author: '유럽홀릭',
        authorImage: 'https://placehold.co/32x32/BFDBFE/1D4ED8?text=E',
        createdAt: '2024-07-26',
        content: '유럽은 신혼여행으로 정말 로맨틱해요! 파리나 로마 같은 곳은 볼거리도 많고 맛있는 것도 많아서 후회 안 하실 거예요.'
      }
    ]
  },
  {
    id: 2,
    title: '결혼 준비 체크리스트 공유합니다!',
    author: '준비왕',
    authorImage: 'https://placehold.co/32x32/FFCCBC/FF5722?text=J',
    createdAt: '2024-07-22',
    views: 350,
    likes: 40,
    comments: 20,
    category: '정보공유',
    content: '결혼 준비하면서 제가 직접 만든 체크리스트 공유합니다. 빠짐없이 준비하시고 행복한 결혼식 올리세요!.',
    commentData: [
      {
        id: 401,
        author: '초보예신',
        authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=C',
        createdAt: '2024-07-23',
        content: '우와, 정말 감사합니다! 이런 자료가 필요했는데 너무 도움이 될 것 같아요. 잘 쓰겠습니다!'
      }
    ]
  },
  {
    id: 3,
    title: '한복 대여 vs 맞춤 고민 중이에요',
    author: '한복고민',
    authorImage: 'https://placehold.co/32x32/D1C4E9/673AB7?text=H',
    createdAt: '2024-07-20',
    views: 80,
    likes: 10,
    comments: 3,
    category: '질문과답변',
    content: '혼주 한복을 대여할지 맞춤으로 할지 고민 중입니다. 어떤 게 더 합리적일까요? 장단점 알려주시면 감사하겠습니다.',
    commentData: [
      {
        id: 501,
        author: '한복전문가',
        authorImage: 'https://placehold.co/32x32/C8E6C9/4CAF50?text=H',
        createdAt: '2024-07-21',
        content: '대여는 비용이 저렴하고 다양한 디자인을 입어볼 수 있다는 장점이 있지만, 맞춤은 몸에 딱 맞고 소장할 수 있다는 장점이 있어요. 예산과 활용도를 고려해서 결정하시면 좋을 것 같아요.'
      }
    ]
  },
];