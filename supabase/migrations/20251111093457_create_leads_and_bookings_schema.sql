/*
  # 48-Hour Website Service - Database Schema

  ## Overview
  This migration creates the database schema for a 48-hour website creation service platform,
  including lead management, consultation bookings, and client intake forms.

  ## New Tables

  ### 1. `leads`
  Stores potential client information and initial contact details
  - `id` (uuid, primary key) - Unique identifier for each lead
  - `full_name` (text) - Client's full name
  - `email` (text) - Client's email address
  - `phone` (text, optional) - Client's phone number
  - `company_name` (text, optional) - Client's company name
  - `source` (text) - Lead source (e.g., 'website_form', 'cold_call')
  - `status` (text) - Lead status (e.g., 'new', 'contacted', 'qualified', 'converted')
  - `created_at` (timestamptz) - Timestamp of lead creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ### 2. `consultation_bookings`
  Manages 30-minute free consultation call bookings
  - `id` (uuid, primary key) - Unique identifier for each booking
  - `lead_id` (uuid, foreign key) - Reference to the lead
  - `full_name` (text) - Client's full name
  - `email` (text) - Client's email address
  - `phone` (text, optional) - Client's phone number
  - `scheduled_date` (date) - Date of the consultation
  - `scheduled_time` (time) - Time of the consultation
  - `timezone` (text) - Client's timezone
  - `status` (text) - Booking status (e.g., 'pending', 'confirmed', 'completed', 'cancelled')
  - `notes` (text, optional) - Additional notes or preparation info
  - `created_at` (timestamptz) - Timestamp of booking creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ### 3. `client_intake_forms`
  Captures detailed website requirements and specifications
  - `id` (uuid, primary key) - Unique identifier for each form submission
  - `lead_id` (uuid, foreign key) - Reference to the lead
  - `business_name` (text) - Client's business name
  - `business_description` (text) - Description of the business
  - `website_purpose` (text) - Primary purpose of the website
  - `target_audience` (text) - Target audience description
  - `preferred_colors` (text, optional) - Color preferences
  - `competitor_websites` (text, optional) - URLs of competitor or inspiration sites
  - `required_pages` (text[]) - List of required pages
  - `special_features` (text, optional) - Special features or customization requests
  - `content_ready` (boolean) - Whether client has content ready
  - `branding_assets` (boolean) - Whether client has logo/branding assets
  - `budget_range` (text, optional) - Budget range
  - `launch_urgency` (text) - How urgent the launch is
  - `additional_notes` (text, optional) - Any additional requirements
  - `created_at` (timestamptz) - Timestamp of form submission
  - `updated_at` (timestamptz) - Timestamp of last update

  ### 4. `portfolio_items`
  Showcases previous 48-hour website builds
  - `id` (uuid, primary key) - Unique identifier for each portfolio item
  - `project_name` (text) - Name of the project
  - `client_name` (text) - Client's name (can be anonymized)
  - `industry` (text) - Industry/business type
  - `description` (text) - Project description
  - `website_url` (text, optional) - URL to the live website
  - `thumbnail_url` (text, optional) - URL to preview image
  - `completion_time_hours` (integer) - Actual completion time in hours
  - `features` (text[]) - List of key features implemented
  - `testimonial` (text, optional) - Client testimonial
  - `metrics` (jsonb, optional) - Results metrics (e.g., traffic increase, conversions)
  - `display_order` (integer) - Order for display on the website
  - `is_featured` (boolean) - Whether to feature prominently
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public can insert leads, bookings, and intake forms (for website submissions)
  - Only authenticated admins can read/update/delete records
  - Portfolio items are publicly readable

  ## Indexes
  - Index on leads email for quick lookup
  - Index on consultation_bookings scheduled_date for calendar queries
  - Index on portfolio_items display_order for efficient sorting
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  source text NOT NULL DEFAULT 'website_form',
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  scheduled_date date NOT NULL,
  scheduled_time time NOT NULL,
  timezone text NOT NULL DEFAULT 'UTC',
  status text NOT NULL DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create client_intake_forms table
CREATE TABLE IF NOT EXISTS client_intake_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid REFERENCES leads(id) ON DELETE SET NULL,
  business_name text NOT NULL,
  business_description text NOT NULL,
  website_purpose text NOT NULL,
  target_audience text NOT NULL,
  preferred_colors text,
  competitor_websites text,
  required_pages text[] DEFAULT ARRAY[]::text[],
  special_features text,
  content_ready boolean DEFAULT false,
  branding_assets boolean DEFAULT false,
  budget_range text,
  launch_urgency text NOT NULL,
  additional_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name text NOT NULL,
  client_name text NOT NULL,
  industry text NOT NULL,
  description text NOT NULL,
  website_url text,
  thumbnail_url text,
  completion_time_hours integer DEFAULT 48,
  features text[] DEFAULT ARRAY[]::text[],
  testimonial text,
  metrics jsonb,
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_scheduled_date ON consultation_bookings(scheduled_date);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_display_order ON portfolio_items(display_order);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_is_featured ON portfolio_items(is_featured);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_intake_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for leads table
CREATE POLICY "Anyone can insert leads"
  ON leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete leads"
  ON leads FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for consultation_bookings table
CREATE POLICY "Anyone can insert bookings"
  ON consultation_bookings FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON consultation_bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON consultation_bookings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete bookings"
  ON consultation_bookings FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for client_intake_forms table
CREATE POLICY "Anyone can insert intake forms"
  ON client_intake_forms FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all intake forms"
  ON client_intake_forms FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update intake forms"
  ON client_intake_forms FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete intake forms"
  ON client_intake_forms FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for portfolio_items table (publicly readable)
CREATE POLICY "Anyone can view portfolio items"
  ON portfolio_items FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert portfolio items"
  ON portfolio_items FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio items"
  ON portfolio_items FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete portfolio items"
  ON portfolio_items FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to update updated_at timestamp
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_consultation_bookings_updated_at
  BEFORE UPDATE ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_intake_forms_updated_at
  BEFORE UPDATE ON client_intake_forms
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();