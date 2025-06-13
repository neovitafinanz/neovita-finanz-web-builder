
import React, { useState, useEffect } from 'react';
import { Calculator, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const LoanSimulator = () => {
  const [amount, setAmount] = useState([50000]);
  const [duration, setDuration] = useState([120]);
  const [loanType, setLoanType] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  
  const { toast } = useToast();

  const loanTypes = [
    { value: 'personal', label: 'Prêt personnel en ligne', rate: 3.0 },
    { value: 'consumption', label: 'Prêt à la consommation', rate: 2.5 },
    { value: 'works', label: 'Crédit travaux/rénovation', rate: 3.5 },
    { value: 'mortgage', label: 'Prêt immobilier', rate: 2.0 },
    { value: 'consolidation', label: 'Rachat de crédit', rate: 2.0 },
    { value: 'lease', label: 'Crédit-bail', rate: 3.0 },
    { value: 'student', label: 'Prêt étudiant', rate: 2.0 }
  ];

  useEffect(() => {
    if (loanType && amount[0] && duration[0]) {
      calculateLoan();
    }
  }, [amount, duration, loanType]);

  const calculateLoan = () => {
    const selectedLoan = loanTypes.find(loan => loan.value === loanType);
    if (!selectedLoan) return;

    const principal = amount[0];
    const monthlyRate = selectedLoan.rate / 100 / 12;
    const numberOfPayments = duration[0];

    if (monthlyRate === 0) {
      const payment = principal / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalCost(principal);
      setInterestRate(0);
    } else {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      setMonthlyPayment(payment);
      setTotalCost(payment * numberOfPayments);
      setInterestRate(selectedLoan.rate);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const handleSaveEstimation = () => {
    toast({
      title: "Estimation sauvegardée",
      description: "Votre simulation a été enregistrée avec succès.",
    });
  };

  const handleRequestLoan = () => {
    toast({
      title: "Demande en cours",
      description: "Vous allez être redirigé vers le formulaire de demande.",
    });
  };

  return (
    <section id="simulation" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Simulateur de Prêt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estimez rapidement vos conditions d'emprunt avec notre outil sécurisé. 
            Obtenez une simulation personnalisée en quelques clics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulator Form */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  Paramètres de simulation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Loan Type Selection */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-blue-900">Type de prêt</Label>
                  <Select value={loanType} onValueChange={setLoanType}>
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Sélectionnez votre type de prêt" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      {loanTypes.map((loan) => (
                        <SelectItem key={loan.value} value={loan.value} className="hover:bg-blue-50">
                          <div className="flex justify-between items-center w-full">
                            <span>{loan.label}</span>
                            <span className="text-blue-600 font-semibold ml-2">{loan.rate}%</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold text-blue-900">Montant du prêt</Label>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatCurrency(amount[0])}
                    </span>
                  </div>
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={500000}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 000 €</span>
                    <span>500 000 €</span>
                  </div>
                </div>

                {/* Duration Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold text-blue-900">Durée</Label>
                    <span className="text-2xl font-bold text-blue-600">
                      {duration[0]} mois ({Math.round(duration[0] / 12 * 10) / 10} ans)
                    </span>
                  </div>
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    max={360}
                    min={12}
                    step={12}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>12 mois</span>
                    <span>360 mois (30 ans)</span>
                  </div>
                </div>

                <Button 
                  onClick={calculateLoan}
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  disabled={!loanType}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculer mon estimation
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">Résultats de votre simulation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {loanType && monthlyPayment > 0 ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-1">Mensualité</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {formatCurrency(monthlyPayment)}
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-1">Taux d'intérêt</p>
                        <p className="text-2xl font-bold text-green-600">
                          {interestRate}%*
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">Coût total du crédit</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {formatCurrency(totalCost)}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        dont intérêts: {formatCurrency(totalCost - amount[0])}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Récapitulatif:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Montant emprunté: {formatCurrency(amount[0])}</li>
                        <li>• Durée: {duration[0]} mois ({Math.round(duration[0] / 12 * 10) / 10} ans)</li>
                        <li>• Type: {loanTypes.find(l => l.value === loanType)?.label}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        onClick={handleRequestLoan}
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Demander ce prêt
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleSaveEstimation}
                          variant="outline" 
                          className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                        <Button 
                          onClick={handleSaveEstimation}
                          variant="outline" 
                          className="flex-1 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                      <p className="font-semibold mb-1">*Mentions importantes:</p>
                      <p>• Taux indicatif, soumis à validation selon votre profil</p>
                      <p>• Offre sous réserve d'acceptation du dossier</p>
                      <p>• Vous disposez d'un délai de rétractation de 14 jours</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-2">Prêt pour votre simulation ?</p>
                    <p className="text-gray-400">
                      Sélectionnez un type de prêt et ajustez les paramètres pour voir vos résultats
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSimulator;
