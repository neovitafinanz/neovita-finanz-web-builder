
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PersonalLoans = () => {
  const { t, currentLanguage } = useLanguage();

  const getLocalizedPath = (path: string) => {
    return currentLanguage === 'fr' ? path : `/${currentLanguage}${path}`;
  };

  const advantages = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.flexibility',
      descriptionKey: 'personalLoans.advantages.flexibility'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.rapidResponse',
      descriptionKey: 'personalLoans.advantages.rapidResponse'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.competitiveRates',
      descriptionKey: 'personalLoans.advantages.competitiveRates'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.noCollateral',
      descriptionKey: 'personalLoans.advantages.noCollateral'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.personalizedSupport',
      descriptionKey: 'personalLoans.advantages.personalizedSupport'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      titleKey: 'personalLoans.advantages.freeStudy',
      descriptionKey: 'personalLoans.advantages.freeStudy'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('nav.personalLoans')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('personalLoans.hero.subtitle')}
            </p>
            <a
              href={getLocalizedPath('/contact')}
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
            >
              {t('personalLoans.cta.study')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('personalLoans.advantages.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(advantage.titleKey)}
                </h3>
                <p className="text-gray-600">
                  {t(advantage.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('common.startRequest')}
          </h2>
          <a
            href={getLocalizedPath('/contact')}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
          >
            {t('common.requestLoan')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
