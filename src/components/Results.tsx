import { TrendingUp, Target, Zap, Coins } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Results() {
  const { t } = useLanguage();

  const metrics = [
    {
      icon: TrendingUp,
      value: t('results.metric1.value'),
      label: t('results.metric1.label'),
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Target,
      value: t('results.metric2.value'),
      label: t('results.metric2.label'),
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Zap,
      value: t('results.metric3.value'),
      label: t('results.metric3.label'),
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Coins,
      value: t('results.metric4.value'),
      label: t('results.metric4.label'),
      color: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-700 text-sm font-semibold tracking-wide">PROVEN PERFORMANCE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('results.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-bl-full transition-opacity duration-300 group-hover:opacity-10"
                   style={{
                     backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                   }}
              ></div>

              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>

              <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>

              <p className="text-slate-600 font-medium leading-snug">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 font-medium">
            * Based on average client performance across 500+ launched websites
          </p>
        </div>
      </div>
    </section>
  );
}
