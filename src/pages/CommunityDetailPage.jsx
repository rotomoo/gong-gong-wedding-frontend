import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { mockCommunityPosts } from '../data/mockData';
import { ArrowLeftIcon, EyeIcon, HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';

function CommunityDetailPage() {
  const { id } = useParams();
  const post = mockCommunityPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">게시물을 찾을 수 없습니다.</h1>
          <p className="text-gray-600 mb-8">요청하신 게시물이 존재하지 않거나 삭제되었습니다.</p>
          <Link to="/community" className="btn btn-primary">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <Link to="/community" className="btn btn-ghost btn-sm normal-case text-gray-600">
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            목록으로
          </Link>
        </div>

        <div className="card bg-base-100 border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <img src={post.authorImage} alt={post.author} />
                </div>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-500">{post.createdAt}</div>
              </div>
            </div>
            <div className="badge badge-outline badge-primary text-sm font-medium">{post.category}</div>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <div className="prose max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="flex items-center gap-4 text-gray-600 text-sm mt-6">
            <div className="flex items-center gap-1">
              <EyeIcon className="h-5 w-5" /> {post.views}
            </div>
            <div className="flex items-center gap-1">
              <HeartIcon className="h-5 w-5" /> {post.likes}
            </div>
            <div className="flex items-center gap-1">
              <ChatBubbleLeftIcon className="h-5 w-5" /> {post.comments}
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">댓글 ({post.commentData ? post.commentData.length : 0})</h2>
          {post.commentData && post.commentData.length > 0 ? (
            <div className="space-y-6">
              {post.commentData.map(comment => (
                <div key={comment.id} className="flex items-start space-x-4">
                  <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                      <img src={comment.authorImage} alt={comment.author} />
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.createdAt}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
          )}
          {/* Comment Input (Optional) */}
          <div className="mt-6">
            <textarea className="textarea textarea-bordered w-full" rows="3" placeholder="댓글을 작성해주세요..."></textarea>
            <button className="btn btn-primary mt-2">댓글 작성</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailPage;
