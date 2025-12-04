import { MenuItemData, Brand, ProductCard, HighlightedProduct, CategoryColumn, PromotionContent } from './types';

export const NAV_MENU_ITEMS: MenuItemData[] = [
  { type: 'simple-link', label: 'New In', href: '/new-in', pageIdentifier: 'underConstruction' },
  {
    type: 'mega-menu',
    label: 'Women',
    columns: [
      {
        title: 'Clothing',
        links: [
          { label: 'Dresses', href: '/women/clothing/dresses', pageIdentifier: 'dresses' },
          { label: 'Tops & Tees', href: '/women/clothing/tops', pageIdentifier: 'tops_tees' },
          { label: 'Jeans & Denim', href: '/women/clothing/jeans', pageIdentifier: 'jeans_denim' },
          { label: 'Activewear', href: '/women/clothing/activewear', pageIdentifier: 'activewear' },
          { label: 'Lingerie & Sleepwear', href: '/women/clothing/lingerie', pageIdentifier: 'lingerie_sleepwear' },
        ],
      },
      {
        title: 'Shoes',
        links: [
          { label: 'Sneakers', href: '/women/shoes/sneakers', pageIdentifier: 'sneakers' },
          { label: 'Heels', href: '/women/shoes/heels', pageIdentifier: 'heels' },
          { label: 'Flats & Loafers', href: '/women/shoes/flats', pageIdentifier: 'flats_loafers' },
          { label: 'Sandals', href: '/women/shoes/sandals', pageIdentifier: 'sandals' },
          { label: 'Boots', href: '/women/shoes/boots', pageIdentifier: 'boots' },
        ],
      },
      {
        title: 'Accessories',
        links: [
          { label: 'Bags & Wallets', href: '/women/accessories/bags', pageIdentifier: 'bags_wallets' },
          { label: 'Jewelry', href: '/women/accessories/jewelry', pageIdentifier: 'jewelry' },
          { label: 'Watches', href: '/women/accessories/watches', pageIdentifier: 'watches' },
          { label: 'Sunglasses', href: '/women/accessories/sunglasses', pageIdentifier: 'sunglasses' },
        ],
      },
    ],
    promotion: {
      icon: 'fa-solid fa-tag',
      title: 'Sale up to 80%',
      description: 'On selected top brands',
      buttonText: 'Shop Now',
      buttonHref: '/sale',
      pageIdentifier: 'underConstruction',
      bgColorClass: 'bg-gray-100',
      textColorClass: 'text-black',
      buttonBgClass: 'bg-bfl-black',
      buttonHoverClass: 'hover:bg-gray-800',
    },
  },
  {
    type: 'mega-menu',
    label: 'Men',
    pageIdentifier: 'menFashion', // Correct: Top-level Men's page
    columns: [
      {
        title: 'Top Categories',
        links: [
          { label: 'T-Shirts & Polos', href: '/men/clothing/tshirts', pageIdentifier: 'men_tshirts_polos' }, // Corrected
          { label: 'Shirts', href: '/men/clothing/shirts', pageIdentifier: 'men_shirts' }, // Corrected
          { label: 'Pants & Chinos', href: '/men/clothing/pants', pageIdentifier: 'men_pants_chinos' }, // Corrected
          { label: 'Sportswear', href: '/men/clothing/sportswear', pageIdentifier: 'men_sportswear' }, // Corrected
        ],
      },
      {
        title: 'Footwear',
        links: [
          { label: 'Running Shoes', href: '/men/shoes/running', pageIdentifier: 'men_running_shoes' }, // Corrected
          { label: 'Formal Shoes', href: '/men/shoes/formal', pageIdentifier: 'men_formal_shoes' }, // Corrected
          { label: 'Sandals', href: '/men/shoes/sandals', pageIdentifier: 'men_sandals' }, // Corrected
        ],
      },
    ],
    promotion: {
      title: 'New Arrivals',
      description: 'Check out the latest drops.',
      buttonText: 'View All',
      buttonHref: '/new-arrivals',
      pageIdentifier: 'underConstruction', // No specific page requested for this promotion
      bgColorClass: 'bg-gray-900',
      textColorClass: 'text-white',
      buttonBgClass: 'bg-bfl-yellow',
      buttonHoverClass: 'hover:bg-yellow-400',
    },
  },
  { type: 'simple-link', label: 'Kids', href: '/kids', pageIdentifier: 'underConstruction' },
  { type: 'simple-link', label: 'Toys', href: '/toys', pageIdentifier: 'underConstruction' },
  { type: 'simple-link', label: 'Sports', href: '/sports', pageIdentifier: 'underConstruction' },
  { type: 'simple-link', label: 'Home', href: '/home', pageIdentifier: 'underConstruction' },
  { type: 'simple-link', label: 'Brands', href: '/brands', pageIdentifier: 'underConstruction', isHighlight: true },
];

export const BRANDS_STRIP: Brand[] = [
  { name: 'ADIDAS' },
  { name: 'NIKE' },
  { name: 'PUMA' },
  { name: 'CALVIN KLEIN' },
  { name: 'TOMMY HILFIGER' },
  { name: 'GUESS' },
];

