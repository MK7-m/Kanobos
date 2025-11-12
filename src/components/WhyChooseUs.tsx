import { Zap, Shield, Heart, Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WhyChooseUsProps {
  onGetQuote: () => void;
}

export default function WhyChooseUs({ onGetQuote }: WhyChooseUsProps) {
  const { t } = useLanguage();
  const reasons = [
    {
      icon: Zap,
      title: t('why.reason1.title'),
      description: t('why.reason1.desc'),
      highlight: t('why.reason1.badge')
    },
    {
      icon: Shield,
      title: t('why.reason2.title'),
      description: t('why.reason2.desc'),
      highlight: t('why.reason2.badge')
    },
    {
      icon: Heart,
      title: t('why.reason3.title'),
      description: t('why.reason3.desc'),
      highlight: t('why.reason3.badge')
    },
    {
      icon: Award,
      title: t('why.reason4.title'),
      description: t('why.reason4.desc'),
      highlight: t('why.reason4.badge')
    },
    {
      icon: Users,
      title: t('why.reason5.title'),
      description: t('why.reason5.desc'),
      highlight: t('why.reason5.badge')
    },
    {
      icon: TrendingUp,
      title: t('why.reason6.title'),
      description: t('why.reason6.desc'),
      highlight: t('why.reason6.badge')
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">{t('why.badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('why.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-105"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <reason.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {reason.title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  {reason.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                  <span className="text-xs font-semibold text-emerald-400">{reason.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('why.cta.title')}
            </h3>
            <p className="text-slate-300 mb-8 text-lg">
              {t('why.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetQuote}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                {t('why.cta.button')}
              </button>
              <button
                onClick={onGetQuote}
                className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-emerald-500/30 hover:bg-slate-700 hover:border-emerald-500 transition-all duration-300"
              >
                {t('why.cta.secondary')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
