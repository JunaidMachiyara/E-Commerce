import React from 'react';
import { Header } from '../components/Header';
import { WomenCategoryNavigation } from '../components/Women/WomenCategoryNavigation';
import { HorizontalScrollProducts } from '../components/Women/HorizontalScrollProducts';
import { ProductHighlightCard } from '../components/Women/ProductHighlightCard';
import { DUMMY_WOMEN_PRODUCTS_SCROLL, DUMMY_WOMEN_HIGHLIGHTED_PRODUCTS } from '../constants';
import { PageIdentifier } from '../types'; // Import PageIdentifier

interface WomenFashionPageProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const WomenFashionPage: React.FC<WomenFashionPageProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        onNavigate={onNavigate} // All general links from header go via onNavigate
      />

      <main className="flex-grow">
        <WomenCategoryNavigation onNavigate={onNavigate} />

        {/* Women's Fashion Page Hero Banner */}
        <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-75"></div>
          <div className="text-center relative z-10 text-bfl-black">
            <h2 className="text-5xl font-extrabold mb-2 uppercase tracking-tighter">
              Style Your Way
            </h2>
            <h3 className="text-3xl font-light mb-6 uppercase tracking-widest">
              Discover Women's Fashion
            </h3>
            <button
              onClick={() => onNavigate('underConstruction')}
              className="bg-bfl-yellow text-bfl-black font-bold px-8 py-3 text-lg uppercase rounded shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
            >
              Shop New Arrivals
            </button>
          </div>
        </section>

        {/* Horizontal Scrolling Products */}
        <HorizontalScrollProducts
          title="Trending Now"
          products={DUMMY_WOMEN_PRODUCTS_SCROLL}
          onNavigate={onNavigate}
        />

        {/* Highlighted Products Grid */}
        <section className="py-12 bg-bfl-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-bfl-black mb-8 text-center">Featured Styles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_WOMEN_HIGHLIGHTED_PRODUCTS.map((product) => (
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