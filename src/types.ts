export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'skincare' | 'lashes' | 'brows' | 'kits' | 'vouchers';
  stock: number;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  isBeforeAfter?: boolean;
  beforeSrc?: string;
  afterSrc?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}
