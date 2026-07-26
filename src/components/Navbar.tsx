import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  ShoppingBag,
  SlidersHorizontal,
  Settings,
  ExternalLink,
  Flame
} from 'lucide-react';
import { Product, BlogPost, ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, param?: string) => void;
  products: Product[];
  blogPosts: BlogPost[];
  wishlistIds: string[];
  onOpenWishlist: () => void;
  onOpenCms: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectArticle: (post: BlogPost) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  products,
  blogPosts,
  wishlistIds,
  onOpenWishlist,
  onOpenCms,
  onSelectProduct,
  onSelectArticle
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter search results
  const matchingProducts = searchQuery.trim()
    ? products.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const matchingPosts = searchQuery.trim()
    ? blogPosts.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 2)
    : [];

  const navLinks: { label: string; view: ViewMode; param?: string }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Shop', view: 'shop' },
    { label: 'Categories', view: 'category' },
    { label: 'Blog', view: 'blog' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Affiliate Disclosure Bar */}
      <div className="bg-[#09090B] text-[#A1A1AA] text-xs py-1.5 px-4 text-center tracking-wide font-light flex items-center justify-center gap-2 border-b border-[#27272A]">
        <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
        <span>
          <strong className="font-semibold text-[#EFB7C8]">Affiliate Disclosure:</strong> GlowNest is reader-supported. We may earn a commission on AliExpress purchases.
        </span>
        <button 
          onClick={() => onNavigate('affiliate-disclosure')}
          className="underline text-[#C8A96A] hover:text-[#EFB7C8] transition-colors ml-1 hidden sm:inline"
        >
          Learn More
        </button>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 border-b border-[#27272A] ${
        isScrolled 
          ? 'bg-[#121214]/95 backdrop-blur-md shadow-lg shadow-black/40 py-3' 
          : 'bg-[#121214] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group flex items-center gap-2.5"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#EFB7C8] to-[#C8A96A] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1A1A1E] rounded-full flex items-center justify-center text-[#F7F3EF]">
                <Sparkles className="w-4 h-4 text-[#C8A96A]" />
              </div>
            </div>
            <div>
              <span id="brand-logo-text" className="font-serif text-2xl font-bold tracking-tight text-[#F7F3EF] group-hover:text-[#C8A96A] transition-colors">
                GLOW<span className="text-[#EFB7C8]">NEST</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#A1A1AA] font-medium -mt-1">
                Luxury AliExpress Finds
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.label}
                  onClick={() => {
                    onNavigate(link.view, link.param);
                    setSearchQuery('');
                  }}
                  className={`transition-colors py-1 relative ${
                    isActive 
                      ? 'text-[#F7F3EF] font-semibold' 
                      : 'text-[#A1A1AA] hover:text-[#F7F3EF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C8A96A] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Box */}
            <div className="relative hidden sm:block w-48 md:w-64">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 absolute left-3 text-[#A1A1AA] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                  className="w-full bg-[#1E1E22] text-xs text-[#F7F3EF] placeholder-[#A1A1AA] pl-9 pr-8 py-2 rounded-full border border-[#27272A] focus:outline-none focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 text-xs text-[#A1A1AA] hover:text-[#F7F3EF]"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Autocomplete Search Dropdown */}
              {searchFocused && searchQuery.trim().length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-[#1C1C20] rounded-2xl shadow-2xl border border-[#27272A] p-3 z-50 max-h-96 overflow-y-auto">
                  {matchingProducts.length === 0 && matchingPosts.length === 0 ? (
                    <div className="text-xs text-[#A1A1AA] p-2 text-center">
                      No matching products or posts found for "{searchQuery}"
                    </div>
                  ) : (
                    <>
                      {matchingProducts.length > 0 && (
                        <div className="mb-3">
                          <div className="text-[10px] uppercase font-semibold text-[#A1A1AA] tracking-wider mb-2 px-2">
                            Matching Products
                          </div>
                          {matchingProducts.map((p) => (
                            <div
                              key={p.id}
                              onClick={() => {
                                onSelectProduct(p);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 p-2 hover:bg-[#27272A] rounded-xl cursor-pointer transition-colors"
                            >
                              <img 
                                src={p.image} 
                                alt={p.title} 
                                className="w-10 h-10 object-cover rounded-lg"
                                referrerPolicy="no-referrer"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-[#F7F3EF] truncate">{p.title}</p>
                                <span className="text-[10px] text-[#C8A96A] font-semibold">{p.price} • {p.category}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {matchingPosts.length > 0 && (
                        <div>
                          <div className="text-[10px] uppercase font-semibold text-[#A1A1AA] tracking-wider mb-2 px-2">
                            Matching Articles
                          </div>
                          {matchingPosts.map((post) => (
                            <div
                              key={post.id}
                              onClick={() => {
                                onSelectArticle(post);
                                setSearchQuery('');
                              }}
                              className="flex items-center gap-3 p-2 hover:bg-[#27272A] rounded-xl cursor-pointer transition-colors"
                            >
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-10 h-10 object-cover rounded-lg"
                                referrerPolicy="no-referrer"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-[#F7F3EF] truncate">{post.title}</p>
                                <span className="text-[10px] text-[#A1A1AA]">{post.category}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist Toggle Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 rounded-full hover:bg-[#27272A] text-[#F7F3EF] transition-colors"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#EFB7C8] text-[#121214] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#121214]">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {/* CMS / Admin Manager Button */}
            <button
              onClick={onOpenCms}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C8A96A] text-[#121214] hover:bg-[#EFB7C8] transition-colors shadow-sm"
              title="Easy Manage CMS"
            >
              <Settings className="w-3.5 h-3.5 text-[#121214]" />
              <span>CMS Admin</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#F7F3EF] hover:bg-[#27272A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181C] border-b border-[#27272A] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          {/* Search in mobile menu */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#A1A1AA]" />
            <input
              type="text"
              placeholder="Search products & articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#27272A] text-sm text-[#F7F3EF] pl-9 pr-4 py-2 rounded-xl border border-[#3F3F46] focus:outline-none placeholder-[#A1A1AA]"
            />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  onNavigate(link.view, link.param);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2.5 px-3 rounded-xl text-sm font-medium flex items-center justify-between ${
                  currentView === link.view 
                    ? 'bg-[#2A1F26] text-[#EFB7C8] font-semibold border border-[#EFB7C8]/30' 
                    : 'text-[#A1A1AA] hover:bg-[#27272A] hover:text-[#F7F3EF]'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#A1A1AA]" />
              </button>
            ))}

            <button
              onClick={() => {
                onOpenCms();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#C8A96A] text-[#121214] text-sm font-bold flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4 text-[#121214]" />
              <span>Easy-to-Manage CMS Manager</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
