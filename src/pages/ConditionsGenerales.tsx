
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ConditionsGenerales = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('terms.title')}
      description={t('terms.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('terms.title')}
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('terms.purpose.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('terms.purpose.content')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('terms.services.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('terms.services.content')}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>{t('terms.services.advice')}</li>
                    <li>{t('terms.services.intermediation')}</li>
                    <li>{t('terms.services.support')}</li>
                    <li>{t('terms.services.negotiation')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('terms.obligations.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('terms.obligations.content')}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>{t('terms.obligations.accurate')}</li>
                    <li>{t('terms.obligations.deadlines')}</li>
                    <li>{t('terms.obligations.changes')}</li>
                    <li>{t('terms.obligations.commitments')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('terms.remuneration.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('terms.remuneration.content')}
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

export default ConditionsGenerales;
