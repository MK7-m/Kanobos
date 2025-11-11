import { useState } from 'react';
import { CheckCircle, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface SurveyData {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  content_ready: string;
  content_creation_support: string;
  visual_assets: string;
  images_updatable: string;
  multimedia: string;
  pages: string[];
  website_structure: string;
  ecommerce: string;
  product_count: string;
  product_variations: string;
  ecommerce_features: string[];
  booking_system: string;
  calendar_sync: string;
  communication_tools: string[];
  user_accounts: string;
  blog: string;
  multilanguage: string;
  languages: string;
  email_marketing: string;
  integrations: string[];
  integration_details: string;
  payments: string;
  payment_methods: string[];
  invoicing: string;
  existing_tools: string[];
  existing_tools_other: string;
  seo: string;
  analytics: string;
  local_seo: string;
  social_media: string;
  ongoing_marketing: string;
  site_management: string;
  admin_dashboard: string;
  update_frequency: string;
  maintenance_plan: string;
  automation: string[];
  domain_ownership: string;
  domain_name: string;
  hosting: string;
  hosting_provider: string;
  platform: string;
  platform_other: string;
  responsive_design: string;
  performance: string;
  professional_email: string;
  timeline: string;
  budget_range: string;
  additional_comments: string;
}

export default function Survey() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SurveyData>({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    content_ready: '',
    content_creation_support: '',
    visual_assets: '',
    images_updatable: '',
    multimedia: '',
    pages: [],
    website_structure: '',
    ecommerce: '',
    product_count: '',
    product_variations: '',
    ecommerce_features: [],
    booking_system: '',
    calendar_sync: '',
    communication_tools: [],
    user_accounts: '',
    blog: '',
    multilanguage: '',
    languages: '',
    email_marketing: '',
    integrations: [],
    integration_details: '',
    payments: '',
    payment_methods: [],
    invoicing: '',
    existing_tools: [],
    existing_tools_other: '',
    seo: '',
    analytics: '',
    local_seo: '',
    social_media: '',
    ongoing_marketing: '',
    site_management: '',
    admin_dashboard: '',
    update_frequency: '',
    maintenance_plan: '',
    automation: [],
    domain_ownership: '',
    domain_name: '',
    hosting: '',
    hosting_provider: '',
    platform: '',
    platform_other: '',
    responsive_design: '',
    performance: '',
    professional_email: '',
    timeline: '',
    budget_range: '',
    additional_comments: '',
  });

  const handleCheckboxChange = (field: keyof SurveyData, value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [field]: newValues });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('survey_responses').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business_name: formData.business_name,
        timeline: formData.timeline,
        budget_range: formData.budget_range,
        additional_comments: formData.additional_comments,
        responses: formData,
      });

      if (error) throw error;

      const mailtoLink = `mailto:kanobos@mail.com?subject=New Website Survey Response from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`New survey response received!\n\nName: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business_name}\n\nPlease check your dashboard for full details.`)}`;
      window.location.href = mailtoLink;

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert('There was an error submitting your survey. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-12 text-center border-2 border-emerald-500/30">
            <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-slate-300 text-lg mb-6">
              Your survey has been submitted successfully. I'll review your requirements and get back to you within 24 hours with a detailed proposal.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-emerald-500/30">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Website Requirements Survey
            </h1>
            <p className="text-xl text-slate-300">
              Let's build your perfect website together. This survey takes 10-15 minutes and helps me understand your exact needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact Information */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Business/Website Name"
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
              </div>
            </section>

            {/* Section 1: Content & Structure */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 1: Content & Structure
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Content Readiness</span>
                  <select
                    required
                    value={formData.content_ready}
                    onChange={(e) => setFormData({ ...formData, content_ready: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="ready">Yes, all content is ready</option>
                    <option value="partial">Partially ready</option>
                    <option value="need-help">No, I need help creating content</option>
                    <option value="unsure">Not sure what content I need</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Content Creation Support</span>
                  <select
                    required
                    value={formData.content_creation_support}
                    onChange={(e) => setFormData({ ...formData, content_creation_support: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="full">Yes, full copywriting service needed</option>
                    <option value="seo">Yes, just SEO optimization</option>
                    <option value="no">No, I'll handle content myself</option>
                    <option value="consult">Need consultation to decide</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Visual Assets</span>
                  <select
                    required
                    value={formData.visual_assets}
                    onChange={(e) => setFormData({ ...formData, visual_assets: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="ready">Yes, I have all images ready</option>
                    <option value="some">I have some images but need more</option>
                    <option value="need-professional">No, I need professional photography/graphics</option>
                    <option value="stock">I'll use stock photos</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Main Pages/Sections Needed</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {['Home', 'About', 'Services', 'Contact', 'Portfolio', 'Shop', 'Blog', 'Testimonials', 'FAQ', 'Privacy Policy'].map((page) => (
                      <label key={page} className="flex items-center space-x-2 text-slate-300">
                        <input
                          type="checkbox"
                          checked={formData.pages.includes(page)}
                          onChange={() => handleCheckboxChange('pages', page)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                        />
                        <span>{page}</span>
                      </label>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Website Structure</span>
                  <select
                    required
                    value={formData.website_structure}
                    onChange={(e) => setFormData({ ...formData, website_structure: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="one-page">One-page website</option>
                    <option value="multi-page">Multi-page structure</option>
                    <option value="unsure">Not sure - need recommendation</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 2: E-Commerce & Booking */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 2: E-Commerce & Booking Features
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Do you want an online store (eCommerce)?</span>
                  <select
                    required
                    value={formData.ecommerce}
                    onChange={(e) => setFormData({ ...formData, ecommerce: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="yes">Yes, full eCommerce functionality needed</option>
                    <option value="maybe">Maybe in the future</option>
                    <option value="showcase">No, just showcase products/services</option>
                    <option value="na">Not applicable</option>
                  </select>
                </label>

                {formData.ecommerce === 'yes' && (
                  <>
                    <label className="block">
                      <span className="text-white font-semibold mb-2 block">Product Count</span>
                      <select
                        value={formData.product_count}
                        onChange={(e) => setFormData({ ...formData, product_count: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                      >
                        <option value="">Select range...</option>
                        <option value="1-10">1-10 products</option>
                        <option value="11-50">11-50 products</option>
                        <option value="51-200">51-200 products</option>
                        <option value="200+">200+ products</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-white font-semibold mb-2 block">eCommerce Features</span>
                      <div className="space-y-2 mt-2">
                        {['Wishlists', 'Product Reviews', 'Discount Codes'].map((feature) => (
                          <label key={feature} className="flex items-center space-x-2 text-slate-300">
                            <input
                              type="checkbox"
                              checked={formData.ecommerce_features.includes(feature)}
                              onChange={() => handleCheckboxChange('ecommerce_features', feature)}
                              className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                            />
                            <span>{feature}</span>
                          </label>
                        ))}
                      </div>
                    </label>
                  </>
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Booking System</span>
                  <select
                    required
                    value={formData.booking_system}
                    onChange={(e) => setFormData({ ...formData, booking_system: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="yes">Yes, essential for my business</option>
                    <option value="maybe">Maybe useful</option>
                    <option value="no">No booking needed</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 3: Interactive Features */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 3: Interactive Features
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Communication Tools</span>
                  <div className="space-y-2 mt-2">
                    {['Contact form', 'Quote form', 'Live chat'].map((tool) => (
                      <label key={tool} className="flex items-center space-x-2 text-slate-300">
                        <input
                          type="checkbox"
                          checked={formData.communication_tools.includes(tool)}
                          onChange={() => handleCheckboxChange('communication_tools', tool)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                        />
                        <span>{tool}</span>
                      </label>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">User Accounts</span>
                  <select
                    required
                    value={formData.user_accounts}
                    onChange={(e) => setFormData({ ...formData, user_accounts: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="customer">Yes, for customer accounts</option>
                    <option value="member">Yes, for member/partner access</option>
                    <option value="student">Yes, for student portal</option>
                    <option value="no">No user accounts needed</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Blog</span>
                  <select
                    required
                    value={formData.blog}
                    onChange={(e) => setFormData({ ...formData, blog: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="yes">Yes, I plan to blog regularly</option>
                    <option value="maybe">Maybe occasionally</option>
                    <option value="no">No blog needed</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Multi-language Support</span>
                  <select
                    required
                    value={formData.multilanguage}
                    onChange={(e) => setFormData({ ...formData, multilanguage: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="yes">Yes, need multiple languages</option>
                    <option value="maybe">Maybe in the future</option>
                    <option value="no">English only</option>
                  </select>
                </label>

                {formData.multilanguage === 'yes' && (
                  <input
                    type="text"
                    placeholder="Which languages?"
                    value={formData.languages}
                    onChange={(e) => setFormData({ ...formData, languages: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                  />
                )}
              </div>
            </section>

            {/* Section 4: Integrations & Payments */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 4: Integrations & Payments
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Online Payments</span>
                  <select
                    required
                    value={formData.payments}
                    onChange={(e) => setFormData({ ...formData, payments: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="yes">Yes, essential for my business</option>
                    <option value="maybe">Maybe in the future</option>
                    <option value="no">No payments needed</option>
                  </select>
                </label>

                {formData.payments === 'yes' && (
                  <label className="block">
                    <span className="text-white font-semibold mb-2 block">Payment Methods</span>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {['Credit/Debit cards', 'PayPal', 'Stripe', 'Apple Pay', 'Google Pay', 'iDEAL/Klarna'].map((method) => (
                        <label key={method} className="flex items-center space-x-2 text-slate-300">
                          <input
                            type="checkbox"
                            checked={formData.payment_methods.includes(method)}
                            onChange={() => handleCheckboxChange('payment_methods', method)}
                            className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </label>
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Existing Tools to Integrate</span>
                  <div className="space-y-2 mt-2">
                    {['Mailchimp', 'HubSpot', 'ClickUp', 'Google Analytics', 'Facebook Pixel'].map((tool) => (
                      <label key={tool} className="flex items-center space-x-2 text-slate-300">
                        <input
                          type="checkbox"
                          checked={formData.existing_tools.includes(tool)}
                          onChange={() => handleCheckboxChange('existing_tools', tool)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                        />
                        <span>{tool}</span>
                      </label>
                    ))}
                  </div>
                </label>
              </div>
            </section>

            {/* Section 5: SEO & Marketing */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 5: SEO & Marketing
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">SEO Optimization</span>
                  <select
                    required
                    value={formData.seo}
                    onChange={(e) => setFormData({ ...formData, seo: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="full">Yes, full SEO setup</option>
                    <option value="basic">Yes, basic optimization only</option>
                    <option value="self">I'll handle SEO myself</option>
                    <option value="later">Not important right now</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Analytics & Tracking</span>
                  <select
                    required
                    value={formData.analytics}
                    onChange={(e) => setFormData({ ...formData, analytics: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="all">All tracking tools</option>
                    <option value="ga">Just Google Analytics</option>
                    <option value="meta">Just Meta Pixel</option>
                    <option value="none">None needed</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 6: Maintenance & Management */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 6: Maintenance & Management
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Website Management</span>
                  <select
                    required
                    value={formData.site_management}
                    onChange={(e) => setFormData({ ...formData, site_management: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="self">I want to manage it myself</option>
                    <option value="you">I want you to manage it</option>
                    <option value="shared">Shared management</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Admin Dashboard</span>
                  <select
                    required
                    value={formData.admin_dashboard}
                    onChange={(e) => setFormData({ ...formData, admin_dashboard: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="full">Yes, full editing capabilities</option>
                    <option value="basic">Yes, basic content updates only</option>
                    <option value="no">No, I'll request changes through you</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 7: Technical Requirements */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Section 7: Technical Requirements
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Domain Ownership</span>
                  <select
                    required
                    value={formData.domain_ownership}
                    onChange={(e) => setFormData({ ...formData, domain_ownership: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="own">Yes, I own a domain</option>
                    <option value="need-help">No, I need help choosing one</option>
                    <option value="ideas">I have ideas but need guidance</option>
                  </select>
                </label>

                {formData.domain_ownership === 'own' && (
                  <input
                    type="text"
                    placeholder="Domain name"
                    value={formData.domain_name}
                    onChange={(e) => setFormData({ ...formData, domain_name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                  />
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Platform Preference</span>
                  <select
                    required
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="wordpress">WordPress</option>
                    <option value="webflow">Webflow</option>
                    <option value="shopify">Shopify</option>
                    <option value="custom">Custom build</option>
                    <option value="no-preference">No preference - recommend best option</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Responsive Design</span>
                  <select
                    required
                    value={formData.responsive_design}
                    onChange={(e) => setFormData({ ...formData, responsive_design: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select an option...</option>
                    <option value="all">Yes, optimize for all devices</option>
                    <option value="desktop">Desktop focus, mobile secondary</option>
                    <option value="mobile">Mobile-first design</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Project Timeline & Budget */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                Project Timeline & Budget
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Ideal Launch Date</span>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP</option>
                    <option value="2weeks">Within 2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">Within 2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Budget Range (Optional)</span>
                  <select
                    value={formData.budget_range}
                    onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select range...</option>
                    <option value="under1k">Under €1,000</option>
                    <option value="1k-3k">€1,000-€3,000</option>
                    <option value="3k-5k">€3,000-€5,000</option>
                    <option value="5k-10k">€5,000-€10,000</option>
                    <option value="10k+">€10,000+</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">Additional Comments or Special Requirements</span>
                  <textarea
                    value={formData.additional_comments}
                    onChange={(e) => setFormData({ ...formData, additional_comments: e.target.value })}
                    rows={4}
                    placeholder="Tell me anything else about your project..."
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                  />
                </label>
              </div>
            </section>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Survey'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
