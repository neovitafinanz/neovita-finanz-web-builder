
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, CheckCircle, TrendingDown, Euro, Clock } from 'lucide-react';

const RachatCredit = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const advantages = [
    t('creditBuyback.advantages.reduction'),
    t('creditBuyback.advantages.simplification'),
    t('creditBuyback.advantages.betterRates'),
    t('creditBuyback.advantages.singlePayment'),
    t('creditBuyback.advantages.additionalCash'),
    t('creditBuyback.advantages.freeAdvice')
  ];

  return (
    <Layout 
      title={t('nav.creditBuyback')}
      description={t('creditBuyback.metaDescription')}
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('nav.creditBuyback')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('creditBuyback.hero.subtitle')}
            </p>
            <Button 
              onClick={() => navigate(`/${language}/demande-credit`)}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t('creditBuyback.cta.request')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('creditBuyback.advantages.title')}
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
                  {t('creditBuyback.cta.study')}
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={t('creditBuyback.hero.subtitle')}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RachatCredit;
