
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
    if (!isReady) return;

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement && selectElement.value !== langCode) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      setCurrentLang(langCode);
      
      // Sauvegarder la préférence
      localStorage.setItem('google_translate_lang', langCode);
    }
  }, [isReady]);

  useEffect(() => {
    // Vérifier si Google Translate est prêt
    const checkReady = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement && selectElement.options.length > 1) {
        setIsReady(true);
        
        // Appliquer la langue sauvegardée ou détecter la langue du navigateur
        const savedLang = localStorage.getItem('google_translate_lang');
        const browserLang = navigator.language.split('-')[0];
        const targetLang = savedLang || (languages.find(l => l.code === browserLang)?.code) || 'fr';
        
        if (targetLang !== 'fr') {
          setTimeout(() => changeLanguage(targetLang), 500);
        }
      } else {
        setTimeout(checkReady, 100);
      }
    };

    // Observer pour détecter les changements de traduction
    const observer = new MutationObserver(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        const currentValue = selectElement.value;
        if (currentValue && currentValue !== currentLang) {
          setCurrentLang(currentValue);
        }
      }
    });

    checkReady();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [changeLanguage, currentLang, languages]);

  if (!isReady) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-white hover:bg-gray-50 border-gray-300 shadow-lg rounded-full w-12 h-12 p-0 opacity-50"
          disabled
        >
          <Globe className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Element Google Translate caché */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'absolute', 
          top: '-9999px',
          left: '-9999px',
          visibility: 'hidden',
          opacity: 0
        }}
      />
      
      {/* Sélecteur de langue flottant */}
      <div className="fixed bottom-4 right-4 z-50">
        <Select value={currentLang} onValueChange={changeLanguage}>
          <SelectTrigger className="bg-white hover:bg-gray-50 border-gray-300 shadow-lg rounded-full w-12 h-12 p-0 border">
            <div className="flex items-center justify-center w-full">
              <Globe className="w-5 h-5 text-green-600" />
            </div>
          </SelectTrigger>
          <SelectContent align="end" className="bg-white border border-gray-200 shadow-lg">
            {languages.map((lang) => (
              <SelectItem
                key={lang.code}
                value={lang.code}
                className="cursor-pointer hover:bg-gray-50 focus:bg-gray-50"
              >
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default GoogleTranslate;
