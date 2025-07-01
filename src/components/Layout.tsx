
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const { isLoading } = useLanguage();

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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full max-w-full">
      <Header />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <div className="w-full max-w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