// Data specifically for the Women's Fashion Page
export const WOMEN_MEGA_MENU_DETAILS: { columns: CategoryColumn[]; promotion?: PromotionContent; } = {
  columns: [
    {
      title: 'Clothing',
      links: [
        { label: 'Dresses', href: '/women/clothing/dresses', pageIdentifier: 'dresses' },
        { label: 'Tops & Tees', href: '/women/clothing/tops', pageIdentifier: 'tops_tees' },
        { label: 'Jeans & Denim', href: '/women/clothing/jeans', pageIdentifier: 'jeans_denim' },
        { label: 'Activewear', href: '/women/clothing/activewear', pageIdentifier: 'activewear' },
        { label: 'Lingerie & Sleepwear', href: '/women/clothing/lingerie', pageIdentifier: 'lingerie_sleepwear' },
      ],
    },
    {
      title: 'Shoes',
      links: [
        { label: 'Sneakers', href: '/women/shoes/sneakers', pageIdentifier: 'sneakers' },
        { label: 'Heels', href: '/women/shoes/heels', pageIdentifier: 'heels' },
        { label: 'Flats & Loafers', href: '/women/shoes/flats', pageIdentifier: 'flats_loafers' },
        { label: 'Sandals', href: '/women/shoes/sandals', pageIdentifier: 'sandals' },
        { label: 'Boots', href: '/women/shoes/boots', pageIdentifier: 'boots' },
      ],
    },
    {
      title: 'Accessories',
      links: [
        { label: 'Bags & Wallets', href: '/women/accessories/bags', pageIdentifier: 'bags_wallets' },
        { label: 'Jewelry', href: '/women/accessories/jewelry', pageIdentifier: 'jewelry' },
        { label: 'Watches', href: '/women/accessories/watches', pageIdentifier: 'watches' },
        { label: 'Sunglasses', href: '/women/accessories/sunglasses', pageIdentifier: 'sunglasses' },
      ],
    },
  ],
  promotion: {
    icon: 'fa-solid fa-tag',
    title: 'Sale up to 80%',
    description: 'On selected top brands',
    buttonText: 'Shop Now',
    buttonHref: '/sale',
    pageIdentifier: 'underConstruction',
    bgColorClass: 'bg-gray-100',
    textColorClass: 'text-black',
    buttonBgClass: 'bg-bfl-black',
    buttonHoverClass: 'hover:bg-gray-800',
  },
};

// Data specifically for the Men's Fashion Page and its sub-categories
export const MEN_MEGA_MENU_DETAILS: { columns: CategoryColumn[]; promotion?: PromotionContent; } = {
  columns: [
    {
      title: 'Top Categories',
      links: [
        { label: 'T-Shirts & Polos', href: '/men/clothing/tshirts', pageIdentifier: 'men_tshirts_polos' },
        { label: 'Shirts', href: '/men/clothing/shirts', pageIdentifier: 'men_shirts' },
        { label: 'Pants & Chinos', href: '/men/clothing/pants', pageIdentifier: 'men_pants_chinos' },
        { label: 'Sportswear', href: '/men/clothing/sportswear', pageIdentifier: 'men_sportswear' },
      ],
    },
    {
      title: 'Footwear',
      links: [
        { label: 'Running Shoes', href: '/men/shoes/running', pageIdentifier: 'men_running_shoes' },
        { label: 'Formal Shoes', href: '/men/shoes/formal', pageIdentifier: 'men_formal_shoes' },
        { label: 'Sandals', href: '/men/shoes/sandals', pageIdentifier: 'men_sandals' },
      ],
    },
  ],
  promotion: {
    title: 'New Arrivals',
    description: 'Check out the latest drops.',
    buttonText: 'View All',
    buttonHref: '/new-arrivals',
    pageIdentifier: 'underConstruction', // No specific page requested for this promotion
    bgColorClass: 'bg-gray-900',
    textColorClass: 'text-white',
    buttonBgClass: 'bg-bfl-yellow',
    buttonHoverClass: 'hover:bg-yellow-400',
  },
};

export const DUMMY_WOMEN_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'p1', name: 'Vintage Denim Jacket', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Denim+Jacket', offer: 'New Arrival' },
  { id: 'p2', name: 'Floral Maxi Dress', price: 'AED 95', imageUrl: 'https://via.placeholder.com/300x400/FFA07A/FFFFFF?text=Maxi+Dress', offer: '20% Off' },
  { id: 'p3', name: 'Leather Shoulder Bag', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/DEB887/000000?text=Shoulder+Bag' },
  { id: 'p4', name: 'Retro Sneakers', price: 'AED 110', imageUrl: 'https://via.placeholder.com/300x400/F08080/FFFFFF?text=Sneakers', offer: 'Limited Stock' },
  { id: 'p5', name: 'Silk Scarf', price: 'AED 45', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Silk+Scarf' },
  { id: 'p6', name: 'Boho Blouse', price: 'AED 70', imageUrl: 'https://via.placeholder.com/300x400/DDA0DD/FFFFFF?text=Boho+Blouse' },
  { id: 'p7', name: 'High-Waist Jeans', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/87CEEB/FFFFFF?text=High-Waist+Jeans' },
  { id: 'p8', name: 'Stylish Sunglasses', price: 'AED 60', imageUrl: 'https://via.placeholder.com/300x400/C0C0C0/000000?text=Sunglasses' },
  { id: 'p9', name: 'Knitted Sweater', price: 'AED 85', imageUrl: 'https://via.placeholder.com/300x400/D3D3D3/000000?text=Sweater', offer: 'Seasonal Sale' },
  { id: 'p10', name: 'Ankle Boots', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/A9A9A9/FFFFFF?text=Boots' },
];

export const DUMMY_WOMEN_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hp1',
    name: 'Elegant Evening Gown',
    description: 'Perfect for special occasions. Luxurious fabric and timeless design.',
    price: 'AED 350',
    images: [
      'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Gown+Front',
      'https://via.placeholder.com/600x400/9370DB/FFFFFF?text=Gown+Side',
      'https://via.placeholder.com/600x400/BA55D3/FFFFFF?text=Gown+Detail',
    ],
  },
  {
    id: 'hp2',
    name: 'Casual Chic Jumpsuit',
    description: 'Comfortable and stylish, ideal for daily wear or a relaxed outing.',
    price: 'AED 190',
    images: [
      'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Jumpsuit+Model',
      'https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Jumpsuit+Fabric',
      'https://via.placeholder.com/600x400/6495ED/FFFFFF?text=Jumpsuit+Detail',
    ],
  },
  {
    id: 'hp3',
    name: 'Designer Handbag',
    description: 'A statement piece for any outfit. Crafted with premium materials.',
    price: 'AED 500',
    images: [
      'https://via.placeholder.com/600x400/CD853F/FFFFFF?text=Handbag+Front',
      'https://via.placeholder.com/600x400/D2B48C/000000?text=Handbag+Open',
      'https://via.placeholder.com/600x400/A0522D/FFFFFF?text=Handbag+Texture',
    ],
  },
];


// --- DUMMY DATA FOR NEW CATEGORY PAGES ---

export const DUMMY_DRESSES_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'd1', name: 'Summer Floral Dress', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/FFC0CB/000000?text=Floral+Dress', offer: 'New' },
  { id: 'd2', name: 'Elegant Maxi Dress', price: 'AED 220', imageUrl: 'https://via.placeholder.com/300x400/98FB98/FFFFFF?text=Maxi+Dress' },
  { id: 'd3', name: 'Cocktail Dress', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/E0BBE4/000000?text=Cocktail+Dress', offer: 'Sale' },
  { id: 'd4', name: 'Casual T-Shirt Dress', price: 'AED 80', imageUrl: 'https://via.placeholder.com/300x400/DAA520/FFFFFF?text=T-Shirt+Dress' },
  { id: 'd5', name: 'Formal Gown', price: 'AED 400', imageUrl: 'https://via.placeholder.com/300x400/87CEFA/FFFFFF?text=Formal+Gown', offer: 'Premium' },
];

export const DUMMY_DRESSES_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hd1',
    name: 'V-Neck Midi Dress',
    description: 'Chic and versatile, perfect for day to night.',
    price: 'AED 210',
    images: [
      'https://via.placeholder.com/600x400/FFB6C1/000000?text=V-Neck+Dress+1',
      'https://via.placeholder.com/600x400/FF69B4/FFFFFF?text=V-Neck+Dress+2',
    ],
  },
  {
    id: 'hd2',
    name: 'Bohemian Print Dress',
    description: 'Flowy and comfortable, ideal for beach holidays.',
    price: 'AED 160',
    images: [
      'https://via.placeholder.com/600x400/F0E68C/000000?text=Boho+Dress+1',
      'https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Boho+Dress+2',
    ],
  },
];

