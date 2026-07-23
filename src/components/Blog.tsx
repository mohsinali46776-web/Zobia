import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-navy-800 font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-navy-50 border border-navy-100">
            Scientific Insights & Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-800 tracking-tight">
            Chemistry Notes & Research Blog
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Exploratory essays on reaction mechanisms, enzyme kinetic assays, computational docking strategies, and postgraduate academic guidance.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs hover:border-emerald-500/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    {post.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-800 leading-snug hover:text-emerald-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{post.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.date}</span>
                </span>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded bg-navy-800 text-white text-xs font-bold uppercase">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-800 leading-snug">
                {selectedPost.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-slate-500 border-b border-slate-200 pb-4">
                <span className="flex items-center space-x-1">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-slate-700">{selectedPost.author}</span>
                </span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans">
              {selectedPost.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedPost.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-lg bg-navy-800 text-white text-xs font-semibold hover:bg-navy-700"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
