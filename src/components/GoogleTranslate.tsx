
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
        
        // Appliquer la traduction depuis l'URL après initialisation
        setTimeout(() => {
          applyTranslationFromURL();
          setupLanguageChangeListener();
        }, 1000);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de Google Translate:', error);
      }
    };

    // Fonction pour attendre que le combo Google Translate soit disponible
    const waitForTranslateCombo = (callback: (combo: HTMLSelectElement) => void) => {
      const interval = setInterval(() => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (combo) {
          clearInterval(interval);
          callback(combo);
        }
      }, 300);
    };

    // Appliquer traduction depuis l'URL
    const applyTranslationFromURL = () => {
      const params = new URLSearchParams(window.location.search);
      const lang = params.get('lang');

      if (lang) {
        waitForTranslateCombo((combo) => {
          combo.value = lang;
          combo.dispatchEvent(new Event('change'));

          // Met à jour les sélecteurs personnalisés
          const customSelect = document.getElementById('languageSelector') as HTMLSelectElement;
          const customSelectMobile = document.getElementById('languageSelectorMobile') as HTMLSelectElement;
          if (customSelect) customSelect.value = lang;
          if (customSelectMobile) customSelectMobile.value = lang;
        });
      }
    };

    // Écouter les changements de langue et mettre à jour l'URL
    const setupLanguageChangeListener = () => {
      const observer = new MutationObserver(() => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (combo) {
          const currentLang = combo.value;
          const url = new URL(window.location.href);
          
          if (currentLang && currentLang !== 'fr') {
            url.searchParams.set('lang', currentLang);
          } else {
            url.searchParams.delete('lang');
          }
          
          if (url.toString() !== window.location.href) {
            window.history.replaceState({}, '', url.toString());
          }
        }
      });

      // Observer les changements sur le body pour détecter les traductions
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class'],
        subtree: true
      });
    };

    // Gestionnaire pour les sélecteurs personnalisés
    const handleLanguageChange = () => {
      const selector = document.getElementById('languageSelector') as HTMLSelectElement;
      const selectorMobile = document.getElementById('languageSelectorMobile') as HTMLSelectElement;
      
      const addChangeListener = (element: HTMLSelectElement | null) => {
        if (element) {
          element.addEventListener('change', function () {
            const language = element.value;
            
            waitForTranslateCombo((combo) => {
              combo.value = language;
              combo.dispatchEvent(new Event('change'));
              
              // Met à jour l'URL
              const url = new URL(window.location.href);
              if (language && language !== 'fr') {
                url.searchParams.set('lang', language);
              } else {
                url.searchParams.delete('lang');
              }
              window.history.replaceState({}, '', url.toString());
              
              // Synchronise les deux sélecteurs
              const otherSelector = element.id === 'languageSelector' ? selectorMobile : selector;
              if (otherSelector) {
                otherSelector.value = language;
              }
            });
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
