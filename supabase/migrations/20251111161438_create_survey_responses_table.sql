/*
  # Create Survey Responses Table

  1. New Tables
    - `survey_responses`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `business_name` (text)
      - `responses` (jsonb) - stores all survey answers
      - `timeline` (text)
      - `budget_range` (text)
      - `additional_comments` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `survey_responses` table
    - Add policy for anonymous users to insert their own responses
    - Add policy for authenticated users to view all responses (admin access)
*/

CREATE TABLE IF NOT EXISTS survey_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_name text,
  responses jsonb NOT NULL DEFAULT '{}'::jsonb,
  timeline text,
  budget_range text,
  additional_comments text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit survey responses"
  ON survey_responses
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all survey responses"
  ON survey_responses
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_survey_responses_email ON survey_responses(email);
CREATE INDEX IF NOT EXISTS idx_survey_responses_created_at ON survey_responses(created_at DESC);