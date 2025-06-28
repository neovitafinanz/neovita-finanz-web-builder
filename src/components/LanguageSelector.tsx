
import React from 'react';
import { Link } from 'react-router-dom';
import { useUrlLanguage } from '@/hooks/useUrlLanguage';

const LanguageSelector = () => {
  const { currentLanguage } = useUrlLanguage();

  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <nav id="language-selector" style={{ textAlign: 'right', padding: '10px' }}>
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <Link 
            to={lang.code === 'fr' ? '/' : `/${lang.code}/`}
            style={{
              color: currentLanguage === lang.code ? '#16a34a' : '#374151',
              textDecoration: 'none',
              fontWeight: currentLanguage === lang.code ? 'bold' : 'normal'
            }}
          >
            {lang.name}
          </Link>
          {index < languages.length - 1 && <span> | </span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default LanguageSelector;
