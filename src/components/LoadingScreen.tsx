
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent mb-4"></div>
        <div className="text-green-800 font-semibold text-lg">Neovita Finanz</div>
        <div className="text-green-600 text-sm mt-2">Chargement...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
