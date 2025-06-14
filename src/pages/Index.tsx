
import React from 'react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import LoanSimulator from '@/components/LoanSimulator';
import PartnersSection from '@/components/PartnersSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Calculator, Shield, Clock, Users, TrendingUp, Award } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Prêts personnels',
      description: 'Financez vos projets personnels avec des conditions avantageuses',
      icon: Users,
      href: '/prets-personnels',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Prêts immobiliers',
      description: 'Concrétisez votre projet immobilier avec notre accompagnement',
      icon: Award,
      href: '/prets-immobiliers',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Rachat de crédit',
      description: 'Optimisez vos finances en regroupant vos crédits',
      icon: TrendingUp,
      href: '/rachat-credit',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité garantie',
      description: 'Vos données sont protégées et sécurisées'
    },
    {
      icon: Clock,
      title: 'Réponse rapide',
      description: 'Réponse sous 24h pour votre demande'
    },
    {
      icon: Users,
      title: 'Conseillers experts',
      description: '43 experts à votre service depuis 2006'
    }
  ];

  return (
    <Layout 
      title="Accueil" 
      description="Neovita Finanz - Votre partenaire financier de confiance. Solutions de prêts personnels, immobiliers, rachat de crédit depuis 2006."
    >
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos Solutions de Financement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos solutions adaptées à tous vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
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
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      Découvrir
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir Neovita Finanz ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center">
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

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos conseillers experts vous accompagnent dans toutes vos démarches
          </p>
          <Button 
            onClick={() => navigate('/demande-credit')}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Commencer ma demande
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
