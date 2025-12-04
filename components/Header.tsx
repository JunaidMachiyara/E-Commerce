import React from 'react';
import { MainHeader } from './Header/MainHeader';
import { NavigationBar } from './Header/NavigationBar';
import { TopUtilityBar } from './Header/TopUtilityBar';
import { MobileMenu } from './Header/MobileMenu';
import { PageIdentifier } from '../types'; // Import PageIdentifier

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  onNavigate: (page: PageIdentifier) => void; // Unified navigation handler
}

export const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  onNavigate,
}) => {
  return (
    <>
      <TopUtilityBar onNavigate={onNavigate} />
      <MainHeader toggleMobileMenu={toggleMobileMenu} onNavigate={onNavigate} />
      <NavigationBar onNavigate={onNavigate} />
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} onNavigate={onNavigate} />
    </>
  );
};