
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    // Chercher le sélecteur Google Translate et le déclencher
    const translateSelector = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (translateSelector) {
      translateSelector.focus();
      // Simuler un clic pour ouvrir le dropdown
      const event = new MouseEvent('mousedown', { bubbles: true });
      translateSelector.dispatchEvent(event);
    } else {
      // Fallback : essayer de trouver l'élément Google Translate
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        const combo = translateElement.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (combo) {
          combo.focus();
          combo.click();
        }
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button 
        onClick={handleTranslateClick}
        className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-500 hover:border-green-600 group"
        aria-label="Ouvrir le traducteur Google Translate"
        type="button"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          🌐
        </span>
      </button>
    </div>
  );
};

export default FloatingLogo;
