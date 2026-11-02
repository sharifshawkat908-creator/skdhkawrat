import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ResponsibleGaming from './components/ResponsibleGaming';
import FAQ from './components/FAQ';
import CTASection from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-casino-dark text-casino-ink">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <ResponsibleGaming />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
