import { Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onBookConsultation: () => void;
}

export default function Header({ onBookConsultation }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  const handleGetStarted = () => {
    window.location.href = '/survey';
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Kano<span className="text-emerald-400">bos</span>
              <span className="text-emerald-400 text-lg align-super ml-0.5">✧</span>
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded text-sm font-semibold transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1.5 rounded text-sm font-semibold transition-all duration-200 ${
                  language === 'nl'
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                NL
              </button>
            </div>

            <button
              onClick={handleGetStarted}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              {t('header.get_started')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
