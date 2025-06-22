
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
  const [translateLoaded, setTranslateLoaded] = useState(false);
  const [translateVisible, setTranslateVisible] = useState(false);
  const navigate = useNavigate();
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  useEffect(() => {
    console.log('Header useEffect - début initialisation Google Translate');
    
    // Fonction d'initialisation de Google Translate
    window.googleTranslateElementInit = () => {
      console.log('googleTranslateElementInit appelée');
      console.log('window.google disponible:', !!window.google);
      console.log('window.google.translate disponible:', !!(window.google && window.google.translate));
      
      if (window.google && window.google.translate) {
        // Pour desktop
        const desktopElement = document.getElementById('google_translate_element');
        console.log('Element desktop trouvé:', !!desktopElement);
        
        if (desktopElement) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'fr',
                includedLanguages: 'fr,en,ar,es,it,nl,pl,pt,ru',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true
              },
              'google_translate_element'
            );
            console.log('Google Translate desktop initialisé avec succès');
          } catch (error) {
            console.error('Erreur initialisation desktop:', error);
          }
        }
        
        // Pour mobile
        const mobileElement = document.getElementById('google_translate_element_mobile');
        console.log('Element mobile trouvé:', !!mobileElement);
        
        if (mobileElement) {
          try {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: 'fr',
                includedLanguages: 'fr,en,ar,es,it,nl,pl,pt,ru',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true
              },
              'google_translate_element_mobile'
            );
            console.log('Google Translate mobile initialisé avec succès');
          } catch (error) {
            console.error('Erreur initialisation mobile:', error);
          }
        }
        
        setTranslateLoaded(true);
        setTranslateVisible(true);
        console.log('Google Translate - État final: loaded=true, visible=true');
      } else {
        console.error('Google Translate API non disponible');
      }
    };

    // Charger Google Translate seulement une fois
    const existingScript = document.querySelector('script[src*="translate.google.com"]');
    console.log('Script existant trouvé:', !!existingScript);
    
    if (!existingScript) {
      console.log('Chargement du script Google Translate...');
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        console.log('Script Google Translate chargé avec succès');
      };
      script.onerror = (error) => {
        console.error('Erreur de chargement du script Google Translate:', error);
      };
      document.head.appendChild(script);
    } else if (window.google && window.google.translate && !translateLoaded) {
      console.log('Script déjà présent, initialisation directe');
      window.googleTranslateElementInit();
    }

    return () => {
      console.log('Nettoyage Google Translate');
    };
  }, [translateLoaded]);

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
              <div id="google_translate_element" className="inline-block min-w-[100px]">
                {!translateVisible && (
                  <span className="text-xs text-gray-300">Chargement...</span>
                )}
              </div>
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
                    <div id="google_translate_element_mobile" className="flex-1">
                      {!translateVisible && (
                        <span className="text-xs text-gray-500">Chargement du traducteur...</span>
                      )}
                    </div>
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
        /* Personnalisation de l'interface Google Translate */
        .goog-te-gadget {
          color: white !important;
          font-family: inherit !important;
          font-size: 13px !important;
        }
        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
          padding: 4px 8px !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          border-radius: 4px !important;
          font-size: 13px !important;
          min-width: 80px !important;
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
          padding: 0 !important;
          display: inline-block !important;
        }
        #google_translate_element_mobile .goog-te-gadget-simple {
          background-color: white !important;
          border: 1px solid #ddd !important;
          border-radius: 4px !important;
          padding: 4px !important;
        }
        /* Force l'affichage du sélecteur */
        .goog-te-gadget-simple .goog-te-menu-value {
          color: white !important;
        }
        `}
      </style>
    </>
  );
};

export default Header;
