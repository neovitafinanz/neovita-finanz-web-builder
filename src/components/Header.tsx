
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

// Déclaration du type pour Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
    googleTranslateInstance: any;
  }
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  useEffect(() => {
    console.log('Initialisation Google Translate...');
    
    // Fonction d'initialisation simplifiée
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        console.log('Google Translate API disponible');
        
        // Configuration simple
        const config = {
          pageLanguage: 'fr',
          includedLanguages: 'fr,en,ar,es,it,nl,pl,pt,ru',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        };
        
        // Créer l'élément pour desktop
        const desktopElement = document.getElementById('google_translate_element');
        if (desktopElement && !desktopElement.hasChildNodes()) {
          new window.google.translate.TranslateElement(config, 'google_translate_element');
          console.log('Google Translate desktop créé');
        }
        
        // Créer l'élément pour mobile
        const mobileElement = document.getElementById('google_translate_element_mobile');
        if (mobileElement && !mobileElement.hasChildNodes()) {
          new window.google.translate.TranslateElement(config, 'google_translate_element_mobile');
          console.log('Google Translate mobile créé');
        }
      } else {
        console.log('Google Translate API non disponible, réessai...');
        setTimeout(initGoogleTranslate, 500);
      }
    };

    // Définir la fonction globale
    window.googleTranslateElementInit = initGoogleTranslate;

    // Charger le script si nécessaire
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => console.log('Script Google Translate chargé');
      script.onerror = () => console.error('Erreur chargement Google Translate');
      document.head.appendChild(script);
    } else if (window.google && window.google.translate) {
      // Si le script existe déjà et l'API est prête
      initGoogleTranslate();
    }
  }, []);

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
          <div className="flex items-center space-x-4">
            <span className="text-sm">{t('common.phoneAvailable')}</span>
            {/* Google Translate Element - Desktop */}
            <div className="flex items-center">
              <span className="text-sm mr-2">🌐</span>
              <div id="google_translate_element" className="inline-block min-w-[100px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
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
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                  {/* Google Translate Element for mobile */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">🌐 Langue:</span>
                    <div id="google_translate_element_mobile" className="flex-1"></div>
                  </div>
                  <Button 
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2 rounded-lg font-medium self-end"
                  >
                    {t('common.requestLoan')}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <style>
        {`
        /* Personnalisation Google Translate */
        .goog-te-gadget {
          color: white !important;
          font-family: inherit !important;
        }
        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
          padding: 4px 8px !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          border-radius: 4px !important;
          font-size: 13px !important;
        }
        .goog-te-gadget .goog-te-combo option {
          color: #333 !important;
          background: white !important;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
        #google_translate_element .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
        }
        #google_translate_element_mobile .goog-te-gadget-simple {
          background-color: white !important;
          border: 1px solid #ddd !important;
          border-radius: 4px !important;
        }
        `}
      </style>
    </>
  );
};

export default Header;
