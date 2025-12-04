import React from 'react';
import { NAV_MENU_ITEMS } from '../../constants';
import { MegaMenu } from './MegaMenu';
import { MenuItemData, SimpleMenuItemData, MegaMenuItemData, PageIdentifier } from '../../types';

interface NavigationBarProps {
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ onNavigate }) => {
  return (
    <nav className="bg-bfl-black text-white relative border-t border-gray-800 hidden md:block">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center gap-8 font-semibold text-sm uppercase tracking-wide">
          {NAV_MENU_ITEMS.map((item, index) => {
            if (item.type === 'simple-link') {
              const simpleItem = item as SimpleMenuItemData;
              return (
                <li
                  key={index}
                  className={`py-3 hover:text-bfl-yellow cursor-pointer transition-colors ${
                    simpleItem.isHighlight ? 'text-bfl-yellow font-bold hover:text-white' : ''
                  }`}
                >
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate(simpleItem.pageIdentifier || 'underConstruction'); }}
                  >
                    {simpleItem.label}
                  </a>
                </li>
              );
            } else if (item.type === 'mega-menu') {
              const megaItem = item as MegaMenuItemData;
              return <MegaMenu key={index} item={megaItem} onNavigate={onNavigate} />;
            }
            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};