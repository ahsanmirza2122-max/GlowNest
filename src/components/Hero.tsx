import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Star, CheckCircle2 } from 'lucide-react';
import { ViewMode } from '../types';

interface HeroProps {
  onNavigate: (view: ViewMode) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#18181C] via-[#121214] to-[#121214] py-12 lg:py-20 border-b border-[#27272A]/60">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#EFB7C8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E22] border border-[#27272A] shadow-xs text-xs font-medium text-[#F7F3EF]">
              <span className="flex h-2 w-2 rounded-full bg-[#EFB7C8] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
              <span>Curated Luxury AliExpress Finds • Updated Daily</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F7F3EF] leading-[1.15] tracking-tight">
              Discover the Best <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C8A96A]">AliExpress Finds</span> for Everyday Living
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Curated beauty, home, wellness, organization, and lifestyle products to help you shop smarter and live better.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('shop')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C8A96A] text-[#121214] font-bold text-sm hover:bg-[#EFB7C8] transition-all shadow-lg shadow-[#C8A96A]/10 flex items-center justify-center gap-2 group"
              >
                <span>Shop Our Picks</span>
                <ArrowRight className="w-4 h-4 text-[#121214] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('category')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1E1E22] text-[#F7F3EF] font-semibold text-sm border border-[#27272A] hover:border-[#C8A96A] hover:bg-[#27272A] transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Categories</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-[#27272A] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#2A1F26] text-[#EFB7C8]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F7F3EF]">100% Tested</p>
                  <p className="text-[10px] text-[#A1A1AA]">Unbiased Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#2A1F26] text-[#C8A96A]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F7F3EF]">4.8+ Stars</p>
                  <p className="text-[10px] text-[#A1A1AA]">Top Rated Picks</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-[#2A1F26] text-[#EFB7C8]">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#F7F3EF]">Viral Trends</p>
                  <p className="text-[10px] text-[#A1A1AA]">TikTok & Pinterest</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Luxury Pinterest-Style Feature Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Banner Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#27272A] group">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury lifestyle home decor and beauty items"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent" />
                
                {/* Floating Overlay Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1C1C20]/90 backdrop-blur-md border border-[#3F3F46] shadow-xl text-[#F7F3EF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A96A]">FEATURED FIND</span>
                      <h3 className="font-serif text-base font-semibold text-[#F7F3EF]">Aesthetic Ribbed Vase Set</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#C8A96A] text-[#121214] text-xs font-bold">$34.99</span>
                  </div>
                </div>
              </div>

              {/* Floating Miniature Card Top-Right */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-[#1C1C20] p-3 rounded-2xl shadow-xl border border-[#3F3F46] flex items-center gap-3 animate-bounce-slow">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80"
                  alt="Rose Quartz Gua Sha"
                  className="w-12 h-12 rounded-xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-[#F7F3EF]">Rose Quartz Gua Sha</p>
                  <p className="text-[10px] text-[#C8A96A] font-semibold">★ 4.8 (3,890 reviews)</p>
                </div>
              </div>

              {/* Floating Miniature Card Bottom-Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#1C1C20] p-3 rounded-2xl shadow-xl border border-[#3F3F46] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A1F26] flex items-center justify-center text-[#EFB7C8]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F7F3EF]">AliExpress Choice Picks</p>
                  <p className="text-[10px] text-[#A1A1AA]">Direct Choice Delivery</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
