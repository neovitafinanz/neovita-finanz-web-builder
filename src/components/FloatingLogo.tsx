
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction');
    
    const tryOpenTranslate = (attempt = 1, maxAttempts = 20) => {
      console.log(`Tentative ${attempt}/${maxAttempts}`);
      
      // Chercher tous les sélecteurs possibles
      const selectors = [
        '.goog-te-combo',
        '#google_translate_element .goog-te-combo',
        '#google_translate_element_mobile .goog-te-combo',
        '.goog-te-gadget .goog-te-combo',
        '.goog-te-gadget-simple .goog-te-combo'
      ];
      
      let found = false;
      
      for (const selector of selectors) {
        const translateElement = document.querySelector(selector) as HTMLSelectElement;
        console.log(`Recherche du sélecteur: ${selector}`, translateElement);
        
        if (translateElement && translateElement.options && translateElement.options.length > 1) {
          console.log('Sélecteur Google Translate trouvé et prêt !');
          
          // Simuler un clic utilisateur réel
          translateElement.focus();
          
          // Créer et déclencher un événement mousedown
          const mouseDownEvent = new MouseEvent('mousedown', {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          translateElement.dispatchEvent(mouseDownEvent);
          
          // Puis un événement click
          const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          translateElement.dispatchEvent(clickEvent);
          
          found = true;
          break;
        }
      }
      
      if (!found && attempt < maxAttempts) {
        console.log(`Tentative ${attempt} échouée, nouvelle tentative dans 250ms...`);
        setTimeout(() => tryOpenTranslate(attempt + 1, maxAttempts), 250);
      } else if (!found) {
        console.log('Google Translate non disponible après toutes les tentatives');
        // Fallback : essayer de cliquer sur l'élément gadget
        const gadget = document.querySelector('.goog-te-gadget-simple') || document.querySelector('.goog-te-gadget');
        if (gadget) {
          console.log('Clic sur le gadget Google Translate');
          (gadget as HTMLElement).click();
        } else {
          alert('Le traducteur Google n\'est pas encore disponible. Veuillez patienter quelques secondes et réessayer.');
        }
      }
    };
    
    // Commencer les tentatives
    tryOpenTranslate();
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
