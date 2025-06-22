
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useUrlLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    // Extraire la langue de l'URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'da', 'sv', 'no', 'ja', 'zh-CN', 'ru'];
    
    if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
      setCurrentLanguage(pathSegments[0]);
    } else {
      setCurrentLanguage('fr');
    }
  }, [location.pathname]);

  const changeLanguage = (newLanguage: string) => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'da', 'sv', 'no', 'ja', 'zh-CN', 'ru'];
    
    // Retirer l'ancien préfixe de langue s'il existe
    if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Construire la nouvelle URL
    let newPath = '';
    if (newLanguage !== 'fr') {
      newPath = `/${newLanguage}`;
    }
    
    if (pathSegments.length > 0) {
      newPath += `/${pathSegments.join('/')}`;
    }
    
    if (newPath === '') {
      newPath = '/';
    }
    
    navigate(newPath);
    setCurrentLanguage(newLanguage);
  };

  const getPathWithoutLanguage = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'pt', 'nl', 'da', 'sv', 'no', 'ja', 'zh-CN', 'ru'];
    
    if (pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    return '/' + pathSegments.join('/');
  };

  return {
    currentLanguage,
    changeLanguage,
    getPathWithoutLanguage
  };
};
