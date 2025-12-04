import React from 'react';
import { MEN_MEGA_MENU_DETAILS } from '../../constants';
import { CategoryColumn, PromotionContent, PageIdentifier } from '../../types';

interface MenCategoryNavigationProps {
  onNavigate: (page: PageIdentifier) => void;
}

export const MenCategoryNavigation: React.FC<MenCategoryNavigationProps> = ({ onNavigate }) => {
  const { columns, promotion } = MEN_MEGA_MENU_DETAILS;

  return (
    <nav className="bg-bfl-gray text-bfl-black py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {columns.map((column: CategoryColumn, colIndex: number) => (
            <div key={colIndex}>
              <h3 className="font-bold text-lg text-bfl-black mb-4 border-b pb-2 border-gray-300">
                {column.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm capitalize">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); onNavigate(link.pageIdentifier || 'underConstruction'); }}
                      className="hover:text-bfl-yellow hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {promotion && (
            <div
              className={`${promotion.bgColorClass} p-6 text-center rounded-lg flex flex-col justify-center items-center`}
            >
              {promotion.icon && (
                <span className="text-bfl-yellow text-4xl mb-3">
                  <i className={promotion.icon}></i>
                </span>
              )}
              <h4 className={`font-bold text-xl mb-2 ${promotion.textColorClass}`}>
                {promotion.title}
              </h4>
              <p className={`text-sm ${promotion.textColorClass} opacity-80 mb-5`}>
                {promotion.description}
              </p>
              <button
                onClick={(e) => { e.preventDefault(); onNavigate(promotion.pageIdentifier || 'underConstruction'); }}
                className={`${promotion.buttonBgClass} ${promotion.textColorClass} px-6 py-2 text-sm uppercase font-bold rounded-md ${promotion.buttonHoverClass}`}
              >
                {promotion.buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};