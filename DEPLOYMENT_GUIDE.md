# Kanobos Website - Complete Deployment Guide

## Current Status

**Supabase Backend:** All Edge Functions are deployed and ready
**Website Build:** Production files created in `dist/` folder
**Next Steps:** Configure Resend API and upload website files

---

## Part 1: Configure Resend Email Service

### Step 1: Add Environment Variables to Supabase

You need to configure three environment variables in your Supabase project:

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project (the one with URL: `https://ydtbzcoqmslirnqkwabe.supabase.co`)
3. Navigate to **Project Settings** → **Edge Functions** (or **Secrets**)
4. Add these three environment variables:

```
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=Kanobos <noreply@kanobos.nl>
RESEND_TO_EMAIL=info@kanobos.nl
```

**Important Notes:**
- Replace `your_resend_api_key_here` with your actual Resend API key (starts with `re_`)
- The format for `RESEND_FROM_EMAIL` must be exactly: `Kanobos <noreply@kanobos.nl>`
- Variable names are case-sensitive
- No quotes around the values

### Step 2: Verify Your Domain in Resend

Before emails can be sent from `@kanobos.nl`, you must verify the domain:

1. Log in to Resend: https://resend.com/login
2. Go to **Domains** section
3. Click **Add Domain**
4. Enter: `kanobos.nl`
5. Resend will provide DNS records to add

### Step 3: Add DNS Records to Your Domain

In your mijndomein.nl control panel, add these DNS records (exact values will be provided by Resend):

**SPF Record (TXT):**
```
Type: TXT
Name: @ (or kanobos.nl)
Value: [provided by Resend]
```

**DKIM Record (TXT):**
```
Type: TXT
Name: resend._domainkey
Value: [provided by Resend]
```

**Domain Verification (TXT):**
```
Type: TXT
Name: _resend
Value: [provided by Resend]
```

**Important:** DNS changes can take 15 minutes to 48 hours to propagate. Once propagated, click "Verify Domain" in Resend.

**Temporary Testing:** Until your domain is verified, Resend can only send emails to the email address you signed up with. Once verified, emails can be sent to any address.

---

## Part 2: Upload Website to mijndomein.nl

### What to Upload

Upload the **contents** of the `dist/` folder to your mijndomein.nl hosting:

**Files to upload:**
```
dist/
├── assets/
│   ├── index-Cz1KEf4j.css
│   └── index-hJ5zKb9e.js
├── index.html
├── robots.txt
└── sitemap.xml
```

### How to Upload

1. **Using FTP/SFTP:**
   - Connect to your mijndomein.nl hosting via FTP client (FileZilla, WinSCP, etc.)
   - Navigate to your website's root directory (usually `public_html/` or `www/`)
   - Upload ALL files and folders from the `dist/` directory
   - Make sure the `assets/` folder is uploaded with its contents

2. **Using mijndomein.nl File Manager:**
   - Log in to your mijndomein.nl control panel
   - Navigate to File Manager
   - Go to your website's root directory
   - Upload all files from the `dist/` folder

3. **Important Upload Notes:**
   - Upload the **contents** of the `dist/` folder, not the `dist/` folder itself
   - Your `index.html` should be in the root of your website directory
   - The `assets/` folder should be at the same level as `index.html`
   - Overwrite any existing files if prompted

### Correct File Structure on Server

After upload, your server should look like this:

```
your-website-root/
├── assets/
│   ├── index-Cz1KEf4j.css
│   └── index-hJ5zKb9e.js
├── index.html
├── robots.txt
└── sitemap.xml
```

**Not like this (wrong):**
```
your-website-root/
└── dist/
    ├── assets/
    ├── index.html
    └── ...
```

---

## Part 3: Test Everything

### Test 1: Website Loads

1. Visit your website: `https://kanobos.nl`
2. Verify the homepage loads correctly
3. Check that all sections appear properly
4. Test navigation and interactions

### Test 2: Booking Form with Emails

1. Click "Book Free Strategy Call" button
2. Fill out the form with test data
3. Select a date and time
4. Submit the booking

**Expected Results:**
- Success message appears
- Admin receives email at `info@kanobos.nl`
- Client receives confirmation email
- Booking appears in Supabase `appointments` table

### Test 3: Survey Form with Emails

1. Click "Get Instant Quote" button
2. Complete the questionnaire
3. Submit the survey

**Expected Results:**
- Success message appears
- Admin receives detailed survey email at `info@kanobos.nl`
- Survey data saved in Supabase `survey_responses` table

### Test 4: Check Logs

**Supabase Logs:**
1. Go to Supabase Dashboard → Logs → Edge Functions
2. Look for executions of `send-booking-email` and `send-survey-notification`
3. Check for any error messages

**Resend Dashboard:**
1. Log in to Resend
2. Go to **Emails** or **Logs** section
3. Verify emails were sent successfully
4. Check delivery status

