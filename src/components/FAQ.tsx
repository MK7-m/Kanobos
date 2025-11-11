import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:Kanobos@mail.com?subject=Question from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  const faqs = [
    {
      question: 'How can you build a professional website in just 48 hours?',
      answer: 'Our streamlined process and experienced team allow us to work efficiently without compromising quality. We use proven design templates that we customize to your brand, pre-built components for common features, and a dedicated workflow that eliminates back-and-forth delays. Plus, we focus exclusively on your project during those 48 hours.'
    },
    {
      question: 'What happens if I need changes after the website is launched?',
      answer: 'Every website includes 30 days of free revisions and support after launch. After that, we offer affordable maintenance packages starting at $99/month, or you can request changes on an as-needed basis. Minor content updates are typically included, while significant redesigns would be quoted separately.'
    },
    {
      question: 'Do I need to provide content and images?',
      answer: 'While having your content ready speeds up the process, we can help! We offer professional copywriting services and have access to premium stock photo libraries. If you have specific brand photos or content, that\'s great. If not, we\'ll work with what you have and fill in the gaps to ensure your site looks professional.'
    },
    {
      question: 'Is hosting and domain registration included?',
      answer: 'Yes! Your website includes one year of hosting on our high-performance servers with 99.9% uptime guarantee, SSL certificate for security, and automatic daily backups. Domain registration is separate and typically costs $12-15/year, which we can handle for you or you can purchase independently.'
    },
    {
      question: 'Will my website work on mobile devices?',
      answer: 'Absolutely! Every website we build is fully responsive and optimized for all devices - phones, tablets, laptops, and desktops. We test on multiple screen sizes and browsers to ensure a perfect experience for all your visitors. Mobile optimization is a standard part of our process, not an extra.'
    },
    {
      question: 'What about SEO? Will people find my website on Google?',
      answer: 'All our websites are built with SEO best practices from the ground up: fast loading speeds, clean code, proper meta tags, mobile optimization, and structured data. We also submit your site to Google and set up basic analytics. For ongoing SEO and content marketing, we offer optional monthly SEO packages.'
    },
    {
      question: 'Can I update the website myself after it\'s built?',
      answer: 'Yes! We can build your site on a user-friendly content management system (CMS) that allows you to make updates without technical knowledge. We provide training and documentation. Alternatively, we can handle all updates for you through our maintenance plans.'
    },
    {
      question: 'What if I already have a website? Can you redesign it?',
      answer: 'Definitely! We can redesign your existing website with our 48-hour service. We\'ll migrate your content, improve the design, enhance functionality, and ensure everything works perfectly. We can also keep your current domain and hosting if you prefer.'
    },
    {
      question: 'Do you offer e-commerce functionality?',
      answer: 'Yes, we can integrate e-commerce capabilities including product catalogs, shopping carts, and secure payment processing. Basic e-commerce sites (up to 50 products) fit within our standard 48-hour timeframe. Larger catalogs or complex requirements may need additional time, which we\'ll discuss upfront.'
    },
    {
      question: 'What makes your service different from DIY website builders?',
      answer: 'While DIY builders are great for some, they require significant time investment and often result in cookie-cutter designs. We provide a completely custom, professional website without you having to learn new tools or spend weeks building it yourself. Plus, you get expert design advice, professional optimization, and ongoing support.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! If we don\'t deliver your website within 48 hours (excluding revisions), you\'ll receive a full refund. Additionally, if you\'re not satisfied with the initial design, we\'ll work with you through unlimited revisions during the first 30 days until you love it.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply book a free 30-minute strategy call or fill out our quick quote form. We\'ll discuss your needs, show you examples, answer questions, and if you\'re ready to move forward, we can start immediately. Payment is 50% upfront and 50% upon delivery of your completed website.'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm">{t('faq.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl border-2 border-slate-700 overflow-hidden transition-all duration-300 hover:border-emerald-400"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-white text-lg flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border-2 border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-3 text-center">{t('faq.cta.title')}</h3>
            <p className="text-slate-300 mb-6 text-center">
              {t('faq.cta.subtitle')}
            </p>

            {submitSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-emerald-400 font-semibold">Message sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    required
                    placeholder="Your Question"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : t('faq.cta.button')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
