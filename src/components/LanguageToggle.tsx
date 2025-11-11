import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg shadow-lg px-3 py-2">
        <Globe className="w-4 h-4 text-slate-600" strokeWidth={2.5} />
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'bg-emerald-500 text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('nl')}
          className={`px-3 py-1 rounded text-sm font-semibold transition-all duration-200 ${
            language === 'nl'
              ? 'bg-emerald-500 text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          NL
        </button>
      </div>
    </div>
  );
}
