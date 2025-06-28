
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();

  const getLocalizedPath = (path: string) => {
    return currentLanguage === 'fr' ? path : `/${currentLanguage}${path}`;
  };

  const isActive = (path: string) => {
    const localizedPath = getLocalizedPath(path);
    return location.pathname === localizedPath;
  };

  const navigationItems = [
    { key: 'home', path: '/' },
    {
      key: 'services',
      dropdown: [
        { key: 'personalLoans', path: '/personal-loans' },
        { key: 'mortgageLoans', path: '/mortgage-loans' },
        { key: 'creditBuyback', path: '/credit-buyback' },
        { key: 'workCredit', path: '/work-credit' },
        { key: 'insurance', path: '/insurance' }
      ]
    },
    { key: 'about', path: '/about' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={getLocalizedPath('/')} className="flex items-center">
              <span className="text-xl font-bold text-primary">BHV Auto</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.key} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center px-3 py-2 text-gray-700 hover:text-primary transition-colors">
                      {t(`nav.${item.key}`)}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={getLocalizedPath(subItem.path)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {t(`nav.${subItem.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={getLocalizedPath(item.path)}
                    className={`px-3 py-2 transition-colors ${
                      isActive(item.path)
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-2 text-primary">
              <Phone className="h-4 w-4" />
              <span className="text-sm">01 86 65 48 40</span>
            </div>
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.key}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      {t(`nav.${item.key}`)}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={getLocalizedPath(subItem.path)}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            {t(`nav.${subItem.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={getLocalizedPath(item.path)}
                    className={`block px-3 py-2 transition-colors ${
                      isActive(item.path)
                        ? 'text-primary border-l-4 border-primary bg-primary/5'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-2 text-primary px-3 py-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">01 86 65 48 40</span>
            </div>
            <div className="px-3 py-2 text-xs text-gray-500">
              {t('common.phoneAvailable')}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
