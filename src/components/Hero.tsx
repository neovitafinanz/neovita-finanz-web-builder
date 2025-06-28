
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, currentLanguage } = useLanguage();

  const slides = [
    {
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      descriptionKey: 'hero.slide1.description',
      background: 'bg-gradient-to-r from-primary to-blue-600',
      image: '/lovable-uploads/hero-slide-1.jpg'
    },
    {
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      descriptionKey: 'hero.slide2.description',
      background: 'bg-gradient-to-r from-green-600 to-primary',
      image: '/lovable-uploads/hero-slide-2.jpg'
    },
    {
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      descriptionKey: 'hero.slide3.description',
      background: 'bg-gradient-to-r from-purple-600 to-primary',
      image: '/lovable-uploads/hero-slide-3.jpg'
    },
    {
      titleKey: 'hero.slide4.title',
      subtitleKey: 'hero.slide4.subtitle',
      descriptionKey: 'hero.slide4.description',
      background: 'bg-gradient-to-r from-orange-600 to-primary',
      image: '/lovable-uploads/hero-slide-4.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const getLocalizedPath = (path: string) => {
    return currentLanguage === 'fr' ? path : `/${currentLanguage}${path}`;
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className={`${slide.background} h-full flex items-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t(slide.titleKey)}
                </h1>
                <h2 className="text-xl md:text-2xl font-light opacity-90">
                  {t(slide.subtitleKey)}
                </h2>
                <p className="text-lg opacity-80 leading-relaxed">
                  {t(slide.descriptionKey)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={getLocalizedPath('/contact')}
                    className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={getLocalizedPath('/simulator')}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors group"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    {t('hero.cta.secondary')}
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Legal Disclaimer */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {t('hero.disclaimer')}
        </div>
      </div>
    </div>
  );
};

export default Hero;
