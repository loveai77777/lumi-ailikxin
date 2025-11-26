import { motion } from 'framer-motion';
import {Phone, Mail, CreditCard, Shield, Clock, Zap} from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Phone,
      title: t.features.items.call.title,
      description: t.features.items.call.desc
    },
    {
      icon: CreditCard,
      title: t.features.items.negotiate.title,
      description: t.features.items.negotiate.desc
    },
    {
      icon: Mail,
      title: t.features.items.email.title,
      description: t.features.items.email.desc
    },
    {
      icon: Zap,
      title: t.features.items.subscription.title,
      description: t.features.items.subscription.desc
    },
    {
      icon: Shield,
      title: t.features.items.privacy.title,
      description: t.features.items.privacy.desc
    },
    {
      icon: Clock,
      title: t.features.items.alwaysOn.title,
      description: t.features.items.alwaysOn.desc
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">{t.features.headingPrefix}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">{t.features.headingSuffix}</span></h2>
          <p className="text-gray-400 text-lg">
            {t.features.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-500/50 hover:bg-white/10 transition-all group hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-white">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}