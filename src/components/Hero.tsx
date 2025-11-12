import { Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import TrustBadges from './TrustBadges';

interface HeroProps {
  onBookConsultation: () => void;
  onGetQuote: () => void;
}

export default function Hero({ onBookConsultation, onGetQuote }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="rotating-cube-container absolute top-1/4 right-1/4 opacity-20">
        <div className="obj"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              {t('hero.title.highlight')}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="relative inline-flex flex-col items-center gap-4 mb-12 group max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/30 rounded-[2rem] blur-3xl group-hover:blur-[4rem] group-hover:scale-110 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 rounded-[2rem] blur-2xl animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-white/20 via-white/[0.15] to-white/10 backdrop-blur-2xl border-2 border-white/40 rounded-[2rem] p-10 shadow-[0_8px_32px_0_rgba(16,185,129,0.2),0_0_1px_0_rgba(255,255,255,0.5)_inset] overflow-hidden transition-all duration-500 group-hover:shadow-[0_12px_48px_0_rgba(16,185,129,0.3),0_0_2px_0_rgba(255,255,255,0.6)_inset] group-hover:border-white/50">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60"></div>
              <div className="absolute top-1/4 right-0 w-32 h-32 bg-emerald-400/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)]"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 sm:gap-4">
                  <span className="text-2xl md:text-3xl font-semibold text-emerald-300 drop-shadow-lg tracking-wide">
                    {t('hero.price.label')}
                  </span>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] [text-shadow:_0_0_30px_rgb(16_185_129_/_30%)]">
                    {t('hero.price')}
                  </div>
                </div>

                <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm"></div>
                </div>

                <div className="text-center space-y-3 mt-2">
                  <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg [text-shadow:_0_2px_8px_rgb(0_0_0_/_20%)]">
                    {t('hero.price.subtext')}
                  </p>
                  <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-base md:text-lg text-emerald-100/95 font-medium">
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      {t('hero.price.includes1')}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      {t('hero.price.includes2')}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      {t('hero.price.includes3')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onBookConsultation}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta.primary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={onGetQuote}
              className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:bg-slate-700"
            >
              {t('hero.cta.secondary')}
            </button>
          </div>

          <div className="mb-12">
            <TrustBadges />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '48hrs', label: t('hero.stat.delivery') },
              { value: '500+', label: t('hero.stat.sites') },
              { value: '98%', label: t('hero.stat.satisfaction') },
              { value: '24/7', label: t('hero.stat.support') }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
