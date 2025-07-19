
import React from 'react';
import { X, Calculator, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceDetailsProps {
  service: {
    title: string;
    description: string;
    rate?: string;
    features: string[];
    eligibility: string[];
    documents: string[];
    advantages: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetails = ({ service, isOpen, onClose }: ServiceDetailsProps) => {
  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToSimulator = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('simulation')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <Button variant="ghost" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
            {service.rate && (
              <div className="mt-4 inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full">
                <span className="text-2xl font-bold">Taux dès {service.rate}*</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Caractéristiques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Conditions d'éligibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.eligibility.map((condition, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Documents requis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.documents.map((document, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{document}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4 text-center">Prêt à commencer ?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToSimulator}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 font-semibold"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Simuler mon prêt
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 font-semibold"
                asChild
              >
                <a href="mailto:infos@neovitafinanz.com?subject=Demande d'informations">
                  <Mail className="w-5 h-5 mr-2" />
                  Demander des informations
                </a>
              </Button>
            </div>
          </div>

          {service.rate && (
            <div className="text-xs text-gray-500 bg-yellow-50 p-3 rounded text-center">
              <p>*Taux indicatif, sous réserve d'étude de votre dossier et des conditions du marché.</p>
              <p>Offre soumise à conditions et sous réserve d'acceptation du dossier.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