export const DUMMY_TOPS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 't1', name: 'Cotton T-Shirt', price: 'AED 50', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Cotton+Tee', offer: 'Basic' },
  { id: 't2', name: 'Silk Blouse', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/E6E6FA/FFFFFF?text=Silk+Blouse' },
  { id: 't3', name: 'Knitted Cardigan', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/DDA0DD/000000?text=Cardigan', offer: 'Warm' },
  { id: 't4', name: 'Crop Top', price: 'AED 45', imageUrl: 'https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Crop+Top' },
  { id: 't5', name: 'Polo Shirt', price: 'AED 75', imageUrl: 'https://via.placeholder.com/300x400/90EE90/FFFFFF?text=Polo+Shirt', offer: 'Sporty' },
];

export const DUMMY_TOPS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'ht1',
    name: 'Ribbed Knit Top',
    description: 'Versatile staple for any wardrobe, comfortable fit.',
    price: 'AED 65',
    images: [
      'https://via.placeholder.com/600x400/C0C0C0/000000?text=Knit+Top+1',
      'https://via.placeholder.com/600x400/A9A9A9/FFFFFF?text=Knit+Top+2',
    ],
  },
  {
    id: 'ht2',
    name: 'Embroidered Blouse',
    description: 'Adds a touch of elegance to your casual look.',
    price: 'AED 130',
    images: [
      'https://via.placeholder.com/600x400/F5DEB3/000000?text=Embroidery+1',
      'https://via.placeholder.com/600x400/FFEFD5/FFFFFF?text=Embroidery+2',
    ],
  },
];

export const DUMMY_JEANS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'j1', name: 'Skinny Jeans', price: 'AED 160', imageUrl: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Skinny+Jeans', offer: 'Classic' },
  { id: 'j2', name: 'Mom Fit Jeans', price: 'AED 140', imageUrl: 'https://via.placeholder.com/300x400/6A5ACD/000000?text=Mom+Jeans' },
  { id: 'j3', name: 'Distressed Denim', price: 'AED 175', imageUrl: 'https://via.placeholder.com/300x400/7B68EE/FFFFFF?text=Distressed+Denim', offer: 'Trendy' },
  { id: 'j4', name: 'Wide Leg Jeans', price: 'AED 155', imageUrl: 'https://via.placeholder.com/300x400/483D8B/FFFFFF?text=Wide+Leg+Jeans' },
  { id: 'j5', name: 'Black Denim', price: 'AED 135', imageUrl: 'https://via.placeholder.com/300x400/2F4F4F/FFFFFF?text=Black+Denim', offer: 'Essential' },
];

export const DUMMY_JEANS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hj1',
    name: 'High-Rise Straight Jeans',
    description: 'Comfortable and flattering, a wardrobe must-have.',
    price: 'AED 145',
    images: [
      'https://via.placeholder.com/600x400/6495ED/000000?text=Straight+Jeans+1',
      'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Straight+Jeans+2',
    ],
  },
  {
    id: 'hj2',
    name: 'Denim Overalls',
    description: 'Fun and stylish for a relaxed weekend look.',
    price: 'AED 190',
    images: [
      'https://via.placeholder.com/600x400/ADD8E6/000000?text=Overalls+1',
      'https://via.placeholder.com/600x400/B0E0E6/FFFFFF?text=Overalls+2',
    ],
  },
];

export const DUMMY_ACTIVEWEAR_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'a1', name: 'Sports Bra', price: 'AED 80', imageUrl: 'https://via.placeholder.com/300x400/FF6347/FFFFFF?text=Sports+Bra', offer: 'Supportive' },
  { id: 'a2', name: 'Yoga Leggings', price: 'AED 110', imageUrl: 'https://via.placeholder.com/300x400/87CEEB/000000?text=Leggings', offer: 'Comfort' },
  { id: 'a3', name: 'Running Shorts', price: 'AED 60', imageUrl: 'https://via.placeholder.com/300x400/00CED1/FFFFFF?text=Running+Shorts', offer: 'Lightweight' },
  { id: 'a4', name: 'Workout Tank Top', price: 'AED 55', imageUrl: 'https://via.placeholder.com/300x400/40E0D0/FFFFFF?text=Tank+Top' },
  { id: 'a5', name: 'Hooded Jacket', price: 'AED 140', imageUrl: 'https://via.placeholder.com/300x400/66CDAA/000000?text=Jacket', offer: 'Warm-up' },
];

