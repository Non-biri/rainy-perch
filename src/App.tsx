
import { useState } from 'react';
import Hero from './components/Hero';
import Opening from './components/Opening';
import Concept from './components/Concept';
// Removed Menu import
import Staff from './components/Staff';
import Gallery from './components/Gallery';
import News from './components/News';
import VRCGroup from './components/VRCGroup';
import HowToJoin from './components/HowToJoin';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-cream">
      {loading && <Opening onComplete={() => setLoading(false)} />}
      <div>
        <Hero />
        <Concept />
        {/* Removed Menu component */}
        <Staff />
        <Gallery />
        <section className="py-20 px-4 bg-cream text-brown-900 border-t border-brown-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <News />
            <VRCGroup />
          </div>
        </section>
        <HowToJoin />
        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
