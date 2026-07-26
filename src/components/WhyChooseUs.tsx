import React from 'react';
import { Sparkles, Flame, ShieldCheck, Award } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/mockData';

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#C8A96A]" />,
  Flame: <Flame className="w-6 h-6 text-[#D898AC]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C8A96A]" />,
  Award: <Award className="w-6 h-6 text-[#D898AC]" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-[#18181C] border-y border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block mb-2">
            The GlowNest Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EF]">
            Why Choose GlowNest
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light mt-2 leading-relaxed">
            We simplify your Amazon shopping experience with rigorous editorial standards, real testing, and timeless aesthetic taste.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#1C1C20] border border-[#27272A] hover:border-[#C8A96A]/60 hover:bg-[#222228] hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#18181C] border border-[#27272A] flex items-center justify-center shadow-sm mb-5">
                {ICON_MAP[item.iconName] || <Sparkles className="w-6 h-6 text-[#C8A96A]" />}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#F7F3EF] mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-[#A1A1AA] font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
