
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
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
        console.log('Google Translate initialisé avec succès');
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de Google Translate:', error);
      }
    };

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
