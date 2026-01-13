import React from 'react';
import { Button } from './Button';
import { asset } from '../utils/asset';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Left Aligned */}
      <div className="absolute inset-0 z-0">
        <img 
          src={asset('images/hero_3.webp')} 
          alt="Zbliżenie na tęczówkę oka" 
          className="w-full h-full object-cover object-center md:object-left"
        />
        {/* Dark overlay gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-curandera-dark/80 via-curandera-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl text-left space-y-8">
          <h1 className="font-serif text-h-xl leading-tight text-white mb-6 lowercase">
            analiza irydologiczna online
            <span className="italic font-light text-h-m block mt-4">Odkryj, co Twoja tęczówka mówi o stanie organizmu i zadbaj o siebie świadomie</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#oferta">
              <Button>Kup analizę irydologiczną</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};