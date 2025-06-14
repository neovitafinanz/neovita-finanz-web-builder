
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConditionsGenerales = () => {
  return (
    <Layout 
      title="Conditions générales" 
      description="Conditions générales d'utilisation et de vente de Neovita Finanz. Modalités de nos services financiers."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Conditions Générales
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Objet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Les présentes conditions générales régissent l'utilisation de nos services 
                    d'intermédiation en opérations de banque et services de paiement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Services proposés</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Neovita Finanz propose les services suivants :
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Conseil en financement</li>
                    <li>Intermédiation en crédit</li>
                    <li>Accompagnement dans les démarches</li>
                    <li>Négociation avec les établissements financiers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Obligations du client</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Le client s'engage à :
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600">
                    <li>Fournir des informations exactes et complètes</li>
                    <li>Respecter les délais de transmission des pièces</li>
                    <li>Signaler tout changement de situation</li>
                    <li>Respecter les engagements pris</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Rémunération</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Notre rémunération est perçue auprès des établissements financiers 
                    partenaires selon les modalités définies dans nos accords de partenariat.
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
