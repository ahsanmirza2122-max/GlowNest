import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Check, 
  AlertCircle, 
  Heart, 
  Share2, 
  ShieldCheck,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Product } from '../types';

interface ProductReviewModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onSharePinterest?: (product: Product) => void;
}

export const ProductReviewModal: React.FC<ProductReviewModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  allProducts,
  onSelectProduct,
  onSharePinterest
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = product.galleryImages && product.galleryImages.length > 0 
    ? product.galleryImages 
    : [product.image];

  const related = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#000000]/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#1C1C20] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#27272A] relative my-auto">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-20 bg-[#18181C]/95 backdrop-blur-md px-6 py-4 border-b border-[#27272A] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#C8A96A] uppercase tracking-wider">
              Product Review
            </span>
            <span className="text-xs text-[#A1A1AA]">/ {product.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F7F3EF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Grid: Gallery + Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Gallery Column (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#27272A] bg-[#18181C]">
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {(product.isChoice ?? product.isPrime) && (
                  <span className="absolute top-3 left-3 bg-[#18181C]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#F7F3EF] border border-[#3F3F46] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#C8A96A]" /> Choice Eligible
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImageIndex === idx ? 'border-[#C8A96A] scale-105' : 'border-[#27272A] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Summary Column (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#27272A] text-[#F7F3EF] text-xs font-medium">
                    {product.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleWishlist(product.id)}
                      className={`p-2 rounded-full border transition-all ${
                        isWishlisted ? 'bg-[#EFB7C8] border-[#EFB7C8] text-[#121214]' : 'bg-[#18181C] border-[#27272A] text-[#A1A1AA] hover:text-[#F7F3EF]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>

                    {onSharePinterest && (
                      <button
                        onClick={() => onSharePinterest(product)}
                        className="p-2 rounded-full bg-[#18181C] border border-[#27272A] text-[#A1A1AA] hover:text-[#EFB7C8]"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF] leading-tight">
                  {product.title}
                </h1>

                {/* Star Rating & Review Count */}
                <div className="flex items-center gap-2 my-3">
                  <div className="flex items-center text-[#C8A96A]">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-[#3F3F46]'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#F7F3EF]">{product.rating}</span>
                  <span className="text-xs text-[#A1A1AA]">({product.reviewCount.toLocaleString()} AliExpress verified reviews)</span>
                </div>

                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Price & Buy Button Box */}
              <div className="p-4 rounded-2xl bg-[#18181C] border border-[#27272A] space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Current AliExpress Price:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-serif text-[#F7F3EF]">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-[#A1A1AA] line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-[#C8A96A] bg-[#27272A] px-3 py-1 rounded-full border border-[#3F3F46]">
                    In Stock on AliExpress
                  </span>
                </div>

                <a
                  href={product.aliexpressUrl || product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#C8A96A] hover:bg-[#EFB7C8] text-[#121214] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 text-center"
                >
                  <span>Check Current Price & Buy on AliExpress</span>
                  <ExternalLink className="w-4 h-4 text-[#121214]" />
                </a>

                <p className="text-[10px] text-[#A1A1AA] text-center font-light">
                  ✨ When you purchase through our links, GlowNest earns an affiliate commission at no additional cost to you.
                </p>
              </div>

            </div>

          </div>

          {/* Pros & Cons Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#27272A]">
            {/* Pros */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-serif text-base mb-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>What We Loved (Pros)</span>
              </div>
              <ul className="space-y-2 text-xs text-emerald-200/90 font-light">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-800/40">
              <div className="flex items-center gap-2 text-rose-400 font-bold font-serif text-base mb-3">
                <AlertCircle className="w-5 h-5 text-rose-400" />
                <span>Things to Note (Cons)</span>
              </div>
              <ul className="space-y-2 text-xs text-rose-200/90 font-light">
                {product.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Editorial Review Text */}
          <div className="space-y-4 pt-6 border-t border-[#27272A]">
            <h2 className="font-serif text-xl font-bold text-[#F7F3EF]">
              GlowNest Editorial Hands-On Review
            </h2>
            <div className="text-sm text-[#A1A1AA] font-light leading-relaxed whitespace-pre-line bg-[#18181C] p-6 rounded-2xl border border-[#27272A]">
              {product.fullReview}
            </div>
          </div>

          {/* Product Specifications Table */}
          {product.specifications && (
            <div className="space-y-3 pt-6 border-t border-[#27272A]">
              <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-xl bg-[#18181C] border border-[#27272A] flex justify-between">
                    <span className="font-semibold text-[#F7F3EF]">{key}:</span>
                    <span className="text-[#A1A1AA]">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products Recommendations */}
          {related.length > 0 && (
            <div className="pt-6 border-t border-[#27272A] space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">You Might Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectProduct(rel)}
                    className="p-3 rounded-2xl border border-[#27272A] hover:border-[#C8A96A] bg-[#18181C] cursor-pointer hover:shadow-md transition-all flex items-center gap-3"
                  >
                    <img src={rel.image} alt={rel.title} className="w-12 h-12 rounded-xl object-cover" referrerPolicy="no-referrer" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#F7F3EF] truncate">{rel.title}</p>
                      <p className="text-[11px] text-[#C8A96A] font-semibold">{rel.price}</p>
                    </div>
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
