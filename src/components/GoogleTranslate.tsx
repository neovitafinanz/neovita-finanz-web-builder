
import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

// Déclaration du type pour Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fonction d'initialisation Google Translate
    window.googleTranslateElementInit = function() {
      console.log('Initialisation de Google Translate');
      try {
        new window.google.translate.TranslateElement({
          pageLanguage: 'fr',
          autoDisplay: false
        }, 'google_translate_element');
        console.log('Google Translate initialisé avec succès');
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de Google Translate:', error);
      }
    };

    // Chargement du script Google Translate
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = function() {
      console.error('Erreur de chargement du script Google Translate');
    };
    
    // Vérifier si le script n'est pas déjà chargé
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      document.head.appendChild(script);
    }

    return () => {
      // Nettoyer lors du démontage du composant
      const existingScript = document.querySelector('script[src*="translate.google.com"]');
      if (existingScript) {
        existingScript.remove();
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
    setIsOpen(false);
  };

  const languages = [
    { code: '', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <>
      {/* CSS pour masquer les éléments indésirables de Google Translate */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .goog-te-banner-frame,
          .goog-te-balloon-frame,
          .goog-logo-link {
            display: none !important;
          }
          
          .goog-text-highlight {
            background-color: transparent !important;
            box-shadow: none !important;
          }
          
          body {
            top: 0 !important;
          }

          /* Masquer le sélecteur Google Translate par défaut */
          #google_translate_element .goog-te-gadget {
            display: none !important;
          }
        `
      }} />

      {/* Element caché pour Google Translate */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Bouton flottant de traduction */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu des langues */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[200px] animate-scale-in">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-3 transition-colors"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Bouton principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
          aria-label="Changer la langue"
        >
          <Globe size={20} />
        </button>
      </div>
    </>
  );
};

export default GoogleTranslate;
