
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingLogo = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Link 
        to="/" 
        className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-500 hover:border-green-600 group"
        aria-label="Traduction - Google Translate"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          🌐
        </span>
      </Link>
    </div>
  );
};

export default FloatingLogo;
