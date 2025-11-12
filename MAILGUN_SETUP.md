# Mailgun Email Setup Guide

This project uses Mailgun to send transactional emails for bookings and survey notifications.

## Current Configuration

- **Admin Email:** info@kanobos.nl
- **From Email:** noreply@kanobos.nl (or your configured domain)

## Setup Instructions

### 1. Create Mailgun Account

1. Go to [https://www.mailgun.com/](https://www.mailgun.com/)
2. Sign up for a free account (includes 5,000 emails/month)
3. Verify your email address

### 2. Get Your API Credentials

#### Option A: Use Sandbox Domain (Testing)

For testing, Mailgun provides a sandbox domain:

1. Log in to Mailgun dashboard
2. Go to **Sending** → **Domains**
3. Click on your sandbox domain (looks like `sandbox123abc.mailgun.org`)
4. Copy the **Domain Name** and **API Key**
5. Add authorized recipients (your email) to test

**Note:** Sandbox domains can only send to pre-authorized email addresses.

#### Option B: Use Your Own Domain (Production)

For production use:

1. Go to **Sending** → **Domains** → **Add New Domain**
2. Enter your domain (e.g., `kanobos.nl`)
3. Follow DNS setup instructions:
   - Add TXT records for domain verification
   - Add MX records for receiving
   - Add CNAME records for tracking (optional)
4. Wait for DNS propagation (can take up to 48 hours)
5. Verify domain in Mailgun dashboard
6. Copy your **Domain Name** and **API Key**

### 3. Configure Supabase Edge Functions

You need to add environment variables to your Supabase project:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings** → **Edge Functions**
4. Add the following secrets:

```bash
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-domain.mailgun.org
MAILGUN_FROM_EMAIL=noreply@kanobos.nl
MAILGUN_TO_EMAIL=info@kanobos.nl
```

**Important:**
- `MAILGUN_API_KEY` starts with `key-` followed by a long string
- `MAILGUN_DOMAIN` is just the domain, not a full URL
- `MAILGUN_FROM_EMAIL` should use your verified domain
- `MAILGUN_TO_EMAIL` is where you'll receive notifications

### 4. Deploy Edge Functions

The edge functions need to be deployed to use the new configuration:

```bash
# These functions are already in your project:
- supabase/functions/send-booking-email
- supabase/functions/send-survey-notification
```

Both functions are configured to send emails to **info@kanobos.nl** by default.

### 5. Test Email Sending

#### Test Booking Emails:
1. Visit your website
2. Click "Book Free Strategy Call"
3. Fill out the form and select a date/time
4. Submit the booking
5. You should receive:
   - Admin notification at info@kanobos.nl
   - Client receives confirmation email

#### Test Survey Emails:
1. Click "Get Instant Quote"
2. Complete the survey form
3. Submit
4. You should receive a detailed survey notification at info@kanobos.nl

### 6. Verify Email Delivery

Check Mailgun dashboard:
1. Go to **Sending** → **Logs**
2. View delivery status for each email
3. Check for any errors or bounces

## Troubleshooting

### Emails Not Sending

1. **Check Supabase Logs:**
   - Go to Supabase Dashboard → Logs → Edge Functions
   - Look for error messages from the email functions

2. **Verify API Credentials:**
   - Ensure MAILGUN_API_KEY and MAILGUN_DOMAIN are correct
   - Check that there are no extra spaces or quotes

3. **Check Mailgun Logs:**
   - Log in to Mailgun
   - Go to Sending → Logs
   - Look for failed deliveries or errors

4. **Domain Verification:**
   - If using custom domain, verify all DNS records are set
   - Use Mailgun's domain verification tool

5. **Sandbox Limitations:**
   - If using sandbox domain, add recipient email to authorized list
   - Sandbox can only send to 5 authorized recipients

### Common Errors

**"Domain not verified"**
- Complete DNS setup for your domain in Mailgun
- Wait for DNS propagation (up to 48 hours)

**"Forbidden - Domain not found"**
- Check MAILGUN_DOMAIN environment variable
- Ensure it matches exactly in Mailgun dashboard

**"Unauthorized"**
- Verify MAILGUN_API_KEY is correct
- Check that API key has sending permissions

## Email Templates

Both email functions include professional HTML templates with:

### Booking Confirmation
- Client receives appointment details
- Admin receives full booking information
- Branded with Kanobos styling
- Includes contact information

### Survey Notification
- Comprehensive survey response details
- Organized sections for easy reading
- Urgent timeline highlighting
- Feature lists and additional comments

## Production Checklist

Before going live:

- [ ] Mailgun account created and verified
- [ ] Custom domain added and verified (or sandbox configured)
- [ ] DNS records configured and propagated
- [ ] Environment variables added to Supabase
- [ ] Edge functions deployed
- [ ] Test emails sent successfully
- [ ] Emails received at info@kanobos.nl
- [ ] Email templates reviewed and approved
- [ ] SPF and DKIM records configured (for better deliverability)

## Support

For issues with:
- **Mailgun:** [https://documentation.mailgun.com/](https://documentation.mailgun.com/)
- **Supabase Edge Functions:** [https://supabase.com/docs/guides/functions](https://supabase.com/docs/guides/functions)

## Monthly Limits

Mailgun Free Tier:
- 5,000 emails per month
- First 1,000 emails validated free
- After free tier: $0.80 per 1,000 emails

Monitor your usage in the Mailgun dashboard to avoid unexpected charges.
