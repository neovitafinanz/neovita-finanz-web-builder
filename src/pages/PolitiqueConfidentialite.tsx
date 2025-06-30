import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Eye, Lock, UserCheck, Database, AlertTriangle } from 'lucide-react';

const PolitiqueConfidentialite = () => {
  const { t } = useLanguage();

  return (
    <Layout 
      title={t('privacy.title')}
      description={t('privacy.description')}
    >
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('privacy.title')}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Votre confidentialité est notre priorité. Découvrez comment nous protégeons et utilisons vos données personnelles.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Dernière mise à jour : 15 juin 2024
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserCheck className="w-5 h-5 text-green-600" />
                    <span>Responsable du traitement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <strong>Neovita Finanz</strong> est responsable du traitement de vos données personnelles.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800"><strong>Adresse :</strong> 1 Rue du Bois Chaland, 91090 Lisses, France</p>
                      <p className="text-green-800"><strong>Email :</strong> infos@neovitafinanz.com</p>
                      <p className="text-green-800"><strong>Téléphone :</strong> 01 23 45 67 89</p>
                      <p className="text-green-800"><strong>DPO :</strong> infos@neovitafinanz.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-green-600" />
                    <span>{t('privacy.dataCollection.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Nous collectons différents types de données selon les services utilisés :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Données d'identification</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Nom, prénom</li>
                          <li>• Date et lieu de naissance</li>
                          <li>• Adresse postale</li>
                          <li>• Téléphone, email</li>
                          <li>• Pièce d'identité</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Données financières</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Revenus et charges</li>
                          <li>• Situation professionnelle</li>
                          <li>• Historique bancaire</li>
                          <li>• Crédits en cours</li>
                          <li>• Patrimoine</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Données de navigation</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Adresse IP</li>
                          <li>• Cookies et traceurs</li>
                          <li>• Pages consultées</li>
                          <li>• Durée des sessions</li>
                          <li>• Appareil utilisé</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Données comportementales</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Préférences de crédit</li>
                          <li>• Historique des demandes</li>
                          <li>• Interactions avec le site</li>
                          <li>• Réponses aux formulaires</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-green-600" />
                    <span>{t('privacy.dataUsage.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Vos données sont utilisées dans le cadre de nos missions d'intermédiation en crédit :
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🎯 Finalités principales</h4>
                        <ul className="text-blue-800 text-sm space-y-1">
                          <li>• Étude de votre dossier de crédit</li>
                          <li>• Recherche des meilleures offres</li>
                          <li>• Négociation avec les partenaires bancaires</li>
                          <li>• Suivi de votre dossier jusqu'à déblocage</li>
                          <li>• Service client et support</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">📊 Finalités secondaires</h4>
                        <ul className="text-green-800 text-sm space-y-1">
                          <li>• Amélioration de nos services</li>
                          <li>• Analyses statistiques anonymisées</li>
                          <li>• Personnalisation de votre expérience</li>
                          <li>• Communications commerciales (avec consentement)</li>
                          <li>• Prévention de la fraude</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">⚖️ Bases légales</h4>
                        <ul className="text-yellow-800 text-sm space-y-1">
                          <li>• <strong>Contrat :</strong> Exécution de nos services d'intermédiation</li>
                          <li>• <strong>Consentement :</strong> Communications marketing</li>
                          <li>• <strong>Intérêt légitime :</strong> Amélioration des services</li>
                          <li>• <strong>Obligation légale :</strong> Lutte contre le blanchiment (LCB-FT)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    <span>{t('privacy.dataProtection.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Shield className="w-4 h-4 mr-2 text-green-600" />
                          Mesures techniques
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Chiffrement SSL/TLS</strong> pour tous les échanges</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Serveurs sécurisés</strong> avec pare-feu et antivirus</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Sauvegardes quotidiennes</strong> chiffrées</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Contrôles d'accès</strong> avec authentification forte</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Monitoring 24h/24</strong> des systèmes</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <UserCheck className="w-4 h-4 mr-2 text-blue-600" />
                          Mesures organisationnelles
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Formation du personnel</strong> à la protection des données</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Politique de confidentialité</strong> stricte</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Accès limité</strong> aux données selon les besoins</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Audits de sécurité</strong> réguliers</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span><strong>Délégué à la Protection des Données</strong> (DPO)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">🏆 Certifications et conformité</h5>
                      <div className="text-green-700 text-sm space-y-1">
                        <p>• Conformité RGPD (Règlement Général sur la Protection des Données)</p>
                        <p>• Hébergement certifié HDS (Hébergeur de Données de Santé)</p>
                        <p>• Respect des standards PCI-DSS pour les paiements</p>
                        <p>• Certification ISO 27001 de notre hébergeur</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-green-600" />
                    <span>{t('privacy.rights.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="border border-blue-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-blue-900 mb-2">🔍 Droit d'accès</h5>
                          <p className="text-blue-800 text-sm">
                            Obtenir la confirmation que vos données sont traitées et demander une copie de vos données.
                          </p>
                        </div>
                        
                        <div className="border border-green-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-green-900 mb-2">✏️ Droit de rectification</h5>
                          <p className="text-green-800 text-sm">
                            Corriger ou compléter vos données personnelles inexactes ou incomplètes.
                          </p>
                        </div>
                        
                        <div className="border border-red-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-2">🗑️ Droit d'effacement</h5>
                          <p className="text-red-800 text-sm">
                            Demander la suppression de vos données dans certaines conditions.
                          </p>
                        </div>
                        
                        <div className="border border-orange-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-orange-900 mb-2">⏸️ Droit à la limitation</h5>
                          <p className="text-orange-800 text-sm">
                            Limiter le traitement de vos données dans certains cas.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="border border-purple-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-purple-900 mb-2">📤 Droit à la portabilité</h5>
                          <p className="text-purple-800 text-sm">
                            Recevoir vos données dans un format structuré et les transmettre à un autre responsable.
                          </p>
                        </div>
                        
                        <div className="border border-yellow-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-yellow-900 mb-2">🚫 Droit d'opposition</h5>
                          <p className="text-yellow-800 text-sm">
                            Vous opposer au traitement de vos données pour des raisons légitimes.
                          </p>
                        </div>
                        
                        <div className="border border-pink-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-pink-900 mb-2">🎛️ Décisions automatisées</h5>
                          <p className="text-pink-800 text-sm">
                            Ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé.
                          </p>
                        </div>
                        
                        <div className="border border-indigo-200 p-4 rounded-lg">
                          <h5 className="font-semibold text-indigo-900 mb-2">⚖️ Droit de réclamation</h5>
                          <p className="text-indigo-800 text-sm">
                            Introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-3">📝 Comment exercer vos droits ?</h5>
                      <div className="space-y-3 text-sm text-gray-700">
                        <p>
                          <strong>Par email :</strong> infos@neovitafinanz.com (réponse sous 1 mois)
                        </p>
                        <p>
                          <strong>Par courrier :</strong> Neovita Finanz - DPO, 1 Rue du Bois Chaland, 91090 Lisses
                        </p>
                        <p>
                          <strong>Pièces à joindre :</strong> Copie de votre pièce d'identité et justification de votre demande
                        </p>
                        <p className="bg-yellow-100 p-2 rounded text-yellow-800">
                          <strong>Note :</strong> Certains droits peuvent être limités par nos obligations légales (conservation des données pour la lutte contre le blanchiment, etc.)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Durée de conservation des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 font-semibold text-gray-900">Type de données</th>
                          <th className="text-left py-3 font-semibold text-gray-900">Durée de conservation</th>
                          <th className="text-left py-3 font-semibold text-gray-900">Base légale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 text-gray-600">Dossiers de crédit aboutis</td>
                          <td className="py-3 text-gray-600">5 ans après remboursement</td>
                          <td className="py-3 text-gray-600">Obligation légale (Code monétaire)</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Dossiers de crédit refusés</td>
                          <td className="py-3 text-gray-600">2 ans</td>
                          <td className="py-3 text-gray-600">Intérêt légitime</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Données de navigation</td>
                          <td className="py-3 text-gray-600">13 mois</td>
                          <td className="py-3 text-gray-600">Consentement</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Données marketing</td>
                          <td className="py-3 text-gray-600">3 ans après dernier contact</td>
                          <td className="py-3 text-gray-600">Consentement</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-gray-600">Pièces d'identité</td>
                          <td className="py-3 text-gray-600">5 ans (LCB-FT)</td>
                          <td className="py-3 text-gray-600">Obligation légale</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">Transferts de données et partenaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-red-700">
                    <p>
                      Dans le cadre de nos services d'intermédiation, vos données peuvent être partagées avec :
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Banques partenaires :</strong> Pour l'étude de votre dossier de crédit</li>
                      <li>• <strong>Organismes de crédit :</strong> Pour la recherche de financement</li>
                      <li>• <strong>Assureurs :</strong> Pour les devis d'assurance emprunteur</li>
                      <li>• <strong>Prestataires techniques :</strong> Hébergement, maintenance (sous contrat)</li>
                      <li>• <strong>Autorités :</strong> En cas d'obligation légale (TRACFIN, etc.)</li>
                    </ul>
                    <div className="bg-red-100 p-3 rounded">
                      <p className="text-red-800 text-sm">
                        <strong>Aucun transfert hors UE :</strong> Toutes vos données restent au sein de l'Union Européenne.
                      </p>
                    </div>
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

export default PolitiqueConfidentialite;
