
import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quelles sont les conditions d'éligibilité pour un prêt ?",
      answer: "Pour être éligible à un prêt chez Neovita Finanz, vous devez : être majeur et résider en France, justifier de revenus réguliers depuis au moins 3 mois, ne pas être en situation de surendettement, et présenter un taux d'endettement inférieur à 35%. Chaque demande est étudiée individuellement selon votre profil et votre projet."
    },
    {
      question: "Comment sont calculés les taux d'intérêt ?",
      answer: "Nos taux d'intérêt sont calculés en fonction de plusieurs critères : le type de prêt demandé, votre profil emprunteur (revenus, stabilité professionnelle, historique bancaire), la durée du prêt, le montant emprunté, et les conditions du marché. Les taux affichés sont indicatifs et peuvent varier selon l'étude personnalisée de votre dossier."
    },
    {
      question: "Quels sont les délais de traitement d'un dossier ?",
      answer: "Nos délais sont optimisés pour votre confort : étude préliminaire sous 24h, réponse de principe sous 48h, instruction complète du dossier sous 7 jours ouvrés, et déblocage des fonds sous 15 jours en moyenne après validation finale. Pour les prêts en ligne, les délais peuvent être réduits à 48h."
    },
    {
      question: "Quels documents dois-je fournir pour ma demande ?",
      answer: "Les documents requis varient selon le type de prêt. Généralement : pièce d'identité, justificatifs de revenus (3 derniers bulletins de salaire, avis d'imposition), relevés bancaires des 3 derniers mois, justificatif de domicile récent. Pour un prêt immobilier, s'ajoutent : compromis de vente, estimation du bien, justificatif d'apport personnel."
    },
    {
      question: "Puis-je rembourser mon prêt par anticipation ?",
      answer: "Oui, vous pouvez effectuer un remboursement anticipé total ou partiel de votre prêt. Conformément à la réglementation, aucune indemnité ne sera appliquée si le montant remboursé est inférieur à 10 000€ par période de 12 mois. Au-delà, des indemnités peuvent s'appliquer selon les conditions contractuelles."
    },
    {
      question: "Mes données personnelles sont-elles protégées ?",
      answer: "Absolument. Neovita Finanz respecte strictement le RGPD et utilise un cryptage SSL/TLS pour sécuriser toutes les transmissions de données. Vos informations personnelles ne sont jamais vendues à des tiers et sont uniquement utilisées pour l'étude de votre dossier et le suivi de votre prêt."
    },
    {
      question: "Que se passe-t-il si ma demande est refusée ?",
      answer: "En cas de refus, nous vous expliquons les raisons et vous proposons des solutions alternatives si possible. Vous conservez un délai de rétractation de 14 jours et pouvez faire appel de la décision en apportant des éléments complémentaires. Notre équipe reste à votre disposition pour vous conseiller sur les améliorations possibles de votre dossier."
    },
    {
      question: "Y a-t-il des frais cachés ou des commissions ?",
      answer: "Non, nous nous engageons à une transparence totale. Tous les frais sont clairement indiqués lors de la simulation et dans l'offre de prêt : taux d'intérêt, frais de dossier éventuels, coût de l'assurance. Aucun frais supplémentaire ne sera ajouté sans votre accord préalable écrit."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos services de financement, 
            nos processus et nos conditions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold text-blue-900 pr-4 group-hover:text-blue-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre projet de financement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Nous contacter
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Demander un rappel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
