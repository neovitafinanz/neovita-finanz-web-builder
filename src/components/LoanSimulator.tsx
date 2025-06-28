
import React, { useState, useEffect } from 'react';
import { Calculator, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const LoanSimulator = () => {
  const [amount, setAmount] = useState([50000]);
  const [duration, setDuration] = useState([120]);
  const [loanType, setLoanType] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  
  const { toast } = useToast();
  const { t } = useLanguage();

  const loanTypes = [
    { value: 'personal', label: t('loanTypes.personal'), rate: 3.0 },
    { value: 'consumption', label: t('loanTypes.consumption'), rate: 2.5 },
    { value: 'works', label: t('loanTypes.works'), rate: 3.5 },
    { value: 'mortgage', label: t('loanTypes.mortgage'), rate: 2.0 },
    { value: 'consolidation', label: t('loanTypes.consolidation'), rate: 2.0 },
    { value: 'lease', label: t('loanTypes.lease'), rate: 3.0 },
    { value: 'student', label: t('loanTypes.student'), rate: 2.0 }
  ];

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

  useEffect(() => {
    if (loanType && amount[0] && duration[0]) {
      calculateLoan();
    }
  }, [amount, duration, loanType]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  };

  const handleSaveEstimation = () => {
    toast({
      title: t('simulator.estimationSaved'),
      description: t('simulator.estimationSavedDesc'),
    });
  };

  const handleRequestLoan = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    toast({
      title: t('simulator.requestInProgress'),
      description: t('simulator.requestInProgressDesc'),
    });
  };

  return (
    <section id="simulation" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 mb-6">
            {t('simulator.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('simulator.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Simulator Form */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calculator className="w-6 h-6 mr-3" />
                  {t('simulator.parameters')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Loan Type Selection */}
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-green-600">{t('simulator.loanType')}</Label>
                  <Select value={loanType} onValueChange={setLoanType}>
                    <SelectTrigger className="h-12 text-base border-2 border-gray-200 focus:border-green-500">
                      <SelectValue placeholder={t('simulator.selectLoanType')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      {loanTypes.map((loan) => (
                        <SelectItem key={loan.value} value={loan.value} className="hover:bg-green-50">
                          <div className="flex justify-between items-center w-full">
                            <span>{loan.label}</span>
                            <span className="text-green-600 font-semibold ml-2">{loan.rate}%</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Amount Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg font-semibold text-green-600">{t('simulator.amount')}</Label>
                    <span className="text-2xl font-bold text-green-600">
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
                    <Label className="text-lg font-semibold text-green-600">{t('simulator.duration')}</Label>
                    <span className="text-2xl font-bold text-green-600">
                      {duration[0]} {t('simulator.months')} ({Math.round(duration[0] / 12 * 10) / 10} {t('simulator.years')})
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
                    <span>12 {t('simulator.months')}</span>
                    <span>360 {t('simulator.months')} (30 {t('simulator.years')})</span>
                  </div>
                </div>

                <Button 
                  onClick={calculateLoan}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  disabled={!loanType}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  {t('simulator.calculate')}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold">{t('simulator.results')}</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {loanType && monthlyPayment > 0 ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-1">{t('simulator.monthlyPayment')}</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {formatCurrency(monthlyPayment)}
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-1">{t('simulator.interestRate')}</p>
                        <p className="text-2xl font-bold text-green-600">
                          {interestRate}%*
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">{t('simulator.totalCost')}</p>
                      <p className="text-2xl font-bold text-yellow-600">
                        {formatCurrency(totalCost)}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {t('simulator.includingInterest')}: {formatCurrency(totalCost - amount[0])}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600 mb-2">{t('simulator.summary')}:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• {t('simulator.borrowedAmount')}: {formatCurrency(amount[0])}</li>
                        <li>• {t('simulator.duration')}: {duration[0]} {t('simulator.months')} ({Math.round(duration[0] / 12 * 10) / 10} {t('simulator.years')})</li>
                        <li>• {t('simulator.type')}: {loanTypes.find(l => l.value === loanType)?.label}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        onClick={handleRequestLoan}
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        {t('simulator.requestLoan')}
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button 
                          onClick={handleSaveEstimation}
                          variant="outline" 
                          className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {t('simulator.email')}
                        </Button>
                        <Button 
                          onClick={handleSaveEstimation}
                          variant="outline" 
                          className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {t('simulator.pdf')}
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                      <p className="font-semibold mb-1">*{t('simulator.importantNotices')}:</p>
                      <p>• {t('simulator.indicativeRate')}</p>
                      <p>• {t('simulator.subjectToApproval')}</p>
                      <p>• {t('simulator.withdrawalPeriod')}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-2">{t('simulator.readyForSimulation')}</p>
                    <p className="text-gray-400">
                      {t('simulator.selectTypeAndAdjust')}
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
