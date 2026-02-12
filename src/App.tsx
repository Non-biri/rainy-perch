
import { useState } from 'react';
import Hero from './components/Hero';
import Opening from './components/Opening';
import Concept from './components/Concept';
// import Menu from './components/Menu';
import Staff from './components/Staff';
import Atmosphere from './components/Atmosphere';
import News from './components/News';
import HowToJoin from './components/HowToJoin';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-cream">
      {loading && <Opening onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <Concept />
        {/* <Menu /> */}
        <Staff />
        <Atmosphere />
        <News />
        <HowToJoin />
        <Footer />
      </div>
    </div>
  );
}

export default App;
