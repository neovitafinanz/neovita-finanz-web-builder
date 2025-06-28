
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: '43',
      label: t('about.stats.advisors')
    },
    {
      icon: Award,
      number: '15',
      label: t('about.stats.experience')
    },
    {
      icon: TrendingUp,
      number: '10k+',
      label: t('about.stats.clients')
    },
    {
      icon: Shield,
      number: '100%',
      label: t('about.stats.trust')
    }
  ];

  return (
    <Layout 
      title={t('nav.about')}
      description={t('about.metaDescription')}
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('nav.about')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
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

export default About;
