
import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const scrollToLoanForm = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#loan-form';
    } else {
      document.getElementById('loan-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Only */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/9ee0536b-2c03-416b-bf54-034f5028bc1f.png" 
                alt="Neovita Finanz Logo" 
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActiveRoute('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Accueil
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isActiveRoute('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/simulation" 
              className={`font-medium transition-colors ${
                isActiveRoute('/simulation') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Simulation
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActiveRoute('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActiveRoute('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage.flag}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang)}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              onClick={scrollToLoanForm}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Demander un prêt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`font-medium ${
                  isActiveRoute('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/services" 
                className={`font-medium ${
                  isActiveRoute('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/simulation" 
                className={`font-medium ${
                  isActiveRoute('/simulation') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Simulation
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActiveRoute('/about') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActiveRoute('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>{currentLanguage.flag}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48 bg-white border border-gray-200 shadow-lg">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setCurrentLanguage(lang)}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToLoanForm();
                  }}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Demander un prêt
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
