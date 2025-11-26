import { motion } from 'framer-motion';
import {ArrowUp, Paperclip} from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
      {/* Animated Background with Swimming Lines */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[0, 1, 2, 3].map((i) => (
            <motion.path
              key={i}
              d={`M-200 ${200 + i * 150} C 400 ${100 + i * 100}, 800 ${400 + i * 100}, 1640 ${200 + i * 150}`}
              stroke={`url(#grad${i % 2 + 1})`}
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0.2, 0.6, 0.2],
                d: [
                  `M-200 ${200 + i * 150} C 400 ${100 + i * 100}, 800 ${400 + i * 100}, 1640 ${200 + i * 150}`,
                  `M-200 ${250 + i * 150} C 500 ${150 + i * 100}, 900 ${350 + i * 100}, 1640 ${250 + i * 150}`,
                  `M-200 ${200 + i * 150} C 400 ${100 + i * 100}, 800 ${400 + i * 100}, 1640 ${200 + i * 150}`
                ]
              }}
              transition={{ 
                duration: 15 + i * 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-serif">
          {t.hero.headlinePrefix}<br />
          <span className="italic text-brand-400">{t.hero.headlineSuffix}</span>
        </h1>

        <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subheadline}
        </p>

        {/* Chat Input Box */}
        <div className="relative max-w-3xl mx-auto group">
            <div className="absolute inset-0 bg-brand-500/20 blur-xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-xl flex flex-col gap-4 shadow-2xl shadow-black/20 transition-all focus-within:border-brand-500/30 focus-within:bg-white/10 focus-within:ring-1 focus-within:ring-brand-500/30">
                <textarea
                    placeholder={t.hero.placeholder}
                    className="w-full bg-transparent border-none text-lg text-white placeholder-gray-500 focus:ring-0 resize-none min-h-[60px] p-2 outline-none"
                    rows={1}
                />
                <div className="flex items-center justify-between px-2 pb-1">
                    <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <Paperclip className="w-5 h-5" />
                    </button>
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-500 hover:bg-brand-400 text-white p-3 rounded-full transition-colors shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
