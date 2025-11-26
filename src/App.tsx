import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import { LanguageProvider } from './lib/i18n';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-900 text-white selection:bg-brand-500 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Solutions />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;