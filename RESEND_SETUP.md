# Resend Email Setup Guide

This project uses Resend to send transactional emails for bookings and survey notifications.

## Current Configuration

- **Admin Email:** info@kanobos.nl
- **From Email:** noreply@kanobos.nl
- **Email Service:** Resend

## Overview

The email system consists of:
- Two Supabase Edge Functions that send emails via Resend API
- Booking form that sends admin notification + client confirmation
- Survey form that sends admin notification only
- All emails styled with professional HTML templates

## Setup Instructions

### 1. Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day, 3,000/month free tier)
3. Verify your email address
4. Complete account setup

### 2. Get Your API Key

1. Log in to Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a descriptive name (e.g., "Kanobos Production")
5. Select appropriate permissions (usually "Sending access")
6. Copy the API key (starts with `re_`)
7. **IMPORTANT:** Save this key securely - you won't be able to see it again!

### 3. Verify Your Domain

For production use with kanobos.nl:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain: `kanobos.nl`
4. Resend will provide DNS records to add:
   - **SPF record** (TXT): Authorizes Resend to send emails from your domain
   - **DKIM records** (TXT): Authenticates your emails
   - **Domain verification** (TXT): Proves domain ownership

5. Add these DNS records in your domain registrar/DNS provider:
   ```
   Type: TXT
   Name: @ (or your root domain)
   Value: [SPF record provided by Resend]

   Type: TXT
   Name: resend._domainkey
   Value: [DKIM record provided by Resend]

   Type: TXT
   Name: _resend
   Value: [Verification token provided by Resend]
   ```

6. Wait for DNS propagation (typically 15-60 minutes, can take up to 48 hours)
7. Click **Verify Domain** in Resend dashboard
8. Once verified, you can send from any email address @kanobos.nl

**Note:** Until your domain is verified, you can only send emails to the email address you signed up with.

### 4. Configure Supabase Edge Functions

