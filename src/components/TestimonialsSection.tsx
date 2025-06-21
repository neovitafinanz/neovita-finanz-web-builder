import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Paris",
      rating: 5,
      comment: t('testimonials.client1.comment'),
      loanType: t('testimonials.client1.loanType'),
      amount: "250 000€",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b098?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Pierre Martin",
      location: "Lyon",
      rating: 5,
      comment: t('testimonials.client2.comment'),
      loanType: t('testimonials.client2.loanType'),
      amount: "75 000€",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Sophie Leroux",
      location: "Marseille",
      rating: 5,
      comment: t('testimonials.client3.comment'),
      loanType: t('testimonials.client3.loanType'),
      amount: "45 000€",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Jean-Marc Rousseau",
      location: "Toulouse",
      rating: 5,
      comment: t('testimonials.client4.comment'),
      loanType: t('testimonials.client4.loanType'),
      amount: "80 000€",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Amélie Blanchard",
      location: "Nantes",
      rating: 5,
      comment: t('testimonials.client5.comment'),
      loanType: t('testimonials.client5.loanType'),
      amount: "25 000€",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Thomas Bonnet",
      location: "Nice",
      rating: 5,
      comment: t('testimonials.client6.comment'),
      loanType: t('testimonials.client6.loanType'),
      amount: "120 000€",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const testimonialsPerPage = 3;

  // Auto-play effect pour le défilement automatique
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + testimonialsPerPage >= testimonials.length ? 0 : prev + testimonialsPerPage
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length, testimonialsPerPage]);

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
    <section 
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('testimonials.subtitle')}
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
              ({testimonials.length} {t('testimonials.reviews')})
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
                      <span className="text-gray-600">{t('testimonials.loanType')}:</span>
                      <span className="font-semibold text-blue-900">
                        {testimonial.loanType}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-2">
                      <span className="text-gray-600">{t('testimonials.amount')}:</span>
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
              {t('testimonials.previous')}
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
                  aria-label={`${t('testimonials.goToPage')} ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonials}
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
            >
              {t('testimonials.next')}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {t('testimonials.satisfactionTitle')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">{t('testimonials.satisfiedClients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-gray-600">{t('testimonials.averageResponse')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">4.8/5</div>
                <div className="text-gray-600">{t('testimonials.averageRating')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
