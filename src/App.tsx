
import { useState } from 'react';
import Hero from './components/Hero';
import Opening from './components/Opening';
import Concept from './components/Concept';
// Removed Menu import
import Staff from './components/Staff';
import Gallery from './components/Gallery';
import News from './components/News';
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
        <News />
        <HowToJoin />
        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
