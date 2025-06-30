
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cookie, Shield, Settings, Clock } from 'lucide-react';

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
            <div className="text-center mb-12">
              <Cookie className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('cookies.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Découvrez comment nous les utilisons et comment vous pouvez les gérer.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cookie className="w-5 h-5 text-green-600" />
                    <span>{t('cookies.what.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web. Ils permettent au site de mémoriser vos actions et préférences pendant une certaine période.
                  </p>
                  <p className="text-gray-600">
                    Nous utilisons les cookies pour améliorer votre navigation, analyser l'utilisation du site et personnaliser votre expérience utilisateur.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span>{t('cookies.types.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('cookies.types.technical.title')}</h4>
                      <p className="text-gray-600 mb-2">
                        Ces cookies sont essentiels au fonctionnement du site. Ils permettent la navigation et l'utilisation des fonctionnalités de base.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Durée :</strong> Session ou 1 an maximum<br />
                        <strong>Exemples :</strong> Cookies de session, préférences linguistiques, panier d'achat
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('cookies.types.analytics.title')}</h4>
                      <p className="text-gray-600 mb-2">
                        Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site en collectant des informations anonymes.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Durée :</strong> 2 ans maximum<br />
                        <strong>Outils utilisés :</strong> Google Analytics, Hotjar<br />
                        <strong>Données collectées :</strong> Pages visitées, durée de visite, source de trafic
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('cookies.types.preferences.title')}</h4>
                      <p className="text-gray-600 mb-2">
                        Ces cookies mémorisent vos choix et préférences pour personnaliser votre expérience.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Durée :</strong> 1 an maximum<br />
                        <strong>Exemples :</strong> Langue choisie, région, préférences d'affichage
                      </p>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Cookies publicitaires</h4>
                      <p className="text-gray-600 mb-2">
                        Ces cookies sont utilisés pour vous proposer des publicités pertinentes basées sur vos centres d'intérêt.
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Durée :</strong> 13 mois maximum<br />
                        <strong>Partenaires :</strong> Google Ads, Facebook Pixel<br />
                        <strong>Note :</strong> Vous pouvez refuser ces cookies sans affecter le fonctionnement du site
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-green-600" />
                    <span>{t('cookies.management.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Vous avez le contrôle total sur les cookies. Voici comment les gérer :
                    </p>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">Sur notre site</h5>
                      <p className="text-green-700 text-sm">
                        Vous pouvez modifier vos préférences de cookies à tout moment en cliquant sur le lien "Gérer les cookies" en bas de page.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800 mb-2">Dans votre navigateur</h5>
                      <div className="text-blue-700 text-sm space-y-1">
                        <p><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</p>
                        <p><strong>Firefox :</strong> Paramètres → Vie privée et sécurité → Cookies</p>
                        <p><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web</p>
                        <p><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-yellow-800 mb-2">Outils externes</h5>
                      <div className="text-yellow-700 text-sm space-y-1">
                        <p><strong>Google Analytics :</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="underline" target="_blank" rel="noopener noreferrer">Désactiver Google Analytics</a></p>
                        <p><strong>Publicités Google :</strong> <a href="https://adssettings.google.com" className="underline" target="_blank" rel="noopener noreferrer">Paramètres des annonces</a></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>{t('cookies.duration.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 font-semibold text-gray-900">Type de cookie</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Durée de conservation</th>
                          <th className="text-left py-2 font-semibold text-gray-900">Finalité</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 text-gray-600">Session</td>
                          <td className="py-3 text-gray-600">Fin de session</td>
                          <td className="py-3 text-gray-600">Navigation et fonctionnement du site</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Préférences</td>
                          <td className="py-3 text-gray-600">1 an</td>
                          <td className="py-3 text-gray-600">Mémoriser vos choix (langue, région)</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Analytics</td>
                          <td className="py-3 text-gray-600">2 ans</td>
                          <td className="py-3 text-gray-600">Statistiques d'utilisation anonymes</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Publicitaires</td>
                          <td className="py-3 text-gray-600">13 mois</td>
                          <td className="py-3 text-gray-600">Publicité ciblée</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Pour toute question concernant notre politique de cookies, vous pouvez nous contacter :
                  </p>
                  <div className="mt-3 space-y-1 text-green-700">
                    <p><strong>Email :</strong> dpo@neovitafinanz.com</p>
                    <p><strong>Adresse :</strong> 1 Rue du Bois Chaland, 91090 Lisses, France</p>
                    <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
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

export default Cookies;
