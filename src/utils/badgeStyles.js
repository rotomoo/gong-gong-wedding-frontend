export const getServiceTypeBadgeColor = (serviceType) => {
  switch (serviceType) {
    case '웨딩 베뉴':
      return 'badge-success';
    case '스드메':
      return 'badge-warning';
    case '플래너':
      return 'badge-info';
    case '혼주':
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
