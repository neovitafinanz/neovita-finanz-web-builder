
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InformationsLegales = () => {
  return (
    <Layout 
      title="Informations légales" 
      description="Informations légales de Neovita Finanz. Statut juridique, réglementation et informations officielles."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Informations Légales
            </h1>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Statut et Réglementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Statut IOBSP</h3>
                  <p className="text-gray-600">
                    Neovita Finanz est immatriculée en qualité d'Intermédiaire en Opérations de Banque 
                    et en Services de Paiement (IOBSP) sous le numéro [Numéro ORIAS].
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Autorité de Contrôle</h3>
                  <p className="text-gray-600">
                    Nous sommes contrôlés par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) 
                    et respectons le Code monétaire et financier.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Assurance Responsabilité Civile</h3>
                  <p className="text-gray-600">
                    Nous sommes couverts par une assurance responsabilité civile professionnelle 
                    souscrite auprès de [Nom de l'assureur].
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Médiation</h3>
                  <p className="text-gray-600">
                    En cas de litige, vous pouvez faire appel au médiateur de la consommation 
                    compétent dans le secteur financier.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InformationsLegales;
