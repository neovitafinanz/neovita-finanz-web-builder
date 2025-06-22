
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useUrlLanguage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const langParam = searchParams.get('lang');
    
    if (langParam) {
      // Attendre que Google Translate soit chargé
      const checkGoogleTranslate = () => {
        if (window.google && window.google.translate) {
          const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (selectElement) {
            selectElement.value = langParam;
            selectElement.dispatchEvent(new Event('change'));
          }
        } else {
          // Réessayer après 500ms si Google Translate n'est pas encore chargé
          setTimeout(checkGoogleTranslate, 500);
        }
      };
      
      checkGoogleTranslate();
    }
  }, [location.search]);

  const updateUrlLanguage = (language: string) => {
    if (language) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('lang', language);
      navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
    } else {
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete('lang');
      const newSearch = searchParams.toString();
      navigate(`${location.pathname}${newSearch ? `?${newSearch}` : ''}`, { replace: true });
    }
  };

  return { updateUrlLanguage };
};
