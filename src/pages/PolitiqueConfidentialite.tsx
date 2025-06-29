
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PolitiqueConfidentialite = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('privacy.title')}
      description={t('privacy.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('privacy.title')}
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('privacy.dataCollection.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('privacy.dataCollection.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('privacy.dataUsage.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('privacy.dataUsage.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('privacy.dataProtection.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('privacy.dataProtection.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('privacy.rights.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('privacy.rights.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
