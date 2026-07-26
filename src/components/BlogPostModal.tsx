import React from 'react';
import { X, Clock, Calendar, Share2, Sparkles, ExternalLink, ArrowLeft } from 'lucide-react';
import { BlogPost, Product } from '../types';

interface BlogPostModalProps {
  post: BlogPost | null;
  onClose: () => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onSharePinterest?: (title: string, image: string) => void;
}

export const BlogPostModal: React.FC<BlogPostModalProps> = ({
  post,
  onClose,
  allProducts,
  onSelectProduct,
  onSharePinterest
}) => {
  if (!post) return null;

  const relatedProducts = allProducts.filter(p => post.relatedProductIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#000000]/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#1C1C20] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#27272A] relative my-auto">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#18181C]/95 backdrop-blur-md px-6 py-4 border-b border-[#27272A] flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A1A1AA] hover:text-[#F7F3EF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Articles</span>
          </button>

          <div className="flex items-center gap-2">
            {onSharePinterest && (
              <button
                onClick={() => onSharePinterest(post.title, post.image)}
                className="px-3 py-1.5 rounded-full bg-[#27272A] hover:bg-[#C8A96A] text-[#F7F3EF] hover:text-[#121214] text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5 text-[#EFB7C8]" />
                <span>Pin Article</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F7F3EF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Article Header Metadata */}
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 rounded-full bg-[#27272A] text-[#C8A96A] text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F3EF] leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-xs text-[#A1A1AA] font-light pt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#C8A96A]" /> {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" /> {post.publishedAt}
              </span>
            </div>

            {/* Author card */}
            <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-[#18181C] border border-[#27272A] mt-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-[#EFB7C8]/40"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-[#F7F3EF]">{post.author.name}</p>
                <p className="text-[10px] text-[#A1A1AA]">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Hero Article Image */}
          <div className="rounded-2xl overflow-hidden aspect-16/9 border border-[#27272A] max-w-3xl mx-auto shadow-xl bg-[#18181C]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Body */}
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-[#D4D4D8] font-light leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

          {/* Embedded Featured Products inside Article */}
          {relatedProducts.length > 0 && (
            <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-[#18181C] border border-[#27272A] space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C8A96A]" />
                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Featured Amazon Picks in this Article</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => onSelectProduct(p)}
                    className="p-4 rounded-xl bg-[#1C1C20] border border-[#27272A] hover:border-[#C8A96A] cursor-pointer transition-all flex items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={p.image} alt={p.title} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#F7F3EF] truncate">{p.title}</p>
                        <p className="text-[11px] text-[#C8A96A] font-semibold">{p.price}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#EFB7C8]" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
