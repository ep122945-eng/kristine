import { Product, Testimonial, FAQ, GalleryImage } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Alpha Arbutin Face & Body Serum',
    description: 'Strong whitening serum with Cranberry extract for a brighter, more even skin tone. Suitable for both face and body.',
    price: 350.00,
    image: '/images/products/alpha-arbutin.jpg',
    category: 'skincare',
    stock: 25,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '2',
    title: 'The Originote Brightening Moisturizer',
    description: 'Niacinamide + Tranexamic Acid moisturizer that lightens dark spots and deeply hydrates for a radiant complexion.',
    price: 420.00,
    image: '/images/products/originote-moisturizer.jpg',
    category: 'skincare',
    stock: 40,
    rating: 4.8,
    reviews: 210
  },
  {
    id: '3',
    title: 'Sace Lady Radiant Magic Cushion',
    description: 'Long-lasting, full-coverage cushion foundation with a natural glowing finish. Perfect for all-day wear.',
    price: 550.00,
    image: '/images/products/magic-cushion.jpg',
    category: 'makeup',
    stock: 15,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '4',
    title: 'TXA 377 Dark Spot Serum',
    description: 'Concentrated serum specifically formulated to target persistent dark spots and hyperpigmentation.',
    price: 480.00,
    image: '/images/products/dark-spot-serum.jpg',
    category: 'skincare',
    stock: 30,
    rating: 5.0,
    reviews: 67
  },
  {
    id: '5',
    title: 'Muge Leen Earth Tones Palette',
    description: 'Versatile 4-color eyeshadow palette featuring matte and shimmer neutral tones for a sophisticated look.',
    price: 280.00,
    image: '/images/products/eyeshadow.jpg',
    category: 'makeup',
    stock: 22,
    rating: 4.7,
    reviews: 112
  },
  {
    id: '6',
    title: 'Luxe Organix Niacinamide + Arbutin Lotion',
    description: 'Healthy light whitening serum lotion with 24h flawless glow formula. 350ml of sheer hydration.',
    price: 390.00,
    image: '/images/products/luxe-organix-lotion.jpg',
    category: 'skincare',
    stock: 18,
    rating: 4.8,
    reviews: 143
  },
  {
    id: '7',
    title: 'Pinkflash Volume Mascara',
    description: 'Get dramatic volume and length with this smudge-proof, long-wear mascara.',
    price: 199.00,
    image: '/images/products/mascara.jpg',
    category: 'makeup',
    stock: 50,
    rating: 4.9,
    reviews: 320
  },
  {
    id: '8',
    title: 'Ceramella Sunscreen SPF 50',
    description: 'Lightweight, invisible sunscreen with Ceramide and Vitamin C for ultimate sun protection and skin repair.',
    price: 380.00,
    image: '/images/products/sunscreen.jpg',
    category: 'skincare',
    stock: 60,
    rating: 4.9,
    reviews: 245
  },
  {
    id: '9',
    title: 'Owen James Soft Lip Tint',
    description: 'Highly pigmented, long-lasting lip tint that provides a soft velvet finish without drying your lips.',
    price: 250.00,
    image: '/images/products/lip-tint.jpg',
    category: 'makeup',
    stock: 35,
    rating: 4.8,
    reviews: 78
  },
  {
    id: '10',
    title: 'Quinnbella Multi-Use Tube',
    description: 'A versatile cream product for lips and cheeks, providing a natural flush of color in a convenient squeeze tube.',
    price: 220.00,
    image: '/images/products/multi-use.jpg',
    category: 'makeup',
    stock: 28,
    rating: 4.7,
    reviews: 54
  },
  {
    id: '11',
    title: 'A Bonne\' Miracle Spa Milk',
    description: 'White glutathione whitening lotion with Lycopene Tomato extract. Firms skin and provides a healthy glow.',
    price: 450.00,
    image: '/images/products/milky-lotion.jpg',
    category: 'skincare',
    stock: 20,
    rating: 4.9,
    reviews: 112
  },
  {
    id: '12',
    title: 'Dunuf Matte Lip Liner Set',
    description: 'Set of 6 high-pigment matte lip liner pencils in essential shades for the perfect pout.',
    price: 350.00,
    image: '/images/products/lip-liner.jpg',
    category: 'makeup',
    stock: 12,
    rating: 4.6,
    reviews: 42
  },
  {
    id: '13',
    title: 'Mist & Fix Setting Spray',
    description: 'Lightweight setting spray that locks in your makeup all day while providing a refreshing moisture boost.',
    price: 299.00,
    image: '/images/products/mist-fix.jpg',
    category: 'makeup',
    stock: 45,
    rating: 4.8,
    reviews: 96
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Eleanor Vance',
    role: 'Loyal Client',
    content: 'The most relaxing experience I have ever had at a beauty studio. My lashes look incredibly natural and last for weeks!',
    avatar: 'https://i.pravatar.cc/150?u=eleanor',
    rating: 5
  },
  {
    id: '2',
    name: 'Sophia Rossi',
    role: 'Bridal Client',
    content: 'Kristine did my makeup for my wedding and I felt like a queen. The attention to detail is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sophia',
    rating: 5
  },
  {
    id: '3',
    name: 'Isabella Chen',
    role: 'Monthly Regular',
    content: 'I wouldn’t trust anyone else with my brows. The studio is beautiful and the hygiene standards are top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=isabella',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long do lash extensions last?',
    answer: 'Standard lash extensions typically last 4-6 weeks, but we recommend infills every 2-3 weeks to maintain a full look.'
  },
  {
    question: 'What should I do before my appointment?',
    answer: 'Please arrive with a clean face, free of any eye makeup or oily products. Avoid caffeine if you are prone to fluttery eyes.'
  },
  {
    question: 'Do you offer bridal packages?',
    answer: 'Yes! We have comprehensive bridal packages including makeup, lash trials, and skincare preparation. Contact us for a custom quote.'
  }
];

export const GALLERY: GalleryImage[] = [
  {
    id: '1',
    src: '/images/products/alpha-arbutin.jpg',
    alt: 'Alpha Arbutin Serum',
    category: 'Skincare'
  },
  {
    id: '2',
    src: '/images/products/magic-cushion.jpg',
    alt: 'Magic Cushion',
    category: 'Makeup'
  },
  {
    id: '3',
    src: '/images/products/originote-moisturizer.jpg',
    alt: 'Brightening Moisturizer',
    category: 'Skincare'
  },
  {
    id: '4',
    src: '/images/products/eyeshadow.jpg',
    alt: 'Earth Tones Palette',
    category: 'Makeup'
  },
  {
    id: '5',
    src: '/images/products/sunscreen.jpg',
    alt: 'Sunscreen Protection',
    category: 'Skincare'
  }
];