Environment variables must be set in Supabase (not in your local .env file):

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Project Settings** → **Edge Functions** (or **Secrets**)
4. Add the following environment variables:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Kanobos <noreply@kanobos.nl>
RESEND_TO_EMAIL=info@kanobos.nl
```

**Important Notes:**
- `RESEND_API_KEY` is required and starts with `re_`
- `RESEND_FROM_EMAIL` must use your verified domain
- `RESEND_TO_EMAIL` is where you'll receive notifications
- Variable names are case-sensitive
- No extra spaces or quotes around values

### 5. Deploy Edge Functions

Deploy both email functions to Supabase:

**Functions to deploy:**
- `supabase/functions/send-booking-email` - Sends booking confirmations
- `supabase/functions/send-survey-notification` - Sends survey notifications

**Using Supabase CLI:**

```bash
# Install Supabase CLI if you haven't already
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Deploy both functions
supabase functions deploy send-booking-email
supabase functions deploy send-survey-notification
```

**Verify deployment:**
1. Go to Supabase Dashboard → Edge Functions
2. Confirm both functions are listed and show as deployed
3. Check the function URLs are accessible

### 6. Test Email Sending

#### Test Booking Emails:

1. Visit your live website
2. Click "Book Free Strategy Call" button
3. Fill out the form with test data
4. Select a date and time
5. Submit the booking

**Expected Results:**
- Booking saved to `appointments` table in Supabase
- Admin receives notification email at info@kanobos.nl
- Client receives confirmation email at their provided address
- Check Supabase Edge Function logs for execution details
- Check Resend dashboard for email delivery status

#### Test Survey Emails:

1. Visit your website
2. Click "Get Instant Quote" or navigate to survey page
3. Complete the questionnaire with test data
4. Submit the survey

**Expected Results:**
- Survey saved to `survey_responses` table in Supabase
- Admin receives detailed survey notification at info@kanobos.nl
- Check Supabase logs for function execution
- Check Resend dashboard for delivery confirmation

### 7. Verify Email Delivery

Check Resend dashboard:

1. Go to **Emails** or **Logs** section
2. View delivery status for each email
3. Check for any errors or bounces
4. Click on individual emails to see full details

Email statuses:
- **Delivered** - Email successfully delivered
- **Bounce** - Email rejected by recipient server
- **Complaint** - Recipient marked as spam
- **Failed** - Email could not be sent

## Troubleshooting

### Emails Not Sending

1. **Check Supabase Edge Function Logs:**
   - Go to Supabase Dashboard → Logs → Edge Functions
   - Look for error messages from send-booking-email or send-survey-notification
   - Check if functions are being triggered

2. **Verify Environment Variables:**
   - Ensure `RESEND_API_KEY` is set correctly in Supabase
   - Check that there are no extra spaces or quotes
   - Verify variable names match exactly (case-sensitive)

3. **Check Resend Dashboard:**
   - Log in to Resend
   - Go to Emails or Logs section
   - Look for failed deliveries or API errors
   - Check error messages for specific issues

4. **Verify Domain:**
   - Ensure kanobos.nl is verified in Resend
   - Check all DNS records are properly configured
   - Use DNS checker tools to verify propagation
   - Make sure `RESEND_FROM_EMAIL` uses your verified domain

5. **API Key Issues:**
   - Verify API key is active in Resend dashboard
   - Check that API key has correct permissions (sending access)
   - Regenerate API key if necessary
   - Update Supabase environment variable with new key

### Common Errors

**"RESEND_API_KEY is not configured"**
- Add the API key to Supabase Edge Functions environment variables
- Ensure the variable name is exactly `RESEND_API_KEY`
- Redeploy the Edge Functions after adding the variable

**"Domain not verified"**
- Complete DNS setup in Resend dashboard
- Wait for DNS propagation (up to 48 hours)
- Use Resend's verification tool to check status

**"Unauthorized" or 401 Error**
- Verify API key is correct and active
- Check that API key has sending permissions
- Regenerate API key if it was compromised

**"Invalid recipient" or "Unverified domain"**
- If domain isn't verified yet, you can only send to your signup email
- Verify your domain in Resend to send to any address
- Check that recipient email addresses are valid

**Frontend errors (fetch failed):**
- Verify Supabase URL and anon key in .env file
- Check that Edge Functions are deployed
- Verify CORS headers are properly configured in functions
- Check browser console for specific error messages

## Email Templates

Both email functions include professional HTML templates:

### Booking Confirmation Emails

**Admin Notification:**
- Shows all client information (name, email, phone, company)
- Displays appointment date, time, and duration
- Includes client notes if provided
- Branded with Kanobos styling

**Client Confirmation:**
- Personalized greeting with client name
- Clear appointment details in highlighted box
- "What to Expect" section with meeting agenda
- Contact information for rescheduling
- Professional Kanobos branding

### Survey Notification Email

- Comprehensive survey response details
- Organized sections for easy reading:
  - Contact Information
  - Project Details
  - Desired Features
  - Design & Strategy
  - Additional Comments
- Timeline highlighting (URGENT badge for rushed projects)
- Professional formatting with Kanobos branding
- Call-to-action reminder to respond within 24 hours

## Resend Features & Benefits

### Advantages over Mailgun:

- **Simpler API** - Cleaner REST API with JSON requests (no URLSearchParams)
- **Better Developer Experience** - Modern dashboard and comprehensive docs
- **Generous Free Tier** - 3,000 emails/month free (vs Mailgun's 5,000)
- **Easy Setup** - Fewer steps to get started
- **React Email Support** - Built-in support for React email templates
- **Better Deliverability** - High delivery rates out of the box

### Free Tier Limits:

- 100 emails per day
- 3,000 emails per month
- No credit card required
- All core features included

### Paid Plans:

If you exceed free tier limits:
- **Pro:** $20/month for 50,000 emails/month
- **Enterprise:** Custom pricing for higher volumes

## Production Checklist

Before going live:

- [ ] Resend account created and verified
- [ ] API key generated and saved securely
- [ ] Domain (kanobos.nl) added and verified in Resend
- [ ] All DNS records configured and propagated
- [ ] Environment variables added to Supabase:
  - [ ] RESEND_API_KEY
  - [ ] RESEND_FROM_EMAIL
  - [ ] RESEND_TO_EMAIL
- [ ] Both Edge Functions deployed to Supabase
- [ ] Test booking sent successfully
- [ ] Test survey sent successfully
- [ ] Admin emails received at info@kanobos.nl
- [ ] Client confirmation emails received correctly
- [ ] Email templates reviewed and approved
- [ ] Checked emails in Gmail, Outlook, and Apple Mail
- [ ] Verified emails not going to spam folder
- [ ] Supabase Edge Function logs reviewed
- [ ] Resend dashboard checked for delivery confirmation

## Monitoring & Maintenance

### Regular Checks:

1. **Weekly:**
   - Check Resend dashboard for delivery rates
   - Review bounce and complaint rates
   - Monitor email volume against free tier limits

2. **Monthly:**
   - Review Supabase Edge Function usage
   - Check for any pattern of errors in logs
   - Verify DNS records are still active
   - Update API key if approaching expiration

3. **As Needed:**
   - Update email templates for seasonal campaigns
   - Adjust rate limits if hitting free tier caps
   - Review and update email content

### Best Practices:

- Keep API keys secure (never commit to git)
- Use environment variables for all configuration
- Monitor delivery rates to catch issues early
- Keep DNS records up to date
- Test emails before major template changes
- Set up Resend webhooks for real-time notifications (optional)

## Support Resources

- **Resend Documentation:** [https://resend.com/docs](https://resend.com/docs)
- **Resend API Reference:** [https://resend.com/docs/api-reference](https://resend.com/docs/api-reference)
- **Supabase Edge Functions:** [https://supabase.com/docs/guides/functions](https://supabase.com/docs/guides/functions)
- **Resend Status Page:** [https://status.resend.com](https://status.resend.com)

## API Rate Limits

Resend enforces the following rate limits:

- **Free Tier:** 100 emails/day, 3,000/month
- **API Requests:** 10 requests/second
- **Batch Emails:** Up to 100 recipients per request

If you hit rate limits:
- Implement exponential backoff in error handling
- Consider upgrading to paid plan
- Spread out email sends over time
- Use batch sending for multiple recipients

## Security Considerations

1. **Never expose API keys:**
   - Store in Supabase environment variables only
   - Never commit to version control
   - Rotate keys periodically

2. **Validate email addresses:**
   - Frontend validation prevents typos
   - Backend Edge Functions verify format
   - Resend validates before sending

3. **Prevent spam:**
   - Rate limiting built into Resend
   - Monitor for unusual activity
   - Implement CAPTCHA if needed (optional)

4. **Email content:**
   - Sanitize user input in email templates
   - Escape HTML to prevent injection attacks
   - Keep templates updated with current branding
