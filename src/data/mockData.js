const initialWeddingHalls = [
  // --- 공공 웨딩 베뉴 ---
  {
    id: 1,
    name: '북서울꿈의숲',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 강북구',
    city: '서울시',
    address: '서울시 강북구 월계로 173',
    price: 0,
    image: '/북서울1.png',
    gallery: [
      '/북서울1.png',
      '/북서울2.jpg',
      '/북서울3.jpg',
      '/북서울4.jpg'
    ],
    isVerified: true,
    description: '아름다운 자연과 함께 특별한 결혼식을 올릴 수 있는 서울시의 공공 예식장입니다. 창녕위궁재사와 같은 전통 한옥을 배경으로 하거나 공원의 넓은 잔디밭을 활용하여 결혼식을 올릴 수 있습니다.',
    includedItems: ['야외 예식 공간 대관', '주차 공간'],
    vendorInfo: { name: '북서울꿈의숲', phone: '02-2289-5401' },
    reviews: []
  },
  {
    id: 24,
    name: '시민청',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 중구',
    city: '서울시',
    address: '서울시 중구 세종대로 110',
    price: 66000,
    image: '/시민청1.jpg',
    gallery: [
      '/시민청1.jpg',
      '/시민청2.jpg',
      '/시민청3.jpg',
    ],
    isVerified: true,
    description: '서울시청 지하에 위치한 시민청은 \'나만의 작은 결혼식\'을 올릴 수 있는 특별한 공간입니다. 정해진 틀에서 벗어나 부부가 원하는 콘셉트로 공간을 직접 꾸밀 수 있습니다.',
    includedItems: ['기본 대관 (4시간)', '기본 음향 및 조명', '신부대기실'],
    vendorInfo: { name: '시민청', phone: '02-739-7332' },
    reviews: []
  },
  {
    id: 25,
    name: '양재시민의 숲',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 서초구',
    city: '서울시',
    address: '서울시 서초구 매헌로 99',
    price: 0,
    image: '/양재시민의숲1.jpg',
    gallery: [
      '/양재시민의숲1.jpg',
      '/양재시민의숲2.jpg',
    ],
    isVerified: true,
    description: '푸르른 나무와 잔디밭이 어우러진 숲 속에서 올리는 특별한 야외 결혼식. 자연 친화적인 분위기에서 영화같은 결혼식을 꿈꾸는 분들께 추천합니다.',
    includedItems: ['야외 예식 공간 대관', '주차 공간'],
    vendorInfo: { name: '양재시민의 숲 공원관리사무소', phone: '02-575-3895' },
    reviews: []
  },
  {
    id: 26,
    name: '남산골한옥마을',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '한옥',
    location: '서울시 중구',
    city: '서울시',
    address: '서울시 중구 퇴계로34길 28',
    price: 900000,
    image: '/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg',
    gallery: [
      '/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg',
      '/bin-thieu-RjZQ3M3bGxQ-unsplash.jpg',
      '/bruno-cervera-ZpNBwBR38fA-unsplash.jpg',
      '/danielle-gehler-tBEr7mPJ_HM-unsplash.jpg'
    ],
    isVerified: true,
    description: '고즈넉한 한옥을 배경으로 한국의 전통미가 깃든 혼례를 올릴 수 있습니다. 특별하고 의미있는 전통혼례를 원하는 분들께 최고의 장소가 될 것입니다.',
    includedItems: ['전통혼례 공간 대관', '혼례복 및 소품', '집례 및 수모'],
    vendorInfo: { name: '남산골한옥마을', phone: '02-2261-0517' },
    reviews: []
  },
  {
    id: 27,
    name: '서울여성플라자',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 동작구',
    city: '서울시',
    address: '서울시 동작구 여의대방로54길 20',
    price: 150000,
    image: '/evelina-friman-hw_sKmjb0ns-unsplash.jpg',
    gallery: [
      '/evelina-friman-hw_sKmjb0ns-unsplash.jpg',
      '/jason-leung-fXAuCMEYGY4-unsplash.jpg',
      '/jazmin-quaynor-8ioenvmof-I-unsplash.jpg',
      '/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg'
    ],
    isVerified: true,
    description: '모던하고 우아한 분위기의 실내 예식 공간입니다. 넉넉한 예식 시간과 높은 천고, 최신 시설을 갖추고 있어 품격있는 결혼식을 진행할 수 있습니다.',
    includedItems: ['실내 예식홀 대관 (1시간 30분)', '음향 및 조명', '대형 LED 스크린'],
    vendorInfo: { name: '서울여성플라자', phone: '02-812-5015' },
    reviews: []
  },
  {
    id: 28,
    name: '월드컵공원',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 마포구',
    city: '서울시',
    address: '서울시 마포구 하늘공원로 84',
    price: 0,
    image: '/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg',
    gallery: [
      '/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg',
      '/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg',
      '/junior-reis-zKaTW0Jv4jM-unsplash.jpg',
      '/kerri-shaver-xepikEyPgmI-unsplash.jpg'
    ],
    isVerified: true,
    description: '넓게 펼쳐진 공원의 자연 속에서 자유로운 분위기의 야외 결혼식을 올릴 수 있습니다. 대규모 하객 초대가 가능하며, 주차 공간이 넉넉합니다.',
    includedItems: ['야외 예식 공간 대관'],
    vendorInfo: { name: '월드컵공원', phone: '02-300-5542' },
    reviews: []
  },
  {
    id: 29,
    name: '서울시립대학교',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 동대문구',
    city: '서울시',
    address: '서울시 동대문구 서울시립대로 163',
    price: 50000,
    image: '/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg',
    gallery: [
      '/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg',
      '/marc-a-sporys-NO8Sj4dKE8k-unsplash.jpg',
      '/matthew-essman-jTnipV64uLo-unsplash.jpg',
      '/mel-BN0HcaBdPug-unsplash.jpg'
    ],
    isVerified: true,
    description: '서울시립대학교 캠퍼스 내에 위치한 예식 공간입니다. 저렴한 대관료로 실속있는 결혼식을 준비할 수 있습니다. (시간당 50,000원)',
    includedItems: ['예식홀 대관'],
    vendorInfo: { name: '서울시립대학교', phone: '02-6490-6417' },
    reviews: []
  },
  {
    id: 30,
    name: '성북구청',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 성북구',
    city: '서울시',
    address: '서울시 성북구 보문로 168',
    price: 0,
    image: '/micheile-henderson-KWHoxdn1IUE-unsplash.jpg',
    gallery: [
      '/micheile-henderson-KWHoxdn1IUE-unsplash.jpg',
      '/nathan-dumlao-w5hhoYM_JsU-unsplash.jpg',
      '/nick-karvounis-8WODX7nO2JE-unsplash.jpg',
      '/nils-stahl-BCkLxilDvJU-unsplash.jpg'
    ],
    isVerified: true,
    description: '성북구청 내에 마련된 대강당을 예식 공간으로 활용할 수 있습니다. 무료로 대관이 가능하여 결혼 비용을 크게 절약할 수 있습니다.',
    includedItems: ['대강당 대관'],
    vendorInfo: { name: '성북구청 총무과', phone: '02-2241-2582' },
    reviews: []
  },
  {
    id: 31,
    name: '강북문화예술회관',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 강북구',
    city: '서울시',
    address: '서울시 강북구 삼각산로 85',
    price: 110000,
    image: '/photos-by-lanty-O38Id_cyV4M-unsplash.jpg',
    gallery: [
      '/photos-by-lanty-O38Id_cyV4M-unsplash.jpg',
      '/photos-by-lanty-PeEH0wnO0kM-unsplash.jpg',
      '/samantha-gades-x40Q9jrEVT0-unsplash.jpg',
      '/sandy-millar-8vaQKYnawHw-unsplash.jpg'
    ],
    isVerified: true,
    description: '전문 공연장으로 설계된 공간에서 특별한 결혼식을 올릴 수 있습니다. 뛰어난 음향과 조명 시설을 활용하여 한 편의 공연같은 예식을 연출할 수 있습니다.',
    includedItems: ['공연장 대관', '기본 음향 및 조명'],
    vendorInfo: { name: '강북문화예술회관', phone: '02-944-3068' },
    reviews: []
  },
  {
    id: 32,
    name: '관악문화예절원',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '한옥',
    location: '서울시 관악구',
    city: '서울시',
    address: '서울시 관악구 남부순환로 1719-15',
    price: 900000,
    image: '/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg',
    gallery: [
      '/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg',
      '/thomas-william-OAVqa8hQvWI-unsplash.jpg',
      '/vitor-monthay-JL2n-GWXCJo-unsplash.jpg',
      '/yohann-libot-GFjNDSSYIA4-unsplash.jpg'
    ],
    isVerified: true,
    description: '아름다운 전통 한옥에서 격식있는 전통혼례를 진행할 수 있는 공간입니다. 남산골한옥마을과 유사한 콘셉트의 전통 예식을 올릴 수 있습니다.',
    includedItems: ['전통혼례 공간 대관', '혼례 관련 집기'],
    vendorInfo: { name: '관악문화예절원', phone: '02-885-6145' },
    reviews: []
  },
  {
    id: 33,
    name: '한강사업본부 여의도 물빛무대',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 영등포구',
    city: '서울시',
    address: '서울시 영등포구 여의동로 330',
    price: 0,
    image: '/zane-persaud-r3XxZj-J4uQ-unsplash.jpg',
    gallery: [
      '/zane-persaud-r3XxZj-J4uQ-unsplash.jpg',
      '/alex-padurariu-Hoo9-pSSsKA-unsplash.jpg',
      '/alexandra-gornago-o2zFDffQnDM-unsplash.jpg',
      '/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg'
    ],
    isVerified: true,
    description: '한강의 아름다운 경치를 배경으로 낭만적인 결혼식을 올릴 수 있는 특별한 수상 무대입니다. 해질녘 노을과 함께하는 예식이 특히 아름답습니다.',
    includedItems: ['물빛무대 공간 대관'],
    vendorInfo: { name: '한강사업본부', phone: '02-3780-0799' },
    reviews: []
  },
  {
    id: 34,
    name: '서울시 인재개발원',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 서초구',
    city: '서울시',
    address: '서울시 서초구 남부순환로340길 58',
    price: 200000,
    image: '/anna-vi-QUi84upBhoc-unsplash.jpg',
    gallery: [
      '/anna-vi-QUi84upBhoc-unsplash.jpg',
      '/annie-spratt-OWq8w3BYMFY-unsplash.jpg',
      '/annie-spratt-TQSB-suJu1k-unsplash.jpg',
      '/aranprime-XRzUf1SGWEI-unsplash.jpg'
    ],
    isVerified: true,
    description: '우면산의 수려한 자연경관을 배경으로 특별한 결혼식을 올릴 수 있는 공공 예식 공간입니다. 저렴한 비용으로 프라이빗한 예식을 원하는 예비부부들에게 인기가 높습니다.',
    includedItems: ['예식홀 대관', '신부대기실', '폐백실'],
    vendorInfo: { name: '서울시 인재개발원', phone: '02-3488-2051' },
    reviews: []
  },
  {
    id: 35,
    name: '서울연구원',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 서초구',
    city: '서울시',
    address: '서울시 서초구 남부순환로340길 57',
    price: 0,
    image: '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
    gallery: [
      '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
      '/bin-thieu-RjZQ3M3bGxQ-unsplash.jpg',
      '/bruno-cervera-ZpNBwBR38fA-unsplash.jpg',
      '/danielle-gehler-tBEr7mPJ_HM-unsplash.jpg'
    ],
    isVerified: true,
    description: '푸른 잔디가 깔린 뒤뜰을 야외 결혼식장으로 제공하여, 도심 속에서 특별하고 의미있는 작은 결혼식을 올릴 수 있습니다. 우천 시에는 1층 로비를 활용할 수 있습니다.',
    includedItems: ['야외 공간 대관'],
    vendorInfo: { name: '서울연구원', phone: '02-2149-1234' },
    reviews: []
  },
  {
    id: 36,
    name: '서울시립미술관',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '야외',
    location: '서울시 중구',
    city: '서울시',
    address: '서울시 중구 덕수궁길 61',
    price: 189170,
    image: '/eric-alves-divFrH3p6nc-unsplash.jpg',
    gallery: [
      '/eric-alves-divFrH3p6nc-unsplash.jpg',
      '/evelina-friman-hw_sKmjb0ns-unsplash.jpg',
      '/jason-leung-fXAuCMEYGY4-unsplash.jpg',
      '/jazmin-quaynor-8ioenvmof-I-unsplash.jpg'
    ],
    isVerified: true,
    description: '미술관의 현대적인 건축물과 야외 조각 공원이 어우러져 독특하고 세련된 분위기의 결혼식을 연출할 수 있습니다. 예술과 자연이 공존하는 특별한 공간입니다.',
    includedItems: ['야외 공간 대관'],
    vendorInfo: { name: '서울시립미술관', phone: '02-2124-8828' },
    reviews: []
  },
  {
    id: 37,
    name: '금천구청',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 금천구',
    city: '서울시',
    address: '서울시 금천구 시흥대로73길 70',
    price: 334000,
    image: '/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg',
    gallery: [
      '/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg',
      '/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg',
      '/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg',
      '/junior-reis-zKaTW0Jv4jM-unsplash.jpg'
    ],
    isVerified: true,
    description: '금천구청 대강당을 예식장으로 이용할 수 있습니다. 2시간 기준 저렴한 비용으로 실속있는 예식을 준비할 수 있습니다.',
    includedItems: ['대강당 대관 (2시간)'],
    vendorInfo: { name: '금천구청', phone: '02-2627-1417' },
    reviews: []
  },
  {
    id: 38,
    name: '서대문구청',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 서대문구',
    city: '서울시',
    address: '서울시 서대문구 연희로 247',
    price: 40000,
    image: '/kerri-shaver-xepikEyPgmI-unsplash.jpg',
    gallery: [
      '/kerri-shaver-xepikEyPgmI-unsplash.jpg',
      '/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg',
      '/marc-a-sporys-NO8Sj4dKE8k-unsplash.jpg',
      '/matthew-essman-jTnipV64uLo-unsplash.jpg'
    ],
    isVerified: true,
    description: '서대문구청의 대강당을 예식 공간으로 제공합니다. 매우 저렴한 대관료로 400명의 하객을 수용할 수 있는 넓은 공간을 이용할 수 있습니다.',
    includedItems: ['대강당 대관'],
    vendorInfo: { name: '서대문구청', phone: '02-330-1060' },
    reviews: []
  },
  {
    id: 39,
    name: '양천문화회관',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '실내',
    location: '서울시 양천구',
    city: '서울시',
    address: '서울시 양천구 목동서로 367',
    price: 70000,
    image: '/mel-BN0HcaBdPug-unsplash.jpg',
    gallery: [
      '/mel-BN0HcaBdPug-unsplash.jpg',
      '/micheile-henderson-KWHoxdn1IUE-unsplash.jpg',
      '/nathan-dumlao-w5hhoYM_JsU-unsplash.jpg',
      '/nick-karvounis-8WODX7nO2JE-unsplash.jpg'
    ],
    isVerified: true,
    description: '양천구의 대표적인 문화 공간인 문화회관에서 결혼식을 올릴 수 있습니다. 300명을 수용할 수 있는 넓은 공간을 저렴하게 대관할 수 있습니다.',
    includedItems: ['대강당 대관'],
    vendorInfo: { name: '양천구시설관리공단', phone: '02-2646-5115' },
    reviews: []
  },
  {
    id: 40,
    name: '광흥당',
    type: '공공',
    serviceType: '웨딩 베뉴',
    venueStyle: '한옥',
    location: '서울시 마포구',
    city: '서울시',
    address: '서울시 마포구 토정로 118',
    price: 300000,
    image: '/nils-stahl-BCkLxilDvJU-unsplash.jpg',
    gallery: [
      '/nils-stahl-BCkLxilDvJU-unsplash.jpg',
      '/photos-by-lanty-O38Id_cyV4M-unsplash.jpg',
      '/photos-by-lanty-PeEH0wnO0kM-unsplash.jpg',
      '/samantha-gades-x40Q9jrEVT0-unsplash.jpg'
    ],
    isVerified: true,
    description: '조선시대의 역사를 간직한 광흥당에서 특별한 전통 혼례를 경험할 수 있습니다. 소규모 하객과 함께하는 의미있는 예식에 적합합니다.',
    includedItems: ['한옥 공간 대관'],
    vendorInfo: { name: '마포문화원', phone: '02-312-1100' },
    reviews: []
  },

  // --- 민간 웨딩 베뉴 ---
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
    image: '/엘리에나1.jpg',
    gallery: [
      '/엘리에나1.jpg',
      '/엘리에나2.jpg',
      '/엘리에나3.jpg',
    ],
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
    image: '/sandy-millar-8vaQKYnawHw-unsplash.jpg',
    gallery: [
      '/sandy-millar-8vaQKYnawHw-unsplash.jpg',
      '/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg',
      '/thomas-william-OAVqa8hQvWI-unsplash.jpg',
      '/vitor-monthay-JL2n-GWXCJo-unsplash.jpg'
    ],
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
    image: '/yohann-libot-GFjNDSSYIA4-unsplash.jpg',
    gallery: [
      '/yohann-libot-GFjNDSSYIA4-unsplash.jpg',
      '/zane-persaud-r3XxZj-J4uQ-unsplash.jpg',
      '/alex-padurariu-Hoo9-pSSsKA-unsplash.jpg',
      '/alexandra-gornago-o2zFDffQnDM-unsplash.jpg'
    ],
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
    image: '/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg',
    gallery: [
      '/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg',
      '/anna-vi-QUi84upBhoc-unsplash.jpg',
      '/annie-spratt-OWq8w3BYMFY-unsplash.jpg',
      '/aranprime-XRzUf1SGWEI-unsplash.jpg'
    ],
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
    image: '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
    gallery: [
      '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
      '/bin-thieu-RjZQ3M3bGxQ-unsplash.jpg',
      '/bruno-cervera-ZpNBwBR38fA-unsplash.jpg',
      '/danielle-gehler-tBEr7mPJ_HM-unsplash.jpg'
    ],
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
    image: '/eric-alves-divFrH3p6nc-unsplash.jpg',
    gallery: [
      '/eric-alves-divFrH3p6nc-unsplash.jpg',
      '/evelina-friman-hw_sKmjb0ns-unsplash.jpg',
      '/jason-leung-fXAuCMEYGY4-unsplash.jpg',
      '/jazmin-quaynor-8ioenvmof-I-unsplash.jpg'
    ],
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
    image: '/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg',
    gallery: [
      '/jeremy-wong-weddings-464ps_nOflw-unsplash.jpg',
      '/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg',
      '/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg',
      '/junior-reis-zKaTW0Jv4jM-unsplash.jpg'
    ],
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
    image: '/kerri-shaver-xepikEyPgmI-unsplash.jpg',
    gallery: [
      '/kerri-shaver-xepikEyPgmI-unsplash.jpg',
      '/luigi-pozzoli-jZrfY30y6Kc-unsplash.jpg',
      '/marc-a-sporys-NO8Sj4dKE8k-unsplash.jpg',
      '/matthew-essman-jTnipV64uLo-unsplash.jpg'
    ],
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
    image: '/mel-BN0HcaBdPug-unsplash.jpg',
    gallery: [
      '/mel-BN0HcaBdPug-unsplash.jpg',
      '/micheile-henderson-KWHoxdn1IUE-unsplash.jpg',
      '/nathan-dumlao-w5hhoYM_JsU-unsplash.jpg',
      '/nick-karvounis-8WODX7nO2JE-unsplash.jpg'
    ],
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
    image: '/nils-stahl-BCkLxilDvJU-unsplash.jpg',
    gallery: [
      '/nils-stahl-BCkLxilDvJU-unsplash.jpg',
      '/photos-by-lanty-O38Id_cyV4M-unsplash.jpg',
      '/photos-by-lanty-PeEH0wnO0kM-unsplash.jpg',
      '/samantha-gades-x40Q9jrEVT0-unsplash.jpg'
    ],
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
    image: '/sandy-millar-8vaQKYnawHw-unsplash.jpg',
    gallery: [
      '/sandy-millar-8vaQKYnawHw-unsplash.jpg',
      '/shardayyy-photography-fJzmPe-a0eU-unsplash.jpg',
      '/thomas-william-OAVqa8hQvWI-unsplash.jpg',
      '/vitor-monthay-JL2n-GWXCJo-unsplash.jpg'
    ],
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
    image: '/yohann-libot-GFjNDSSYIA4-unsplash.jpg',
    gallery: [
      '/yohann-libot-GFjNDSSYIA4-unsplash.jpg',
      '/zane-persaud-r3XxZj-J4uQ-unsplash.jpg',
      '/alex-padurariu-Hoo9-pSSsKA-unsplash.jpg',
      '/alexandra-gornago-o2zFDffQnDM-unsplash.jpg'
    ],
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
    image: '/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg',
    gallery: [
      '/alvin-mahmudov-NSVJAAXOYHs-unsplash.jpg',
      '/anna-vi-QUi84upBhoc-unsplash.jpg',
      '/annie-spratt-OWq8w3BYMFY-unsplash.jpg',
      '/aranprime-XRzUf1SGWEI-unsplash.jpg'
    ],
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
    image: '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
    gallery: [
      '/arshad-pooloo-GdwWrLHdwpw-unsplash.jpg',
      '/bin-thieu-RjZQ3M3bGxQ-unsplash.jpg',
      '/bruno-cervera-ZpNBwBR38fA-unsplash.jpg',
      '/danielle-gehler-tBEr7mPJ_HM-unsplash.jpg'
    ],
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
    image: '/eric-alves-divFrH3p6nc-unsplash.jpg',
    gallery: [
      '/eric-alves-divFrH3p6nc-unsplash.jpg',
      '/evelina-friman-hw_sKmjb0ns-unsplash.jpg',
      '/jason-leung-fXAuCMEYGY4-unsplash.jpg',
      '/jazmin-quaynor-8ioenvmof-I-unsplash.jpg'
    ],
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
    id: 5,
    title: '[필독] 결혼준비 A to Z: 웨딩홀 선택부터 체크리스트까지 완벽 가이드 💍',
    author: '웨딩요정',
    authorImage: 'https://placehold.co/32x32/E9D5FF/9333EA?text=W',
    createdAt: '2024-08-10',
    views: 550,
    likes: 78,
    comments: 12,
    category: '정보공유',
    content: `
안녕하세요, 예비 신랑신부님! 막상 결혼 준비를 시작하려니 뭐부터 해야 할지 막막하시죠? 걱정 마세요! 제가 A부터 Z까지 꼼꼼하게 정리한 결혼 준비 완벽 가이드를 공유해 드릴게요. 이것만 따라오시면 놓치는 것 없이 완벽한 웨딩데이를 맞이할 수 있을 거예요!

### **PART 1. 결혼 준비 전체 타임라인 & 체크리스트**

결혼 준비는 보통 6개월에서 1년 정도의 기간을 잡고 진행해요. 아래 타임라인을 참고해서 우리만의 체크리스트를 만들어보세요!

**D-180 (6개월 전): 큰 그림 그리기**
- [ ] 양가 부모님께 인사 및 결혼 허락받기
- [ ] 결혼 날짜 및 예산 대략적으로 정하기
- [ ] 웨딩 플래너 계약 또는 셀프 플래닝 결정하기
- [ ] **웨딩홀 투어 시작 및 계약 (가장 중요! ⭐)**

**D-120 (4개월 전): 스드메 결정**
- [ ] 스튜디오, 드레스, 메이크업 (스드메) 업체 알아보기 및 계약
- [ ] 웨딩 촬영 날짜 정하기
- [ ] 신혼여행지 결정 및 예약

**D-90 (3개월 전): 디테일 채우기**
- [ ] 본식 스냅, DVD, 사회자, 주례, 축가 등 섭외
- [ ] 한복 및 예복 맞춤/대여
- [ ] 웨딩 촬영 진행

**D-60 (2개월 전): 소식 전하기**
- [ ] 청첩장 제작 및 발송
- [ ] 예물 및 예단 준비
- [ ] 신혼집 계약 및 인테리어 알아보기

**D-30 (1개월 전): 최종 점검**
- [ ] 웨딩홀 시식 및 최종 인원 체크
- [ ] 신혼여행 준비물 챙기기
- [ ] 부모님 및 하객 선물(답례품) 준비

**D-7 (1주일 전): 컨디션 조절**
- [ ] 최종 준비물 확인 (결혼반지, 예복, 축의금 가방 등)
- [ ] 피부 관리 및 충분한 휴식

---


### **PART 2. 웨딩홀 선택, 이것만은 알고 가자!**

웨딩홀은 결혼 준비의 \'꽃\'이자 가장 큰 비용이 드는 항목이에요. 그만큼 신중하게 선택해야겠죠?

**STEP 1. 기본 정보 정하기**
- **예상 하객 수:** 보증 인원을 정해야 웨딩홀 타입을 정할 수 있어요.
- **예식 지역:** 양가 하객들의 접근성을 고려하여 1~3개 지역을 정해보세요.
- **예식 형태:** 일반 예식, 호텔, 컨벤션, 하우스 웨딩, 야외 웨딩 등 원하는 스타일을 정하세요.
- **식사 메뉴:** 뷔페, 한정식, 양식 코스 등 선호하는 메뉴를 생각해보세요.

**STEP 2. 웨딩홀 투어 & 체크리스트**
마음에 드는 웨딩홀 3~4곳을 정해 투어를 떠나세요! 투어 시 아래 항목들은 꼭 확인해야 해요.

**✅ 필수 체크리스트**
1.  **홀 분위기 & 동선:**
    - 홀의 천고, 버진로드 길이, 전체적인 인테리어는 마음에 드는가?
    - 신부대기실은 쾌적하고 예쁜가? (하객들이 사진 많이 찍는 곳!)
    - 홀, 신부대기실, 폐백실, 연회장의 동선이 너무 복잡하지는 않은가?
2.  **비용 관련:**
    - 홀 대관료와 식대는 얼마인가? (보증인원, 비수기/성수기, 시간대별로 다름)
    - 필수/선택 추가 옵션은 무엇인가? (꽃장식, 연출비, 수모비 등)
    - **당일 계약 혜택**이나 **할인 프로모션**이 있는지 꼭 물어보기!
3.  **식사 & 주차:**
    - 식사는 맛있다는 평이 많은가? (시식 가능 여부 확인)
    - 연회장은 쾌적하고 좌석은 충분한가?
    - 주차 공간은 넉넉한가? 하객 무료 주차 시간은?

**STEP 3. 최종 계약**
모든 조건을 꼼꼼히 비교해보고 최종 결정을 내렸다면 계약서를 작성합니다. 계약서의 모든 조항을 꼼꼼히 읽어보고, 구두로 협의된 내용(서비스 항목 등)이 명시되었는지 반드시 확인하세요!

이 가이드가 여러분의 결혼 준비에 조금이나마 도움이 되었으면 좋겠습니다. 궁금한 점은 언제든지 댓글로 물어봐주세요! 😊
`,
    commentData: []
  },
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
      {
        id: 302,
        author: '관광파',
        authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=K',
        createdAt: '2024-07-27',
        content: '한 번 가는 신혼여행, 이왕이면 여러 곳 둘러보는 게 좋지 않을까요? 저희는 이탈리아 다녀왔는데 정말 만족했습니다.'
      }
    ]
  },
  {
    id: 2,
    title: '[꿀팁] 부모님 도움 없이 결혼 준비 예산 짜는 법',
    author: '현실적인예신',
    authorImage: 'https://placehold.co/32x32/FECACA/B91C1C?text=Y',
    createdAt: '2024-07-22',
    views: 152,
    likes: 15,
    comments: 3,
    category: '정보공유',
    content: '결혼 준비의 시작은 예산 짜기! 저희는 부모님 도움 없이 저희 힘으로만 진행해서 엑셀로 정말 꼼꼼하게 정리했어요. 스드메, 예식장, 신혼여행 등 큰 돈 들어가는 것부터 답례품, 청첩장 같은 자잘한 비용까지 항목별로 정리하고 예상/실제 비용을 비교해가면서 하니까 예산 초과도 막고 좋더라고요. 파일 공유 원하시는 분 계시면 댓글 주세요!',
    commentData: [
      {
        id: 401,
        author: '궁금해요',
        authorImage: 'https://placehold.co/32x32/FED7AA/D97706?text=Q',
        createdAt: '2024-07-23',
        content: '와 저도 막막했는데 정말 대단하세요! 저도 파일 받아볼 수 있을까요?'
      },
    ]
  },
  {
    id: 3,
    title: '결혼 준비하면서 제일 힘든 점이 뭔가요?',
    author: '예비신부',
    authorImage: 'https://placehold.co/32x32/D1D5DB/4B5563?text=P',
    createdAt: '2024-07-18',
    views: 276,
    likes: 22,
    comments: 10,
    category: '자유게시판',
    content: '결혼 준비가 이렇게 힘든 건지 몰랐어요... 저는 신랑이랑 의견 조율하는 게 제일 힘드네요 ㅠㅠ 다른 분들은 어떤 점이 제일 힘드셨나요? 다들 어떻게 해결하셨는지 궁금해요.',
    commentData: []
  },
  {
    id: 4,
    title: '다들 답례품 뭐 하셨어요? 추천 좀 해주세요!',
    author: '선물고민중',
    authorImage: 'https://placehold.co/32x32/FBCFE8/9D27B0?text=S',
    createdAt: '2024-07-15',
    views: 180,
    likes: 18,
    comments: 7,
    category: '자유게시판',
    content: '결혼식 와주시는 분들께 드릴 답례품 고르는게 은근 어렵네요. 너무 비싸지 않으면서도 센스있는 선물 뭐가 있을까요? 소금, 꿀, 쿠키 같은 기본적인 것들 말고 좀 특별한 아이디어 있을까요? 다들 뭐 하셨는지 궁금해요!',
    commentData: []
  }
];