export const DUMMY_ACTIVEWEAR_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'ha1',
    name: 'Seamless Active Set',
    description: 'High-performance fabric for ultimate flexibility.',
    price: 'AED 200',
    images: [
      'https://via.placeholder.com/600x400/20B2AA/FFFFFF?text=Active+Set+1',
      'https://via.placeholder.com/600x400/3CB371/FFFFFF?text=Active+Set+2',
    ],
  },
  {
    id: 'ha2',
    name: 'Compression Leggings',
    description: 'Enhance your workout with superior support.',
    price: 'AED 130',
    images: [
      'https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Compression+1',
      'https://via.placeholder.com/600x400/66CDAA/FFFFFF?text=Compression+2',
    ],
  },
];

export const DUMMY_LINGERIE_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'l1', name: 'Lace Bralette', price: 'AED 70', imageUrl: 'https://via.placeholder.com/300x400/FFC0CB/000000?text=Bralette', offer: 'Delicate' },
  { id: 'l2', name: 'Silk Robe', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/E6E6FA/FFFFFF?text=Silk+Robe' },
  { id: 'l3', name: 'Cotton Pajama Set', price: 'AED 110', imageUrl: 'https://via.placeholder.com/300x400/DDA0DD/000000?text=Pajamas', offer: 'Comfort' },
  { id: 'l4', name: 'Push-Up Bra', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Push-Up+Bra' },
  { id: 'l5', name: 'Chemise', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/BA55D3/FFFFFF?text=Chemise', offer: 'Soft' },
];

export const DUMMY_LINGERIE_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hl1',
    name: 'Luxury Lingerie Set',
    description: 'Exquisite lace and satin for an elegant feel.',
    price: 'AED 250',
    images: [
      'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Lingerie+Set+1',
      'https://via.placeholder.com/600x400/9370DB/FFFFFF?text=Lingerie+Set+2',
    ],
  },
  {
    id: 'hl2',
    name: 'Silk Sleep Mask & Scrunchie Set',
    description: 'Perfect for a peaceful night\'s sleep and gentle on hair.',
    price: 'AED 85',
    images: [
      'https://via.placeholder.com/600x400/DA70D6/000000?text=Sleep+Set+1',
      'https://via.placeholder.com/600x400/EE82EE/FFFFFF?text=Sleep+Set+2',
    ],
  },
];

export const DUMMY_SNEAKERS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 's1', name: 'Classic White Sneakers', price: 'AED 200', imageUrl: 'https://via.placeholder.com/300x400/F5F5DC/000000?text=White+Sneakers', offer: 'Bestseller' },
  { id: 's2', name: 'Running Shoes', price: 'AED 250', imageUrl: 'https://via.placeholder.com/300x400/E0FFFF/000000?text=Running+Shoes', offer: 'Performance' },
  { id: 's3', name: 'High-Top Fashion Sneakers', price: 'AED 220', imageUrl: 'https://via.placeholder.com/300x400/D3D3D3/000000?text=High-Top+Sneakers' },
  { id: 's4', name: 'Canvas Sneakers', price: 'AED 100', imageUrl: 'https://via.placeholder.com/300x400/FAFAD2/000000?text=Canvas+Sneakers', offer: 'Casual' },
];

export const DUMMY_SNEAKERS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hs1',
    name: 'Retro Platform Sneakers',
    description: 'Elevate your style with these trendy platform sneakers.',
    price: 'AED 280',
    images: [
      'https://via.placeholder.com/600x400/FFD700/000000?text=Platform+Sneakers+1',
      'https://via.placeholder.com/600x400/FFA500/000000?text=Platform+Sneakers+2',
    ],
  },
  {
    id: 'hs2',
    name: 'Breathable Mesh Sneakers',
    description: 'Lightweight and comfortable, perfect for daily walks.',
    price: 'AED 190',
    images: [
      'https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Mesh+Sneakers+1',
      'https://via.placeholder.com/600x400/ADD8E6/FFFFFF?text=Mesh+Sneakers+2',
    ],
  },
];

export const DUMMY_HEELS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'h1', name: 'Stiletto Heels', price: 'AED 300', imageUrl: 'https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Stiletto+Heels', offer: 'Elegant' },
  { id: 'h2', name: 'Block Heels', price: 'AED 250', imageUrl: 'https://via.placeholder.com/300x400/DDA0DD/FFFFFF?text=Block+Heels' },
  { id: 'h3', name: 'Wedge Sandals', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/FFB6C1/FFFFFF?text=Wedge+Sandals', offer: 'Comfortable' },
  { id: 'h4', name: 'Pumps', price: 'AED 280', imageUrl: 'https://via.placeholder.com/300x400/BA55D3/FFFFFF?text=Pumps' },
];

export const DUMMY_HEELS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hh1',
    name: 'Velvet Ankle Strap Heels',
    description: 'Luxurious velvet with a delicate ankle strap, perfect for evenings.',
    price: 'AED 320',
    images: [
      'https://via.placeholder.com/600x400/9400D3/FFFFFF?text=Velvet+Heels+1',
      'https://via.placeholder.com/600x400/BA55D3/FFFFFF?text=Velvet+Heels+2',
    ],
  },
  {
    id: 'hh2',
    name: 'Classic Black Pointed Heels',
    description: 'A timeless essential for any professional or formal attire.',
    price: 'AED 290',
    images: [
      'https://via.placeholder.com/600x400/000000/FFFFFF?text=Black+Heels+1',
      'https://via.placeholder.com/600x400/36454F/FFFFFF?text=Black+Heels+2',
    ],
  },
];

