
import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
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
          name: formData.name,
          email: formData.email,
          
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Nouveau message de contact - ${formData.subject || 'Sans sujet'}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous recontacterons dans les plus brefs délais.",
        });

        // Reset du formulaire
        setFormData({
          name: '',
          email: '',
          
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour étudier votre projet 
            et vous proposer les meilleures solutions de financement.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Cards */}
              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                    Notre Adresse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    1 Rue du Bois Chaland<br />
                    91090 Lisses, France
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white w-full"
                    onClick={() => window.open('https://maps.google.com?q=1+Rue+du+Bois+Chaland+91090+Lisses', '_blank')}
                  >
                    Voir sur la carte
                  </Button>
                </CardContent>
              </Card>


              <Card className="bg-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-blue-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">
                    <strong>Informations générales :</strong><br />
                    contacts@neovitafinanz.com
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Nouveau dossier :</strong><br />
                    nouveaux-clients@neovitafinanz.com
                  </p>
                  <div className="flex items-center text-sm text-blue-600">
                    <Shield className="w-4 h-4 mr-2" />
                    Réponse garantie sous 24h
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card className="bg-blue-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-900 mb-3">Neovita Finanz</h3>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>SARL au capital de 17 000 000 €</p>
                    <p>SIREN : 493 171 540</p>
                    <p>SIRET : 493 171 540 00013</p>
                    <p>TVA : FR16493171540</p>
                    <p>RCS Évry (07/07/2008)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">
                    Demande d'Information
                  </CardTitle>
                  <p className="text-blue-100">
                    Remplissez ce formulaire sécurisé et recevez une réponse personnalisée
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-blue-900 font-semibold">
                          Nom complet *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2 border-gray-200 focus:border-blue-500 h-12"
                          placeholder="Votre nom et prénom"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-blue-900 font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2 border-gray-200 focus:border-blue-500 h-12"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-blue-900 font-semibold">
                          Sujet
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-2 border-gray-200 focus:border-blue-500 h-12"
                          placeholder="Objet de votre demande"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-blue-900 font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-blue-500 min-h-32"
                        placeholder="Décrivez votre projet de financement, le montant souhaité, la durée envisagée..."
                        required
                      />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <p className="font-semibold mb-1">Vos données sont protégées</p>
                          <p>
                            Ce formulaire est sécurisé (SSL/TLS) et conforme RGPD. 
                            Vos informations sont uniquement utilisées pour traiter votre demande.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d'être recontacté par nos conseillers. 
                      Réponse garantie sous 24h ouvrées.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
