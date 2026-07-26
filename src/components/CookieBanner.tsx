import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isConsent = localStorage.getItem('glownest_cookie_consent');
    if (!isConsent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('glownest_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#1C1C20] text-[#F7F3EF] p-5 rounded-2xl shadow-2xl border border-[#27272A] animate-in slide-in-from-bottom-5">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#18181C] text-[#C8A96A] border border-[#27272A]">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-xs font-semibold text-[#F7F3EF]">Cookie & Affiliate Privacy</p>
          <p className="text-[11px] text-[#A1A1AA] font-light leading-relaxed">
            We use essential cookies to enhance your browsing experience and measure Amazon affiliate referrals.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-1.5 rounded-full bg-[#C8A96A] text-[#121214] font-bold text-xs hover:bg-[#EFB7C8] transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-full text-xs text-[#A1A1AA] hover:text-[#F7F3EF]"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button onClick={handleAccept} className="text-[#A1A1AA] hover:text-[#F7F3EF]">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
