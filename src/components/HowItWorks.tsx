import { motion } from 'framer-motion';
import { useLanguage } from '../lib/i18n';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.howItWorks.steps[0].title,
      desc: t.howItWorks.steps[0].desc
    },
    {
      num: "02",
      title: t.howItWorks.steps[1].title,
      desc: t.howItWorks.steps[1].desc
    },
    {
      num: "03",
      title: t.howItWorks.steps[2].title,
      desc: t.howItWorks.steps[2].desc
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">{t.howItWorks.heading}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-black/20 backdrop-blur-md border-4 border-brand-500/30 flex items-center justify-center text-3xl font-bold text-brand-400 mb-8 shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] group-hover:border-brand-500 transition-colors">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-lg">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}