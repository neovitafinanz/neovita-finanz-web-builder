
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PolitiqueConfidentialite = () => {
  return (
    <Layout 
      title="Politique de confidentialité" 
      description="Politique de confidentialité de Neovita Finanz. Protection des données personnelles et respect de votre vie privée."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Politique de Confidentialité
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Collecte des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous collectons uniquement les données nécessaires au traitement de votre demande 
                    de financement et à l'amélioration de nos services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Utilisation des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vos données personnelles sont utilisées exclusivement pour :
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>L'étude de votre dossier de financement</li>
                    <li>La communication avec vous concernant votre demande</li>
                    <li>L'amélioration de nos services</li>
                    <li>Le respect de nos obligations légales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Vos droits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Droit d'accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d'opposition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Sécurité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
                    appropriées pour protéger vos données contre tout accès non autorisé, 
                    altération, divulgation ou destruction.
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

export default PolitiqueConfidentialite;