export const DUMMY_FLATS_LOAFERS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'fl1', name: 'Ballet Flats', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/FFE4E1/000000?text=Ballet+Flats', offer: 'Everyday' },
  { id: 'fl2', name: 'Leather Loafers', price: 'AED 190', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Leather+Loafers' },
  { id: 'fl3', name: 'Embellished Mules', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/FFF0F5/000000?text=Mules', offer: 'Chic' },
  { id: 'fl4', name: 'Espadrille Flats', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/F0E68C/000000?text=Espadrille' },
];

export const DUMMY_FLATS_LOAFERS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hfl1',
    name: 'Suede Driving Loafers',
    description: 'Ultimate comfort and style for long drives or casual outings.',
    price: 'AED 210',
    images: [
      'https://via.placeholder.com/600x400/BC8F8F/FFFFFF?text=Driving+Loafers+1',
      'https://via.placeholder.com/600x400/CD853F/FFFFFF?text=Driving+Loafers+2',
    ],
  },
  {
    id: 'hfl2',
    name: 'Pointed Toe Flats',
    description: 'Sophisticated and comfortable, perfect for office wear.',
    price: 'AED 160',
    images: [
      'https://via.placeholder.com/600x400/C0C0C0/000000?text=Pointed+Flats+1',
      'https://via.placeholder.com/600x400/D3D3D3/000000?text=Pointed+Flats+2',
    ],
  },
];

export const DUMMY_SANDALS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'sa1', name: 'Leather Strappy Sandals', price: 'AED 140', imageUrl: 'https://via.placeholder.com/300x400/F4A460/000000?text=Strappy+Sandals', offer: 'Summer' },
  { id: 'sa2', name: 'Slide Sandals', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/FFF8DC/000000?text=Slide+Sandals' },
  { id: 'sa3', name: 'Platform Sandals', price: 'AED 170', imageUrl: 'https://via.placeholder.com/300x400/DAA520/000000?text=Platform+Sandals', offer: 'Trendy' },
  { id: 'sa4', name: 'Flat Sandals', price: 'AED 80', imageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Flat+Sandals' },
];

export const DUMMY_SANDALS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hsa1',
    name: 'Embellished Wedge Sandals',
    description: 'Sparkling details on comfortable wedges, perfect for resort wear.',
    price: 'AED 190',
    images: [
      'https://via.placeholder.com/600x400/FFA07A/FFFFFF?text=Wedge+Sandals+1',
      'https://via.placeholder.com/600x400/FF7F50/FFFFFF?text=Wedge+Sandals+2',
    ],
  },
  {
    id: 'hsa2',
    name: 'Minimalist Toe-Ring Sandals',
    description: 'Sleek and simple design for an effortlessly chic look.',
    price: 'AED 120',
    images: [
      'https://via.placeholder.com/600x400/F08080/FFFFFF?text=Toe-Ring+Sandals+1',
      'https://via.placeholder.com/600x400/CD5C5C/FFFFFF?text=Toe-Ring+Sandals+2',
    ],
  },
];

export const DUMMY_BOOTS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'b1', name: 'Leather Ankle Boots', price: 'AED 350', imageUrl: 'https://via.placeholder.com/300x400/A0522D/FFFFFF?text=Ankle+Boots', offer: 'Classic' },
  { id: 'b2', name: 'Knee-High Boots', price: 'AED 450', imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Knee-High+Boots' },
  { id: 'b3', name: 'Combat Boots', price: 'AED 280', imageUrl: 'https://via.placeholder.com/300x400/556B2F/FFFFFF?text=Combat+Boots', offer: 'Edgy' },
  { id: 'b4', name: 'Rain Boots', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Rain+Boots' },
];

export const DUMMY_BOOTS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hb1',
    name: 'Suede Over-the-Knee Boots',
    description: 'Statement boots crafted from soft suede, perfect for winter fashion.',
    price: 'AED 500',
    images: [
      'https://via.placeholder.com/600x400/708090/FFFFFF?text=OTK+Boots+1',
      'https://via.placeholder.com/600x400/778899/FFFFFF?text=OTK+Boots+2',
    ],
  },
  {
    id: 'hb2',
    name: 'Chelsea Boots',
    description: 'Versatile and comfortable, a timeless addition to any wardrobe.',
    price: 'AED 320',
    images: [
      'https://via.placeholder.com/600x400/2F4F4F/FFFFFF?text=Chelsea+Boots+1',
      'https://via.placeholder.com/600x400/696969/FFFFFF?text=Chelsea+Boots+2',
    ],
  },
];

export const DUMMY_BAGS_WALLETS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'bw1', name: 'Leather Tote Bag', price: 'AED 280', imageUrl: 'https://via.placeholder.com/300x400/BC8F8F/000000?text=Leather+Tote', offer: 'Spacious' },
  { id: 'bw2', name: 'Crossbody Bag', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/CD853F/000000?text=Crossbody+Bag' },
  { id: 'bw3', name: 'Clutch Wallet', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/F5DEB3/000000?text=Clutch+Wallet', offer: 'Compact' },
  { id: 'bw4', name: 'Backpack', price: 'AED 200', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Backpack' },
];

export const DUMMY_BAGS_WALLETS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hbw1',
    name: 'Designer Shoulder Bag',
    description: 'A luxurious statement piece crafted from premium Italian leather.',
    price: 'AED 600',
    images: [
      'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=Shoulder+Bag+1',
      'https://via.placeholder.com/600x400/A0522D/FFFFFF?text=Shoulder+Bag+2',
    ],
  },
  {
    id: 'hbw2',
    name: 'Travel Wallet Organizer',
    description: 'Keep your essentials organized and secure while traveling.',
    price: 'AED 110',
    images: [
      'https://via.placeholder.com/600x400/DEB887/000000?text=Travel+Wallet+1',
      'https://via.placeholder.com/600x400/F5DEB3/000000?text=Travel+Wallet+2',
    ],
  },
];

export const DUMMY_JEWELRY_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'jw1', name: 'Gold Plated Necklace', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Gold+Necklace', offer: 'New' },
  { id: 'jw2', name: 'Sterling Silver Earrings', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/C0C0C0/000000?text=Silver+Earrings' },
  { id: 'jw3', name: 'Pearl Bracelet', price: 'AED 250', imageUrl: 'https://via.placeholder.com/300x400/F5F5DC/000000?text=Pearl+Bracelet', offer: 'Classic' },
  { id: 'jw4', name: 'Gemstone Ring', price: 'AED 300', imageUrl: 'https://via.placeholder.com/300x400/ADFF2F/000000?text=Gemstone+Ring' },
];

