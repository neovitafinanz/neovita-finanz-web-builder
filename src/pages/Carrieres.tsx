
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, TrendingUp, Award } from 'lucide-react';

const Carrieres = () => {
  const openPositions = [
    {
      title: 'Conseiller Commercial',
      department: 'Commercial',
      location: 'Paris',
      type: 'CDI'
    },
    {
      title: 'Analyste Crédit',
      department: 'Crédit',
      location: 'Lyon',
      type: 'CDI'
    },
    {
      title: 'Chargé de Clientèle',
      department: 'Relation Client',
      location: 'Marseille',
      type: 'CDD'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Équipe dynamique',
      description: 'Rejoignez une équipe de 43 experts passionnés'
    },
    {
      icon: TrendingUp,
      title: 'Évolution',
      description: 'Opportunités de développement et de formation'
    },
    {
      icon: Award,
      title: 'Avantages',
      description: 'Package attractif et avantages sociaux'
    }
  ];

  return (
    <Layout 
      title="Carrières" 
      description="Rejoignez l'équipe Neovita Finanz. Découvrez nos offres d'emploi et opportunités de carrière dans le secteur financier."
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Carrières
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Rejoignez une équipe qui fait la différence
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Offres d'emploi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-green-600" />
                    <span>{position.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{position.department}</p>
                  <p className="text-gray-600 mb-2">{position.location}</p>
                  <p className="text-green-600 font-medium mb-4">{position.type}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Postuler
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi nous rejoindre ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Carrieres;
