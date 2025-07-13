
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, language, changeLanguage } = useLanguage();

  const mainNavItems = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.personalLoans'), href: `/${language}/prets-personnels` },
    { name: t('nav.mortgageLoans'), href: `/${language}/prets-immobiliers` },
    { name: t('nav.creditBuyback'), href: `/${language}/rachat-credit` },
    { name: t('nav.workCredit'), href: `/${language}/credit-travaux` },
    { name: t('nav.insurance'), href: `/${language}/assurances` },
    { name: t('nav.about'), href: `/${language}/a-propos` },
  ];

  const handleCTAClick = () => {
    navigate(`/${language}/demande-credit`);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      changeLanguage(selectedLanguage as any);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Contact Bar */}
      <div className="bg-green-600 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contacts@neovitafinanz.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              {t('common.phoneAvailable')}
            </div>
            {/* Custom Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>🌐 Langue :</span>
              <select 
                value={language}
                onChange={handleLanguageChange}
                className="bg-green-700 text-white border border-green-500 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="en">🇬🇧 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="it">🇮🇹 Italiano</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="pt">🇵🇹 Português</option>
                <option value="nl">🇳🇱 Nederlands</option>
                <option value="da">🇩🇰 Dansk</option>
                <option value="sv">🇸🇪 Svenska</option>
                <option value="no">🇳🇴 Norsk</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={`/${language}`} className="flex items-center" aria-label="Accueil Neovita Finanz">
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

            {/* CTA Button and Mobile Language Selector */}
            <div className="flex items-center space-x-4">
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 lg:hidden">
                <Globe className="w-4 h-4" />
                <select 
                  value={language}
                  onChange={handleLanguageChange}
                  className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="fr">🇫🇷</option>
                  <option value="en">🇬🇧</option>
                  <option value="es">🇪🇸</option>
                  <option value="it">🇮🇹</option>
                  <option value="de">🇩🇪</option>
                  <option value="pt">🇵🇹</option>
                  <option value="nl">🇳🇱</option>
                  <option value="da">🇩🇰</option>
                  <option value="sv">🇸🇪</option>
                  <option value="no">🇳🇴</option>
                </select>
              </div>

              <div className="hidden lg:flex items-center">
                <Button 
                  onClick={handleCTAClick}
                  className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label="Faire une demande de prêt"
                >
                  {t('common.requestLoan')}
                </Button>
              </div>
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
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium w-full"
                  >
                    {t('common.requestLoan')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
