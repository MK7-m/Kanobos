import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  company_name?: string;
  source: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ConsultationBooking {
  id?: string;
  lead_id?: string;
  full_name: string;
  email: string;
  phone?: string;
  scheduled_date: string;
  scheduled_time: string;
  timezone: string;
  status?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ClientIntakeForm {
  id?: string;
  lead_id?: string;
  business_name: string;
  business_description: string;
  website_purpose: string;
  target_audience: string;
  preferred_colors?: string;
  competitor_websites?: string;
  required_pages: string[];
  special_features?: string;
  content_ready: boolean;
  branding_assets: boolean;
  budget_range?: string;
  launch_urgency: string;
  additional_notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PortfolioItem {
  id?: string;
  project_name: string;
  client_name: string;
  industry: string;
  description: string;
  website_url?: string;
  thumbnail_url?: string;
  completion_time_hours: number;
  features: string[];
  testimonial?: string;
  metrics?: Record<string, any>;
  display_order: number;
  is_featured: boolean;
  created_at?: string;
  updated_at?: string;
}
