export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  galleryImages?: string[];
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullReview: string;
  pros: string[];
  cons: string[];
  aliexpressUrl: string;
  amazonUrl?: string;
  isTrending?: boolean;
  isFeatured?: boolean;
  isChoice?: boolean;
  isPrime?: boolean;
  tags: string[];
  specifications?: Record<string, string>;
  updatedDate: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  relatedProductIds: string[];
  pinterestPinImage?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  image: string;
  itemCount: number;
  accentColor?: string;
}

export type ViewMode = 
  | 'home' 
  | 'shop' 
  | 'category' 
  | 'product-review' 
  | 'blog' 
  | 'blog-post' 
  | 'about' 
  | 'contact' 
  | 'privacy' 
  | 'affiliate-disclosure' 
  | 'disclaimer' 
  | 'terms';
