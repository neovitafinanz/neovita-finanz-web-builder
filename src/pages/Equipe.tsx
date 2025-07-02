
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin } from 'lucide-react';

const Equipe = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Générale',
      experience: '15 ans d\'expérience',
      speciality: 'Stratégie financière',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Commercial',
      experience: '12 ans d\'expérience',
      speciality: 'Prêts immobiliers',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sophie Bernard',
      role: 'Responsable Crédit',
      experience: '10 ans d\'expérience',
      speciality: 'Analyse de dossiers',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Antoine Leroy',
      role: 'Conseiller Senior',
      experience: '8 ans d\'expérience',
      speciality: 'Prêts personnels',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Julie Moreau',
      role: 'Spécialiste Rachat',
      experience: '6 ans d\'expérience',
      speciality: 'Rachat de crédit',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b197?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Thomas Roussel',
      role: 'Conseiller Assurance',
      experience: '7 ans d\'expérience',
      speciality: 'Assurances emprunteur',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const departments = [
    {
      name: 'Direction',
      description: 'Pilotage stratégique et développement',
      count: '3 personnes'
    },
    {
      name: 'Commercial',
      description: 'Relation client et développement commercial',
      count: '15 personnes'
    },
    {
      name: 'Crédit',
      description: 'Analyse et instruction des dossiers',
      count: '12 personnes'
    },
    {
      name: 'Opérations',
      description: 'Gestion administrative et suivi',
      count: '8 personnes'
    },
    {
      name: 'Support',
      description: 'IT, RH, comptabilité, juridique',
      count: '5 personnes'
    }
  ];

  return (
    <Layout 
      title="Notre équipe" 
      description="Découvrez l'équipe Neovita Finanz : 43 experts dédiés à votre réussite financière. Conseillers spécialisés et accompagnement personnalisé."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' 
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              43 experts passionnés à votre service
            </p>
          </div>
        </div>
      </section>

      {/* Équipe dirigeante */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Équipe Dirigeante & Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les visages de Neovita Finanz, une équipe d'experts dédiée à votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-1">{member.experience}</p>
                    <p className="text-sm text-gray-500">{member.speciality}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Départements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Organisation par Départements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une structure organisée pour vous offrir le meilleur service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <p className="text-sm text-green-600 font-medium">{dept.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rejoindre l'équipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Rejoindre notre équipe
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Nous recherchons régulièrement de nouveaux talents pour renforcer nos équipes. 
              Si vous partagez nos valeurs et souhaitez contribuer à notre mission, 
              nous serions ravis de vous rencontrer.
            </p>
            <Button 
              onClick={() => navigate(`/${language}/carrieres`)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Voir nos offres d'emploi
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Une équipe à votre écoute
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos conseillers experts sont disponibles pour vous accompagner dans votre projet
          </p>
          <Button 
            onClick={() => navigate(`/${language}/demande-credit`)}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Prendre contact
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Equipe;