---

## Troubleshooting

### Emails Not Sending

**Error: "RESEND_API_KEY is not configured"**
- Solution: Add the environment variable in Supabase Dashboard
- Verify the variable name is exactly `RESEND_API_KEY` (case-sensitive)

**Error: "Domain not verified"**
- Solution: Complete DNS setup in Resend
- Wait for DNS propagation (can take up to 48 hours)
- During testing, emails can only be sent to your Resend signup email

**Error: "Unauthorized" or 401 Error**
- Solution: Verify your Resend API key is correct
- Make sure the API key has sending permissions
- Regenerate the API key in Resend if needed

**Emails going to spam:**
- Ensure all DNS records (SPF, DKIM) are properly configured
- Verify domain is fully verified in Resend
- Check email content for spam triggers

### Website Issues

**Website shows blank page:**
- Check browser console for JavaScript errors
- Verify all files uploaded correctly
- Ensure `index.html` is in the root directory
- Check that `assets/` folder is at the same level as `index.html`

**Forms submit but nothing happens:**
- Check browser console for errors
- Verify Supabase URL and anon key are in the website files
- Test if Supabase connection is working
- Check Edge Functions are deployed (they are)

**CORS errors in browser console:**
- Edge Functions already have correct CORS headers
- Check that you're accessing the website via HTTPS
- Verify Supabase URL is correct in browser network tab

---

## Email Templates Included

### Booking Confirmation Emails

**Admin Notification:**
- Client name, email, phone, company
- Appointment date, time, duration
- Client notes (if provided)
- Professional Kanobos branding

**Client Confirmation:**
- Personalized greeting
- Appointment details highlighted
- "What to Expect" section
- Contact information for rescheduling

### Survey Notification Email

**Admin receives:**
- Complete contact information
- Project details (website type, timeline, budget)
- Desired features list
- Design preferences and strategy
- Additional comments
- URGENT badge for rushed projects

---

## Architecture Overview

Your website uses a modern architecture with separate frontend and backend:

```
[User Browser]
    ↓
[Website on mijndomein.nl]
    ↓ (API calls)
[Supabase Backend]
    ├── Database (stores bookings & surveys)
    ├── Edge Functions (send emails via Resend)
    └── Authentication (handles security)
    ↓
[Resend API]
    ↓
[Email Delivery]
```

**Key Points:**
- Frontend (website) hosted on mijndomein.nl (static files)
- Backend hosted on Supabase (database + functions)
- Emails sent via Resend API
- They communicate via secure API calls

---

## What's Already Done

- Database tables created with proper security (RLS enabled)
- Both Edge Functions deployed to Supabase
- JWT verification disabled for public access
- CORS headers configured correctly
- Production build created and optimized
- Email templates designed and tested
- Frontend properly configured to call Edge Functions

---

## What You Need to Do

1. Add three environment variables to Supabase Dashboard
2. Verify your domain in Resend
3. Add DNS records to mijndomein.nl
4. Upload `dist/` folder contents to mijndomein.nl
5. Test booking and survey forms
6. Monitor Resend dashboard for email delivery

---

## Support Resources

- **Resend Documentation:** https://resend.com/docs
- **Resend API Reference:** https://resend.com/docs/api-reference
- **Supabase Dashboard:** https://supabase.com/dashboard
- **Your Supabase Project:** https://ydtbzcoqmslirnqkwabe.supabase.co

---

## Quick Reference

**Supabase Edge Functions (Already Deployed):**
- `send-booking-email` - Sends admin + client booking confirmations
- `send-survey-notification` - Sends admin survey notifications

**Environment Variables Needed:**
```
RESEND_API_KEY=re_your_key_here
RESEND_FROM_EMAIL=Kanobos <noreply@kanobos.nl>
RESEND_TO_EMAIL=info@kanobos.nl
```

**Files to Upload:**
- Everything inside the `dist/` folder
- Upload to website root directory (public_html/ or www/)

**Email Addresses:**
- Admin notifications: info@kanobos.nl
- Emails sent from: noreply@kanobos.nl

---

## Success Checklist

- [ ] Environment variables added to Supabase
- [ ] Domain verified in Resend (or using signup email for testing)
- [ ] DNS records configured (can test while waiting for propagation)
- [ ] Website files uploaded to mijndomein.nl
- [ ] Website loads at kanobos.nl
- [ ] Booking form works and saves to database
- [ ] Admin receives booking notification emails
- [ ] Clients receive booking confirmation emails
- [ ] Survey form works and saves to database
- [ ] Admin receives survey notification emails
- [ ] Checked Supabase logs for any errors
- [ ] Checked Resend dashboard for email delivery

---

**You're ready to deploy!** Follow the steps in order, and your website with full email functionality will be live.
