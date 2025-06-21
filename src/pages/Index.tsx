
import React from 'react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import LoanSimulator from '@/components/LoanSimulator';
import PartnersSection from '@/components/PartnersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, Shield, Clock, Users, TrendingUp, Award } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.personalLoans.title'),
      description: t('services.personalLoans.description'),
      icon: Users,
      href: '/prets-personnels',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: t('services.mortgageLoans.title'),
      description: t('services.mortgageLoans.description'),
      icon: Award,
      href: '/prets-immobiliers',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: t('services.creditBuyback.title'),
      description: t('services.creditBuyback.description'),
      icon: TrendingUp,
      href: '/rachat-credit',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: t('advantages.security.title'),
      description: t('advantages.security.description')
    },
    {
      icon: Clock,
      title: t('advantages.speed.title'),
      description: t('advantages.speed.description')
    },
    {
      icon: Users,
      title: t('advantages.experts.title'),
      description: t('advantages.experts.description')
    }
  ];

  return (
    <Layout 
      title={t('nav.home')} 
      description={t('home.metaDescription')}
    >
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section with background image */}
      <section id="services" className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all group bg-white/95 backdrop-blur-sm">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button 
                      onClick={() => navigate(service.href)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      aria-label={`${t('common.learnMoreAbout')} ${service.title}`}
                    >
                      {t('common.discover')}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section with background */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-green-900/80" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('home.advantagesTitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Loan Simulator */}
      <LoanSimulator />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section with background image */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-600/90" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            {t('home.ctaSubtitle')}
          </p>
          <Button 
            onClick={() => navigate('/demande-credit')}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            {t('common.startRequest')}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
