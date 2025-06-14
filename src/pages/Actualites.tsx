
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const Actualites = () => {
  const articles = [
    {
      title: 'Évolution des taux immobiliers en 2024',
      date: '15 Mars 2024',
      excerpt: 'Analyse des tendances du marché immobilier et perspectives...',
      category: 'Immobilier'
    },
    {
      title: 'Nouvelles mesures gouvernementales',
      date: '10 Mars 2024',
      excerpt: 'Impact des dernières décisions sur le crédit à la consommation...',
      category: 'Réglementation'
    },
    {
      title: 'Conseils pour optimiser votre dossier',
      date: '5 Mars 2024',
      excerpt: 'Les bonnes pratiques pour maximiser vos chances d\'acceptation...',
      category: 'Conseils'
    }
  ];

  return (
    <Layout 
      title="Actualités" 
      description="Actualités financières et conseils de Neovita Finanz. Restez informé des dernières évolutions du marché du crédit."
    >
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Actualités
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200">
              Restez informé des dernières évolutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-green-600 hover:text-green-700 cursor-pointer">
                    <span className="text-sm font-medium">Lire la suite</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Actualites;
