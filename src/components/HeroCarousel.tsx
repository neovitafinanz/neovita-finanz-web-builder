
import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      titleKey: 'hero.slide1.title',
      subtitleKey: 'hero.slide1.subtitle',
      descriptionKey: 'hero.slide1.description'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      titleKey: 'hero.slide2.title',
      subtitleKey: 'hero.slide2.subtitle',
      descriptionKey: 'hero.slide2.description'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      titleKey: 'hero.slide3.title',
      subtitleKey: 'hero.slide3.subtitle',
      descriptionKey: 'hero.slide3.description'
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      titleKey: 'hero.slide4.title',
      subtitleKey: 'hero.slide4.subtitle',
      descriptionKey: 'hero.slide4.description'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      id="accueil" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'transform translate-y-0' 
                : index < currentSlide 
                  ? 'transform -translate-y-full' 
                  : 'transform translate-y-full'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 via-green-700/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {t(slides[currentSlide].titleKey)}
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-yellow-400 font-semibold">
            {t(slides[currentSlide].subtitleKey)}
          </p>
          <p className="text-lg lg:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {t(slides[currentSlide].descriptionKey)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 border-2 border-yellow-400"
              onClick={() => navigate('/demande-credit')}
            >
              {t('hero.cta.primary')}
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              onClick={() => document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t('hero.cta.secondary')}
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            {t('hero.disclaimer')}
          </p>
        </div>
      </div>

      {/* Navigation Arrows - Now vertical */}
      <button
        onClick={prevSlide}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Slide précédent"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Slide suivant"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-yellow-400 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
