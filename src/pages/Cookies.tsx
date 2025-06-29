
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('cookies.title')}
      description={t('cookies.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('cookies.title')}
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('cookies.what.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('cookies.what.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('cookies.types.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{t('cookies.types.technical.title')}</h4>
                      <p className="text-gray-600">
                        {t('cookies.types.technical.description')}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{t('cookies.types.analytics.title')}</h4>
                      <p className="text-gray-600">
                        {t('cookies.types.analytics.description')}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{t('cookies.types.preferences.title')}</h4>
                      <p className="text-gray-600">
                        {t('cookies.types.preferences.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('cookies.management.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('cookies.management.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('cookies.duration.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('cookies.duration.description')}
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

export default Cookies;
