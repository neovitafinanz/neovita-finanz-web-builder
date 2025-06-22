
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
      {/* CSS pour masquer les éléments indésirables de Google Translate et styler le sélecteur personnalisé */}
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

          /* Style pour le sélecteur de langue personnalisé */
          #custom-translate {
            position: fixed;
            top: 20px;
            right: 20px;
            font-family: sans-serif;
            font-size: 14px;
            background: #ffffff;
            padding: 8px 12px;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            z-index: 9999;
          }
          
          #custom-translate select {
            margin-left: 8px;
            padding: 4px 6px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
        `
      }} />

      {/* Custom Language Selector */}
      <div id="custom-translate" dangerouslySetInnerHTML={{
        __html: `
          🌐 Langue :
          <select id="languageSelector">
            <option value="">Sélectionner</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="it">Italiano</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
            <option value="nl">Nederlands</option>
            <option value="da">Dansk</option>
            <option value="sv">Svenska</option>
            <option value="no">Norsk</option>
            <option value="ja">日本語</option>
            <option value="zh-CN">中文 (简体)</option>
            <option value="ru">Русский</option>
          </select>
        `
      }} />

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </>
  );
};

export default GoogleTranslate;
