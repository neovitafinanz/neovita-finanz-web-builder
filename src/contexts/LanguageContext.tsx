
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Import all translation files
import enTranslations from '@/translations/en.json';
import frTranslations from '@/translations/fr.json';
import esTranslations from '@/translations/es.json';
import itTranslations from '@/translations/it.json';
import deTranslations from '@/translations/de.json';
import ptTranslations from '@/translations/pt.json';
import nlTranslations from '@/translations/nl.json';
import svTranslations from '@/translations/sv.json';
import noTranslations from '@/translations/no.json';
import daTranslations from '@/translations/da.json';
import zhCNTranslations from '@/translations/zh-CN.json';
import jaTranslations from '@/translations/ja.json';
import ruTranslations from '@/translations/ru.json';

export type Language = 'en' | 'fr' | 'es' | 'it' | 'de' | 'pt' | 'nl' | 'sv' | 'no' | 'da' | 'zh-CN' | 'ja' | 'ru';

const translations = {
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations,
  it: itTranslations,
  de: deTranslations,
  pt: ptTranslations,
  nl: nlTranslations,
  sv: svTranslations,
  no: noTranslations,
  da: daTranslations,
  'zh-CN': zhCNTranslations,
  ja: jaTranslations,
  ru: ruTranslations,
};

export const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
] as const;

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');
  const location = useLocation();
  const navigate = useNavigate();

  // Simplified language extraction from URL - only run once on mount and when pathname changes significantly
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromUrl = pathSegments[0];
    
    const validLanguages = languages.map(lang => lang.code);
    
    if (langFromUrl && validLanguages.includes(langFromUrl)) {
      if (currentLanguage !== langFromUrl) {
        setCurrentLanguage(langFromUrl as Language);
      }
    } else if (currentLanguage !== 'fr') {
      setCurrentLanguage('fr');
    }
  }, [location.pathname]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    
    // Simple URL update logic
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const validLanguages = languages.map(lang => lang.code);
    
    // Remove existing language prefix if present
    if (pathSegments.length > 0 && validLanguages.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Build new path
    const basePath = pathSegments.length > 0 ? '/' + pathSegments.join('/') : '/';
    const newPath = language === 'fr' ? basePath : `/${language}${basePath}`;
    
    navigate(newPath, { replace: true });
  };

  const t = (key: string): string => {
    if (!key) return '';
    
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to French
        value = translations.fr;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found anywhere
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
