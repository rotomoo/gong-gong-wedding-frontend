import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mockCommunityPosts } from '../data/mockData';
import { PlusCircleIcon, XMarkIcon, ChevronDownIcon, EyeIcon, HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

const allCategories = ['전체', '자유게시판', '정보공유', '질문과답변'];

function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: [],
  });
  const [sortBy, setSortBy] = useState('latest'); // latest, views, likes

  const handleMultiSelectFilter = (filterName, value) => {
    setFilters(prev => {
      const currentValues = prev[filterName];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [filterName]: newValues };
    });
  };

  const resetFilters = () => {
    setFilters({ category: [] });
    setSearchTerm('');
    setSortBy('latest');
  };

  const filteredAndSortedPosts = useMemo(() => {
    let result = mockCommunityPosts
      .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter(post => filters.category.length === 0 || filters.category.includes(post.category));

    result.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'likes') return b.likes - a.likes;
      return 0;
    });

    return result;
  }, [searchTerm, filters, sortBy]);

  const FilterDropdown = ({ title, options, selected, onSelect }) => (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-sm md:btn-md normal-case font-medium">
        {title} <ChevronDownIcon className="h-4 w-4 ml-1" />
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60">
        {options.map(option => (
          <li key={option} onClick={() => onSelect(option)}>
            <label className="label cursor-pointer">
              <span className="label-text">{option}</span> 
              <input type="checkbox" checked={selected.includes(option)} className="checkbox checkbox-primary checkbox-sm" readOnly />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">커뮤니티</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">결혼 준비에 대한 다양한 이야기를 나누고 정보를 공유하세요.</p>
        </div>

        {/* Filters */}
        <div className="card bg-base-100 border border-gray-200 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1">
                <FilterDropdown title="카테고리" options={allCategories} selected={filters.category} onSelect={(val) => handleMultiSelectFilter('category', val)} />
              </div>
              <Link to="/community/write" className="btn btn-primary btn-sm md:btn-md">
                <PlusCircleIcon className="h-5 w-5 mr-1" />
                글쓰기
              </Link>
            </div>
            { filters.category.length > 0 &&
              <div className="mt-4 px-2 flex flex-wrap items-center gap-2">
                {filters.category.map(item => (
                  <div key={item} className="badge badge-primary gap-2">
                    <span>{item}</span>
                    <XMarkIcon className="h-4 w-4 cursor-pointer" onClick={() => handleMultiSelectFilter('category', item)} />
                  </div>
                ))}
                <button className="btn btn-ghost btn-xs" onClick={resetFilters}>전체 초기화</button>
              </div>
            }
          </div>
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <input type="text" placeholder="제목 또는 내용 검색..." className="input input-ghost w-full sm:max-w-xs border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200 pb-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-ghost select-sm sm:w-auto border-b-2 border-gray-300 focus:outline-none focus:border-primary transition-all duration-200">
            <option value="latest">최신순</option>
            <option value="views">조회수순</option>
            <option value="likes">좋아요순</option>
          </select>
        </div>

        {/* Posts List */}
        {filteredAndSortedPosts.length > 0 ? (
          <div className="space-y-4">
            {filteredAndSortedPosts.map(post => (
              <Link to={`/community/${post.id}`} key={post.id} className="block p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="badge badge-outline badge-primary text-xs font-medium">{post.category}</div>
                    <h2 className="text-lg font-semibold text-gray-900 truncate">{post.title}</h2>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="h-4 w-4" /> {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <HeartIcon className="h-4 w-4" /> {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <ChatBubbleLeftIcon className="h-4 w-4" /> {post.comments}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.content}</p>
                <div className="flex items-center justify-between text-gray-500 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="avatar">
                      <div className="w-6 h-6 rounded-full">
                        <img src={post.authorImage} alt={post.author} />
                      </div>
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.createdAt}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">게시물이 없습니다.</p>
            <p className="mt-2 text-gray-400">새로운 게시물을 작성해보세요.</p>
            <Link to="/community/write" className="btn btn-primary mt-8">글쓰기</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CommunityPage;