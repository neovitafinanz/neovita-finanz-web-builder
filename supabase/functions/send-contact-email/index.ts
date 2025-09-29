import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  formType: 'contact' | 'credit';
  // Champs spécifiques au formulaire de crédit
  loanType?: string;
  amount?: string;
  duration?: string;
  situation?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactEmailRequest = await req.json();
    
    console.log("Received contact form submission:", { 
      name: formData.name, 
      email: formData.email, 
      formType: formData.formType 
    });

    let emailHtml = "";
    let emailSubject = "";

    if (formData.formType === 'contact') {
      emailSubject = `Nouvelle demande de contact - ${formData.subject || 'Sans sujet'}`;
      emailHtml = `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Sujet:</strong> ${formData.subject || 'Non spécifié'}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (formData.formType === 'credit') {
      emailSubject = `Nouvelle demande de crédit - ${formData.name}`;
      emailHtml = `
        <h2>Nouvelle demande de crédit</h2>
        <h3>Informations personnelles</h3>
        <p><strong>Nom:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        
        <h3>Détails du prêt</h3>
        <p><strong>Type de prêt:</strong> ${formData.loanType || 'Non spécifié'}</p>
        <p><strong>Montant:</strong> ${formData.amount || 'Non spécifié'}</p>
        <p><strong>Durée:</strong> ${formData.duration || 'Non spécifiée'}</p>
        <p><strong>Situation:</strong> ${formData.situation || 'Non spécifiée'}</p>
        
        <h3>Message</h3>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `;
    }

    // Préparer l'email de remerciement pour le client
    let confirmationSubject = "";
    let confirmationHtml = "";

    if (formData.formType === 'contact') {
      confirmationSubject = "Merci pour votre demande de contact - Neovita Finanz";
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Merci pour votre message !</h2>
          <p>Bonjour <strong>${formData.name}</strong>,</p>
          <p>Nous avons bien reçu votre demande de contact concernant : <strong>${formData.subject || 'Demande générale'}</strong></p>
          <p>Notre équipe d'experts étudie votre demande et vous recontactera dans les <strong>24h ouvrées</strong>.</p>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 10px 0;">Vos informations de contact</h3>
            <p style="margin: 5px 0;"><strong>Email :</strong> ${formData.email}</p>
            <p style="margin: 5px 0;"><strong>Sujet :</strong> ${formData.subject || 'Non spécifié'}</p>
          </div>
          
          <p>En attendant, n'hésitez pas à :</p>
          <ul>
            <li>Consulter notre site web pour plus d'informations sur nos services</li>
            <li>Nous contacter directement par email : <a href="mailto:infos@neovitafinanz.com">infos@neovitafinanz.com</a></li>
          </ul>
          
          <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Neovita Finanz</strong></p>
        </div>
      `;
    } else if (formData.formType === 'credit') {
      confirmationSubject = "Confirmation de votre demande de crédit - Neovita Finanz";
      confirmationHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Votre demande de crédit a été reçue !</h2>
          <p>Bonjour <strong>${formData.name}</strong>,</p>
          <p>Nous avons bien reçu votre demande de <strong>${formData.loanType || 'crédit'}</strong> et nous vous en remercions.</p>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">Récapitulatif de votre demande</h3>
            <p style="margin: 5px 0;"><strong>Type de prêt :</strong> ${formData.loanType || 'Non spécifié'}</p>
            <p style="margin: 5px 0;"><strong>Montant :</strong> ${formData.amount || 'Non spécifié'}</p>
            <p style="margin: 5px 0;"><strong>Durée :</strong> ${formData.duration || 'Non spécifiée'}</p>
            <p style="margin: 5px 0;"><strong>Situation :</strong> ${formData.situation || 'Non spécifiée'}</p>
          </div>
          
          <div style="background-color: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #16a34a; margin: 0 0 10px 0;">Prochaines étapes</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Notre équipe d'experts analyse votre dossier sous <strong>24h ouvrées</strong></li>
              <li>Nous vous recontacterons pour préciser les détails et les pièces justificatives</li>
              <li>Une fois le dossier complet, nous vous proposerons les meilleures solutions</li>
            </ul>
          </div>
          
          <p><strong>Questions ?</strong> Contactez-nous directement :</p>
          <ul>
            <li>Email : <a href="mailto:infos@neovitafinanz.com">infos@neovitafinanz.com</a></li>
            <li>Adresse : 1 Rue du Bois Chaland, 91090 Lisses, France</li>
          </ul>
          
          <p style="margin-top: 30px;">Cordialement,<br><strong>L'équipe Neovita Finanz</strong></p>
        </div>
      `;
    }

    // Envoyer l'email à l'équipe
    const teamEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Neovita Finanz <onboarding@resend.dev>",
        to: ["infos@neovitafinanz.com"],
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    if (!teamEmailResponse.ok) {
      const error = await teamEmailResponse.text();
      console.error("Resend API error for team email:", error);
      throw new Error(`Failed to send team email: ${error}`);
    }

    // Envoyer l'email de confirmation au client
    const clientEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Neovita Finanz <onboarding@resend.dev>",
        to: [formData.email],
        subject: confirmationSubject,
        html: confirmationHtml,
      }),
    });

    if (!clientEmailResponse.ok) {
      const error = await clientEmailResponse.text();
      console.error("Resend API error for client email:", error);
      // Ne pas faire échouer la requête si l'email client échoue
      console.log("Team email sent but client confirmation failed");
    }

    const teamResult = await teamEmailResponse.json();
    console.log("Team email sent successfully:", teamResult);
    
    try {
      const clientResult = await clientEmailResponse.json();
      console.log("Client confirmation email sent successfully:", clientResult);
    } catch (e) {
      console.log("Client email response could not be parsed:", e);
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Email envoyé avec succès" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Erreur lors de l'envoi de l'email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);