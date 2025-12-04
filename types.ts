export type PageIdentifier =
  | 'home'
  | 'underConstruction'
  | 'womenFashion'
  | 'dresses'
  | 'tops_tees'
  | 'jeans_denim'
  | 'activewear'
  | 'lingerie_sleepwear'
  | 'sneakers'
  | 'heels'
  | 'flats_loafers'
  | 'sandals'
  | 'boots'
  | 'bags_wallets'
  | 'jewelry'
  | 'watches'
  | 'sunglasses'
  | 'menFashion' // New: Main Men's Fashion page
  | 'men_tshirts_polos' // New: Men's T-Shirts & Polos category
  | 'men_shirts' // New: Men's Shirts category
  | 'men_pants_chinos' // New: Men's Pants & Chinos category
  | 'men_sportswear' // New: Men's Sportswear category
  | 'men_running_shoes' // New: Men's Running Shoes category
  | 'men_formal_shoes' // New: Men's Formal Shoes category
  | 'men_sandals'; // New: Men's Sandals category

export interface LinkItem {
  label: string;
  href: string; // Keep href for external links or as a fallback
  pageIdentifier?: PageIdentifier; // New optional property for internal navigation
}

export interface CategoryColumn {
  title: string;
  links: LinkItem[];
}

export interface PromotionContent {
  icon?: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
  pageIdentifier?: PageIdentifier; // Add pageIdentifier for promotion buttons
  bgColorClass: string;
  textColorClass: string;
  buttonBgClass: string;
  buttonHoverClass: string;
}

export interface MegaMenuItemData {
  type: 'mega-menu';
  label: string;
  pageIdentifier?: PageIdentifier; // Add pageIdentifier for top-level mega-menu items like Men/Women
  columns: CategoryColumn[];
  promotion?: PromotionContent;
}

export interface SimpleMenuItemData {
  type: 'simple-link';
  label: string;
  href: string;
  pageIdentifier?: PageIdentifier; // Add pageIdentifier for simple links
  isHighlight?: boolean;
}

export type MenuItemData = MegaMenuItemData | SimpleMenuItemData;

export interface Brand {
  name: string;
  logoUrl?: string; // Optional if using text for brands
}

// New interfaces for Women's Fashion Page and GenericCategoryPage
export interface ProductCard {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  offer?: string; // e.g., "New Arrival", "20% Off"
}

export interface HighlightedProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[]; // URLs for rotating images
}