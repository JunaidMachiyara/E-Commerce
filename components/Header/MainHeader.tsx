import React from 'react';
import { PageIdentifier } from '../../types'; // Import PageIdentifier

interface MainHeaderProps {
  toggleMobileMenu: () => void;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const MainHeader: React.FC<MainHeaderProps> = ({ toggleMobileMenu, onNavigate }) => {
  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-bfl-black text-2xl"
          aria-label="Toggle mobile menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Logo */}
        <a href="#" onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="bg-bfl-yellow text-bfl-black font-bold text-2xl px-3 py-1 rounded-sm italic border-2 border-bfl-black">
            UG
          </div>
          <span className="font-bold text-xl hidden lg:block">BRANDS FOR LESS</span>
        </a>

        {/* Search Bar (Wide Center) */}
        <div className="flex-1 max-w-2xl relative order-last md:order-none w-full md:w-auto mt-4 md:mt-0">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for brands, items..."
              className="w-full border-2 border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-bfl-black transition-colors"
            />
            <button onClick={() => onNavigate('underConstruction')} className="bg-bfl-yellow text-bfl-black font-bold px-6 py-2 rounded-r-md border-2 border-l-0 border-bfl-yellow hover:brightness-95 transition">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* Icons (Account, Wishlist, Cart) */}
        <div className="flex items-center gap-6 text-2xl">
          <a href="#" onClick={() => onNavigate('underConstruction')} className="text-gray-700 hover:text-bfl-yellow transition">
            <i className="fa-regular fa-user"></i>
          </a>
          <a href="#" onClick={() => onNavigate('underConstruction')} className="text-gray-700 hover:text-bfl-yellow transition">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="#" onClick={() => onNavigate('underConstruction')} className="text-gray-700 hover:text-bfl-yellow transition relative">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="absolute -top-2 -right-2 bg-bfl-yellow text-bfl-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};