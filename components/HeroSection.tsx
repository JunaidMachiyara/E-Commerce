import React from 'react';
import { PageIdentifier } from '../types'; // Import PageIdentifier

interface HeroSectionProps {
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-gray-200 h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="text-center relative z-10 text-bfl-black">
        <h2 className="text-5xl font-extrabold mb-2 uppercase tracking-tighter">
          Smile More
        </h2>
        <h3 className="text-4xl font-light mb-6 uppercase tracking-widest">
          Pay Less
        </h3>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('womenFashion')} // Navigate to Women's Fashion page
            className="bg-bfl-yellow text-bfl-black font-bold px-8 py-3 text-lg uppercase rounded shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
          >
            Shop Women
          </button>
          <button
            onClick={() => onNavigate('menFashion')} // Navigate to Men's Fashion page
            className="bg-bfl-black text-white font-bold px-8 py-3 text-lg uppercase rounded shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1"
          >
            Shop Men
          </button>
        </div>
      </div>
    </section>
  );
};