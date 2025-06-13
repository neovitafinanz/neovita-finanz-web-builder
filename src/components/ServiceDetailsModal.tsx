
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceDetailsModalProps {
  service: {
    title: string;
    description: string;
    details: string[];
    advantages: string[];
    process: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetailsModal = ({ service, isOpen, onClose }: ServiceDetailsModalProps) => {
  const scrollToLoanForm = () => {
    onClose();
    setTimeout(() => {
      document.getElementById('loan-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isOpen || !service) return null;

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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Détails du service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Avantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Comment ça marche</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {service.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-green-600 mb-4">Intéressé par ce service ?</h3>
            <Button 
              onClick={scrollToLoanForm}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 font-semibold"
            >
              Faire une demande
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
