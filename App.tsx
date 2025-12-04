import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandStrip } from './components/BrandStrip';
import { UnderConstructionPage } from './components/UnderConstructionPage';
import { WomenFashionPage } from './pages/WomenFashionPage';
import { MenFashionPage } from './pages/MenFashionPage'; // Import MenFashionPage
import { GenericCategoryPage } from './pages/GenericCategoryPage'; // Import the new generic category page
import { PageIdentifier } from './types';
import {
  WOMEN_MEGA_MENU_DETAILS,
  MEN_MEGA_MENU_DETAILS, // Import Men's mega menu details
  DUMMY_DRESSES_PRODUCTS_SCROLL, DUMMY_DRESSES_HIGHLIGHTED_PRODUCTS,
  DUMMY_TOPS_PRODUCTS_SCROLL, DUMMY_TOPS_HIGHLIGHTED_PRODUCTS,
  DUMMY_JEANS_PRODUCTS_SCROLL, DUMMY_JEANS_HIGHLIGHTED_PRODUCTS,
  DUMMY_ACTIVEWEAR_PRODUCTS_SCROLL, DUMMY_ACTIVEWEAR_HIGHLIGHTED_PRODUCTS,
  DUMMY_LINGERIE_PRODUCTS_SCROLL, DUMMY_LINGERIE_HIGHLIGHTED_PRODUCTS,
  DUMMY_SNEAKERS_PRODUCTS_SCROLL, DUMMY_SNEAKERS_HIGHLIGHTED_PRODUCTS,
  DUMMY_HEELS_PRODUCTS_SCROLL, DUMMY_HEELS_HIGHLIGHTED_PRODUCTS,
  DUMMY_FLATS_LOAFERS_PRODUCTS_SCROLL, DUMMY_FLATS_LOAFERS_HIGHLIGHTED_PRODUCTS,
  DUMMY_SANDALS_PRODUCTS_SCROLL, DUMMY_SANDALS_HIGHLIGHTED_PRODUCTS,
  DUMMY_BOOTS_PRODUCTS_SCROLL, DUMMY_BOOTS_HIGHLIGHTED_PRODUCTS,
  DUMMY_BAGS_WALLETS_PRODUCTS_SCROLL, DUMMY_BAGS_WALLETS_HIGHLIGHTED_PRODUCTS,
  DUMMY_JEWELRY_PRODUCTS_SCROLL, DUMMY_JEWELRY_HIGHLIGHTED_PRODUCTS,
  DUMMY_WATCHES_PRODUCTS_SCROLL, DUMMY_WATCHES_HIGHLIGHTED_PRODUCTS,
  DUMMY_SUNGLASSES_PRODUCTS_SCROLL, DUMMY_SUNGLASSES_HIGHLIGHTED_PRODUCTS,
  // Men's dummy data imports
  DUMMY_MEN_PRODUCTS_SCROLL, DUMMY_MEN_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_TSHIRTS_POLOS_PRODUCTS_SCROLL, DUMMY_MEN_TSHIRTS_POLOS_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_SHIRTS_PRODUCTS_SCROLL, DUMMY_MEN_SHIRTS_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_PANTS_CHINOS_PRODUCTS_SCROLL, DUMMY_MEN_PANTS_CHINOS_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_SPORTSWEAR_PRODUCTS_SCROLL, DUMMY_MEN_SPORTSWEAR_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_RUNNING_SHOES_PRODUCTS_SCROLL, DUMMY_MEN_RUNNING_SHOES_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_FORMAL_SHOES_PRODUCTS_SCROLL, DUMMY_MEN_FORMAL_SHOES_HIGHLIGHTED_PRODUCTS,
  DUMMY_MEN_SANDALS_PRODUCTS_SCROLL, DUMMY_MEN_SANDALS_HIGHLIGHTED_PRODUCTS,
} from './constants';


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageIdentifier>('home'); // Unified page state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onNavigate = (page: PageIdentifier) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Conditional rendering based on currentPage
  if (currentPage === 'underConstruction') {
    return <UnderConstructionPage onNavigate={onNavigate} />;
  }

  if (currentPage === 'womenFashion') {
    return (
      <WomenFashionPage
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate} // Pass the unified navigation handler
      />
    );
  }

  // Render Men's Fashion Page
  if (currentPage === 'menFashion') {
    return (
      <MenFashionPage
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate}
      />
    );
  }


  // Render generic category pages (for both Women's and Men's sub-categories)
  if (
    currentPage === 'dresses' ||
    currentPage === 'tops_tees' ||
    currentPage === 'jeans_denim' ||
    currentPage === 'activewear' ||
    currentPage === 'lingerie_sleepwear' ||
    currentPage === 'sneakers' ||
    currentPage === 'heels' ||
    currentPage === 'flats_loafers' ||
    currentPage === 'sandals' ||
    currentPage === 'boots' ||
    currentPage === 'bags_wallets' ||
    currentPage === 'jewelry' ||
    currentPage === 'watches' ||
    currentPage === 'sunglasses' ||
    currentPage === 'men_tshirts_polos' || // Men's categories
    currentPage === 'men_shirts' ||
    currentPage === 'men_pants_chinos' ||
    currentPage === 'men_sportswear' ||
    currentPage === 'men_running_shoes' ||
    currentPage === 'men_formal_shoes' ||
    currentPage === 'men_sandals'
  ) {
    let pageProps;
    switch (currentPage) {
      case 'dresses':
        pageProps = {
          pageTitle: 'Dresses',
          heroTitle: 'Elegance Redefined',
          heroSubtitle: 'Discover our stunning collection of dresses.',
          heroButtonText: 'Shop All Dresses',
          productsScrollData: DUMMY_DRESSES_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_DRESSES_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS, // Use Women's menu for sub-categories
        };
        break;
      case 'tops_tees':
        pageProps = {
          pageTitle: 'Tops & Tees',
          heroTitle: 'Style Your Upper Half',
          heroSubtitle: 'Find your perfect tops for every occasion.',
          heroButtonText: 'Shop All Tops & Tees',
          productsScrollData: DUMMY_TOPS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_TOPS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'jeans_denim':
        pageProps = {
          pageTitle: 'Jeans & Denim',
          heroTitle: 'Find Your Perfect Pair',
          heroSubtitle: 'The latest trends in denim for every style.',
          heroButtonText: 'Shop All Jeans',
          productsScrollData: DUMMY_JEANS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_JEANS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'activewear':
        pageProps = {
          pageTitle: 'Activewear',
          heroTitle: 'Move with Confidence',
          heroSubtitle: 'Performance wear that keeps you going.',
          heroButtonText: 'Shop All Activewear',
          productsScrollData: DUMMY_ACTIVEWEAR_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_ACTIVEWEAR_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'lingerie_sleepwear':
        pageProps = {
          pageTitle: 'Lingerie & Sleepwear',
          heroTitle: 'Comfort and Luxury',
          heroSubtitle: 'Indulge in our exquisite collection.',
          heroButtonText: 'Shop All Lingerie',
          productsScrollData: DUMMY_LINGERIE_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_LINGERIE_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'sneakers':
        pageProps = {
          pageTitle: 'Sneakers',
          heroTitle: 'Step Up Your Style',
          heroSubtitle: 'Find the freshest kicks for every stride.',
          heroButtonText: 'Shop All Sneakers',
          productsScrollData: DUMMY_SNEAKERS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_SNEAKERS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'heels':
        pageProps = {
          pageTitle: 'Heels',
          heroTitle: 'Elevate Your Look',
          heroSubtitle: 'Discover elegant heels for every occasion.',
          heroButtonText: 'Shop All Heels',
          productsScrollData: DUMMY_HEELS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_HEELS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'flats_loafers':
        pageProps = {
          pageTitle: 'Flats & Loafers',
          heroTitle: 'Comfort Meets Chic',
          heroSubtitle: 'Effortless style for your everyday.',
          heroButtonText: 'Shop All Flats & Loafers',
          productsScrollData: DUMMY_FLATS_LOAFERS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_FLATS_LOAFERS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'sandals':
        pageProps = {
          pageTitle: 'Sandals',
          heroTitle: 'Perfect for Sunny Days',
          heroSubtitle: 'Lightweight and stylish sandals for every adventure.',
          heroButtonText: 'Shop All Sandals',
          productsScrollData: DUMMY_SANDALS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_SANDALS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'boots':
        pageProps = {
          pageTitle: 'Boots',
          heroTitle: 'Walk with Confidence',
          heroSubtitle: 'Durable and fashionable boots for all seasons.',
          heroButtonText: 'Shop All Boots',
          productsScrollData: DUMMY_BOOTS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_BOOTS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'bags_wallets':
        pageProps = {
          pageTitle: 'Bags & Wallets',
          heroTitle: 'Carry Your Style',
          heroSubtitle: 'Functional and fashionable bags for every need.',
          heroButtonText: 'Shop All Bags & Wallets',
          productsScrollData: DUMMY_BAGS_WALLETS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_BAGS_WALLETS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'jewelry':
        pageProps = {
          pageTitle: 'Jewelry',
          heroTitle: 'Sparkle & Shine',
          heroSubtitle: 'Adorn yourself with our exquisite jewelry collection.',
          heroButtonText: 'Shop All Jewelry',
          productsScrollData: DUMMY_JEWELRY_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_JEWELRY_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'watches':
        pageProps = {
          pageTitle: 'Watches',
          heroTitle: 'Time for Style',
          heroSubtitle: 'Find the perfect timepiece to complement your look.',
          heroButtonText: 'Shop All Watches',
          productsScrollData: DUMMY_WATCHES_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_WATCHES_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'sunglasses':
        pageProps = {
          pageTitle: 'Sunglasses',
          heroTitle: 'Shade in Style',
          heroSubtitle: 'Protect your eyes with our fashionable sunglasses.',
          heroButtonText: 'Shop All Sunglasses',
          productsScrollData: DUMMY_SUNGLASSES_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_SUNGLASSES_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: WOMEN_MEGA_MENU_DETAILS,
        };
        break;
      // --- MEN'S CATEGORIES ---
      case 'men_tshirts_polos':
        pageProps = {
          pageTitle: 'Men\'s T-Shirts & Polos',
          heroTitle: 'Casual Comfort',
          heroSubtitle: 'Elevate your everyday look with our collection.',
          heroButtonText: 'Shop T-Shirts & Polos',
          productsScrollData: DUMMY_MEN_TSHIRTS_POLOS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_TSHIRTS_POLOS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS, // Use Men's menu for sub-categories
        };
        break;
      case 'men_shirts':
        pageProps = {
          pageTitle: 'Men\'s Shirts',
          heroTitle: 'Sharp & Stylish',
          heroSubtitle: 'From casual to formal, find your perfect shirt.',
          heroButtonText: 'Shop All Shirts',
          productsScrollData: DUMMY_MEN_SHIRTS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_SHIRTS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'men_pants_chinos':
        pageProps = {
          pageTitle: 'Men\'s Pants & Chinos',
          heroTitle: 'Bottoms for Every Occasion',
          heroSubtitle: 'Comfortable and versatile trousers.',
          heroButtonText: 'Shop All Pants',
          productsScrollData: DUMMY_MEN_PANTS_CHINOS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_PANTS_CHINOS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'men_sportswear':
        pageProps = {
          pageTitle: 'Men\'s Sportswear',
          heroTitle: 'Unleash Your Potential',
          heroSubtitle: 'Gear up for your best performance.',
          heroButtonText: 'Shop All Sportswear',
          productsScrollData: DUMMY_MEN_SPORTSWEAR_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_SPORTSWEAR_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'men_running_shoes':
        pageProps = {
          pageTitle: 'Men\'s Running Shoes',
          heroTitle: 'Run Further, Faster',
          heroSubtitle: 'High-performance footwear for every runner.',
          heroButtonText: 'Shop Running Shoes',
          productsScrollData: DUMMY_MEN_RUNNING_SHOES_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_RUNNING_SHOES_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'men_formal_shoes':
        pageProps = {
          pageTitle: 'Men\'s Formal Shoes',
          heroTitle: 'Refined Elegance',
          heroSubtitle: 'Complete your formal look with our sophisticated collection.',
          heroButtonText: 'Shop Formal Shoes',
          productsScrollData: DUMMY_MEN_FORMAL_SHOES_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_FORMAL_SHOES_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      case 'men_sandals':
        pageProps = {
          pageTitle: 'Men\'s Sandals',
          heroTitle: 'Lightweight Comfort',
          heroSubtitle: 'Perfect footwear for casual outings and warm weather.',
          heroButtonText: 'Shop Men\'s Sandals',
          productsScrollData: DUMMY_MEN_SANDALS_PRODUCTS_SCROLL,
          highlightedProductsData: DUMMY_MEN_SANDALS_HIGHLIGHTED_PRODUCTS,
          categoryNavigationDetails: MEN_MEGA_MENU_DETAILS,
        };
        break;
      default:
        // Fallback to under construction if for some reason an unknown pageIdentifier is hit
        return <UnderConstructionPage onNavigate={onNavigate} />;
    }

    return (
      <GenericCategoryPage
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate}
        {...pageProps}
      />
    );
  }

  // Default: Render the Home Page
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate} // Pass the unified navigation handler
      />
      <main className="flex-grow">
        <HeroSection onNavigate={onNavigate} />
        <BrandStrip />
        {/* Further sections of the app would go here */}
      </main>
      {/* Footer component would typically go here */}
    </div>
  );
}

export default App;