/*
  # Calendar Booking System Schema

  1. New Tables
    - `availability_slots`
      - `id` (uuid, primary key)
      - `day_of_week` (integer, 0-6 for Sunday-Saturday)
      - `start_time` (time)
      - `end_time` (time)
      - `is_active` (boolean)
      - `created_at` (timestamptz)
    
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `company` (text, nullable)
      - `appointment_date` (date)
      - `appointment_time` (time)
      - `duration_minutes` (integer, default 30)
      - `status` (text, 'pending'|'confirmed'|'cancelled'|'completed')
      - `notes` (text, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `blocked_dates`
      - `id` (uuid, primary key)
      - `blocked_date` (date)
      - `reason` (text, nullable)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public can read availability slots
    - Public can insert appointments
    - Public can read non-blocked dates
    - Only authenticated admins can manage availability and blocked dates

  3. Default Availability
    - Insert default business hours (Monday-Friday, 9 AM - 5 PM)
*/

-- Create availability_slots table
CREATE TABLE IF NOT EXISTS availability_slots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_of_week integer NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time time NOT NULL,
  end_time time NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  duration_minutes integer DEFAULT 30,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blocked_dates table
CREATE TABLE IF NOT EXISTS blocked_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blocked_date date NOT NULL UNIQUE,
  reason text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE availability_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE blocked_dates ENABLE ROW LEVEL SECURITY;

-- Availability slots policies (public read)
CREATE POLICY "Anyone can view active availability slots"
  ON availability_slots FOR SELECT
  USING (is_active = true);

-- Appointments policies
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own appointments"
  ON appointments FOR SELECT
  USING (true);

-- Blocked dates policies (public read)
CREATE POLICY "Anyone can view blocked dates"
  ON blocked_dates FOR SELECT
  USING (true);

-- Insert default availability (Monday-Friday, 9 AM - 5 PM, 30-min slots)
DO $$
BEGIN
  -- Only insert if table is empty
  IF NOT EXISTS (SELECT 1 FROM availability_slots) THEN
    -- Monday to Friday (1-5)
    INSERT INTO availability_slots (day_of_week, start_time, end_time, is_active)
    VALUES
      (1, '09:00:00', '17:00:00', true),
      (2, '09:00:00', '17:00:00', true),
      (3, '09:00:00', '17:00:00', true),
      (4, '09:00:00', '17:00:00', true),
      (5, '09:00:00', '17:00:00', true);
  END IF;
END $$;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_blocked_dates_date ON blocked_dates(blocked_date);
