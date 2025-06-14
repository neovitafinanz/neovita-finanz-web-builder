
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MentionsLegales = () => {
  return (
    <Layout 
      title="Mentions légales" 
      description="Mentions légales du site Neovita Finanz. Informations sur l'éditeur, hébergement et propriété intellectuelle."
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Mentions Légales
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Éditeur du site</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    <strong>Neovita Finanz</strong><br />
                    Société par Actions Simplifiée<br />
                    Capital social : [Montant du capital]<br />
                    Siège social : [Adresse complète]<br />
                    RCS : [Numéro RCS]<br />
                    SIRET : [Numéro SIRET]<br />
                    TVA Intracommunautaire : [Numéro TVA]
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Directeur de publication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    [Nom du directeur de publication]<br />
                    [Titre/Fonction]
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Hébergement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ce site est hébergé par :<br />
                    [Nom de l'hébergeur]<br />
                    [Adresse de l'hébergeur]
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tous les éléments de ce site (textes, images, sons, vidéos, logos, etc.) 
                    sont protégés par le droit d'auteur et le droit des marques. 
                    Toute reproduction sans autorisation est interdite.
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

export default MentionsLegales;