export const DUMMY_JEWELRY_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hjw1',
    name: 'Diamond Stud Earrings',
    description: 'Timeless elegance with brilliant-cut diamonds, perfect for any occasion.',
    price: 'AED 1200',
    images: [
      'https://via.placeholder.com/600x400/B0E0E6/000000?text=Diamond+Studs+1',
      'https://via.placeholder.com/600x400/87CEFA/000000?text=Diamond+Studs+2',
    ],
  },
  {
    id: 'hjw2',
    name: 'Personalized Initial Necklace',
    description: 'A unique and thoughtful gift, customize with your initial.',
    price: 'AED 220',
    images: [
      'https://via.placeholder.com/600x400/FFC0CB/000000?text=Initial+Necklace+1',
      'https://via.placeholder.com/600x400/FF69B4/000000?text=Initial+Necklace+2',
    ],
  },
];

export const DUMMY_WATCHES_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'w1', name: 'Classic Leather Watch', price: 'AED 400', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Leather+Watch', offer: 'Timeless' },
  { id: 'w2', name: 'Smartwatch', price: 'AED 800', imageUrl: 'https://via.placeholder.com/300x400/B0C4DE/000000?text=Smartwatch', offer: 'Tech' },
  { id: 'w3', name: 'Sport Chronograph', price: 'AED 550', imageUrl: 'https://via.placeholder.com/300x400/778899/000000?text=Chronograph', offer: 'Durable' },
  { id: 'w4', name: 'Minimalist Design Watch', price: 'AED 300', imageUrl: 'https://via.placeholder.com/300x400/E6E6FA/000000?text=Minimalist+Watch' },
];

export const DUMMY_WATCHES_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hw1',
    name: 'Automatic Stainless Steel Watch',
    description: 'Precision engineering with a sophisticated design, built to last.',
    price: 'AED 950',
    images: [
      'https://via.placeholder.com/600x400/696969/FFFFFF?text=Automatic+Watch+1',
      'https://via.placeholder.com/600x400/708090/FFFFFF?text=Automatic+Watch+2',
    ],
  },
  {
    id: 'hw2',
    name: 'Fashion Crystal Watch',
    description: 'Sparkling crystals add a touch of glamour to your wrist.',
    price: 'AED 480',
    images: [
      'https://via.placeholder.com/600x400/FFDAB9/000000?text=Crystal+Watch+1',
      'https://via.placeholder.com/600x400/F0E68C/000000?text=Crystal+Watch+2',
    ],
  },
];

export const DUMMY_SUNGLASSES_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'sg1', name: 'Aviator Sunglasses', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/A9A9A9/000000?text=Aviator', offer: 'Iconic' },
  { id: 'sg2', name: 'Cat-Eye Sunglasses', price: 'AED 100', imageUrl: 'https://via.placeholder.com/300x400/DDA0DD/000000?text=Cat-Eye' },
  { id: 'sg3', name: 'Round Frame Sunglasses', price: 'AED 95', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Round+Frame', offer: 'Retro' },
  { id: 'sg4', name: 'Sport Sunglasses', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/5F9EA0/000000?text=Sport+Sunglasses' },
];

export const DUMMY_SUNGLASSES_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hsg1',
    name: 'Polarized Designer Sunglasses',
    description: 'Premium lenses offer superior protection and clarity, in a chic design.',
    price: 'AED 250',
    images: [
      'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Polarized+1',
      'https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Polarized+2',
    ],
  },
  {
    id: 'hsg2',
    name: 'Oversized Square Sunglasses',
    description: 'Make a bold fashion statement with these large, stylish frames.',
    price: 'AED 180',
    images: [
      'https://via.placeholder.com/600x400/C0C0C0/000000?text=Oversized+1',
      'https://via.placeholder.com/600x400/A9A9A9/000000?text=Oversized+2',
    ],
  },
];


// --- MEN'S DUMMY DATA ---

export const DUMMY_MEN_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'mp1', name: 'Men\'s Casual Shirt', price: 'AED 110', imageUrl: 'https://via.placeholder.com/300x400/87CEEB/FFFFFF?text=Men+Shirt', offer: 'New Arrival' },
  { id: 'mp2', name: 'Slim Fit Jeans', price: 'AED 170', imageUrl: 'https://via.placeholder.com/300x400/4682B4/FFFFFF?text=Slim+Jeans', offer: 'Best Seller' },
  { id: 'mp3', name: 'Leather Wallet', price: 'AED 85', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Men+Wallet' },
  { id: 'mp4', name: 'Sport Watch', price: 'AED 250', imageUrl: 'https://via.placeholder.com/300x400/778899/FFFFFF?text=Sport+Watch', offer: 'Limited Ed.' },
  { id: 'mp5', name: 'Classic Polo Shirt', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Polo+Shirt' },
  { id: 'mp6', name: 'Formal Trousers', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/696969/FFFFFF?text=Trousers' },
  { id: 'mp7', name: 'Running Sneakers', price: 'AED 220', imageUrl: 'https://via.placeholder.com/300x400/00CED1/FFFFFF?text=Running+Shoes' },
  { id: 'mp8', name: 'Aviator Sunglasses', price: 'AED 100', imageUrl: 'https://via.placeholder.com/300x400/A9A9A9/000000?text=Aviator+Men' },
];

export const DUMMY_MEN_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'mhp1',
    name: 'Men\'s Leather Jacket',
    description: 'Timeless style and superior craftsmanship for the modern man.',
    price: 'AED 450',
    images: [
      'https://via.placeholder.com/600x400/654321/FFFFFF?text=Leather+Jacket+1',
      'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=Leather+Jacket+2',
      'https://via.placeholder.com/600x400/A0522D/FFFFFF?text=Leather+Jacket+3',
    ],
  },
  {
    id: 'mhp2',
    name: 'Smart Casual Blazer',
    description: 'Versatile blazer perfect for office or weekend events.',
    price: 'AED 290',
    images: [
      'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Blazer+Front',
      'https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Blazer+Side',
      'https://via.placeholder.com/600x400/6495ED/FFFFFF?text=Blazer+Detail',
    ],
  },
  {
    id: 'mhp3',
    name: 'Premium Dive Watch',
    description: 'Robust and stylish, built for adventure and precision.',
    price: 'AED 700',
    images: [
      'https://via.placeholder.com/600x400/000080/FFFFFF?text=Dive+Watch+1',
      'https://via.placeholder.com/600x400/4169E1/FFFFFF?text=Dive+Watch+2',
      'https://via.placeholder.com/600x400/191970/FFFFFF?text=Dive+Watch+3',
    ],
  },
];

