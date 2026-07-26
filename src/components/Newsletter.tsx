import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#18181C] via-[#121214] to-[#18181C] border-y border-[#27272A] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#EFB7C8]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#C8A96A]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E22] border border-[#27272A] shadow-xs text-xs font-semibold text-[#C8A96A]">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
          <span>Exclusive Weekly Finds Digest</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EF]">
          Stay Updated with the Best Amazon Finds
        </h2>

        <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-xl mx-auto font-light leading-relaxed">
          Join 25,000+ aesthetic lifestyle lovers. Get our handpicked weekly list of viral Amazon home decor, beauty essentials, and secret deals delivered straight to your inbox.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-2xl bg-[#1C1C20] border border-[#C8A96A] text-[#F7F3EF] max-w-md mx-auto shadow-xl flex items-center justify-center gap-3 animate-in zoom-in-95">
            <CheckCircle2 className="w-6 h-6 text-[#C8A96A]" />
            <div className="text-left">
              <p className="text-sm font-bold text-[#F7F3EF]">You’re on the list!</p>
              <p className="text-xs text-[#A1A1AA]">Check your inbox for your complimentary "Top 50 Amazon Finds Guide".</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 absolute left-4 top-3.5 text-[#A1A1AA]" />
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1E1E22] text-xs sm:text-sm text-[#F7F3EF] placeholder-[#A1A1AA] pl-11 pr-4 py-3 rounded-full border border-[#27272A] focus:outline-none focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/20 shadow-xs"
              />
            </div>

            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#C8A96A] hover:bg-[#EFB7C8] text-[#121214] font-bold text-xs sm:text-sm transition-all shadow-md whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        )}

        <p className="text-[10px] text-[#A1A1AA] font-light">
          🔒 Zero spam. Unsubscribe at any time with one click.
        </p>

      </div>
    </section>
  );
};
