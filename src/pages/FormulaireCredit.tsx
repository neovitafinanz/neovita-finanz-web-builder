
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

const FormulaireCredit = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    phone: '',
    loanType: '',
    amount: '',
    currency: 'EUR',
    duration: '',
    income: '',
    situation: '',
    message: ''
  });

  const loanTypes = [
    t('loanTypes.personal'),
    t('loanTypes.consumption'),
    t('loanTypes.works'),
    t('loanTypes.mortgage'),
    t('loanTypes.consolidation'),
    t('loanTypes.lease'),
    t('loanTypes.student')
  ];

  const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'DKK', symbol: 'kr', name: 'Couronne danoise' },
    { code: 'SEK', symbol: 'kr', name: 'Couronne suédoise' },
    { code: 'BGN', symbol: 'лв', name: 'Lev bulgare' },
    { code: 'GBP', symbol: '£', name: 'Livre sterling' },
    { code: 'NOK', symbol: 'kr', name: 'Couronne norvégienne' },
    { code: 'CHF', symbol: 'CHF', name: 'Franc suisse' },
    { code: 'PLN', symbol: 'zł', name: 'Zloty polonais' },
    { code: 'RON', symbol: 'lei', name: 'Leu roumain' },
    { code: 'CZK', symbol: 'Kč', name: 'Couronne tchèque' }
  ];

  const situations = [
    t('loanRequest.situations.employee'),
    t('loanRequest.situations.temporaryEmployee'),
    t('loanRequest.situations.civilServant'),
    t('loanRequest.situations.selfEmployed'),
    t('loanRequest.situations.freelancer'),
    t('loanRequest.situations.retired'),
    t('loanRequest.situations.student'),
    t('loanRequest.situations.jobSeeker')
  ];

  const reassurancePoints = [
    {
      icon: Shield,
      title: t('loanRequest.reassurance.secureData.title'),
      description: t('loanRequest.reassurance.secureData.description')
    },
    {
      icon: Clock,
      title: t('loanRequest.reassurance.quickResponse.title'),
      description: t('loanRequest.reassurance.quickResponse.description')
    },
    {
      icon: Users,
      title: t('loanRequest.reassurance.availableAdvisors.title'),
      description: t('loanRequest.reassurance.availableAdvisors.description')
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.emailConfirmation || !formData.phone || !formData.loanType) {
      toast({
        title: t('loanRequest.validation.missingFields'),
        description: t('loanRequest.validation.missingFieldsDesc'),
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('loanRequest.validation.invalidEmail'),
        description: t('loanRequest.validation.invalidEmailDesc'),
        variant: "destructive"
      });
      return;
    }

    // Email confirmation validation
    if (formData.email !== formData.emailConfirmation) {
      toast({
        title: t('loanRequest.validation.emailMismatch'),
        description: t('loanRequest.validation.emailMismatchDesc'),
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnvbywo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          loanType: formData.loanType,
          amount: formData.amount,
          currency: formData.currency,
          duration: formData.duration,
          income: formData.income,
          situation: formData.situation,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nouvelle demande de crédit - ${formData.loanType}`
        }),
      });

      if (response.ok) {
        toast({
          title: t('loanRequest.validation.success'),
          description: t('loanRequest.validation.successDesc'),
        });

        // Reset du formulaire
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          emailConfirmation: '',
          phone: '',
          loanType: '',
          amount: '',
          currency: 'EUR',
          duration: '',
          income: '',
          situation: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: t('loanRequest.validation.error'),
        description: t('loanRequest.validation.errorDesc'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const selectedCurrency = currencies.find(c => c.code === formData.currency);

  return (
    <Layout 
      title={t('loanRequest.hero.title')}
      description={t('loanRequest.metaDescription')}
    >
      <div className="min-h-screen relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/85 to-green-800/85" />
        
        <div className="relative z-10 py-12">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('loanRequest.hero.title')}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {t('loanRequest.hero.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-lg">
                    <CardTitle className="text-2xl text-center">{t('loanRequest.form.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Informations personnelles */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('loanRequest.form.personalInfo')}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="firstName" className="text-gray-700 font-medium">
                              {t('loanRequest.form.firstName')} *
                            </Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="mt-2"
                              placeholder={t('loanRequest.form.firstName')}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-gray-700 font-medium">
                              {t('loanRequest.form.lastName')} *
                            </Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="mt-2"
                              placeholder={t('loanRequest.form.lastName')}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <Label htmlFor="email" className="text-gray-700 font-medium">
                              {t('loanRequest.form.email')} *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="mt-2"
                              placeholder="votre.email@exemple.com"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="emailConfirmation" className="text-gray-700 font-medium">
                              {t('loanRequest.form.emailConfirmation')} *
                            </Label>
                            <Input
                              id="emailConfirmation"
                              type="email"
                              value={formData.emailConfirmation}
                              onChange={(e) => handleInputChange('emailConfirmation', e.target.value)}
                              className="mt-2"
                              placeholder={t('loanRequest.form.emailConfirmation')}
                              required
                              onPaste={(e) => e.preventDefault()}
                              onDrop={(e) => e.preventDefault()}
                            />
                            {formData.emailConfirmation && formData.email !== formData.emailConfirmation && (
                              <p className="text-sm text-red-600 mt-1">{t('loanRequest.validation.emailMismatchDesc')}</p>
                            )}
                          </div>
                        </div>

                        <div className="mt-6">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            {t('loanRequest.form.phone')} *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-2"
                            placeholder="06 12 34 56 78"
                            required
                          />
                        </div>
                      </div>

                      {/* Informations du prêt */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('loanRequest.form.project')}</h3>
                        <div>
                          <Label htmlFor="loanType" className="text-gray-700 font-medium">
                            {t('loanRequest.form.loanType')} *
                          </Label>
                          <Select value={formData.loanType} onValueChange={(value) => handleInputChange('loanType', value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder={t('loanRequest.form.selectLoanType')} />
                            </SelectTrigger>
                            <SelectContent>
                              {loanTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                          <div>
                            <Label htmlFor="amount" className="text-gray-700 font-medium">
                              {t('loanRequest.form.amount')}
                            </Label>
                            <Input
                              id="amount"
                              type="number"
                              value={formData.amount}
                              onChange={(e) => handleInputChange('amount', e.target.value)}
                              className="mt-2"
                              placeholder="50000"
                              min="1000"
                              max="1000000"
                            />
                          </div>
                          <div>
                            <Label htmlFor="currency" className="text-gray-700 font-medium">
                              {t('loanRequest.form.currency')}
                            </Label>
                            <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {currencies.map((currency) => (
                                  <SelectItem key={currency.code} value={currency.code}>
                                    {currency.symbol} - {currency.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="duration" className="text-gray-700 font-medium">
                              {t('loanRequest.form.duration')}
                            </Label>
                            <Input
                              id="duration"
                              type="number"
                              value={formData.duration}
                              onChange={(e) => handleInputChange('duration', e.target.value)}
                              className="mt-2"
                              placeholder="60"
                              min="12"
                              max="360"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Situation financière */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('loanRequest.form.situation')}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="situation" className="text-gray-700 font-medium">
                              {t('loanRequest.form.professionalSituation')}
                            </Label>
                            <Select value={formData.situation} onValueChange={(value) => handleInputChange('situation', value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder={t('loanRequest.form.selectSituation')} />
                              </SelectTrigger>
                              <SelectContent>
                                {situations.map((situation) => (
                                  <SelectItem key={situation} value={situation}>{situation}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="income" className="text-gray-700 font-medium">
                              {t('loanRequest.form.monthlyIncome')} ({selectedCurrency?.symbol})
                            </Label>
                            <Input
                              id="income"
                              type="number"
                              value={formData.income}
                              onChange={(e) => handleInputChange('income', e.target.value)}
                              className="mt-2"
                              placeholder="3000"
                              min="0"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          {t('loanRequest.form.message')}
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="mt-2"
                          placeholder={t('loanRequest.form.messagePlaceholder')}
                          rows={4}
                        />
                      </div>

                      <div className="text-center">
                        <Button 
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          {isSubmitting ? t('loanRequest.form.submitting') : t('loanRequest.form.submit')}
                        </Button>
                      </div>

                      <p className="text-sm text-gray-500 text-center">
                        {t('loanRequest.form.required')}
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar de réassurance */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Points de réassurance */}
                  <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-center">{t('loanRequest.reassurance.title')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {reassurancePoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{point.title}</h4>
                              <p className="text-sm text-gray-600">{point.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>

                  {/* Avantages */}
                  <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-center">{t('loanRequest.advantages.title')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{t('loanRequest.advantages.experience')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{t('loanRequest.advantages.experts')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{t('loanRequest.advantages.rates')}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{t('loanRequest.advantages.support')}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card className="border-0 shadow-lg bg-green-50/90 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{t('loanRequest.contact.title')}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {t('loanRequest.contact.description')}
                      </p>
                      <p className="text-sm font-medium text-green-600">
                        📞 {t('loanRequest.contact.phone')}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t('loanRequest.contact.hours')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormulaireCredit;
