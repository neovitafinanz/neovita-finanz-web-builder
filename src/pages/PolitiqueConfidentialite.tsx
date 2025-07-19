
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Mail, FileText, Clock, Lock, User } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: User,
      title: t('privacy.dataCollection.title'),
      content: t('privacy.dataCollection.content')
    },
    {
      icon: Lock,
      title: t('privacy.dataUse.title'),
      content: t('privacy.dataUse.content')
    },
    {
      icon: Shield,
      title: t('privacy.dataProtection.title'),
      content: t('privacy.dataProtection.content')
    },
    {
      icon: FileText,
      title: t('privacy.rights.title'),
      content: t('privacy.rights.content')
    },
    {
      icon: Clock,
      title: t('privacy.retention.title'),
      content: t('privacy.retention.content')
    }
  ];

  return (
    <Layout 
      title={t('privacy.title')}
      description={t('privacy.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('privacy.title')}
              </h1>
              <p className="text-lg text-gray-600">
                {t('privacy.description')}
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {t('privacy.lastUpdate')} : {new Date().toLocaleDateString('fr-FR')}
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader className="bg-green-50">
                      <CardTitle className="flex items-center space-x-3 text-green-800">
                        <IconComponent className="w-6 h-6" />
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Section contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-green-800">
                    <Mail className="w-6 h-6" />
                    <span>{t('privacy.contact.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('privacy.contact.dpo')}</h4>
                      <p className="text-gray-700">
                        Email: <a href="mailto:infos@neovitafinanz.com" className="text-green-600 hover:underline">
                          infos@neovitafinanz.com
                        </a>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('privacy.contact.address')}</h4>
                      <p className="text-gray-700">
                        Neovita Finanz<br />
                        123 Avenue de la République<br />
                        75011 Paris, France
                      </p>
                    </div>
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

export default PolitiqueConfidentialite;
