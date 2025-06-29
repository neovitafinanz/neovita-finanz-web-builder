
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PlanDuSite = () => {
  const { t } = useLanguage();

  const siteStructure = [
    {
      title: t('nav.home'),
      path: '/',
      children: [
        { title: t('services.personalLoans.title'), path: '/pret-personnel' },
        { title: t('services.mortgageLoans.title'), path: '/pret-immobilier' },
        { title: t('services.creditBuyback.title'), path: '/rachat-credit' }
      ]
    },
    {
      title: t('nav.about'),
      path: '/a-propos',
      children: [
        { title: t('partners.title'), path: '/partenaires' }
      ]
    },
    {
      title: t('common.requestLoan'),
      path: '/demande-credit'
    }
  ];

  return (
    <Layout 
      title={t('siteMap.title')}
      description={t('siteMap.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('siteMap.title')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 text-center">
              {t('siteMap.description')}
            </p>

            <div className="space-y-6">
              {siteStructure.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>
                      <Link to={section.path} className="text-blue-600 hover:text-blue-800">
                        {section.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  {section.children && (
                    <CardContent>
                      <ul className="space-y-2">
                        {section.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link 
                              to={child.path} 
                              className="text-gray-600 hover:text-blue-600"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanDuSite;
