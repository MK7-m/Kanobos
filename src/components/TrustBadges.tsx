import { Shield, Lock, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Shield,
      text: t('trust.secure'),
    },
    {
      icon: CheckCircle,
      text: t('trust.gdpr'),
    },
    {
      icon: Lock,
      text: t('trust.ssl'),
    },
    {
      icon: Clock,
      text: t('trust.uptime'),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 backdrop-blur-sm border-2 border-emerald-500/30 rounded-lg shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
        >
          <badge.icon className="w-4 h-4 text-emerald-400" strokeWidth={2.5} />
          <span className="text-sm font-medium text-white">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}
