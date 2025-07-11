
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, CheckCircle, Home, Euro, Shield, TrendingUp } from 'lucide-react';

const PretImmobilier = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const advantages = [
    t('mortgageLoans.advantages.competitiveRates'),
    t('mortgageLoans.advantages.personalizedSupport'),
    t('mortgageLoans.advantages.freeStudy'),
    t('mortgageLoans.advantages.bankNegotiation'),
    t('mortgageLoans.advantages.followUp'),
    t('mortgageLoans.advantages.insurance')
  ];

  const features = [
    {
      icon: Euro,
      title: t('mortgageLoans.characteristics.highAmounts'),
      description: t('mortgageLoans.characteristics.highAmountsDesc')
    },
    {
      icon: Home,
      title: t('mortgageLoans.characteristics.allProjects'),
      description: t('mortgageLoans.characteristics.allProjectsDesc')
    },
    {
      icon: Shield,
      title: t('mortgageLoans.characteristics.secured'),
      description: t('mortgageLoans.characteristics.securedDesc')
    },
    {
      icon: TrendingUp,
      title: t('mortgageLoans.characteristics.advantageousRates'),
      description: t('mortgageLoans.characteristics.advantageousRatesDesc')
    }
  ];

  return (
    <Layout 
      title={t('nav.mortgageLoans')}
      description={t('mortgageLoans.metaDescription')}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' 
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('nav.mortgageLoans')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('mortgageLoans.hero.subtitle')}
            </p>
            <Button 
              onClick={() => navigate(`/${language}/demande-credit`)}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t('mortgageLoans.cta.request')}
            </Button>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('mortgageLoans.characteristics.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('mortgageLoans.advantages.title')}
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => navigate(`/${language}/demande-credit`)}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  {t('mortgageLoans.cta.apply')}
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Maison moderne avec jardin"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PretImmobilier;
