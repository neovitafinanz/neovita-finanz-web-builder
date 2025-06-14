
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Award, Users, TrendingUp, Shield, Clock, Target } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '17+', label: 'Années d\'expérience', icon: Award },
    { number: '43', label: 'Experts à votre service', icon: Users },
    { number: '10K+', label: 'Clients satisfaits', icon: TrendingUp },
    { number: '24h', label: 'Délai de réponse', icon: Clock }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparence',
      description: 'Nous vous informons clairement sur toutes les conditions et frais de votre financement.'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'Nos conseillers experts vous accompagnent à chaque étape de votre projet.'
    },
    {
      icon: Target,
      title: 'Sur-mesure',
      description: 'Nous adaptons nos solutions à votre situation et vos besoins spécifiques.'
    }
  ];

  return (
    <Layout 
      title="À propos" 
      description="Découvrez Neovita Finanz, votre partenaire financier depuis 2006. 43 experts, solutions personnalisées, transparence et accompagnement."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' 
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              À propos de Neovita Finanz
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Votre partenaire financier de confiance depuis 2006
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2006, Neovita Finanz s'est imposée comme un acteur de référence 
                  dans le domaine du financement personnel et professionnel en France.
                </p>
                <p>
                  Avec plus de 17 années d'expérience, nous avons développé une expertise 
                  reconnue dans l'accompagnement de nos clients vers la réalisation de 
                  leurs projets financiers.
                </p>
                <p>
                  Notre équipe de 43 experts déploie un savoir-faire unique pour vous 
                  proposer des solutions adaptées à votre situation et vos objectifs.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => navigate('/demande-credit')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  Nous faire confiance
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe Neovita Finanz travaillant ensemble"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Neovita Finanz en chiffres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats qui témoignent de notre engagement et de notre expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Accompagner chaque client dans la concrétisation de ses projets en proposant 
              des solutions de financement adaptées, transparentes et accessibles. Nous nous 
              engageons à être votre partenaire de confiance pour toutes vos démarches financières.
            </p>
            <Button 
              onClick={() => navigate('/equipe')}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
            >
              Découvrir notre équipe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à nous faire confiance ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de clients qui nous ont fait confiance pour leurs projets
          </p>
          <Button 
            onClick={() => navigate('/demande-credit')}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Commencer ma demande
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
