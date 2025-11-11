import { X, Building, Target, Palette, FileText } from 'lucide-react';
import { useState } from 'react';
import { supabase, ClientIntakeForm, Lead } from '../lib/supabase';

interface IntakeFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntakeForm({ isOpen, onClose }: IntakeFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    business_name: '',
    business_description: '',
    website_purpose: '',
    target_audience: '',
    preferred_colors: '',
    competitor_websites: '',
    required_pages: [] as string[],
    special_features: '',
    content_ready: false,
    branding_assets: false,
    budget_range: '',
    launch_urgency: 'asap',
    additional_notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const pageOptions = [
    'Home', 'About Us', 'Services', 'Products', 'Portfolio/Gallery',
    'Blog', 'Contact', 'FAQ', 'Testimonials', 'Team', 'Pricing'
  ];

  const handlePageToggle = (page: string) => {
    setFormData(prev => ({
      ...prev,
      required_pages: prev.required_pages.includes(page)
        ? prev.required_pages.filter(p => p !== page)
        : [...prev.required_pages, page]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const leadData: Lead = {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company_name: formData.business_name,
        source: 'intake_form'
      };

      const { data: leadResult, error: leadError } = await supabase
        .from('leads')
        .insert(leadData)
        .select()
        .maybeSingle();

      if (leadError) throw leadError;

      const intakeData: ClientIntakeForm = {
        lead_id: leadResult?.id,
        business_name: formData.business_name,
        business_description: formData.business_description,
        website_purpose: formData.website_purpose,
        target_audience: formData.target_audience,
        preferred_colors: formData.preferred_colors,
        competitor_websites: formData.competitor_websites,
        required_pages: formData.required_pages,
        special_features: formData.special_features,
        content_ready: formData.content_ready,
        branding_assets: formData.branding_assets,
        budget_range: formData.budget_range,
        launch_urgency: formData.launch_urgency,
        additional_notes: formData.additional_notes
      };

      const { error: intakeError } = await supabase
        .from('client_intake_forms')
        .insert(intakeData);

      if (intakeError) throw intakeError;

      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setStep(1);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          business_name: '',
          business_description: '',
          website_purpose: '',
          target_audience: '',
          preferred_colors: '',
          competitor_websites: '',
          required_pages: [],
          special_features: '',
          content_ready: false,
          branding_assets: false,
          budget_range: '',
          launch_urgency: 'asap',
          additional_notes: ''
        });
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-700 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Get Your Quote in 5 Minutes</h2>
            <p className="text-emerald-50 text-sm">Step {step} of 3</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
              <p className="text-slate-300">
                We'll review your requirements and send you a detailed quote within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Building className="w-6 h-6 text-emerald-400" />
                    Your Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                        placeholder="john@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.business_name}
                        onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                        placeholder="Acme Corporation"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Description *
                    </label>
                    <textarea
                      required
                      value={formData.business_description}
                      onChange={(e) => setFormData({ ...formData, business_description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="w-6 h-6 text-emerald-400" />
                    Website Requirements
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Website Purpose *
                    </label>
                    <select
                      required
                      value={formData.website_purpose}
                      onChange={(e) => setFormData({ ...formData, website_purpose: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    >
                      <option value="">Select purpose</option>
                      <option value="lead_generation">Lead Generation</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio/Showcase</option>
                      <option value="informational">Informational</option>
                      <option value="booking">Booking/Appointments</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Target Audience *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.target_audience}
                      onChange={(e) => setFormData({ ...formData, target_audience: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                      placeholder="e.g., Small business owners, age 30-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-3">
                      Required Pages * (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {pageOptions.map((page) => (
                        <label
                          key={page}
                          className="flex items-center gap-2 p-3 border-2 border-slate-700 rounded-lg cursor-pointer hover:border-emerald-400 transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.required_pages.includes(page)}
                            onChange={() => handlePageToggle(page)}
                            className="w-4 h-4 text-emerald-400 rounded focus:ring-emerald-500"
                          />
                          <span className="text-sm text-slate-300">{page}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Inspiration/Competitor Websites
                    </label>
                    <input
                      type="text"
                      value={formData.competitor_websites}
                      onChange={(e) => setFormData({ ...formData, competitor_websites: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                      placeholder="example.com, competitor.com"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Palette className="w-6 h-6 text-emerald-400" />
                    Design & Details
                  </h3>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Color Preferences
                    </label>
                    <input
                      type="text"
                      value={formData.preferred_colors}
                      onChange={(e) => setFormData({ ...formData, preferred_colors: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                      placeholder="e.g., Blue, Green, Modern"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Special Features or Customizations
                    </label>
                    <textarea
                      value={formData.special_features}
                      onChange={(e) => setFormData({ ...formData, special_features: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                      placeholder="e.g., Contact forms, live chat, booking system..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <label className="flex items-center gap-3 p-4 border-2 border-slate-700 rounded-lg cursor-pointer hover:border-emerald-400 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.content_ready}
                        onChange={(e) => setFormData({ ...formData, content_ready: e.target.checked })}
                        className="w-5 h-5 text-emerald-400 rounded focus:ring-emerald-500"
                      />
                      <span className="text-slate-300">Content is ready (text, images)</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-slate-700 rounded-lg cursor-pointer hover:border-emerald-400 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.branding_assets}
                        onChange={(e) => setFormData({ ...formData, branding_assets: e.target.checked })}
                        className="w-5 h-5 text-emerald-400 rounded focus:ring-emerald-500"
                      />
                      <span className="text-slate-300">I have logo & branding assets</span>
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget_range}
                        onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                      >
                        <option value="">Select range</option>
                        <option value="under_2000">Under $2,000</option>
                        <option value="2000_5000">$2,000 - $5,000</option>
                        <option value="5000_10000">$5,000 - $10,000</option>
                        <option value="over_10000">Over $10,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Launch Urgency *
                      </label>
                      <select
                        required
                        value={formData.launch_urgency}
                        onChange={(e) => setFormData({ ...formData, launch_urgency: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                      >
                        <option value="asap">ASAP (48 hours)</option>
                        <option value="1_week">Within 1 week</option>
                        <option value="2_weeks">Within 2 weeks</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Additional Notes
                    </label>
                    <textarea
                      value={formData.additional_notes}
                      onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                      placeholder="Any other requirements or questions?"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="flex gap-4 pt-6 border-t border-slate-700">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 bg-slate-200 text-slate-300 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                  >
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Your Quote'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
