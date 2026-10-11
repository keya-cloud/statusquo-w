import Navigation from '@/components/sections/Navigation';
import Packages from '@/components/pages/Packages';
import Hero from '@/components/sections/Hero';
import ResultsStrip, { ResultsInsights } from '@/components/sections/ResultsStrip';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Services from '@/components/sections/Services';
import ClosingCTA from '@/components/sections/ClosingCTA';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <ResultsStrip />
        <FeaturedWork />
        <ResultsInsights />
        <Services />
        <Packages />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
