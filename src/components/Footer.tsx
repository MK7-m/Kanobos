import { Rocket, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onBookConsultation: () => void;
  onGetQuote: () => void;
  onShowSurvey?: () => void;
}

export default function Footer({ onBookConsultation, onGetQuote, onShowSurvey }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Your Website in 48 Hours?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Stop losing customers to competitors. Get your professional website online this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookConsultation}
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Free Strategy Call
            </button>
            <button
              onClick={onGetQuote}
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg border-2 border-white/20"
            >
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Kano<span className="text-emerald-400">bos</span><span className="text-emerald-400 text-lg align-super ml-0.5">✧</span></span>
            </div>
            <p className="text-slate-400 mb-6">
              Professional puzzle websites delivered in 48 hours. We help puzzle creators establish their online presence quickly and effectively.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Open 24/7</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  SEO Optimization
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Website Hosting
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Website Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">
                  E-commerce Solutions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-emerald-400 transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-emerald-400 transition-colors text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={onGetQuote} className="hover:text-emerald-400 transition-colors text-left">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-400 transition-colors text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-emerald-400 transition-colors text-left">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={onBookConsultation} className="hover:text-emerald-400 transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:Kanobos@mail.com" className="hover:text-emerald-400 transition-colors">
                    Kanobos@mail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <a href="tel:+15551234567" className="hover:text-emerald-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <span>Amsterdam</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Kanobos✧. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            Built with passion by the Kanobos✧ team. Your success is our mission.
          </p>
        </div>
      </div>
    </footer>
  );
}
