import { Globe, Zap, Search, Server, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      features: [t('services.design.feat1'), t('services.design.feat2'), t('services.design.feat3')]
    },
    {
      icon: Zap,
      title: t('services.dev.title'),
      description: t('services.dev.desc'),
      features: [t('services.dev.feat1'), t('services.dev.feat2'), t('services.dev.feat3')]
    },
    {
      icon: Search,
      title: t('services.seo.title'),
      description: t('services.seo.desc'),
      features: [t('services.seo.feat1'), t('services.seo.feat2'), t('services.seo.feat3')]
    },
    {
      icon: Server,
      title: t('services.hosting.title'),
      description: t('services.hosting.desc'),
      features: [t('services.hosting.feat1'), t('services.hosting.feat2'), t('services.hosting.feat3')]
    },
    {
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.desc'),
      features: [t('services.security.feat1'), t('services.security.feat2'), t('services.security.feat3')]
    },
    {
      icon: TrendingUp,
      title: t('services.analytics.title'),
      description: t('services.analytics.desc'),
      features: [t('services.analytics.feat1'), t('services.analytics.feat2'), t('services.analytics.feat3')]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="one-div group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
