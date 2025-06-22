
import React from 'react';

const FloatingLogo = () => {
  const handleTranslateClick = () => {
    console.log('Clic sur le bouton de traduction floating');
    
    // Attendre que Google Translate soit complètement chargé
    const waitForGoogleTranslate = () => {
      const translateSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      
      if (translateSelect && translateSelect.options && translateSelect.options.length > 1) {
        console.log(`Google Translate trouvé avec ${translateSelect.options.length} langues`);
        
        // Ouvrir le sélecteur
        translateSelect.focus();
        translateSelect.click();
        
        // Forcer l'ouverture avec un événement mousedown si nécessaire
        setTimeout(() => {
          if (!translateSelect.matches(':focus')) {
            translateSelect.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
          }
        }, 100);
        
        return true;
      }
      
      return false;
    };
    
    // Essayer immédiatement
    if (waitForGoogleTranslate()) {
      return;
    }
    
    // Sinon attendre avec retry
    console.log('Google Translate pas prêt, attente...');
    let attempts = 0;
    const maxAttempts = 15; // 15 x 500ms = 7.5 secondes
    
    const checkInterval = setInterval(() => {
      attempts++;
      console.log(`Tentative ${attempts}/${maxAttempts}...`);
      
      if (waitForGoogleTranslate()) {
        clearInterval(checkInterval);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
        console.log('Timeout: Google Translate non disponible');
        alert('Le traducteur se charge encore. Veuillez patienter quelques secondes et réessayer.');
      }
    }, 500);
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
