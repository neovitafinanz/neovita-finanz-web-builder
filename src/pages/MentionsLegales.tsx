
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const MentionsLegales = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('legal.title')}
      description={t('legal.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('legal.title')}
            </h1>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span>{t('legal.editor.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <strong>Neovita Finanz</strong>
                    </p>
                    <p className="text-gray-600">
                      <strong>Forme juridique :</strong> SARL
                    </p>
                    <p className="text-gray-600">
                      <strong>Capital social :</strong> 17 000 000 €
                    </p>
                    <p className="text-gray-600">
                      <strong>Adresse du siège social :</strong><br />
                      1 Rue du Bois Chaland<br />
                      91090 Lisses, France
                    </p>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>01 23 45 67 89</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>infos@neovitafinanz.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Informations légales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Identification</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li><strong>SIREN :</strong> 493 171 540</li>
                        <li><strong>SIRET :</strong> 493 171 540 00013</li>
                        <li><strong>TVA intracommunautaire :</strong> FR16493171540</li>
                        <li><strong>RCS :</strong> Évry (07/07/2008)</li>
                        <li><strong>RNE :</strong> 02/04/2008</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Activité</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li><strong>Secteur :</strong> Services financiers</li>
                        <li><strong>Effectif :</strong> 43 salariés</li>
                        <li><strong>Code APE :</strong> 6419Z</li>
                        <li><strong>Activité :</strong> Intermédiation en crédit</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.director.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    <strong>Directeur de la publication :</strong> M. Jean-Pierre Martin<br />
                    <strong>Qualité :</strong> Gérant de la société
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Réglementation professionnelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Statut :</strong> Intermédiaire en opérations de banque et en services de paiement (IOBSP)
                    </p>
                    <p>
                      <strong>Immatriculation ORIAS :</strong> 12345678901
                    </p>
                    <p>
                      <strong>Contrôle :</strong> Autorité de Contrôle Prudentiel et de Résolution (ACPR)<br />
                      61 rue Taitbout, 75436 Paris Cedex 09
                    </p>
                    <p>
                      <strong>Assurance Responsabilité Civile Professionnelle :</strong><br />
                      AXA France IARD - 313 Terrasses de l'Arche, 92727 Nanterre Cedex<br />
                      Montant de garantie : 8 000 000 €
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('legal.intellectual.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      L'ensemble du contenu de ce site web (textes, images, logos, graphismes, etc.) est protégé par le droit d'auteur et appartient à Neovita Finanz ou à ses partenaires.
                    </p>
                    <p>
                      Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable de Neovita Finanz.
                    </p>
                    <p>
                      Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Avertissement crédit</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-yellow-700 text-sm">
                    <p><strong>Taux d'intérêt :</strong> De 0,50% à 21% selon les organismes prêteurs</p>
                    <p><strong>Un crédit vous engage et doit être remboursé.</strong> Vérifiez vos capacités de remboursement avant de vous engager.</p>
                    <p><strong>Assurance :</strong> L'assurance emprunteur n'est pas obligatoire mais vivement recommandée.</p>
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

export default MentionsLegales;
