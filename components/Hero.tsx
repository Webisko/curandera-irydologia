import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1596502678663-7c70c2d28f7d?q=80&w=2070&auto=format&fit=crop" 
          alt="Close up of a human eye iris" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-curandera-bg/0 via-curandera-bg/50 to-curandera-bg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-curandera-dark mb-6">
          Analiza irydologiczna online <br/>
          <span className="italic font-light text-3xl md:text-5xl block mt-4">Odkryj, co Twoja tęczówka mówi o stanie organizmu</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-curandera-dark/80 max-w-2xl mx-auto leading-relaxed">
          Dowiedz się, jakie są Twoje predyspozycje zdrowotne i zadbaj o siebie świadomie.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a href="#oferta">
            <Button>Kup analizę irydologiczną</Button>
          </a>
        </div>
      </div>
    </div>
  );
};