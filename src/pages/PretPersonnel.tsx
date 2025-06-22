
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Calculator, CheckCircle, Clock, Euro, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PretPersonnel = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const advantages = [
    t('personalLoan.advantages.quickResponse'),
    t('personalLoan.advantages.competitiveRates'),
    t('personalLoan.advantages.noFileFees'),
    t('personalLoan.advantages.earlyRepayment'),
    t('personalLoan.advantages.quickFunds'),
    t('personalLoan.advantages.personalSupport')
  ];

  const useCases = [
    {
      title: t('personalLoan.useCases.autoMoto'),
      description: t('personalLoan.useCases.autoMotoDesc'),
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: t('personalLoan.useCases.travel'),
      description: t('personalLoan.useCases.travelDesc'),
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: t('personalLoan.useCases.homeEquipment'),
      description: t('personalLoan.useCases.homeEquipmentDesc'),
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: t('personalLoan.useCases.familyEvents'),
      description: t('personalLoan.useCases.familyEventsDesc'),
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const features = [
    {
      icon: Euro,
      title: t('personalLoan.characteristics.flexibleAmounts'),
      description: t('personalLoan.characteristics.flexibleAmountsDesc')
    },
    {
      icon: Clock,
      title: t('personalLoan.characteristics.adaptableDuration'),
      description: t('personalLoan.characteristics.adaptableDurationDesc')
    },
    {
      icon: Shield,
      title: t('personalLoan.characteristics.noJustification'),
      description: t('personalLoan.characteristics.noJustificationDesc')
    },
    {
      icon: TrendingUp,
      title: t('personalLoan.characteristics.advantageousRates'),
      description: t('personalLoan.characteristics.advantageousRatesDesc')
    }
  ];

  return (
    <Layout 
      title={t('personalLoan.title')}
      description="Prêt personnel en ligne avec Neovita Finanz. Taux dès 2.9%, réponse rapide, montants de 3000€ à 75000€. Demande en ligne sécurisée."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' 
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('personalLoan.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('personalLoan.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/demande-credit')}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {t('personalLoan.requestButton')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('personalLoan.characteristics.title')}
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

      {/* Utilisations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('personalLoan.useCases.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('personalLoan.useCases.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('personalLoan.advantages.title')}
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
                  onClick={() => navigate('/demande-credit')}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  {t('personalLoan.advantages.makeRequest')}
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Couple heureux planifiant leur projet"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simulation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">{t('personalLoan.simulation.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15 000€</div>
                  <div className="text-gray-600">{t('personalLoan.simulation.borrowedAmount')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">60 mois</div>
                  <div className="text-gray-600">{t('personalLoan.simulation.repaymentDuration')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">272€</div>
                  <div className="text-gray-600">{t('personalLoan.simulation.monthlyPayment')}</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  {t('personalLoan.simulation.disclaimer')}
                </p>
                <Button 
                  onClick={() => navigate('/demande-credit')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  {t('personalLoan.simulation.simulate')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PretPersonnel;
