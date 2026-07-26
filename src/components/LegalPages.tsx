import React from 'react';
import { ShieldCheck, Sparkles, AlertCircle, FileText, Lock } from 'lucide-react';
import { ViewMode } from '../types';

interface LegalPagesProps {
  view: 'privacy' | 'affiliate-disclosure' | 'disclaimer' | 'terms';
  onNavigate: (view: ViewMode) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ view, onNavigate }) => {
  return (
    <div className="py-16 bg-[#121214] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#18181C] border border-[#27272A] shadow-md max-w-2xl mx-auto">
          <button
            onClick={() => onNavigate('affiliate-disclosure')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              view === 'affiliate-disclosure' 
                ? 'bg-[#C8A96A] text-[#121214]' 
                : 'text-[#A1A1AA] hover:text-[#F7F3EF]'
            }`}
          >
            Affiliate Disclosure
          </button>
          <button
            onClick={() => onNavigate('privacy')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              view === 'privacy' 
                ? 'bg-[#C8A96A] text-[#121214]' 
                : 'text-[#A1A1AA] hover:text-[#F7F3EF]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onNavigate('disclaimer')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              view === 'disclaimer' 
                ? 'bg-[#C8A96A] text-[#121214]' 
                : 'text-[#A1A1AA] hover:text-[#F7F3EF]'
            }`}
          >
            Disclaimer
          </button>
          <button
            onClick={() => onNavigate('terms')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              view === 'terms' 
                ? 'bg-[#C8A96A] text-[#121214]' 
                : 'text-[#A1A1AA] hover:text-[#F7F3EF]'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-[#18181C] rounded-3xl p-8 sm:p-12 border border-[#27272A] shadow-xl space-y-6 text-[#F7F3EF] font-light text-sm leading-relaxed">
          
          {view === 'affiliate-disclosure' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-[#27272A]">
                <div className="p-3 rounded-2xl bg-[#27272A] text-[#C8A96A]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF]">Affiliate Disclosure</h1>
                  <p className="text-xs text-[#A1A1AA]">Compliance with FTC Guidelines & AliExpress Affiliate Program Policy</p>
                </div>
              </div>

              <div className="space-y-4 text-[#A1A1AA]">
                <p>
                  GlowNest is committed to total editorial transparency and full compliance with Federal Trade Commission (FTC) guidelines regarding endorsements and testimonials.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">AliExpress Affiliate Program</h3>
                <p>
                  GlowNest is a participant in the AliExpress Portals Affiliate Program, an affiliate advertising program designed to provide a means for website owners to earn advertising fees by advertising and linking to AliExpress.com and affiliated sites.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">How Affiliate Links Work</h3>
                <p>
                  When you click on an outbound link on GlowNest pointing to an AliExpress product listing and complete a purchase, AliExpress pays us a small percentage referral commission. <strong className="text-[#F7F3EF]">This occurs at absolutely NO additional cost to you as a shopper.</strong>
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Editorial Independence</h3>
                <p>
                  Our product evaluations and recommendations are entirely independent. Brands cannot pay for favorable ratings or artificially high ranking positions in our curated guides. We only feature products that meet our high standards for design, durability, and user feedback.
                </p>
              </div>
            </>
          )}

          {view === 'privacy' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-[#27272A]">
                <div className="p-3 rounded-2xl bg-[#27272A] text-[#C8A96A]">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF]">Privacy Policy</h1>
                  <p className="text-xs text-[#A1A1AA]">Effective Date: July 2026</p>
                </div>
              </div>

              <div className="space-y-4 text-[#A1A1AA]">
                <p>
                  Your privacy is deeply important to us at GlowNest. This Privacy Policy outlines how we collect, protect, and use personal information when you visit our website.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">1. Information We Collect</h3>
                <p>
                  We collect minimal personal data. When you subscribe to our newsletter or fill out our contact form, we collect your email address and name. We may also gather non-personally identifiable analytical data (such as browser type and pages viewed) to improve site performance.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">2. Cookies & Tracking</h3>
                <p>
                  We use essential browser cookies to remember your saved wishlist items and user preferences. Third-party partners (such as AliExpress Portals) may place cookies on your browser to measure affiliate referral attribution.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">3. Data Protection</h3>
                <p>
                  We never sell, rent, or lease your personal information to third parties. All newsletter subscriptions can be cancelled at any time via the unsubscribe link in our emails.
                </p>
              </div>
            </>
          )}

          {view === 'disclaimer' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-[#27272A]">
                <div className="p-3 rounded-2xl bg-[#27272A] text-[#C8A96A]">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF]">Website Disclaimer</h1>
                  <p className="text-xs text-[#A1A1AA]">General Information & Accuracy Statement</p>
                </div>
              </div>

              <div className="space-y-4 text-[#A1A1AA]">
                <p>
                  The information provided on GlowNest is for general informational and inspirational purposes only.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Price & Stock Availability</h3>
                <p>
                  Product prices, star ratings, and inventory availability on AliExpress change dynamically. While we strive to maintain up-to-date listings, the current price shown on AliExpress.com at the time of purchase will always apply.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">No Professional Advice</h3>
                <p>
                  Content related to beauty, skincare, health, or wellness is for educational purposes and should not replace advice from certified healthcare professionals or estheticians.
                </p>
              </div>
            </>
          )}

          {view === 'terms' && (
            <>
              <div className="flex items-center gap-3 pb-4 border-b border-[#27272A]">
                <div className="p-3 rounded-2xl bg-[#27272A] text-[#C8A96A]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EF]">Terms & Conditions</h1>
                  <p className="text-xs text-[#A1A1AA]">Terms governing use of GlowNest</p>
                </div>
              </div>

              <div className="space-y-4 text-[#A1A1AA]">
                <p>
                  By accessing and using GlowNest, you agree to comply with and be bound by the following Terms & Conditions.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Intellectual Property</h3>
                <p>
                  All written articles, branding, graphic design elements, and compilation of product reviews are the exclusive intellectual property of GlowNest. Unauthorised copying or republication is strictly prohibited.
                </p>

                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">External Links</h3>
                <p>
                  GlowNest contains links to external websites (primarily AliExpress.com). We do not control or accept responsibility for the content, privacy practices, or fulfillment of orders processed on third-party sites.
                </p>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
