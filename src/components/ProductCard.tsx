import React from 'react';
import { Star, Heart, ExternalLink, Eye, CheckCircle2, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSharePinterest?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  isWishlisted,
  onToggleWishlist,
  onSharePinterest
}) => {
  return (
    <div className="group bg-[#1C1C20] rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#C8A96A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative">
      
      {/* Product Image Box */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#18181C]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Badges Overlays */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.isTrending && (
            <span className="px-2.5 py-1 rounded-full bg-[#09090B] text-[#EFB7C8] border border-[#EFB7C8]/30 text-[10px] font-bold tracking-wider uppercase shadow-xs">
              Viral Trend
            </span>
          )}
          {(product.isChoice ?? product.isPrime) && (
            <span className="px-2.5 py-1 rounded-full bg-[#18181C]/90 backdrop-blur-md text-[#F7F3EF] text-[10px] font-semibold border border-[#27272A] flex items-center gap-1 shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-[#C8A96A]" /> Choice
            </span>
          )}
        </div>

        {/* Action Quick Buttons Overlays Top-Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md border transition-all shadow-sm ${
              isWishlisted
                ? 'bg-[#EFB7C8] border-[#EFB7C8] text-[#121214]'
                : 'bg-[#18181C]/80 border-[#3F3F46] text-[#A1A1AA] hover:text-[#F7F3EF] hover:bg-[#27272A]'
            }`}
            title="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {onSharePinterest && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSharePinterest(product);
              }}
              className="p-2 rounded-full bg-[#18181C]/80 border border-[#3F3F46] text-[#A1A1AA] hover:text-[#EFB7C8] hover:bg-[#27272A] backdrop-blur-md transition-all shadow-sm"
              title="Pin to Pinterest"
            >
              <Share2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[11px] font-semibold text-[#C8A96A] uppercase tracking-wider">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-[#F7F3EF] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#C8A96A] text-[#C8A96A]" />
              <span className="text-xs font-bold">{product.rating}</span>
              <span className="text-[#A1A1AA] text-[11px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif text-base font-bold text-[#F7F3EF] hover:text-[#C8A96A] cursor-pointer transition-colors line-clamp-2 leading-snug"
          >
            {product.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#A1A1AA] font-light mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & CTA Buttons */}
        <div className="pt-3 border-t border-[#27272A] space-y-3">
          
          {/* Price Display */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#F7F3EF] font-serif">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-[#A1A1AA] line-through font-light">{product.originalPrice}</span>
              )}
            </div>
            <span className="text-[10px] text-[#EFB7C8] bg-[#2A1F26] px-2 py-0.5 rounded-md font-medium border border-[#EFB7C8]/20">
              AliExpress Price
            </span>
          </div>

          {/* Dual Buttons: Read Review & View on AliExpress */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="w-full py-2 px-3 rounded-xl bg-[#27272A] text-[#F7F3EF] hover:bg-[#3F3F46] text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Read Review</span>
            </button>

            <a
              href={product.aliexpressUrl || product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-[#C8A96A] text-[#121214] hover:bg-[#EFB7C8] text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>View on AliExpress</span>
              <ExternalLink className="w-3 h-3 text-[#121214]" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
