
import { useState } from 'react';
import GlobalNav from './components/GlobalNav';
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
      <GlobalNav />
      <div>
        <div id="top">
          <Hero />
        </div>
        <div id="concept">
          <Concept />
        </div>
        {/* Removed Menu component */}
        <div id="staff">
          <Staff />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="news">
          <section className="py-20 px-4 bg-cream text-brown-900 border-t border-brown-100">
            <div className="max-w-5xl mx-auto">
              <News />
            </div>
          </section>
        </div>
        <div id="join">
          <HowToJoin />
        </div>
        <Disclaimer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
