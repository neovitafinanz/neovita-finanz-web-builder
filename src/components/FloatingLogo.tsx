
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingLogo = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link 
        to="/" 
        className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-500 hover:border-green-600 group"
        aria-label="Retour à l'accueil Neovita Finanz"
      >
        <img 
          src="/lovable-uploads/9ee0536b-2c03-416b-bf54-034f5028bc1f.png" 
          alt="Neovita Finanz" 
          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default FloatingLogo;
