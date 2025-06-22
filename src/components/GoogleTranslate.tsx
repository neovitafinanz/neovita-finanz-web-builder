
import React, { useEffect, useState, useCallback } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Déclaration du type pour Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  const [isReady, setIsReady] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const [isLoading, setIsLoading] = useState(true);

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'pl', name: 'Polski' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'de', name: 'Deutsch' },
  ];

  const changeLanguage = useCallback((langCode: string) => {
    console.log('Changement de langue vers:', langCode);
    
    if (!isReady) {
      console.log('Google Translate pas encore prêt');
      return;
    }

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    
    if (selectElement) {
      console.log('Sélecteur trouvé, changement vers:', langCode);
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      setCurrentLang(langCode);
      localStorage.setItem('google_translate_lang', langCode);
    } else {
      console.log('Sélecteur Google Translate non trouvé');
      // Réessayer après un délai
      setTimeout(() => changeLanguage(langCode), 1000);
    }
  }, [isReady]);

  useEffect(() => {
    let checkInterval: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 30;

    const checkGoogleTranslateReady = () => {
      attempts++;
      console.log(`Vérification Google Translate (${attempts}/${maxAttempts})`);
      
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (selectElement && selectElement.options && selectElement.options.length > 1) {
        console.log('Google Translate est prêt!');
        setIsReady(true);
        setIsLoading(false);
        clearInterval(checkInterval);
        
        // Appliquer la langue sauvegardée
        const savedLang = localStorage.getItem('google_translate_lang');
        if (savedLang && savedLang !== 'fr') {
          console.log('Application de la langue sauvegardée:', savedLang);
          setTimeout(() => changeLanguage(savedLang), 500);
        }
      } else if (attempts >= maxAttempts) {
        console.log('Timeout: Google Translate non disponible');
        setIsLoading(false);
        clearInterval(checkInterval);
      }
    };

    // Démarrer la vérification après un délai initial
    const startCheck = () => {
      checkInterval = setInterval(checkGoogleTranslateReady, 500);
    };

    // Attendre que la page soit chargée
    if (document.readyState === 'complete') {
      setTimeout(startCheck, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(startCheck, 1000);
      });
    }

    // Observer les changements de langue via Google Translate
    const observer = new MutationObserver(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement && selectElement.value !== currentLang) {
        console.log('Changement de langue détecté:', selectElement.value);
        setCurrentLang(selectElement.value);
        localStorage.setItem('google_translate_lang', selectElement.value);
      }
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      observer.disconnect();
    };
  }, [changeLanguage, currentLang]);

  const handleLanguageSelect = (langCode: string) => {
    console.log('Sélection manuelle de langue:', langCode);
    changeLanguage(langCode);
  };

  // Afficher un indicateur de chargement
  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 border-gray-300 shadow-lg rounded-full w-12 h-12 p-0 opacity-50"
          disabled
        >
          <Globe className="w-5 h-5 text-gray-400 animate-spin" />
        </Button>
      </div>
    );
  }

  // Ne pas afficher si Google Translate n'est pas prêt
  if (!isReady) {
    return null;
  }

  return (
    <>
      {/* Element Google Translate caché mais accessible */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'fixed',
          bottom: '-100px',
          left: '-100px',
          visibility: 'hidden',
          opacity: 0,
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          zIndex: -1
        }}
      />
      
      {/* Sélecteur de langue flottant amélioré */}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <Select value={currentLang} onValueChange={handleLanguageSelect}>
          <SelectTrigger className="bg-white hover:bg-gray-50 border-gray-300 shadow-xl rounded-full w-12 h-12 p-0 border-2 transition-all hover:shadow-2xl hover:scale-105">
            <div className="flex items-center justify-center w-full">
              <Globe className="w-5 h-5 text-green-600" />
            </div>
          </SelectTrigger>
          <SelectContent 
            align="end" 
            className="bg-white border border-gray-200 shadow-xl rounded-lg min-w-[160px]"
            sideOffset={8}
          >
            {languages.map((lang) => (
              <SelectItem
                key={lang.code}
                value={lang.code}
                className="cursor-pointer hover:bg-green-50 focus:bg-green-50 transition-colors py-2"
              >
                <span className="font-medium">{lang.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* CSS pour masquer les éléments Google Translate indésirables */}
      <style jsx global>{`
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
        
        #google_translate_element .goog-te-gadget {
          display: none;
        }
        
        .goog-te-combo {
          display: none;
        }
      `}</style>
    </>
  );
};

export default GoogleTranslate;
