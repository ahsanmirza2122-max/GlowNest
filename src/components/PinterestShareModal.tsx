import React, { useState } from 'react';
import { X, Share2, Check, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface PinterestShareModalProps {
  item: { title: string; image: string; category?: string; price?: string } | null;
  onClose: () => void;
}

export const PinterestShareModal: React.FC<PinterestShareModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const [copied, setCopied] = useState(false);

  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(item.image)}&description=${encodeURIComponent(item.title)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pinterestUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#1C1C20] rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#27272A] relative space-y-5 text-center text-[#F7F3EF]">
        
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F7F3EF]">
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181C] border border-[#27272A] text-[#EFB7C8] text-xs font-bold">
          <Share2 className="w-3.5 h-3.5" /> Share to Pinterest
        </div>

        {/* Pin Graphic Preview Card */}
        <div className="rounded-2xl overflow-hidden border-2 border-[#C8A96A] shadow-md relative bg-[#18181C] aspect-3/4 max-w-[240px] mx-auto group">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent p-4 flex flex-col justify-end text-left text-[#F7F3EF]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A96A]">GLOWNEST PICK</span>
            <p className="font-serif font-bold text-sm leading-snug line-clamp-2">{item.title}</p>
            {item.price && <p className="text-xs font-bold text-[#EFB7C8] mt-1">{item.price}</p>}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <a
            href={pinterestUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 text-[#FFFFFF] font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Pin It on Pinterest</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 rounded-full bg-[#18181C] border border-[#27272A] hover:bg-[#27272A] text-[#F7F3EF] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Copy Pin URL'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
