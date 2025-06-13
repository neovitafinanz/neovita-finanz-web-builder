
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const LoanRequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    duration: '',
    income: '',
    message: ''
  });

  const loanTypes = [
    'Prêt personnel en ligne',
    'Prêt à la consommation',
    'Crédit travaux/rénovation',
    'Prêt immobilier',
    'Rachat de crédit',
    'Crédit-bail',
    'Prêt étudiant'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.loanType) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Demande envoyée avec succès",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });

    // Reset du formulaire
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      loanType: '',
      amount: '',
      duration: '',
      income: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="loan-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 mb-6">
            Demande de Prêt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complétez ce formulaire pour faire votre demande de prêt. Notre équipe d'experts vous contactera rapidement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Formulaire de Demande</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">Prénom *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-2"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Nom *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-2"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="loanType" className="text-gray-700 font-medium">Type de prêt *</Label>
                  <Select value={formData.loanType} onValueChange={(value) => handleInputChange('loanType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionnez le type de prêt" />
                    </SelectTrigger>
                    <SelectContent>
                      {loanTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="amount" className="text-gray-700 font-medium">Montant souhaité (€)</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      className="mt-2"
                      placeholder="50000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="duration" className="text-gray-700 font-medium">Durée (mois)</Label>
                    <Input
                      id="duration"
                      type="number"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="mt-2"
                      placeholder="60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="income" className="text-gray-700 font-medium">Revenus mensuels (€)</Label>
                    <Input
                      id="income"
                      type="number"
                      value={formData.income}
                      onChange={(e) => handleInputChange('income', e.target.value)}
                      className="mt-2"
                      placeholder="3000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message complémentaire</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2"
                    placeholder="Décrivez votre projet ou vos besoins spécifiques..."
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 text-lg font-semibold"
                  >
                    Envoyer ma demande
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront utilisées que pour traiter votre demande.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanRequestForm;
