import { Rocket, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onBookConsultation: () => void;
  onGetQuote: () => void;
  onShowSurvey?: () => void;
}

export default function Footer({ onBookConsultation, onGetQuote, onShowSurvey }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('footer.cta.title')}
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            {t('footer.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t('footer.cta.book')}
            </button>
            <button
              onClick={onGetQuote}
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg border-2 border-white/20"
            >
              {t('footer.cta.quote')}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Kano<span className="text-emerald-400">bos</span><span className="text-emerald-400 text-lg align-super ml-0.5">✧</span></span>
            </button>
            <p className="text-slate-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{t('footer.hours')}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.design')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.development')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.seo')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.hosting')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.maintenance')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.service.ecommerce')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.about')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.portfolio')}
                </button>
              </li>
              <li>
                <button onClick={onGetQuote} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.pricing')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.faq')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.blog')}
                </button>
              </li>
              <li>
                <button onClick={onBookConsultation} className="hover:text-emerald-400 transition-colors text-left">
                  {t('footer.link.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{t('footer.contact.email')}</div>
                  <a href="mailto:info@kanobos.nl" className="hover:text-emerald-400 transition-colors">
                    info@kanobos.nl
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{t('footer.contact.phone')}</div>
                  <a href="tel:+15551234567" className="hover:text-emerald-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{t('footer.contact.location')}</div>
                  <span>Amsterdam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Kanobos✧. {t('footer.rights')}
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.terms')}</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">{t('footer.refund')}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
}
