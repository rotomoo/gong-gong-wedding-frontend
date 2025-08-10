import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

const allCategories = ['자유게시판', '정보공유', '질문과답변'];

function CommunityWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(allCategories[0]);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 애플리케이션에서는 여기에 게시글을 서버로 전송하는 로직이 들어갑니다.
    // 여기서는 간단히 콘솔에 출력하고 목록 페이지로 돌아갑니다.
    console.log({
      title,
      category,
      content,
      author: '새로운 작성자', // 실제 사용자 정보로 대체해야 합니다.
      authorImage: 'https://placehold.co/32x32/CCCCCC/FFFFFF?text=N', // 기본 이미지
      createdAt: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
      views: 0,
      likes: 0,
      comments: 0,
    });
    alert('게시글이 성공적으로 작성되었습니다! (실제 저장되지는 않습니다.)');
    navigate('/community');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">새 게시글 작성</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">커뮤니티에 새로운 이야기를 공유해보세요.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-base-100 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="category" className="text-lg font-semibold">카테고리</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered w-full mt-2"
              required
            >
              {allCategories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="title" className="text-lg font-semibold">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요."
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="text-lg font-semibold">내용</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="게시글 내용을 작성해주세요."
              className="textarea textarea-bordered w-full mt-2" rows="10"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            <PlusCircleIcon className="h-5 w-5 mr-2" />
            게시글 작성
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommunityWritePage;
