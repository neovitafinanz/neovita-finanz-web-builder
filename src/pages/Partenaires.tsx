
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, Building, Award } from 'lucide-react';

const Partenaires = () => {
  const { t } = useLanguage();

  const partnerTypes = [
    {
      icon: Building,
      title: t('partners.types.banks.title'),
      description: t('partners.types.banks.description')
    },
    {
      icon: Handshake,
      title: t('partners.types.brokers.title'),
      description: t('partners.types.brokers.description')
    },
    {
      icon: Award,
      title: t('partners.types.insurers.title'),
      description: t('partners.types.insurers.description')
    }
  ];

  return (
    <Layout 
      title={t('partners.title')}
      description={t('partners.metaDescription')}
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('partners.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('partners.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                    <p className="text-gray-600">{partner.description}</p>
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

export default Partenaires;
