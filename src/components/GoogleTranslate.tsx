
import React, { useEffect } from 'react';

// Déclaration du type pour Google Translate
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
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

    // Gestionnaire pour le sélecteur personnalisé
    const handleLanguageChange = () => {
      const selector = document.getElementById('languageSelector') as HTMLSelectElement;
      const selectorMobile = document.getElementById('languageSelectorMobile') as HTMLSelectElement;
      
      const addChangeListener = (element: HTMLSelectElement | null) => {
        if (element) {
          element.addEventListener('change', function () {
            const language = element.value;
            if (language) {
              const frame = document.querySelector('iframe.goog-te-menu-frame') as HTMLIFrameElement;
              if (frame && frame.contentWindow) {
                const menuItem = frame.contentWindow.document.querySelector(`.goog-te-menu2-item span[text="${language}"]`) as HTMLElement;
                if (menuItem) {
                  menuItem.click();
                }
              } else {
                const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
                if (select) {
                  select.value = language;
                  select.dispatchEvent(new Event('change'));
                }
              }
            }
          });
        }
      };

      addChangeListener(selector);
      addChangeListener(selectorMobile);
    };

    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLanguageChange);
    } else {
      handleLanguageChange();
    }

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
    </>
  );
};

export default GoogleTranslate;
