
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
    console.log('Tentative de changement de langue vers:', langCode);
    
    if (!isReady) {
      console.log('Google Translate pas encore prêt');
      return;
    }

    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    console.log('Element sélecteur trouvé:', selectElement);
    
    if (selectElement) {
      console.log('Valeur actuelle du sélecteur:', selectElement.value);
      console.log('Options disponibles:', Array.from(selectElement.options).map(opt => opt.value));
      
      if (selectElement.value !== langCode) {
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        setCurrentLang(langCode);
        
        // Sauvegarder la préférence
        localStorage.setItem('google_translate_lang', langCode);
        console.log('Langue changée vers:', langCode);
      }
    } else {
      console.log('Élément sélecteur Google Translate non trouvé');
    }
  }, [isReady]);

  useEffect(() => {
    let checkAttempts = 0;
    const maxAttempts = 50;

    // Vérifier si Google Translate est prêt
    const checkReady = () => {
      checkAttempts++;
      console.log(`Vérification Google Translate (tentative ${checkAttempts})`);
      
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (selectElement && selectElement.options.length > 1) {
        console.log('Google Translate prêt avec', selectElement.options.length, 'options');
        setIsReady(true);
        
        // Appliquer la langue sauvegardée ou détecter la langue du navigateur
        const savedLang = localStorage.getItem('google_translate_lang');
        const browserLang = navigator.language.split('-')[0];
        const targetLang = savedLang || (languages.find(l => l.code === browserLang)?.code) || 'fr';
        
        console.log('Langue cible détectée:', targetLang);
        
        if (targetLang !== 'fr') {
          setTimeout(() => changeLanguage(targetLang), 500);
        }
      } else if (checkAttempts < maxAttempts) {
        setTimeout(checkReady, 200);
      } else {
        console.log('Échec du chargement de Google Translate après', maxAttempts, 'tentatives');
      }
    };

    // Observer pour détecter les changements de traduction
    const observer = new MutationObserver(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement && selectElement.value !== currentLang) {
        console.log('Changement de langue détecté:', selectElement.value);
        setCurrentLang(selectElement.value);
      }
    });

    // Attendre que Google Translate soit disponible
    const waitForGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        console.log('API Google Translate disponible');
        checkReady();
      } else {
        console.log('En attente de l\'API Google Translate...');
        setTimeout(waitForGoogleTranslate, 100);
      }
    };

    waitForGoogleTranslate();
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [changeLanguage, currentLang, languages]);

  const handleLanguageSelect = (langCode: string) => {
    console.log('Sélection de langue via interface:', langCode);
    changeLanguage(langCode);
  };

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
          opacity: 0,
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      />
      
      {/* Sélecteur de langue flottant */}
      <div className="fixed bottom-4 right-4 z-50">
        <Select value={currentLang} onValueChange={handleLanguageSelect}>
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
