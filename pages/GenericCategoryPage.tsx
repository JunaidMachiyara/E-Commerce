import React from 'react';
import { Header } from '../components/Header';
import { WomenCategoryNavigation } from '../components/Women/WomenCategoryNavigation';
import { HorizontalScrollProducts } from '../components/Women/HorizontalScrollProducts';
import { ProductHighlightCard } from '../components/Women/ProductHighlightCard';
import { PageIdentifier, ProductCard, HighlightedProduct, CategoryColumn, PromotionContent } from '../types';

interface GenericCategoryPageProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  onNavigate: (page: PageIdentifier) => void;
  
  pageTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  productsScrollData: ProductCard[];
  highlightedProductsData: HighlightedProduct[];
  categoryNavigationDetails: { columns: CategoryColumn[]; promotion?: PromotionContent; }; // Using Women's menu structure
}

export const GenericCategoryPage: React.FC<GenericCategoryPageProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  onNavigate,
  pageTitle,
  heroTitle,
  heroSubtitle,
  heroButtonText,
  productsScrollData,
  highlightedProductsData,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate}
      />

      <main className="flex-grow">
        {/* Reusing WomenCategoryNavigation for sub-categories */}
        <WomenCategoryNavigation onNavigate={onNavigate} /> 

        {/* Dynamic Hero Banner for Category */}
        <section className="relative bg-gradient-to-r from-blue-100 to-purple-100 h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-75"></div>
          <div className="text-center relative z-10 text-bfl-black">
            <h2 className="text-5xl font-extrabold mb-2 uppercase tracking-tighter">
              {heroTitle}
            </h2>
            <h3 className="text-3xl font-light mb-6 uppercase tracking-widest">
              {heroSubtitle}
            </h3>
            <button
              onClick={() => onNavigate('underConstruction')}
              className="bg-bfl-yellow text-bfl-black font-bold px-8 py-3 text-lg uppercase rounded shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
            >
              {heroButtonText}
            </button>
          </div>
        </section>

        {/* Horizontal Scrolling Products */}
        <HorizontalScrollProducts
          title={`Popular ${pageTitle}`}
          products={productsScrollData}
          onNavigate={onNavigate}
        />

        {/* Highlighted Products Grid */}
        <section className="py-12 bg-bfl-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-bfl-black mb-8 text-center">Editor's Picks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlightedProductsData.map((product) => (
                <ProductHighlightCard key={product.id} product={product} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        </section>

        {/* Placeholder for more content / Footer */}
        <section className="bg-white py-10 text-center text-gray-600">
            <p>&copy; 2024 UG Used Clothing. All rights reserved.</p>
        </section>
      </main>
    </div>
  );
};