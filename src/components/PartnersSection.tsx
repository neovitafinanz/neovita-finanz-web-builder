
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from '@/contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  
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

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group h-20 lg:h-24">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 p-2"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Trust Message */}  
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              {t('partners.trustMessage.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('partners.trustMessage.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">{t('partners.trustMessage.labels.approved')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">{t('partners.trustMessage.labels.negotiated')}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-gray-600">{t('partners.trustMessage.labels.fast')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