export const DUMMY_MEN_TSHIRTS_POLOS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'mtp1', name: 'Basic Cotton Tee', price: 'AED 45', imageUrl: 'https://via.placeholder.com/300x400/B0C4DE/000000?text=Cotton+Tee+Men', offer: 'Essential' },
  { id: 'mtp2', name: 'Striped Polo Shirt', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Striped+Polo', offer: 'Casual' },
  { id: 'mtp3', name: 'Graphic T-Shirt', price: 'AED 60', imageUrl: 'https://via.placeholder.com/300x400/E0FFFF/000000?text=Graphic+Tee+Men' },
  { id: 'mtp4', name: 'V-Neck T-Shirt', price: 'AED 50', imageUrl: 'https://via.placeholder.com/300x400/F0F8FF/000000?text=V-Neck+Tee+Men' },
];

export const DUMMY_MEN_TSHIRTS_POLOS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmtp1',
    name: 'Performance Polo Shirt',
    description: 'Moisture-wicking fabric keeps you cool and dry all day.',
    price: 'AED 110',
    images: [
      'https://via.placeholder.com/600x400/90EE90/000000?text=Perf+Polo+1',
      'https://via.placeholder.com/600x400/3CB371/000000?text=Perf+Polo+2',
    ],
  },
  {
    id: 'hmtp2',
    name: 'Organic Cotton T-Shirt Pack',
    description: 'Sustainable comfort with a soft touch, available in multi-packs.',
    price: 'AED 120',
    images: [
      'https://via.placeholder.com/600x400/8FBC8F/000000?text=Org+Tee+1',
      'https://via.placeholder.com/600x400/6B8E23/000000?text=Org+Tee+2',
    ],
  },
];

export const DUMMY_MEN_SHIRTS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'ms1', name: 'Oxford Button-Down', price: 'AED 130', imageUrl: 'https://via.placeholder.com/300x400/F5F5DC/000000?text=Oxford+Shirt', offer: 'Classic' },
  { id: 'ms2', name: 'Linen Casual Shirt', price: 'AED 110', imageUrl: 'https://via.placeholder.com/300x400/F0E68C/000000?text=Linen+Shirt', offer: 'Summer' },
  { id: 'ms3', name: 'Denim Shirt', price: 'AED 140', imageUrl: 'https://via.placeholder.com/300x400/4682B4/000000?text=Denim+Shirt+Men' },
  { id: 'ms4', name: 'Flannel Shirt', price: 'AED 95', imageUrl: 'https://via.placeholder.com/300x400/BC8F8F/000000?text=Flannel+Shirt', offer: 'Winter' },
];

export const DUMMY_MEN_SHIRTS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hms1',
    name: 'Non-Iron Dress Shirt',
    description: 'Stay crisp and sharp all day with minimal effort.',
    price: 'AED 160',
    images: [
      'https://via.placeholder.com/600x400/ADD8E6/000000?text=Dress+Shirt+1',
      'https://via.placeholder.com/600x400/87CEFA/000000?text=Dress+Shirt+2',
    ],
  },
  {
    id: 'hms2',
    name: 'Short Sleeve Printed Shirt',
    description: 'Add a vibrant touch to your warm-weather wardrobe.',
    price: 'AED 100',
    images: [
      'https://via.placeholder.com/600x400/FFD700/000000?text=Printed+Shirt+1',
      'https://via.placeholder.com/600x400/FFA500/000000?text=Printed+Shirt+2',
    ],
  },
];

export const DUMMY_MEN_PANTS_CHINOS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'mpc1', name: 'Slim Fit Chinos', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/D2B48C/000000?text=Slim+Chinos', offer: 'Versatile' },
  { id: 'mpc2', name: 'Classic Denim Jeans', price: 'AED 165', imageUrl: 'https://via.placeholder.com/300x400/4682B4/000000?text=Classic+Jeans+Men' },
  { id: 'mpc3', name: 'Cargo Pants', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/5F9EA0/000000?text=Cargo+Pants', offer: 'Utility' },
  { id: 'mpc4', name: 'Dress Pants', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/696969/000000?text=Dress+Pants' },
];

export const DUMMY_MEN_PANTS_CHINOS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmpc1',
    name: 'Stretch Travel Pants',
    description: 'Engineered for comfort and style, perfect for long journeys.',
    price: 'AED 190',
    images: [
      'https://via.placeholder.com/600x400/778899/000000?text=Travel+Pants+1',
      'https://via.placeholder.com/600x400/708090/000000?text=Travel+Pants+2',
    ],
  },
  {
    id: 'hmpc2',
    name: 'Cotton Blend Joggers',
    description: 'Relaxed fit with a modern taper, ideal for casual days.',
    price: 'AED 110',
    images: [
      'https://via.placeholder.com/600x400/C0C0C0/000000?text=Joggers+1',
      'https://via.placeholder.com/600x400/D3D3D3/000000?text=Joggers+2',
    ],
  },
];

export const DUMMY_MEN_SPORTSWEAR_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'msw1', name: 'Performance T-Shirt', price: 'AED 70', imageUrl: 'https://via.placeholder.com/300x400/00CED1/FFFFFF?text=Perf+Tee', offer: 'Active' },
  { id: 'msw2', name: 'Workout Shorts', price: 'AED 65', imageUrl: 'https://via.placeholder.com/300x400/40E0D0/FFFFFF?text=Workout+Shorts' },
  { id: 'msw3', name: 'Athletic Hoodie', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/66CDAA/000000?text=Athletic+Hoodie', offer: 'Warm-up' },
  { id: 'msw4', name: 'Track Pants', price: 'AED 90', imageUrl: 'https://via.placeholder.com/300x400/20B2AA/FFFFFF?text=Track+Pants' },
];

