import React from 'react';
import { Sparkles, Heart, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { ViewMode } from '../types';

interface AboutPageProps {
  onNavigate: (view: ViewMode) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 bg-[#121214]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block">
            Our Story & Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EF] leading-tight">
            Elevating Everyday Living Through Curated AliExpress Finds
          </h1>
          <p className="text-sm sm:text-base text-[#A1A1AA] font-light leading-relaxed">
            GlowNest was born out of a simple desire: to eliminate the overwhelm of infinite marketplace listings and uncover true quality, beautiful design, and everyday functional joy.
          </p>
        </div>

        {/* Feature Image Banner */}
        <div className="rounded-3xl overflow-hidden aspect-21/9 border border-[#27272A] shadow-xl relative">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
            alt="GlowNest studio"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent flex items-end p-8">
            <div className="text-[#F7F3EF]">
              <p className="font-serif text-xl font-bold text-[#F7F3EF]">The GlowNest Aesthetic Studio</p>
              <p className="text-xs text-[#A1A1AA] font-light">Where beauty, home organization, and everyday wellness meet.</p>
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#18181C] border border-[#27272A] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[#EFB7C8]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Thoughtful Curation</h3>
            <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
              We sift through thousands of trending listings, ordering and unboxing candidate items to ensure only authentic quality makes our lists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18181C] border border-[#27272A] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[#C8A96A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Total Transparency</h3>
            <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
              We list genuine pros and cons for every product. If a piece requires delicate hand washing or careful placement, we tell you up front.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#18181C] border border-[#27272A] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#27272A] flex items-center justify-center text-[#EFB7C8]">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Accessible Luxury</h3>
            <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
              Beautiful home and self-care rituals shouldn't require luxury prices. We prioritize high-value finds that look and feel expensive.
            </p>
          </div>
        </div>

        {/* Editorial Team */}
        <div className="p-8 rounded-3xl bg-[#18181C] border border-[#27272A] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl font-bold text-[#F7F3EF]">Meet Our Editorial Team</h2>
            <p className="text-xs text-[#A1A1AA] font-light">
              Designers, estheticians, and organization fanatics dedicated to upgrading your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center space-y-2 p-4 rounded-2xl bg-[#1C1C20] border border-[#27272A]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Evelyn"
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-[#C8A96A]"
                referrerPolicy="no-referrer"
              />
              <p className="font-serif font-bold text-sm text-[#F7F3EF]">Evelyn St. Claire</p>
              <p className="text-[11px] text-[#C8A96A] font-medium">Editor in Chief</p>
            </div>

            <div className="text-center space-y-2 p-4 rounded-2xl bg-[#1C1C20] border border-[#27272A]">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
                alt="Sophia"
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-[#C8A96A]"
                referrerPolicy="no-referrer"
              />
              <p className="font-serif font-bold text-sm text-[#F7F3EF]">Sophia Laurent</p>
              <p className="text-[11px] text-[#C8A96A] font-medium">Interior Stylist</p>
            </div>

            <div className="text-center space-y-2 p-4 rounded-2xl bg-[#1C1C20] border border-[#27272A]">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Camilla"
                className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-[#C8A96A]"
                referrerPolicy="no-referrer"
              />
              <p className="font-serif font-bold text-sm text-[#F7F3EF]">Camilla Vance</p>
              <p className="text-[11px] text-[#C8A96A] font-medium">Beauty Editor</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-serif text-2xl font-bold text-[#F7F3EF]">Ready to Elevate Your Space?</h3>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-3.5 rounded-full bg-[#C8A96A] hover:bg-[#EFB7C8] text-[#121214] text-sm font-bold transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Explore All AliExpress Finds</span>
            <ArrowRight className="w-4 h-4 text-[#121214]" />
          </button>
        </div>

      </div>
    </div>
  );
};
