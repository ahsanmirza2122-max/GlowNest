import React from 'react';
import { X, Heart, ExternalLink, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  wishlistIds: string[];
  onRemoveWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  wishlistIds,
  onRemoveWishlist,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const savedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#000000]/80 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1C20] shadow-2xl border-l border-[#27272A] flex flex-col justify-between text-[#F7F3EF]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#27272A] flex items-center justify-between bg-[#18181C]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#EFB7C8] fill-current" />
              <h2 className="font-serif text-lg font-bold text-[#F7F3EF]">Your Saved Finds</h2>
              <span className="text-xs bg-[#C8A96A] text-[#121214] font-bold px-2 py-0.5 rounded-full">
                {savedProducts.length}
              </span>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-[#27272A] text-[#A1A1AA] hover:text-[#F7F3EF]">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="p-6 flex-1 overflow-y-auto space-y-4">
            {savedProducts.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#18181C] text-[#C8A96A] flex items-center justify-center mx-auto border border-[#27272A]">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#F7F3EF]">Your Wishlist is Empty</h3>
                <p className="text-xs text-[#A1A1AA] font-light max-w-xs mx-auto">
                  Click the heart icon on any Amazon product card to save your favorite aesthetic finds here.
                </p>
              </div>
            ) : (
              savedProducts.map((p) => (
                <div key={p.id} className="p-3 bg-[#18181C] rounded-2xl border border-[#27272A] flex items-center gap-3 relative group">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-16 h-16 rounded-xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <p 
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="text-xs font-bold text-[#F7F3EF] hover:text-[#C8A96A] cursor-pointer truncate"
                    >
                      {p.title}
                    </p>
                    <p className="text-xs font-serif font-bold text-[#C8A96A]">{p.price}</p>
                    <a
                      href={p.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-[#EFB7C8] font-semibold underline"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-3 h-3 text-[#EFB7C8]" />
                    </a>
                  </div>

                  <button
                    onClick={() => onRemoveWishlist(p.id)}
                    className="p-2 text-[#A1A1AA] hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedProducts.length > 0 && (
            <div className="p-6 border-t border-[#27272A] bg-[#18181C] space-y-3">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-full bg-[#C8A96A] hover:bg-[#EFB7C8] text-[#121214] text-xs font-bold transition-colors shadow-md"
              >
                Continue Browsing
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
