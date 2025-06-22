
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction floating');
    
    // Fonction pour vérifier si Google Translate est prêt avec les langues
    const isTranslateReady = () => {
      const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (translateSelect && translateSelect.options && translateSelect.options.length > 1) {
        console.log(`Google Translate prêt avec ${translateSelect.options.length} langues disponibles`);
        return true;
      }
      return false;
    };

    // Fonction pour ouvrir le sélecteur Google Translate
    const openGoogleTranslate = () => {
      const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (translateSelect && translateSelect.options && translateSelect.options.length > 1) {
        console.log('Ouverture du sélecteur Google Translate...');
        
        // Créer et déclencher un événement de clic natif
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        
        translateSelect.focus();
        translateSelect.dispatchEvent(clickEvent);
        
        // Alternative avec mousedown si le click ne suffit pas
        setTimeout(() => {
          const mouseDownEvent = new MouseEvent('mousedown', {
            view: window,
            bubbles: true,
            cancelable: true,
          });
          translateSelect.dispatchEvent(mouseDownEvent);
        }, 50);
        
        return true;
      }
      
      console.log('Sélecteur Google Translate non prêt');
      return false;
    };

    // Vérifier si Google Translate est déjà prêt
    if (isTranslateReady()) {
      openGoogleTranslate();
    } else {
      console.log('Google Translate pas encore prêt, attente...');
      
      // Attendre que Google Translate soit prêt (maximum 5 secondes)
      let attempts = 0;
      const maxAttempts = 25; // 25 x 200ms = 5 secondes
      
      const checkAndOpen = () => {
        attempts++;
        console.log(`Vérification ${attempts}/${maxAttempts}...`);
        
        if (isTranslateReady()) {
          openGoogleTranslate();
        } else if (attempts < maxAttempts) {
          setTimeout(checkAndOpen, 200);
        } else {
          console.log('Timeout: Google Translate non disponible');
          alert('Le traducteur se charge encore. Veuillez attendre quelques secondes et réessayer.');
        }
      };
      
      checkAndOpen();
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
