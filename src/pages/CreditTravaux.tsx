
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, CheckCircle, Hammer, Wrench } from 'lucide-react';

const CreditTravaux = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const projectTypes = [
    t('workCredit.projectTypes.energyRenovation'),
    t('workCredit.projectTypes.houseExtension'),
    t('workCredit.projectTypes.interiorDesign'),
    t('workCredit.projectTypes.roofWork'),
    t('workCredit.projectTypes.poolInstallation'),
    t('workCredit.projectTypes.kitchenBathroom')
  ];

  return (
    <Layout 
      title={t('nav.workCredit')}
      description={t('workCredit.metaDescription')}
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('workCredit.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('workCredit.hero.subtitle')}
            </p>
            <Button 
              onClick={() => navigate('/demande-credit')}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold"
            >
              <Hammer className="w-5 h-5 mr-2" />
              {t('workCredit.cta.finance')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('workCredit.projectTypes.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Wrench className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">{project}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreditTravaux;
