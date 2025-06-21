import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();
  
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

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const mainNavItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.personalLoans'), href: '/prets-personnels' },
    { name: t('nav.mortgageLoans'), href: '/prets-immobiliers' },
    { name: t('nav.creditBuyback'), href: '/rachat-credit' },
    { name: t('nav.workCredit'), href: '/credit-travaux' },
    { name: t('nav.insurance'), href: '/assurances' },
    { name: t('nav.about'), href: '/a-propos' },
  ];

  const handleCTAClick = () => {
    navigate('/demande-credit');
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
  };

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-green-600 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>01 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@neovita-finanz.fr</span>
            </div>
          </div>
          <div className="text-sm">
            {t('common.phoneAvailable')}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Plus grand */}
            <Link to="/" className="flex items-center" aria-label="Accueil Neovita Finanz">
              <img 
                src="/lovable-uploads/9ee0536b-2c03-416b-bf54-034f5028bc1f.png" 
                alt="Neovita Finanz - Votre partenaire financier de confiance" 
                className="w-16 h-16 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Navigation principale">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-label={`Aller à la page ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center space-x-2"
                    aria-label="Sélectionner la langue"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{currentLang.flag}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Faire une demande de prêt"
              >
                {t('common.requestLoan')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Menu de navigation mobile"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200" role="navigation" aria-label="Navigation mobile">
              <nav className="flex flex-col space-y-4 mt-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span>{currentLang.flag}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48 bg-white border border-gray-200 shadow-lg">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button 
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    {t('common.requestLoan')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
