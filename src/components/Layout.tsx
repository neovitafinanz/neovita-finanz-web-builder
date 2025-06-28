
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GoogleTranslate from './GoogleTranslate';
import LanguageSelector from './LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <LanguageSelector />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <GoogleTranslate />
    </div>
  );
};

export default Layout;
