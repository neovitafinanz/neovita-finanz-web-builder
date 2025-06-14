
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cookies = () => {
  return (
    <Layout 
      title="Politique des cookies" 
      description="Politique des cookies de Neovita Finanz. Utilisation des cookies et gestion de vos préférences."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Politique des Cookies
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Qu'est-ce qu'un cookie ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Un cookie est un petit fichier texte déposé sur votre terminal 
                    (ordinateur, tablette, smartphone) lors de la visite d'un site web. 
                    Il permet de reconnaître votre navigateur et de mémoriser certaines informations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Types de cookies utilisés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies techniques</h4>
                      <p className="text-gray-600">
                        Nécessaires au fonctionnement du site (navigation, sécurité, formulaires).
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                      <p className="text-gray-600">
                        Permettent d'analyser l'utilisation du site pour améliorer nos services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cookies de préférences</h4>
                      <p className="text-gray-600">
                        Mémorisent vos choix et préférences pour personnaliser votre expérience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Gestion des cookies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vous pouvez gérer les cookies via les paramètres de votre navigateur. 
                    Vous avez la possibilité de les accepter, les refuser ou les supprimer. 
                    Attention : la désactivation de certains cookies peut affecter le fonctionnement du site.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Durée de conservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Les cookies sont conservés pour une durée maximum de 13 mois, 
                    conformément à la réglementation en vigueur.
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
