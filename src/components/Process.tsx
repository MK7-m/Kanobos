import { MessageSquare, Layout, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ProcessProps {
  onGetQuote: () => void;
}

export default function Process({ onGetQuote }: ProcessProps) {
  const { t } = useLanguage();
  const steps = [
    {
      icon: MessageSquare,
      title: t('process.step1.title'),
      duration: t('process.step1.duration'),
      description: t('process.step1.desc')
    },
    {
      icon: Layout,
      title: t('process.step2.title'),
      duration: t('process.step2.duration'),
      description: t('process.step2.desc')
    },
    {
      icon: Code,
      title: t('process.step3.title'),
      duration: t('process.step3.duration'),
      description: t('process.step3.desc')
    },
    {
      icon: Rocket,
      title: t('process.step4.title'),
      duration: t('process.step4.duration'),
      description: t('process.step4.desc')
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('process.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-500 transform -translate-x-1/2"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-24 last:mb-0 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border-2 border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <div className="text-sm font-semibold text-emerald-400 mb-1">{step.duration}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-8 w-8 h-8 bg-slate-800 border-4 border-emerald-500 rounded-full transform -translate-x-1/2 items-center justify-center">
                  <span className="text-sm font-bold text-emerald-400">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-slate-900/80 backdrop-blur-sm border-2 border-emerald-500/30 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('process.cta.title')}
          </h3>
          <p className="text-slate-300 mb-6 text-lg">
            {t('process.cta.subtitle')}
          </p>
          <div className="flex justify-center">
            <button
              onClick={onGetQuote}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              {t('process.cta.button')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
