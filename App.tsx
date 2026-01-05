import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-curandera-bg font-sans text-curandera-dark selection:bg-curandera-accent selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Problem />
        <Pricing />
        <FAQ />
        <About />
        <Testimonials />
        <Process />
      </main>

      <Footer />
    </div>
  );
}

export default App;