import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { surveyData } = await req.json();

    const emailBody = `
New Website Survey Response

Contact Information:
Name: ${surveyData.name}
Email: ${surveyData.email}
Phone: ${surveyData.phone || 'Not provided'}
Business: ${surveyData.business_name || 'Not provided'}

Timeline: ${surveyData.timeline}
Budget: ${surveyData.budget_range || 'Not specified'}

Additional Comments:
${surveyData.additional_comments || 'None'}

View full details in your Supabase dashboard.
    `;

    console.log('Survey notification:', emailBody);

    return new Response(
      JSON.stringify({ success: true, message: 'Notification logged' }),
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
      JSON.stringify({ error: error.message }),
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