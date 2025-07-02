
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadTranslations } from '../utils/translationLoader';

type Language = 'fr' | 'en' | 'es' | 'it' | 'de' | 'pt' | 'nl' | 'sv' | 'no' | 'da' | 'zh-CN' | 'ja' | 'ru';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const supportedLanguages: Language[] = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'sv', 'no', 'da', 'zh-CN', 'ja', 'ru'];

const isValidLanguage = (lang: string): lang is Language => {
  return supportedLanguages.includes(lang as Language);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Extract language from URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const urlLang = pathSegments[0];
    
    if (urlLang && isValidLanguage(urlLang)) {
      if (language !== urlLang) {
        setLanguage(urlLang);
      }
    } else {
      if (language !== 'fr') {
        setLanguage('fr');
      }
    }
  }, [location.pathname]);

  // Load translations using the new modular system
  useEffect(() => {
    const loadLanguageTranslations = async () => {
      setIsLoading(true);
      try {
        console.log(`Loading translations for ${language}`);
        const loadedTranslations = await loadTranslations(language);
        setTranslations(loadedTranslations);
        console.log(`Successfully loaded translations for ${language}`);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Fallback to French translations
        try {
          const fallbackTranslations = await loadTranslations('fr');
          setTranslations(fallbackTranslations);
          console.log('Loaded fallback French translations');
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
          setTranslations({});
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageTranslations();
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Remove current language if it exists
    if (pathSegments.length > 0 && isValidLanguage(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Create new path
    const newPath = `/${newLanguage}${pathSegments.length > 0 ? '/' + pathSegments.join('/') : ''}`;
    
    // Use React Router navigation
    navigate(newPath);
  };

  const t = (key: string): string => {
    if (isLoading || !translations || Object.keys(translations).length === 0) {
      return ''; // Return empty string while loading instead of raw key
    }
    
    const keys = key.split('.');
    let current = translations;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Only return key if translation actually not found
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
