import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';
import { weddingHalls } from '../data/mockData';

function ReviewFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = weddingHalls.find(item => item.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);

  if (!service) {
    return <div className="container mx-auto p-4 text-center">서비스를 찾을 수 없습니다.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    }

    const newReview = {
      id: Date.now(), // Simple unique ID
      rating,
      author: '현재 사용자', // 실제 사용자 정보로 대체해야 합니다.
      authorImage: 'https://placehold.co/32x32/CCCCCC/FFFFFF?text=U', // 기본 이미지
      comment,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    // In a real application, you would send this to a backend API.
    // For this prototype, we'll just log it and navigate back.
    console.log('New Review:', newReview);
    alert('리뷰가 성공적으로 작성되었습니다! (현재는 프로토타입으로, 실제 저장되지는 않습니다.)');
    navigate(`/service/${service.id}`);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">리뷰 작성</h1>
          <p className="mt-4 text-lg text-gray-500">'{service.name}' 서비스에 대한 솔직한 리뷰를 남겨주세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-base-100 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="text-lg font-semibold mb-2 block">별점</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-10 w-10 cursor-pointer ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="text-lg font-semibold">리뷰 내용</label>
            <textarea
              id="comment"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="서비스에 대한 경험을 자세히 작성해주세요."
              className="textarea textarea-bordered w-full mt-2" rows="8"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">리뷰 제출</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewFormPage;
