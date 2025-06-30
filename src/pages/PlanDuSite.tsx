
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, CreditCard, Shield, Users, FileText, ExternalLink } from 'lucide-react';

const PlanDuSite = () => {
  const { t, language } = useLanguage();

  const getLocalizedPath = (path: string) => {
    if (language === 'fr') return path;
    return `/${language}${path}`;
  };

  const siteStructure = [
    {
      title: 'Pages principales',
      icon: Home,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      children: [
        { title: t('nav.home'), path: getLocalizedPath('/') },
        { title: t('nav.about'), path: getLocalizedPath('/a-propos') },
        { title: t('partners.title'), path: getLocalizedPath('/partenaires') },
        { title: t('common.requestLoan'), path: getLocalizedPath('/demande-credit') }
      ]
    },
    {
      title: 'Services financiers',
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      children: [
        { title: t('services.personalLoans.title'), path: getLocalizedPath('/pret-personnel') },
        { title: t('services.mortgageLoans.title'), path: getLocalizedPath('/pret-immobilier') },
        { title: t('services.creditBuyback.title'), path: getLocalizedPath('/rachat-credit') },
        { title: 'Crédit travaux', path: getLocalizedPath('/credit-travaux') }
      ]
    },
    {
      title: 'Assurances & Protection',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      children: [
        { title: 'Nos assurances', path: getLocalizedPath('/nos-assurances') },
        { title: 'Assurance emprunteur', path: getLocalizedPath('/assurance-emprunteur') },
        { title: 'Protection juridique', path: getLocalizedPath('/protection-juridique') }
      ]
    },
    {
      title: 'Entreprise',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      children: [
        { title: 'Notre équipe', path: getLocalizedPath('/equipe') },
        { title: 'Carrières', path: getLocalizedPath('/carrieres') },
        { title: 'Actualités', path: getLocalizedPath('/actualites') }
      ]
    },
    {
      title: 'Informations légales',
      icon: FileText,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      children: [
        { title: 'Mentions légales', path: getLocalizedPath('/mentions-legales') },
        { title: 'Conditions générales', path: getLocalizedPath('/conditions-generales') },
        { title: 'Politique de confidentialité', path: getLocalizedPath('/politique-confidentialite') },
        { title: 'Politique des cookies', path: getLocalizedPath('/cookies') },
        { title: 'Plan du site', path: getLocalizedPath('/plan-du-site') }
      ]
    }
  ];

  const statistiques = [
    { label: 'Pages principales', count: 4 },
    { label: 'Services', count: 4 },
    { label: 'Assurances', count: 3 },
    { label: 'Entreprise', count: 3 },
    { label: 'Pages légales', count: 5 },
    { label: 'Total des pages', count: 19 }
  ];

  return (
    <Layout 
      title={t('siteMap.title')}
      description={t('siteMap.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('siteMap.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                {t('siteMap.description')}
              </p>
              
              {/* Statistiques du site */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {statistiques.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.count}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {siteStructure.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader className={`${section.bgColor} rounded-t-lg`}>
                      <CardTitle className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-white ${section.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className={section.color}>{section.title}</span>
                        <span className="ml-auto text-sm bg-white px-2 py-1 rounded-full text-gray-600">
                          {section.children.length} pages
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {section.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link 
                              to={child.path} 
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                                {child.title}
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 opacity-0 group-hover:opacity-100 transition-all" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Section d'aide à la navigation */}
            <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-center text-green-800">
                  Besoin d'aide pour naviguer ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services financiers</h4>
                    <p className="text-sm text-gray-600">
                      Découvrez nos solutions de prêts personnels, immobiliers et nos services d'assurance.
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">À propos de nous</h4>
                    <p className="text-sm text-gray-600">
                      Apprenez-en plus sur notre entreprise, notre équipe et nos valeurs.
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Informations légales</h4>
                    <p className="text-sm text-gray-600">
                      Consultez nos mentions légales, conditions d'utilisation et politique de confidentialité.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link 
                    to={getLocalizedPath('/demande-credit')}
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Faire une demande de crédit</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Dernière mise à jour */}
            <div className="mt-8 text-center text-sm text-gray-500">
              Plan du site mis à jour le {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanDuSite;
