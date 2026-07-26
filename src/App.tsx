import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCard } from './components/ProductCard';
import { ProductCarousel } from './components/ProductCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BlogGrid } from './components/BlogGrid';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ShopPage } from './components/ShopPage';
import { ProductReviewModal } from './components/ProductReviewModal';
import { BlogPostModal } from './components/BlogPostModal';
import { LegalPages } from './components/LegalPages';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CmsAdminModal } from './components/CmsAdminModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CookieBanner } from './components/CookieBanner';
import { PinterestShareModal } from './components/PinterestShareModal';

import { Product, BlogPost, ViewMode } from './types';
import { INITIAL_PRODUCTS, INITIAL_BLOG_POSTS } from './data/mockData';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>('all');
  
  // Products & Posts State (Persisted in localStorage)
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('glownest_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('glownest_blog_posts');
    return saved ? JSON.parse(saved) : INITIAL_BLOG_POSTS;
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('glownest_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Active Modals State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [cmsOpen, setCmsOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [pinShareItem, setPinShareItem] = useState<{ title: string; image: string; price?: string } | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('glownest_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('glownest_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('glownest_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  // Handle Wishlist Toggle
  const handleToggleWishlist = (id: string) => {
    setWishlistIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // CMS Handlers
  const handleAddProduct = (newProd: Product) => {
    setProducts(prev => [newProd, ...prev]);
  };

  const handleAddBlogPost = (newPost: BlogPost) => {
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleDeleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const handleResetData = () => {
    setProducts(INITIAL_PRODUCTS);
    setBlogPosts(INITIAL_BLOG_POSTS);
    localStorage.removeItem('glownest_products');
    localStorage.removeItem('glownest_blog_posts');
  };

  // Navigate Handler
  const handleNavigate = (view: ViewMode, param?: string) => {
    setCurrentView(view);
    if (param) {
      setSelectedCategorySlug(param);
    } else if (view === 'category' || view === 'shop') {
      if (!param) setSelectedCategorySlug('all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trendingProducts = products.filter(p => p.isTrending);

  return (
    <div className="min-h-screen bg-[#121214] text-[#F7F3EF] flex flex-col font-sans selection:bg-[#EFB7C8] selection:text-[#121214]">
      
      {/* Dynamic SEO JSON-LD Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "GlowNest",
          "url": window.location.href,
          "description": "Curated luxury Amazon finds for beauty, home decor, organization, and wellness.",
          "publisher": {
            "@type": "Organization",
            "name": "GlowNest"
          }
        })
      }} />

      {/* Main Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        products={products}
        blogPosts={blogPosts}
        wishlistIds={wishlistIds}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenCms={() => setCmsOpen(true)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectArticle={(post) => setSelectedArticle(post)}
      />

      {/* Page Views Router */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            
            <CategoryGrid 
              onSelectCategory={(slug) => {
                setSelectedCategorySlug(slug);
                handleNavigate('shop');
              }}
              onNavigate={handleNavigate}
            />

            {/* Trending Products Grid */}
            <section className="py-16 bg-[#18181C] border-y border-[#27272A]/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#27272A] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block mb-1">
                      Viral Amazon Finds
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EF]">
                      Trending Products
                    </h2>
                  </div>

                  <button
                    onClick={() => handleNavigate('shop')}
                    className="mt-3 md:mt-0 text-xs font-bold text-[#EFB7C8] hover:text-[#C8A96A] underline transition-colors"
                  >
                    View All {products.length} Finds →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.slice(0, 6).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelectProduct={(p) => setSelectedProduct(p)}
                      isWishlisted={wishlistIds.includes(product.id)}
                      onToggleWishlist={handleToggleWishlist}
                      onSharePinterest={(p) => setPinShareItem({ title: p.title, image: p.image, price: p.price })}
                    />
                  ))}
                </div>

              </div>
            </section>

            {/* Featured Horizontal Carousel */}
            <ProductCarousel
              title="Editor’s Choice Essentials"
              subtitle="The highest rated beauty and home picks tested by our team this season."
              products={trendingProducts}
              onSelectProduct={(p) => setSelectedProduct(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onSharePinterest={(p) => setPinShareItem({ title: p.title, image: p.image, price: p.price })}
            />

            <WhyChooseUs />

            <BlogGrid
              posts={blogPosts}
              onSelectArticle={(post) => setSelectedArticle(post)}
              onNavigate={handleNavigate}
              featuredOnly={true}
            />

            <Newsletter />
          </>
        )}

        {/* VIEW 2: SHOP CATALOG */}
        {currentView === 'shop' && (
          <ShopPage
            products={products}
            selectedCategorySlug={selectedCategorySlug}
            onSelectProduct={(p) => setSelectedProduct(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onSharePinterest={(p) => setPinShareItem({ title: p.title, image: p.image, price: p.price })}
          />
        )}

        {/* VIEW 3: CATEGORIES OVERVIEW */}
        {currentView === 'category' && (
          <div>
            <CategoryGrid 
              onSelectCategory={(slug) => {
                setSelectedCategorySlug(slug);
                handleNavigate('shop');
              }}
              onNavigate={handleNavigate}
            />
            <Newsletter />
          </div>
        )}

        {/* VIEW 4: BLOG ARTICLES LIST */}
        {currentView === 'blog' && (
          <div>
            <BlogGrid
              posts={blogPosts}
              onSelectArticle={(post) => setSelectedArticle(post)}
              onNavigate={handleNavigate}
              featuredOnly={false}
            />
            <Newsletter />
          </div>
        )}

        {/* VIEW 5: ABOUT PAGE */}
        {currentView === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {/* VIEW 6: CONTACT PAGE */}
        {currentView === 'contact' && (
          <ContactPage />
        )}

        {/* VIEW 7: LEGAL PAGES */}
        {(currentView === 'privacy' || 
          currentView === 'affiliate-disclosure' || 
          currentView === 'disclaimer' || 
          currentView === 'terms') && (
          <LegalPages view={currentView as any} onNavigate={handleNavigate} />
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Review Modal Overlay */}
      <ProductReviewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        allProducts={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSharePinterest={(p) => setPinShareItem({ title: p.title, image: p.image, price: p.price })}
      />

      {/* Blog Article Reader Modal Overlay */}
      <BlogPostModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        allProducts={products}
        onSelectProduct={(p) => {
          setSelectedArticle(null);
          setSelectedProduct(p);
        }}
        onSharePinterest={(title, image) => setPinShareItem({ title, image })}
      />

      {/* CMS Manager Modal */}
      <CmsAdminModal
        isOpen={cmsOpen}
        onClose={() => setCmsOpen(false)}
        products={products}
        blogPosts={blogPosts}
        onAddProduct={handleAddProduct}
        onAddBlogPost={handleAddBlogPost}
        onDeleteProduct={handleDeleteProduct}
        onDeleteBlogPost={handleDeleteBlogPost}
        onResetData={handleResetData}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        products={products}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleToggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Pinterest Share Graphic Modal */}
      <PinterestShareModal
        item={pinShareItem}
        onClose={() => setPinShareItem(null)}
      />

      {/* Non-intrusive Cookie Consent Banner */}
      <CookieBanner />

    </div>
  );
}
