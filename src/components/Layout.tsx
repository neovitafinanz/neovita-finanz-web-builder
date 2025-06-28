
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LanguageSelector from './LanguageSelector';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | Neovita Finanz - Solutions de financement personnalisées`;
    }
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col">
      <LanguageSelector />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
