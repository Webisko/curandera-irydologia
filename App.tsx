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
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-curandera-bg font-sans text-curandera-body selection:bg-curandera-accent selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Problem />
        <Process />
        <About />
        <FAQ />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;