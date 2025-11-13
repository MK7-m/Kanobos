import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const FROM_EMAIL = Deno.env.get('RESEND_FROM_EMAIL') || 'Kanobos <noreply@kanobos.nl>';
const TO_EMAIL = Deno.env.get('RESEND_TO_EMAIL') || 'info@kanobos.nl';

interface SurveyData {
  name: string;
  email: string;
  phone?: string;
  business_name?: string;
  website_type?: string;
  current_website?: string;
  timeline?: string;
  budget_range?: string;
  features?: string[];
  design_preferences?: string;
  competitors?: string;
  target_audience?: string;
  primary_goal?: string;
  content_ready?: string;
  additional_comments?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { surveyData }: { surveyData: SurveyData } = await req.json();

    if (!RESEND_API_KEY) {
      console.warn('Resend not configured, logging survey data only');
      console.log('Survey data:', surveyData);

      return new Response(
        JSON.stringify({ success: true, message: 'Survey received (email not configured)' }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #10b981, #14b8a6); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .section { margin: 25px 0; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #10b981; }
            .section-title { font-size: 18px; font-weight: bold; color: #059669; margin-bottom: 15px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; color: #059669; display: inline-block; min-width: 150px; }
            .value { color: #1f2937; }
            .features-list { margin: 10px 0; padding-left: 20px; }
            .features-list li { margin: 5px 0; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            .priority-badge { display: inline-block; padding: 5px 12px; background: #fef3c7; color: #92400e; border-radius: 4px; font-weight: bold; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✧ New Website Survey Response</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">A potential client has completed the website questionnaire</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Contact Information</div>
                <div class="detail"><span class="label">Name:</span> <span class="value">${surveyData.name}</span></div>
                <div class="detail"><span class="label">Email:</span> <span class="value"><a href="mailto:${surveyData.email}" style="color: #059669;">${surveyData.email}</a></span></div>
                ${surveyData.phone ? `<div class="detail"><span class="label">Phone:</span> <span class="value">${surveyData.phone}</span></div>` : ''}
                ${surveyData.business_name ? `<div class="detail"><span class="label">Business:</span> <span class="value">${surveyData.business_name}</span></div>` : ''}
              </div>

              <div class="section">
                <div class="section-title">Project Details</div>
                ${surveyData.website_type ? `<div class="detail"><span class="label">Website Type:</span> <span class="value">${surveyData.website_type}</span></div>` : ''}
                ${surveyData.current_website ? `<div class="detail"><span class="label">Current Website:</span> <span class="value">${surveyData.current_website}</span></div>` : ''}
                ${surveyData.timeline ? `<div class="detail"><span class="label">Timeline:</span> <span class="value">${surveyData.timeline}</span> ${surveyData.timeline === 'urgent' || surveyData.timeline === 'ASAP' ? '<span class="priority-badge">URGENT</span>' : ''}</div>` : ''}
                ${surveyData.budget_range ? `<div class="detail"><span class="label">Budget Range:</span> <span class="value">${surveyData.budget_range}</span></div>` : ''}
              </div>

              ${surveyData.features && surveyData.features.length > 0 ? `
              <div class="section">
                <div class="section-title">Desired Features</div>
                <ul class="features-list">
                  ${surveyData.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
              ` : ''}

              ${surveyData.design_preferences || surveyData.competitors || surveyData.target_audience || surveyData.primary_goal ? `
              <div class="section">
                <div class="section-title">Design & Strategy</div>
                ${surveyData.design_preferences ? `<div class="detail"><span class="label">Design Style:</span> <span class="value">${surveyData.design_preferences}</span></div>` : ''}
                ${surveyData.primary_goal ? `<div class="detail"><span class="label">Primary Goal:</span> <span class="value">${surveyData.primary_goal}</span></div>` : ''}
                ${surveyData.target_audience ? `<div class="detail"><span class="label">Target Audience:</span> <span class="value">${surveyData.target_audience}</span></div>` : ''}
                ${surveyData.competitors ? `<div class="detail"><span class="label">Competitor Sites:</span> <span class="value">${surveyData.competitors}</span></div>` : ''}
                ${surveyData.content_ready ? `<div class="detail"><span class="label">Content Ready:</span> <span class="value">${surveyData.content_ready}</span></div>` : ''}
              </div>
              ` : ''}

              ${surveyData.additional_comments ? `
              <div class="section">
                <div class="section-title">Additional Comments</div>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; color: #1f2937;">
                  ${surveyData.additional_comments}
                </div>
              </div>
              ` : ''}

              <div class="footer">
                <p>This survey was submitted through the Kanobos✧ website.</p>
                <p><strong>Next Steps:</strong> Review the information and reach out to the client within 24 hours.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailPayload = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `✧ New Survey: ${surveyData.name}${surveyData.business_name ? ` - ${surveyData.business_name}` : ''}`,
      html: emailHtml,
    };

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const result = await emailResponse.json();
    console.log('Survey email response:', { status: emailResponse.status, ok: emailResponse.ok, result });

    if (!emailResponse.ok) {
      throw new Error(`Resend API error: ${JSON.stringify(result)}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Survey notification email sent successfully',
        emailSent: true
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing survey notification:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
