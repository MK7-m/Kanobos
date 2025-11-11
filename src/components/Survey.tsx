import { useState } from 'react';
import { CheckCircle, Loader, Globe } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

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
  pages_other: string;
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
  responsive_design: string;
  performance: string;
  professional_email: string;
  timeline: string;
  budget_range: string;
  additional_comments: string;
}

export default function Survey() {
  const { t, language, setLanguage } = useLanguage();
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
    pages_other: '',
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

      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
      alert(t('survey.error'));
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
            <h2 className="text-3xl font-bold text-white mb-4">{t('survey.success.title')}</h2>
            <p className="text-slate-300 text-lg mb-6">
              {t('survey.success.message')}
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
            >
              {t('survey.success.button')}
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
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'nl' : 'en')}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg transition-colors border border-slate-600"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'en' ? 'Nederlands' : 'English'}</span>
            </button>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('survey.title')}
            </h1>
            <p className="text-xl text-slate-300">
              {t('survey.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact Information */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.contact.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder={t('survey.contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="email"
                  required
                  placeholder={t('survey.contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="tel"
                  placeholder={t('survey.contact.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
                <input
                  type="text"
                  placeholder={t('survey.contact.business')}
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  className="px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                />
              </div>
            </section>

            {/* Section 1: Content & Structure */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section1.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section1.content_ready')}</span>
                  <select
                    required
                    value={formData.content_ready}
                    onChange={(e) => setFormData({ ...formData, content_ready: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="ready">{t('survey.section1.content_ready_yes')}</option>
                    <option value="partial">{t('survey.section1.content_ready_partial')}</option>
                    <option value="need-help">{t('survey.section1.content_ready_no')}</option>
                    <option value="unsure">{t('survey.section1.content_ready_unsure')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section1.content_support')}</span>
                  <select
                    required
                    value={formData.content_creation_support}
                    onChange={(e) => setFormData({ ...formData, content_creation_support: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="full">{t('survey.section1.content_support_full')}</option>
                    <option value="seo">{t('survey.section1.content_support_seo')}</option>
                    <option value="no">{t('survey.section1.content_support_no')}</option>
                    <option value="consult">{t('survey.section1.content_support_consult')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section1.visual_assets')}</span>
                  <select
                    required
                    value={formData.visual_assets}
                    onChange={(e) => setFormData({ ...formData, visual_assets: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="ready">{t('survey.section1.visual_assets_ready')}</option>
                    <option value="some">{t('survey.section1.visual_assets_some')}</option>
                    <option value="need-professional">{t('survey.section1.visual_assets_professional')}</option>
                    <option value="stock">{t('survey.section1.visual_assets_stock')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section1.pages')}</span>
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
                    <label className="flex items-center space-x-2 text-slate-300">
                      <input
                        type="checkbox"
                        checked={formData.pages.includes('Other')}
                        onChange={() => handleCheckboxChange('pages', 'Other')}
                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                      />
                      <span>{t('survey.other')}</span>
                    </label>
                  </div>
                  {formData.pages.includes('Other') && (
                    <input
                      type="text"
                      placeholder={t('survey.pages_other_placeholder')}
                      value={formData.pages_other}
                      onChange={(e) => setFormData({ ...formData, pages_other: e.target.value })}
                      className="w-full mt-3 px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    />
                  )}
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section1.structure')}</span>
                  <select
                    required
                    value={formData.website_structure}
                    onChange={(e) => setFormData({ ...formData, website_structure: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="one-page">{t('survey.section1.structure_one')}</option>
                    <option value="multi-page">{t('survey.section1.structure_multi')}</option>
                    <option value="unsure">{t('survey.section1.structure_unsure')}</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 2: E-Commerce & Booking */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section2.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section2.ecommerce')}</span>
                  <select
                    required
                    value={formData.ecommerce}
                    onChange={(e) => setFormData({ ...formData, ecommerce: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="yes">{t('survey.section2.ecommerce_yes')}</option>
                    <option value="maybe">{t('survey.section2.ecommerce_maybe')}</option>
                    <option value="showcase">{t('survey.section2.ecommerce_showcase')}</option>
                    <option value="na">{t('survey.section2.ecommerce_na')}</option>
                  </select>
                </label>

                {formData.ecommerce === 'yes' && (
                  <>
                    <label className="block">
                      <span className="text-white font-semibold mb-2 block">{t('survey.section2.product_count')}</span>
                      <select
                        value={formData.product_count}
                        onChange={(e) => setFormData({ ...formData, product_count: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                      >
                        <option value="">{t('survey.select')}</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="200+">200+</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-white font-semibold mb-2 block">{t('survey.section2.features')}</span>
                      <div className="space-y-2 mt-2">
                        {[
                          { value: 'Wishlists', label: t('survey.section2.features_wishlists') },
                          { value: 'Product Reviews', label: t('survey.section2.features_reviews') },
                          { value: 'Discount Codes', label: t('survey.section2.features_discounts') }
                        ].map((feature) => (
                          <label key={feature.value} className="flex items-center space-x-2 text-slate-300">
                            <input
                              type="checkbox"
                              checked={formData.ecommerce_features.includes(feature.value)}
                              onChange={() => handleCheckboxChange('ecommerce_features', feature.value)}
                              className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                            />
                            <span>{feature.label}</span>
                          </label>
                        ))}
                      </div>
                    </label>
                  </>
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section2.booking')}</span>
                  <select
                    required
                    value={formData.booking_system}
                    onChange={(e) => setFormData({ ...formData, booking_system: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="yes">{t('survey.section2.booking_yes')}</option>
                    <option value="maybe">{t('survey.section2.booking_maybe')}</option>
                    <option value="no">{t('survey.section2.booking_no')}</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 3: Interactive Features */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section3.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section3.communication')}</span>
                  <div className="space-y-2 mt-2">
                    {[
                      { value: 'Contact form', label: t('survey.section3.communication_contact') },
                      { value: 'Quote form', label: t('survey.section3.communication_quote') },
                      { value: 'Live chat', label: t('survey.section3.communication_chat') }
                    ].map((tool) => (
                      <label key={tool.value} className="flex items-center space-x-2 text-slate-300">
                        <input
                          type="checkbox"
                          checked={formData.communication_tools.includes(tool.value)}
                          onChange={() => handleCheckboxChange('communication_tools', tool.value)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                        />
                        <span>{tool.label}</span>
                      </label>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section3.user_accounts')}</span>
                  <select
                    required
                    value={formData.user_accounts}
                    onChange={(e) => setFormData({ ...formData, user_accounts: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="customer">{t('survey.section3.accounts_customer')}</option>
                    <option value="member">{t('survey.section3.accounts_member')}</option>
                    <option value="student">{t('survey.section3.accounts_student')}</option>
                    <option value="no">{t('survey.section3.accounts_no')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section3.blog')}</span>
                  <select
                    required
                    value={formData.blog}
                    onChange={(e) => setFormData({ ...formData, blog: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="yes">{t('survey.section3.blog_yes')}</option>
                    <option value="maybe">{t('survey.section3.blog_maybe')}</option>
                    <option value="no">{t('survey.section3.blog_no')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section3.multilanguage')}</span>
                  <select
                    required
                    value={formData.multilanguage}
                    onChange={(e) => setFormData({ ...formData, multilanguage: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="yes">{t('survey.section3.multilanguage_yes')}</option>
                    <option value="maybe">{t('survey.section3.multilanguage_maybe')}</option>
                    <option value="no">{t('survey.section3.multilanguage_no')}</option>
                  </select>
                </label>

                {formData.multilanguage === 'yes' && (
                  <input
                    type="text"
                    placeholder={t('survey.section3.languages_placeholder')}
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
                {t('survey.section4.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section4.payments')}</span>
                  <select
                    required
                    value={formData.payments}
                    onChange={(e) => setFormData({ ...formData, payments: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="yes">{t('survey.section4.payments_yes')}</option>
                    <option value="maybe">{t('survey.section4.payments_maybe')}</option>
                    <option value="no">{t('survey.section4.payments_no')}</option>
                  </select>
                </label>

                {formData.payments === 'yes' && (
                  <label className="block">
                    <span className="text-white font-semibold mb-2 block">{t('survey.section4.payment_methods')}</span>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {[
                        { value: 'Credit/Debit cards', label: t('survey.section4.method_cards') },
                        { value: 'PayPal', label: 'PayPal' },
                        { value: 'Stripe', label: 'Stripe' },
                        { value: 'Apple Pay', label: 'Apple Pay' },
                        { value: 'Google Pay', label: 'Google Pay' },
                        { value: 'iDEAL/Klarna', label: 'iDEAL/Klarna' }
                      ].map((method) => (
                        <label key={method.value} className="flex items-center space-x-2 text-slate-300">
                          <input
                            type="checkbox"
                            checked={formData.payment_methods.includes(method.value)}
                            onChange={() => handleCheckboxChange('payment_methods', method.value)}
                            className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                          />
                          <span>{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </label>
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section4.existing_tools')}</span>
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
                    <label className="flex items-center space-x-2 text-slate-300">
                      <input
                        type="checkbox"
                        checked={formData.existing_tools.includes('skip')}
                        onChange={() => handleCheckboxChange('existing_tools', 'skip')}
                        className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                      />
                      <span>{t('survey.section4.tools_skip')}</span>
                    </label>
                  </div>
                </label>
              </div>
            </section>

            {/* Section 5: SEO & Marketing */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section5.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section5.seo')}</span>
                  <select
                    required
                    value={formData.seo}
                    onChange={(e) => setFormData({ ...formData, seo: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="full">{t('survey.section5.seo_full')}</option>
                    <option value="basic">{t('survey.section5.seo_basic')}</option>
                    <option value="self">{t('survey.section5.seo_self')}</option>
                    <option value="later">{t('survey.section5.seo_later')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section5.analytics')}</span>
                  <select
                    required
                    value={formData.analytics}
                    onChange={(e) => setFormData({ ...formData, analytics: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="all">{t('survey.section5.analytics_all')}</option>
                    <option value="ga">{t('survey.section5.analytics_ga')}</option>
                    <option value="meta">{t('survey.section5.analytics_meta')}</option>
                    <option value="none">{t('survey.section5.analytics_none')}</option>
                    <option value="unsure">{t('survey.dont_know')}</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 6: Maintenance & Management */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section6.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section6.management')}</span>
                  <select
                    required
                    value={formData.site_management}
                    onChange={(e) => setFormData({ ...formData, site_management: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="self">{t('survey.section6.management_self')}</option>
                    <option value="you">{t('survey.section6.management_you')}</option>
                    <option value="shared">{t('survey.section6.management_shared')}</option>
                    <option value="unsure">{t('survey.section6.management_unsure')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section6.dashboard')}</span>
                  <select
                    required
                    value={formData.admin_dashboard}
                    onChange={(e) => setFormData({ ...formData, admin_dashboard: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="full">{t('survey.section6.dashboard_full')}</option>
                    <option value="basic">{t('survey.section6.dashboard_basic')}</option>
                    <option value="no">{t('survey.section6.dashboard_no')}</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Section 7: Technical Requirements */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.section7.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section7.domain')}</span>
                  <select
                    required
                    value={formData.domain_ownership}
                    onChange={(e) => setFormData({ ...formData, domain_ownership: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="own">{t('survey.section7.domain_own')}</option>
                    <option value="need-help">{t('survey.section7.domain_help')}</option>
                    <option value="ideas">{t('survey.section7.domain_ideas')}</option>
                  </select>
                </label>

                {formData.domain_ownership === 'own' && (
                  <input
                    type="text"
                    placeholder={t('survey.section7.domain_name')}
                    value={formData.domain_name}
                    onChange={(e) => setFormData({ ...formData, domain_name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                  />
                )}

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.section7.responsive')}</span>
                  <select
                    required
                    value={formData.responsive_design}
                    onChange={(e) => setFormData({ ...formData, responsive_design: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="all">{t('survey.section7.responsive_all')}</option>
                    <option value="desktop">{t('survey.section7.responsive_desktop')}</option>
                    <option value="mobile">{t('survey.section7.responsive_mobile')}</option>
                  </select>
                </label>
              </div>
            </section>

            {/* Project Timeline & Budget */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-emerald-400 border-b border-emerald-500/30 pb-3">
                {t('survey.timeline.title')}
              </h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.timeline.launch')}</span>
                  <select
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="asap">{t('survey.timeline.asap')}</option>
                    <option value="2weeks">{t('survey.timeline.2weeks')}</option>
                    <option value="1month">{t('survey.timeline.1month')}</option>
                    <option value="2-3months">{t('survey.timeline.2-3months')}</option>
                    <option value="flexible">{t('survey.timeline.flexible')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.timeline.budget')}</span>
                  <select
                    value={formData.budget_range}
                    onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="">{t('survey.select')}</option>
                    <option value="under1k">{t('survey.timeline.budget_under1k')}</option>
                    <option value="1k-3k">{t('survey.timeline.budget_1k3k')}</option>
                    <option value="3k-5k">{t('survey.timeline.budget_3k5k')}</option>
                    <option value="5k-10k">{t('survey.timeline.budget_5k10k')}</option>
                    <option value="10k+">{t('survey.timeline.budget_10k')}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-white font-semibold mb-2 block">{t('survey.timeline.comments')}</span>
                  <textarea
                    value={formData.additional_comments}
                    onChange={(e) => setFormData({ ...formData, additional_comments: e.target.value })}
                    rows={4}
                    placeholder={t('survey.timeline.comments_placeholder')}
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
                    {t('survey.submitting')}
                  </>
                ) : (
                  t('survey.submit')
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
