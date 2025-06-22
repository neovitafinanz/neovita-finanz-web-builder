
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Heart, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Assurances = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const insuranceTypes = [
    {
      title: t('insurance.types.borrowerInsurance'),
      description: t('insurance.types.borrowerInsuranceDesc'),
      icon: Shield
    },
    {
      title: t('insurance.types.homeInsurance'),
      description: t('insurance.types.homeInsuranceDesc'),
      icon: Home
    },
    {
      title: t('insurance.types.healthInsurance'),
      description: t('insurance.types.healthInsuranceDesc'),
      icon: Heart
    }
  ];

  return (
    <Layout 
      title={t('insurance.title')}
      description="Solutions d'assurance avec Neovita Finanz. Assurance emprunteur, habitation, santé. Protection optimale."
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('insurance.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('insurance.subtitle')}
            </p>
            <Button 
              onClick={() => navigate('/demande-credit')}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Shield className="w-5 h-5 mr-2" />
              {t('insurance.requestButton')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => {
              const IconComponent = insurance.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{insurance.title}</h3>
                    <p className="text-gray-600">{insurance.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Assurances;
