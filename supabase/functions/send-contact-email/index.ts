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

    // Envoyer l'email via l'API Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
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

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const emailResult = await resendResponse.json();
    console.log("Email sent successfully:", emailResult);

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