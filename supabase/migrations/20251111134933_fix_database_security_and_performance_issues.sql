/*
  # Fix Database Security and Performance Issues

  1. Performance Improvements
    - Add missing indexes for foreign keys:
      - `client_intake_forms.lead_id`
      - `consultation_bookings.lead_id`
    
    - Remove unused indexes:
      - `idx_leads_email`
      - `idx_leads_status`
      - `idx_consultation_bookings_scheduled_date`
      - `idx_consultation_bookings_status`
      - `idx_portfolio_items_is_featured`
      - `idx_appointments_status`
      - `idx_blocked_dates_date`

  2. Security Improvements
    - Fix function search path mutability for `update_updated_at_column`
    - Set explicit search_path to prevent security vulnerabilities

  These changes improve query performance and close security vulnerabilities.
*/

-- Add missing foreign key indexes
CREATE INDEX IF NOT EXISTS idx_client_intake_forms_lead_id 
  ON client_intake_forms(lead_id);

CREATE INDEX IF NOT EXISTS idx_consultation_bookings_lead_id 
  ON consultation_bookings(lead_id);

-- Drop unused indexes
DROP INDEX IF EXISTS idx_leads_email;
DROP INDEX IF EXISTS idx_leads_status;
DROP INDEX IF EXISTS idx_consultation_bookings_scheduled_date;
DROP INDEX IF EXISTS idx_consultation_bookings_status;
DROP INDEX IF EXISTS idx_portfolio_items_is_featured;
DROP INDEX IF EXISTS idx_appointments_status;
DROP INDEX IF EXISTS idx_blocked_dates_date;

-- Fix function search path mutability
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_proc 
    WHERE proname = 'update_updated_at_column'
  ) THEN
    DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
    
    CREATE FUNCTION update_updated_at_column()
    RETURNS trigger
    LANGUAGE plpgsql
    SECURITY DEFINER
    SET search_path = public
    AS $func$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $func$;

    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'leads') THEN
      DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
      CREATE TRIGGER update_leads_updated_at
        BEFORE UPDATE ON leads
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    END IF;

    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'appointments') THEN
      DROP TRIGGER IF EXISTS update_appointments_updated_at ON appointments;
      CREATE TRIGGER update_appointments_updated_at
        BEFORE UPDATE ON appointments
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    END IF;
  END IF;
END $$;
