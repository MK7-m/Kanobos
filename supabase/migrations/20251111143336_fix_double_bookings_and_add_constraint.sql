/*
  # Fix Double Bookings and Prevent Future Ones

  1. Changes
    - Remove duplicate appointments (keeping the first one created for each time slot)
    - Add unique constraint on (appointment_date, appointment_time) to prevent future double bookings
  
  2. Security
    - Prevents race conditions when multiple users try to book the same slot simultaneously
*/

-- First, delete duplicate appointments keeping only the earliest one for each time slot
DELETE FROM appointments a
USING (
  SELECT 
    appointment_date, 
    appointment_time, 
    MIN(created_at) as first_created
  FROM appointments
  GROUP BY appointment_date, appointment_time
  HAVING COUNT(*) > 1
) b
WHERE 
  a.appointment_date = b.appointment_date 
  AND a.appointment_time = b.appointment_time 
  AND a.created_at > b.first_created;

-- Now add unique constraint to prevent future double bookings
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'appointments_date_time_unique'
  ) THEN
    ALTER TABLE appointments 
    ADD CONSTRAINT appointments_date_time_unique 
    UNIQUE (appointment_date, appointment_time);
  END IF;
END $$;