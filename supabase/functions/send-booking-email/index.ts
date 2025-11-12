import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const MAILGUN_API_KEY = Deno.env.get('MAILGUN_API_KEY');
const MAILGUN_DOMAIN = Deno.env.get('MAILGUN_DOMAIN');
const FROM_EMAIL = Deno.env.get('MAILGUN_FROM_EMAIL') || 'Kanobos <noreply@kanobos.nl>';
const TO_EMAIL = Deno.env.get('MAILGUN_TO_EMAIL') || 'info@kanobos.nl';

interface BookingEmailPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload: BookingEmailPayload = await req.json();

    const formatDate = (dateStr: string) => {
      return new Date(dateStr).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    const formatTime = (time24: string): string => {
      const [hours, minutes] = time24.split(':').map(Number);
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const appointmentDate = formatDate(payload.appointment_date);
    const appointmentTime = formatTime(payload.appointment_time);

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
      throw new Error('MAILGUN_API_KEY or MAILGUN_DOMAIN is not configured');
    }

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #10b981, #14b8a6); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .detail { margin: 10px 0; }
            .label { font-weight: bold; color: #059669; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✧ New Booking Alert</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">You have a new consultation booking!</p>
            </div>
            <div class="content">
              <h2 style="color: #059669; margin-top: 0;">Client Information</h2>
              <div class="detail"><span class="label">Name:</span> ${payload.name}</div>
              <div class="detail"><span class="label">Email:</span> ${payload.email}</div>
              <div class="detail"><span class="label">Phone:</span> ${payload.phone}</div>
              ${payload.company ? `<div class="detail"><span class="label">Company:</span> ${payload.company}</div>` : ''}

              <h2 style="color: #059669; margin-top: 30px;">Appointment Details</h2>
              <div class="detail"><span class="label">Date:</span> ${appointmentDate}</div>
              <div class="detail"><span class="label">Time:</span> ${appointmentTime}</div>
              <div class="detail"><span class="label">Duration:</span> 30 minutes</div>

              ${payload.notes ? `
                <h2 style="color: #059669; margin-top: 30px;">Client Notes</h2>
                <div style="background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
                  ${payload.notes}
                </div>
              ` : ''}

              <div class="footer">
                This booking was made through the Kanobos✧ website calendar system.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #10b981, #14b8a6); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight-box { background: #ecfdf5; padding: 20px; border-radius: 8px; border: 2px solid #10b981; margin: 20px 0; }
            .detail { margin: 10px 0; font-size: 16px; }
            .label { font-weight: bold; color: #059669; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">✧ Kanobos</h1>
              <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Booking Confirmed!</p>
            </div>
            <div class="content">
              <p style="font-size: 16px; margin-top: 0;">Hi ${payload.name},</p>

              <p>Thank you for booking a free strategy call with Kanobos! We're excited to discuss your website vision and help bring it to life.</p>

              <div class="highlight-box">
                <h2 style="color: #059669; margin-top: 0;">Your Appointment</h2>
                <div class="detail"><span class="label">Date:</span> ${appointmentDate}</div>
                <div class="detail"><span class="label">Time:</span> ${appointmentTime}</div>
                <div class="detail"><span class="label">Duration:</span> 30 minutes</div>
              </div>

              <h3 style="color: #059669;">What to Expect</h3>
              <ul style="line-height: 1.8;">
                <li>We'll discuss your business goals and website needs</li>
                <li>Review examples of our work and approach</li>
                <li>Provide initial recommendations</li>
                <li>Answer any questions you have</li>
              </ul>

              <p style="margin-top: 30px;"><strong>Need to reschedule or have questions?</strong><br>
              Contact us at <a href="mailto:info@kanobos.nl" style="color: #059669;">info@kanobos.nl</a></p>

              <div class="footer">
                We look forward to speaking with you!<br>
                <strong>The Kanobos Team ✧</strong>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailResults = [];
    const mailgunUrl = `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

    const adminFormData = new URLSearchParams();
    adminFormData.append('from', FROM_EMAIL);
    adminFormData.append('to', TO_EMAIL);
    adminFormData.append('subject', `✧ New Booking: ${payload.name} - ${appointmentDate}`);
    adminFormData.append('html', adminEmailHtml);

    const adminEmailResponse = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
      },
      body: adminFormData,
    });

    const adminResult = await adminEmailResponse.json();
    console.log('Admin email response:', { status: adminEmailResponse.status, ok: adminEmailResponse.ok, result: adminResult });
    emailResults.push({
      type: 'admin',
      success: adminEmailResponse.ok,
      status: adminEmailResponse.status,
      result: adminResult
    });

    const clientFormData = new URLSearchParams();
    clientFormData.append('from', FROM_EMAIL);
    clientFormData.append('to', payload.email);
    clientFormData.append('subject', '✧ Your Kanobos Strategy Call is Confirmed');
    clientFormData.append('html', clientEmailHtml);

    console.log('Attempting to send client email to:', payload.email);

    const clientEmailResponse = await fetch(mailgunUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
      },
      body: clientFormData,
    });

    const clientResult = await clientEmailResponse.json();
    console.log('Client email response:', {
      status: clientEmailResponse.status,
      ok: clientEmailResponse.ok,
      clientEmail: payload.email,
      result: clientResult
    });

    emailResults.push({
      type: 'client',
      success: clientEmailResponse.ok,
      status: clientEmailResponse.status,
      result: clientResult
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Booking emails sent',
        emailResults,
        details: {
          name: payload.name,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime
        }
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error('Error processing booking email:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});