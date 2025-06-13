
import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Neovita Finanz</h1>
              <p className="text-xs text-gray-600">SIREN 493 171 540</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </a>
            <a href="#simulation" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Simulation
            </a>
            <a href="#a-propos" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </a>
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

            <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
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
              <a href="#accueil" className="text-gray-700 hover:text-blue-900 font-medium">
                Accueil
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium">
                Services
              </a>
              <a href="#simulation" className="text-gray-700 hover:text-blue-900 font-medium">
                Simulation
              </a>
              <a href="#a-propos" className="text-gray-700 hover:text-blue-900 font-medium">
                À propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium">
                Contact
              </a>
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
                <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium">
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
