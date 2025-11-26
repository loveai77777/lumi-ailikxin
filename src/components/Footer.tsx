import { useLanguage } from '../lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://static.lumi.new/97/97938258466c9a838890a793f63c66cb.webp" alt="ailinkxin Logo" className="w-6 h-6 object-contain" />
              <span className="text-lg font-bold">ailinkxin</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t.footer.product}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.features}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.pricing}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.security}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.footer.links.privacy}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2024 ailinkxin. All rights reserved.</p>
          <p>Made with ❤️ by Lumi</p>
        </div>
      </div>
    </footer>
  );
}