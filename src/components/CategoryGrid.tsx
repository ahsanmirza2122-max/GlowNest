import React from 'react';
import { 
  Sparkles, 
  Home, 
  LayoutGrid, 
  Heart, 
  Utensils, 
  Dumbbell, 
  Zap, 
  Gift, 
  Flame, 
  ArrowUpRight 
} from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { Category, ViewMode } from '../types';

interface CategoryGridProps {
  onSelectCategory: (categorySlug: string) => void;
  onNavigate: (view: ViewMode) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Gift: <Gift className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory, onNavigate }) => {
  return (
    <section className="py-16 bg-[#121214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#27272A]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A96A] block mb-1">
              Curated Collections
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F3EF]">
              Featured Categories
            </h2>
          </div>
          <p className="text-xs text-[#A1A1AA] max-w-md mt-2 md:mt-0 font-light">
            Explore carefully organized aesthetic lifestyle categories handpicked for quality, utility, and timeless beauty.
          </p>
        </div>

        {/* 9 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.slug);
                onNavigate('shop');
              }}
              className="group relative bg-[#1C1C20] rounded-2xl overflow-hidden border border-[#27272A] hover:border-[#C8A96A]/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[220px]"
            >
              {/* Background Cover Image with Soft Gradient Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-85"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/95 via-[#09090B]/50 to-transparent" />
              </div>

              {/* Top Badge & Icon */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#18181C]/90 backdrop-blur-md text-[#F7F3EF] border border-[#3F3F46] flex items-center justify-center shadow-sm group-hover:bg-[#C8A96A] group-hover:text-[#121214] group-hover:border-[#C8A96A] transition-colors">
                  {ICON_MAP[cat.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#18181C]/90 backdrop-blur-md text-[#F7F3EF] border border-[#27272A]">
                  {cat.itemCount}+ Picks
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-5 text-[#F7F3EF] flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-[#F7F3EF] group-hover:text-[#EFB7C8] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] line-clamp-1 font-light mt-0.5">
                    {cat.description}
                  </p>
                </div>
                
                <div className="w-8 h-8 rounded-full bg-[#18181C]/60 border border-[#3F3F46] backdrop-blur-md flex items-center justify-center group-hover:bg-[#C8A96A] group-hover:border-[#C8A96A] group-hover:text-[#121214] transition-all transform group-hover:translate-x-1">
                  <ArrowUpRight className="w-4 h-4 text-[#F7F3EF] group-hover:text-[#121214]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
