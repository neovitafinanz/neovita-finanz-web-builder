
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail } from 'lucide-react';

const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('legal.title')}
      description={t('legal.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('legal.title')}
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span>{t('legal.editor.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <strong>{t('legal.company.name')}</strong>
                    </p>
                    <p className="text-gray-600">
                      <strong>{t('legal.company.legalForm')}</strong>
                    </p>
                    <p className="text-gray-600">
                      <strong>{t('legal.company.capital')}</strong>
                    </p>
                    <p className="text-gray-600">
                      <strong>{t('legal.company.address')}</strong><br />
                      {t('legal.company.addressDetails').split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{t('legal.company.email')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.identification.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('legal.identification.title')}</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>{t('legal.identification.siren')}</li>
                        <li>{t('legal.identification.siret')}</li>
                        <li>{t('legal.identification.vat')}</li>
                        <li>{t('legal.identification.rcs')}</li>
                        <li>{t('legal.identification.rne')}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('legal.activity.title')}</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>{t('legal.activity.sector')}</li>
                        <li>{t('legal.activity.employees')}</li>
                        <li>{t('legal.activity.code')}</li>
                        <li>{t('legal.activity.activity')}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.director.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600">
                    <p>{t('legal.directorInfo.name')}</p>
                    <p>{t('legal.directorInfo.role')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.regulation.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-600">
                    <p>{t('legal.regulation.status')}</p>
                    <p>{t('legal.regulation.orias')}</p>
                    <p>{t('legal.regulation.control').split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}</p>
                    <p>{t('legal.regulation.insurance').split('\n').map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.intellectual.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p>{t('legal.intellectualProperty.content1')}</p>
                    <p>{t('legal.intellectualProperty.content2')}</p>
                    <p>{t('legal.intellectualProperty.content3')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">{t('legal.warning.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-yellow-700 text-sm">
                    <p>{t('legal.warning.rates')}</p>
                    <p><strong>{t('legal.warning.engagement')}</strong></p>
                    <p>{t('legal.warning.insurance')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
