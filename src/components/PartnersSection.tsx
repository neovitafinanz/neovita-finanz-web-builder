
import React, { useEffect, useState } from 'react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const partners = [
    {
      name: "BNP Paribas",
      logo: "/lovable-uploads/67d1c251-fd82-4080-8e8c-6c855b4d6844.png"
    },
    {
      name: "Société Générale",
      logo: "/lovable-uploads/b904229e-2e90-4ac5-9ce1-eb3212a73049.png"
    },
    {
      name: "UniCredit",
      logo: "/lovable-uploads/c206f72c-73b7-4084-adb7-526834ba1ff7.png"
    },
    {
      name: "Banque Nationale",
      logo: "/lovable-uploads/bd8a1af1-74f4-47c8-b7df-b58a3f984eee.png"
    },
    {
      name: "BFM",
      logo: "/lovable-uploads/a8461555-90ce-4a4e-893d-59b3284588a7.png"
    },
    {
      name: "La Banque Postale",
      logo: "/lovable-uploads/62503f5e-e134-4028-a210-b37f21356b24.png"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 5));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, partners.length]);

  const visiblePartners = partners.slice(currentIndex, currentIndex + 6);
  
  // Compléter avec les premiers éléments si nécessaire
  while (visiblePartners.length < 6 && partners.length > 0) {
    const remainingIndex = (currentIndex + visiblePartners.length) % partners.length;
    visiblePartners.push(partners[remainingIndex]);
  }

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            Nos Partenaires Bancaires
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Grâce à notre réseau de partenaires financiers de confiance, 
            nous vous proposons les meilleures conditions du marché.
          </p>
        </div>

        {/* Partners Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="flex items-center justify-center space-x-8 lg:space-x-12">
            {visiblePartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 lg:w-40 lg:h-20 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group"
                onClick={() => console.log(`Clicked on ${partner.name}`)}
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Navigation Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, partners.length - 5) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-900' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller au groupe de partenaires ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Message */}  
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Un réseau de confiance pour votre sérénité
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Notre collaboration avec les principales institutions financières françaises et européennes 
              nous permet de vous proposer une large gamme de solutions de financement aux conditions 
              les plus avantageuses du marché.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Partenaires agréés</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">Conditions négociées</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-600">Traitement rapide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
