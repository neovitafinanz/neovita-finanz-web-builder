
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction floating');
    
    // Fonction pour forcer l'ouverture du sélecteur Google Translate
    const openGoogleTranslate = () => {
      // Chercher le sélecteur principal
      const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (translateSelect) {
        console.log('Sélecteur Google Translate trouvé, ouverture...');
        
        // Forcer le focus et déclencher l'ouverture
        translateSelect.focus();
        translateSelect.click();
        
        // Alternative : déclencher l'événement mousedown
        const mouseDownEvent = new MouseEvent('mousedown', {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        translateSelect.dispatchEvent(mouseDownEvent);
        
        return true;
      }
      
      // Si pas trouvé, essayer de cliquer sur le conteneur Google Translate
      const translateContainer = document.querySelector('#google_translate_element') as HTMLElement;
      if (translateContainer) {
        console.log('Conteneur Google Translate trouvé, clic...');
        translateContainer.click();
        
        // Réessayer de trouver le sélecteur après un court délai
        setTimeout(() => {
          const newSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (newSelect) {
            newSelect.focus();
            newSelect.click();
          }
        }, 100);
        
        return true;
      }
      
      console.log('Google Translate non trouvé');
      alert('Le traducteur n\'est pas encore chargé. Veuillez rafraîchir la page.');
      return false;
    };
    
    // Essayer d'ouvrir immédiatement
    if (!openGoogleTranslate()) {
      // Si ça ne marche pas, attendre un peu et réessayer
      setTimeout(() => {
        if (!openGoogleTranslate()) {
          console.log('Échec définitif d\'ouverture de Google Translate');
        }
      }, 500);
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
