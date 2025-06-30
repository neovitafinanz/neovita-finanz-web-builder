
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'fr' | 'en' | 'es' | 'it' | 'de' | 'pt' | 'nl' | 'sv' | 'no' | 'da' | 'zh-CN' | 'ja' | 'ru';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
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
  const [isLoading, setIsLoading] = useState(false);

  // Extract language from URL - only run when location changes
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
  }, [location.pathname]); // Remove language dependency to avoid loops

  // Load translations - only run when language changes and not already loading
  useEffect(() => {
    if (isLoading) return;
    
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        console.log(`Loading translations for ${language}`);
        const translationModule = await import(`../translations/${language}.json`);
        setTranslations(translationModule.default);
        console.log(`Successfully loaded translations for ${language}`);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Fallback to French translations
        try {
          const fallbackModule = await import('../translations/fr.json');
          setTranslations(fallbackModule.default);
          console.log('Loaded fallback French translations');
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
          setTranslations({});
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]); // Remove isLoading dependency

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
    if (!translations || Object.keys(translations).length === 0) {
      return key; // Return key if no translations loaded yet
    }
    
    const keys = key.split('.');
    let current = translations;
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
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
