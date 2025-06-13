
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Paris",
      rating: 5,
      comment: "Excellent service ! L'équipe de Neovita Finanz m'a accompagnée tout au long de mon projet immobilier. Processus rapide et transparent, je recommande vivement !",
      loanType: "Prêt immobilier",
      amount: "250 000€",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Pierre Martin",
      location: "Lyon",
      rating: 5,
      comment: "Grâce à Neovita Finanz, j'ai pu regrouper tous mes crédits. Leur expertise m'a permis de réduire mes mensualités de 40%. Service professionnel et conseils avisés.",
      loanType: "Rachat de crédit",
      amount: "75 000€",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Sophie Leroux",
      location: "Marseille",
      rating: 5,
      comment: "Pour financer mes études de médecine, j'ai fait confiance à Neovita Finanz. Conditions privilégiées et équipe très à l'écoute. Un vrai partenariat !",
      loanType: "Prêt étudiant",
      amount: "45 000€",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Jean-Marc Rousseau",
      location: "Toulouse",
      rating: 5,
      comment: "Rénovation complète de ma maison grâce au crédit travaux de Neovita Finanz. Taux compétitif et démarches simplifiées. Résultat au-delà de mes attentes !",
      loanType: "Crédit travaux",
      amount: "80 000€",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Amélie Blanchard",
      location: "Nantes",
      rating: 5,
      comment: "Service client exceptionnel ! Mon conseiller a pris le temps de m'expliquer toutes les options. J'ai obtenu mon prêt personnel en 48h seulement.",
      loanType: "Prêt personnel",
      amount: "25 000€",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Thomas Bonnet",
      location: "Nice",
      rating: 5,
      comment: "Pour développer mon entreprise, j'avais besoin d'un crédit-bail. Neovita Finanz a su adapter la solution à mes besoins spécifiques. Parfait !",
      loanType: "Crédit-bail",
      amount: "120 000€",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => 
      prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - testimonialsPerPage : prev - testimonialsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const overallRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Découvrez les expériences de nos clients satisfaits qui nous font confiance 
            pour leurs projets financiers.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {renderStars(Math.round(overallRating))}
            </div>
            <span className="text-2xl font-bold text-blue-900">
              {overallRating.toFixed(1)}/5
            </span>
            <span className="text-gray-600">
              ({testimonials.length} avis clients)
            </span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.comment}"
                  </blockquote>

                  {/* Loan Details */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Type de prêt:</span>
                      <span className="font-semibold text-blue-900">
                        {testimonial.loanType}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-600">Montant:</span>
                      <span className="font-semibold text-green-600">
                        {testimonial.amount}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <Button
              onClick={prevTestimonials}
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Précédent
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerPage)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentIndex / testimonialsPerPage) === index
                      ? 'bg-blue-900'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller à la page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonials}
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
            >
              Suivant
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              La satisfaction client au cœur de nos priorités
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-gray-600">Réponse moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
