import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, Search, Star, CheckCircle2, Sparkles, X } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { CATEGORIES } from '../data/mockData';

interface ShopPageProps {
  products: Product[];
  selectedCategorySlug?: string;
  onSelectProduct: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onSharePinterest?: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  selectedCategorySlug,
  onSelectProduct,
  wishlistIds,
  onToggleWishlist,
  onSharePinterest
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategorySlug || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'trending' | 'rating' | 'price-low' | 'price-high'>('trending');
  const [onlyPrime, setOnlyPrime] = useState(false);
  const [minRating, setMinRating] = useState<number>(0);

  // Sync prop if user clicked a category from header
  React.useEffect(() => {
    if (selectedCategorySlug) {
      setActiveCategory(selectedCategorySlug);
    }
  }, [selectedCategorySlug]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (activeCategory !== 'all' && p.categorySlug !== activeCategory) {
        return false;
      }
      // Choice / Prime filter
      if (onlyPrime && !(p.isChoice ?? p.isPrime)) {
        return false;
      }
      // Min rating filter
      if (p.rating < minRating) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        const matchesTags = p.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCat && !matchesTags) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') {
        const numA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return numA - numB;
      }
      if (sortBy === 'price-high') {
        const numA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
        const numB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
        return numB - numA;
      }
      // default: trending
      return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    });
  }, [products, activeCategory, searchQuery, sortBy, onlyPrime, minRating]);

  return (
    <div className="py-12 bg-[#121214] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block">
            AliExpress Affiliate Shop
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EF]">
            Curated Lifestyle Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
            Discover tested beauty, home decor, organization, and wellness products with direct AliExpress Choice purchasing links.
          </p>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-[#1C1C20] rounded-3xl p-6 border border-[#27272A] shadow-xl space-y-6">
          
          {/* Top Search & Sort Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#A1A1AA]" />
              <input
                type="text"
                placeholder="Search products or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#18181C] text-xs text-[#F7F3EF] placeholder-[#A1A1AA] pl-10 pr-8 py-2.5 rounded-full border border-[#27272A] focus:outline-none focus:border-[#C8A96A]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-xs text-[#A1A1AA]">×</button>
              )}
            </div>

            {/* Sort & Filter Toggles */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              
              {/* Choice Toggle */}
              <button
                onClick={() => setOnlyPrime(!onlyPrime)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
                  onlyPrime 
                    ? 'bg-[#C8A96A] text-[#121214] border-[#C8A96A] font-bold' 
                    : 'bg-[#18181C] text-[#A1A1AA] border-[#27272A] hover:border-[#C8A96A]'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${onlyPrime ? 'text-[#121214]' : 'text-[#C8A96A]'}`} />
                <span>Choice Only</span>
              </button>

              {/* Rating Filter */}
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="bg-[#18181C] text-xs font-medium text-[#F7F3EF] px-3 py-2 rounded-full border border-[#27272A] focus:outline-none cursor-pointer"
              >
                <option value={0}>All Ratings</option>
                <option value={4.5}>★ 4.5 & Above</option>
                <option value={4.8}>★ 4.8 & Above</option>
              </select>

              {/* Sort By Dropdown */}
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-[#18181C] text-xs font-medium text-[#F7F3EF] px-3.5 py-2 rounded-full border border-[#27272A] focus:outline-none cursor-pointer"
              >
                <option value="trending">Sort: Viral Trending</option>
                <option value="rating">Sort: Highest Rated</option>
                <option value="price-low">Sort: Price Low to High</option>
                <option value="price-high">Sort: Price High to Low</option>
              </select>

            </div>

          </div>

          {/* Category Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-2 border-t border-[#27272A]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#C8A96A] text-[#121214] shadow-sm'
                  : 'bg-[#18181C] text-[#A1A1AA] border border-[#27272A] hover:bg-[#27272A] hover:text-[#F7F3EF]'
              }`}
            >
              All Categories ({products.length})
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.slug
                    ? 'bg-[#C8A96A] text-[#121214] shadow-sm'
                    : 'bg-[#18181C] text-[#A1A1AA] border border-[#27272A] hover:bg-[#27272A] hover:text-[#F7F3EF]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#A1A1AA] px-2 font-light">
          <span>Showing <strong className="text-[#F7F3EF]">{filteredProducts.length}</strong> AliExpress items</span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="text-[#C8A96A] font-semibold underline"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#1C1C20] rounded-3xl p-12 text-center space-y-3 border border-[#27272A]">
            <Sparkles className="w-8 h-8 text-[#C8A96A] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#F7F3EF]">No items match your active filters</h3>
            <p className="text-xs text-[#A1A1AA]">Try clearing search terms or selecting a different category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setOnlyPrime(false);
                setMinRating(0);
              }}
              className="px-6 py-2 rounded-full bg-[#C8A96A] text-[#121214] text-xs font-bold hover:bg-[#EFB7C8] transition-colors mt-2"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelectProduct={onSelectProduct}
                isWishlisted={wishlistIds.includes(p.id)}
                onToggleWishlist={onToggleWishlist}
                onSharePinterest={onSharePinterest}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
