import React from 'react';
import { Clock, User, ArrowRight, Sparkles, Share2 } from 'lucide-react';
import { BlogPost, ViewMode } from '../types';

interface BlogGridProps {
  posts: BlogPost[];
  onSelectArticle: (post: BlogPost) => void;
  onNavigate: (view: ViewMode) => void;
  featuredOnly?: boolean;
}

export const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  onSelectArticle,
  onNavigate,
  featuredOnly = false
}) => {
  const displayPosts = featuredOnly ? posts.slice(0, 3) : posts;

  return (
    <section className="py-16 bg-[#121214] border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#27272A]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block mb-1">
              GlowNest Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EF]">
              Latest Blog Posts
            </h2>
          </div>
          {featuredOnly && (
            <button
              onClick={() => onNavigate('blog')}
              className="mt-3 md:mt-0 text-xs font-semibold text-[#EFB7C8] hover:text-[#C8A96A] flex items-center gap-1 transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 text-[#EFB7C8]" />
            </button>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="group bg-[#1C1C20] rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#C8A96A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Featured Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#18181C]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#18181C]/90 backdrop-blur-md text-[#F7F3EF] text-[10px] font-semibold tracking-wider uppercase border border-[#3F3F46]">
                  {post.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-[#A1A1AA] mb-2 font-light">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C8A96A]" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#F7F3EF] group-hover:text-[#C8A96A] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] font-light mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Info & Read Action */}
                <div className="pt-4 border-t border-[#27272A] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#EFB7C8]/40"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#F7F3EF]">{post.author.name}</p>
                      <p className="text-[10px] text-[#A1A1AA]">{post.author.role}</p>
                    </div>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-[#27272A] flex items-center justify-center text-[#F7F3EF] group-hover:bg-[#C8A96A] group-hover:text-[#121214] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
