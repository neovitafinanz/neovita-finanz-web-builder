
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction floating');
    
    const tryOpenTranslate = (attempt = 1, maxAttempts = 10) => {
      console.log(`Tentative ${attempt}/${maxAttempts} d'ouverture Google Translate`);
      
      // Sélecteurs à essayer
      const selectors = [
        '.goog-te-combo',
        '#google_translate_element .goog-te-combo',
        '#google_translate_element_mobile .goog-te-combo',
        '.goog-te-gadget .goog-te-combo',
        '.goog-te-gadget-simple .goog-te-combo'
      ];
      
      let translateElement = null;
      
      // Chercher un élément disponible
      for (const selector of selectors) {
        const element = document.querySelector(selector) as HTMLSelectElement;
        if (element && element.options && element.options.length > 1) {
          translateElement = element;
          console.log(`Élément trouvé avec le sélecteur: ${selector}`);
          break;
        }
      }
      
      if (translateElement) {
        console.log('Ouverture du sélecteur Google Translate');
        
        // Simuler un clic utilisateur
        translateElement.focus();
        
        // Déclencher les événements
        const events = ['mousedown', 'click', 'mouseup'];
        events.forEach(eventType => {
          const event = new MouseEvent(eventType, {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          translateElement.dispatchEvent(event);
        });
        
        return true;
      } else if (attempt < maxAttempts) {
        console.log(`Tentative ${attempt} échouée, nouvelle tentative dans 300ms...`);
        setTimeout(() => tryOpenTranslate(attempt + 1, maxAttempts), 300);
      } else {
        console.log('Google Translate non trouvé après toutes les tentatives');
        
        // Fallback: essayer de cliquer sur le gadget principal
        const gadgets = [
          '.goog-te-gadget-simple',
          '.goog-te-gadget',
          '#google_translate_element',
          '#google_translate_element_mobile'
        ];
        
        for (const gadgetSelector of gadgets) {
          const gadget = document.querySelector(gadgetSelector) as HTMLElement;
          if (gadget) {
            console.log(`Clic sur le gadget: ${gadgetSelector}`);
            gadget.click();
            return true;
          }
        }
        
        // Si vraiment rien ne fonctionne
        console.log('Aucun élément Google Translate trouvé');
        alert('Le traducteur se charge encore. Veuillez patienter quelques secondes et réessayer.');
      }
      
      return false;
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
