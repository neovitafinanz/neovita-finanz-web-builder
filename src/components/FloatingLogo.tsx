
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction');
    
    // Attendre un peu pour que Google Translate soit chargé
    const tryOpenTranslate = () => {
      // Chercher tous les sélecteurs possibles
      const selectors = [
        '.goog-te-combo',
        '#google_translate_element .goog-te-combo',
        '#google_translate_element_mobile .goog-te-combo',
        '.goog-te-gadget .goog-te-combo'
      ];
      
      let found = false;
      
      for (const selector of selectors) {
        const translateSelector = document.querySelector(selector) as HTMLSelectElement;
        console.log(`Recherche du sélecteur: ${selector}`, translateSelector);
        
        if (translateSelector) {
          console.log('Sélecteur trouvé, ouverture...');
          translateSelector.focus();
          translateSelector.click();
          
          // Essayer aussi de déclencher l'événement change
          const changeEvent = new Event('change', { bubbles: true });
          translateSelector.dispatchEvent(changeEvent);
          
          found = true;
          break;
        }
      }
      
      if (!found) {
        console.log('Aucun sélecteur Google Translate trouvé');
        // Essayer de trouver et cliquer sur l'élément parent
        const parentElement = document.querySelector('.goog-te-gadget');
        if (parentElement) {
          console.log('Clic sur l\'élément parent Google Translate');
          (parentElement as HTMLElement).click();
        }
      }
    };
    
    // Essayer immédiatement
    tryOpenTranslate();
    
    // Si ça ne marche pas, réessayer après un délai
    setTimeout(tryOpenTranslate, 100);
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
