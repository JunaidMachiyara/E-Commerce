import React from 'react';
import { PageIdentifier } from '../types'; // Import PageIdentifier

interface UnderConstructionPageProps {
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-bfl-gray flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <span className="text-bfl-yellow text-6xl mb-4 block">
          <i className="fa-solid fa-person-digging"></i>
        </span>
        <h1 className="text-bfl-black text-5xl font-extrabold mb-4">Under Construction</h1>
        <p className="text-gray-700 text-lg mb-8">
          We're working hard to bring you an amazing shopping experience. Please check back soon!
        </p>
        <img
          src="https://via.placeholder.com/600x400?text=Site+Under+Construction"
          alt="Under Construction"
          className="mx-auto rounded-lg mb-8 max-w-full h-auto"
        />
        <button
          onClick={() => onNavigate('home')} // Navigate to home page
          className="bg-bfl-yellow text-bfl-black font-bold px-8 py-3 text-lg uppercase rounded shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};