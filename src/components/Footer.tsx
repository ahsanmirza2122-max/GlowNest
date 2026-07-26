import React from 'react';
import { Sparkles, Heart, ExternalLink } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#09090B] text-[#F7F3EF] pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="cursor-pointer inline-flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#EFB7C8] to-[#C8A96A] p-0.5">
                <div className="w-full h-full bg-[#1A1A1E] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#C8A96A]" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F3EF]">
                GLOW<span className="text-[#EFB7C8]">NEST</span>
              </span>
            </div>

            <p className="text-xs text-[#A1A1AA] max-w-sm font-light leading-relaxed">
              GlowNest is a luxury minimalist lifestyle magazine and AliExpress affiliate curation platform. We evaluate, test, and share the best beauty, home, organization, and wellness products.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181C] border border-[#27272A] hover:bg-[#C8A96A] text-[#F7F3EF] hover:text-[#121214] flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Pinterest"
              >
                P
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181C] border border-[#27272A] hover:bg-[#EFB7C8] text-[#F7F3EF] hover:text-[#121214] flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F3EF] tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#A1A1AA]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#EFB7C8] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-[#EFB7C8] transition-colors">
                  Shop All Picks
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('category')} className="hover:text-[#EFB7C8] transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#EFB7C8] transition-colors">
                  Blog & Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F3EF] tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#A1A1AA]">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#EFB7C8] transition-colors">
                  About GlowNest
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#EFB7C8] transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('affiliate-disclosure')} className="hover:text-[#EFB7C8] transition-colors">
                  Editorial Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Disclosures */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#F7F3EF] tracking-wider uppercase">
              Legal & Disclosures
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#A1A1AA]">
              <li>
                <button onClick={() => onNavigate('affiliate-disclosure')} className="hover:text-[#EFB7C8] transition-colors">
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-[#EFB7C8] transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('disclaimer')} className="hover:text-[#EFB7C8] transition-colors">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-[#EFB7C8] transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Affiliate Disclosure Notice Banner in Footer */}
        <div className="p-4 rounded-2xl bg-[#121214] border border-[#27272A] text-[11px] text-[#A1A1AA] font-light leading-relaxed">
          <p>
            <strong className="text-[#C8A96A] font-medium">AliExpress Portals Disclosure:</strong> GlowNest is a participant in the AliExpress Portals Affiliate Program, designed to provide a means for sites to earn commissions by advertising and linking to AliExpress.com. Product prices and availability are accurate as of the date/time indicated and are subject to change.
          </p>
        </div>

        {/* Bottom Copyright & Social */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A1A1AA] font-light gap-4">
          <p>© {new Date().getFullYear()} GlowNest. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#EFB7C8] fill-current" />
            <span>for Minimalist Living</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
