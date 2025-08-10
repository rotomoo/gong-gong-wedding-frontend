import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

function VerifiedBadge({ isVerified, className = '' }) {
  if (!isVerified) {
    return null;
  }

  return (
    <div className={`flex items-center text-success font-semibold ${className}`}>
      <ShieldCheckIcon className="h-5 w-5 mr-1" />
      <span>기관 인증</span>
    </div>
  );
}

export default VerifiedBadge;
