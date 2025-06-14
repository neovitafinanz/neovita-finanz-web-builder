
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PlanSite = () => {
  const siteStructure = [
    {
      title: 'Pages principales',
      links: [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/a-propos' },
        { name: 'Notre équipe', path: '/equipe' },
        { name: 'Demande de crédit', path: '/demande-credit' }
      ]
    },
    {
      title: 'Services financiers',
      links: [
        { name: 'Prêts personnels', path: '/prets-personnels' },
        { name: 'Prêts immobiliers', path: '/prets-immobiliers' },
        { name: 'Rachat de crédit', path: '/rachat-credit' },
        { name: 'Crédit travaux', path: '/credit-travaux' },
        { name: 'Assurances', path: '/assurances' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'Carrières', path: '/carrieres' },
        { name: 'Partenaires', path: '/partenaires' },
        { name: 'Actualités', path: '/actualites' }
      ]
    },
    {
      title: 'Informations légales',
      links: [
        { name: 'Informations légales', path: '/informations-legales' },
        { name: 'Mentions légales', path: '/mentions-legales' },
        { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
        { name: 'Conditions générales', path: '/conditions-generales' },
        { name: 'Cookies', path: '/cookies' }
      ]
    }
  ];

  return (
    <Layout 
      title="Plan du site" 
      description="Plan du site Neovita Finanz. Navigation et structure complète de notre site web."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Plan du Site
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
              {siteStructure.map((section, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-green-600">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link 
                            to={link.path}
                            className="text-gray-600 hover:text-green-600 transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanSite;