export const DUMMY_MEN_SPORTSWEAR_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmsw1',
    name: 'Running Jacket',
    description: 'Lightweight and wind-resistant, perfect for outdoor training.',
    price: 'AED 150',
    images: [
      'https://via.placeholder.com/600x400/3CB371/FFFFFF?text=Running+Jacket+1',
      'https://via.placeholder.com/600x400/2E8B57/FFFFFF?text=Running+Jacket+2',
    ],
  },
  {
    id: 'hmsw2',
    name: 'Compression Leggings for Men',
    description: 'Provide muscle support and enhance circulation during intense workouts.',
    price: 'AED 80',
    images: [
      'https://via.placeholder.com/600x400/5F9EA0/FFFFFF?text=Comp+Leggings+1',
      'https://via.placeholder.com/600x400/4682B4/FFFFFF?text=Comp+Leggings+2',
    ],
  },
];

export const DUMMY_MEN_RUNNING_SHOES_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'mrs1', name: 'Road Running Shoes', price: 'AED 300', imageUrl: 'https://via.placeholder.com/300x400/87CEEB/000000?text=Road+Runners', offer: 'High-Perf' },
  { id: 'mrs2', name: 'Trail Running Shoes', price: 'AED 320', imageUrl: 'https://via.placeholder.com/300x400/5F9EA0/000000?text=Trail+Runners' },
  { id: 'mrs3', name: 'Lightweight Racers', price: 'AED 280', imageUrl: 'https://via.placeholder.com/300x400/40E0D0/000000?text=Racers', offer: 'Speed' },
  { id: 'mrs4', name: 'Everyday Running Shoes', price: 'AED 250', imageUrl: 'https://via.placeholder.com/300x400/ADD8E6/000000?text=Everyday+Runners' },
];

export const DUMMY_MEN_RUNNING_SHOES_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmrs1',
    name: 'Cushioned Running Trainers',
    description: 'Exceptional shock absorption for ultimate comfort on long runs.',
    price: 'AED 350',
    images: [
      'https://via.placeholder.com/600x400/1E90FF/FFFFFF?text=Cushioned+Trainers+1',
      'https://via.placeholder.com/600x400/6495ED/FFFFFF?text=Cushioned+Trainers+2',
    ],
  },
  {
    id: 'hmrs2',
    name: 'Waterproof Trail Runners',
    description: 'Conquer any terrain with these durable, waterproof trail shoes.',
    price: 'AED 380',
    images: [
      'https://via.placeholder.com/600x400/2F4F4F/FFFFFF?text=Waterproof+Trail+1',
      'https://via.placeholder.com/600x400/696969/FFFFFF?text=Waterproof+Trail+2',
    ],
  },
];

export const DUMMY_MEN_FORMAL_SHOES_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'mfs1', name: 'Leather Oxfords', price: 'AED 380', imageUrl: 'https://via.placeholder.com/300x400/8B4513/FFFFFF?text=Oxfords', offer: 'Executive' },
  { id: 'mfs2', name: 'Derby Shoes', price: 'AED 350', imageUrl: 'https://via.placeholder.com/300x400/A0522D/FFFFFF?text=Derby+Shoes' },
  { id: 'mfs3', name: 'Monk Strap Shoes', price: 'AED 420', imageUrl: 'https://via.placeholder.com/300x400/654321/FFFFFF?text=Monk+Straps', offer: 'Sophisticated' },
  { id: 'mfs4', name: 'Brogues', price: 'AED 360', imageUrl: 'https://via.placeholder.com/300x400/BC8F8F/FFFFFF?text=Brogues' },
];

export const DUMMY_MEN_FORMAL_SHOES_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmfs1',
    name: 'Patent Leather Dress Shoes',
    description: 'Shine at any formal event with these polished and sleek shoes.',
    price: 'AED 450',
    images: [
      'https://via.placeholder.com/600x400/000000/FFFFFF?text=Patent+Shoes+1',
      'https://via.placeholder.com/600x400/36454F/FFFFFF?text=Patent+Shoes+2',
    ],
  },
  {
    id: 'hmfs2',
    name: 'Suede Loafers for Men',
    description: 'Combine comfort with elegance, perfect for smart-casual wear.',
    price: 'AED 300',
    images: [
      'https://via.placeholder.com/600x400/CD853F/FFFFFF?text=Suede+Loafers+1',
      'https://via.placeholder.com/600x400/D2B48C/FFFFFF?text=Suede+Loafers+2',
    ],
  },
];

export const DUMMY_MEN_SANDALS_PRODUCTS_SCROLL: ProductCard[] = [
  { id: 'msa1', name: 'Leather Slide Sandals', price: 'AED 150', imageUrl: 'https://via.placeholder.com/300x400/F4A460/000000?text=Men+Slides', offer: 'Comfort' },
  { id: 'msa2', name: 'Sporty Adjustable Sandals', price: 'AED 120', imageUrl: 'https://via.placeholder.com/300x400/DAA520/000000?text=Sport+Sandals+Men' },
  { id: 'msa3', name: 'Flip-Flops', price: 'AED 60', imageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Flip-Flops+Men', offer: 'Beachwear' },
  { id: 'msa4', name: 'Casual Leather Sandals', price: 'AED 180', imageUrl: 'https://via.placeholder.com/300x400/CD853F/000000?text=Casual+Sandals+Men' },
];

export const DUMMY_MEN_SANDALS_HIGHLIGHTED_PRODUCTS: HighlightedProduct[] = [
  {
    id: 'hmsa1',
    name: 'Comfort Arch Support Sandals',
    description: 'Engineered for all-day comfort with excellent arch support.',
    price: 'AED 170',
    images: [
      'https://via.placeholder.com/600x400/FFA07A/FFFFFF?text=Arch+Support+Sandals+1',
      'https://via.placeholder.com/600x400/FF7F50/FFFFFF?text=Arch+Support+Sandals+2',
    ],
  },
  {
    id: 'hmsa2',
    name: 'Stylish Fisherman Sandals',
    description: 'A blend of classic design and modern comfort for summer outfits.',
    price: 'AED 200',
    images: [
      'https://via.placeholder.com/600x400/F08080/FFFFFF?text=Fisherman+Sandals+1',
      'https://via.placeholder.com/600x400/CD5C5C/FFFFFF?text=Fisherman+Sandals+2',
    ],
  },
];