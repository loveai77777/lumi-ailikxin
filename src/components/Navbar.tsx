import { motion } from 'framer-motion';
import {Menu, X, Globe} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../lib/i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0c29]/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Ailinkxin</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t.navbar.features}</a>
          <a href="#how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t.navbar.howItWorks}</a>
          <a href="#solutions" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t.navbar.pricing}</a>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language === 'en' ? '中文' : 'English'}</span>
          </button>

          <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t.navbar.login}</a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-dark-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-50 transition-colors shadow-lg shadow-brand-500/20"
          >
            {t.navbar.getStarted}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-gray-300 hover:text-white"
          >
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-dark-900 border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
        >
          <a href="#features" className="text-gray-300">{t.navbar.features}</a>
          <a href="#how-it-works" className="text-gray-300">{t.navbar.howItWorks}</a>
          <a href="#solutions" className="text-gray-300">Solutions</a>
          <a href="#pricing" className="text-gray-300">{t.navbar.pricing}</a>
          <hr className="border-white/10" />
          <a href="#" className="text-gray-300">{t.navbar.login}</a>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="bg-white text-dark-900 px-5 py-3 rounded-lg text-sm font-medium w-full"
          >
            {t.navbar.getStarted}
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}