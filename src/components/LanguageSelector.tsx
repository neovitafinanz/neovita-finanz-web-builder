
import React from 'react';
import { Link } from 'react-router-dom';
import { useUrlLanguage } from '@/hooks/useUrlLanguage';

const LanguageSelector = () => {
  const { currentLanguage } = useUrlLanguage();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'da', name: 'Dansk', flag: '🇩🇰' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'no', name: 'Norsk', flag: '🇳🇴' }
  ];

  return (
    <nav id="language-selector" className="text-right p-2.5 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {languages.map((lang, index) => (
          <React.Fragment key={lang.code}>
            <Link 
              to={lang.code === 'fr' ? '/' : `/${lang.code}/`}
              className={`text-sm hover:text-green-600 transition-colors ${
                currentLanguage === lang.code 
                  ? 'font-semibold text-green-600' 
                  : 'text-gray-600'
              }`}
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.name}
            </Link>
            {index < languages.length - 1 && (
              <span className="mx-2 text-gray-400">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default LanguageSelector;
