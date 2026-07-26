import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSharePinterest?: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  subtitle,
  products,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onSharePinterest
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carousel Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-[#27272A]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C8A96A] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Highlights</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF]">{title}</h2>
            {subtitle && <p className="text-xs text-[#A1A1AA] font-light mt-1">{subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full bg-[#1E1E22] border border-[#27272A] hover:border-[#C8A96A] hover:bg-[#27272A] text-[#F7F3EF] transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full bg-[#1E1E22] border border-[#27272A] hover:border-[#C8A96A] hover:bg-[#27272A] text-[#F7F3EF] transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] snap-start flex-shrink-0"
            >
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onSharePinterest={onSharePinterest}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
