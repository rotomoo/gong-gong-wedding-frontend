export const getServiceTypeBadgeColor = (serviceType) => {
  switch (serviceType) {
    case '웨딩 베뉴':
      return 'badge-success';
    case '스드메':
    case '스튜디오':
    case '드레스':
    case '메이크업':
      return 'badge-warning';
    case '플래너':
      return 'badge-info';
    case '혼주':
    case '한복':
    case '예복':
      return 'badge-accent';
    case '신혼여행':
      return 'badge-primary';
    default:
      return 'badge-neutral';
  }
};

export const getVenueStyleBadgeColor = (venueStyle) => {
  switch (venueStyle) {
    case '실내':
      return 'badge-info';
    case '야외':
      return 'badge-success';
    default:
      return 'badge-ghost';
  }
};

export const getTypeBadgeColor = (type) => {
  switch (type) {
    case '공공':
      return 'badge-accent';
    case '민간':
      return 'badge-neutral';
    default:
      return 'badge-ghost';
  }
};

export const getDetailBadgeColor = (subCategory) => {
  // Using a simple hash function to get a color from a predefined list
  // This provides some variety without needing to define every single subCategory
  const colors = ['badge-primary', 'badge-secondary', 'badge-accent', 'badge-info', 'badge-ghost'];
  if (!subCategory) return colors[4];
  
  let hash = 0;
  for (let i = 0; i < subCategory.length; i++) {
    hash = subCategory.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
};
