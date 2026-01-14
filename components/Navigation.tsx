import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { asset } from '../utils/asset';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Oferta', href: '#oferta' },
    { name: 'O Irydologii', href: '#faq' },
    { name: 'O Mnie', href: '#omnie' },
    { name: 'Opinie', href: '#opinie' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 max-h-[80px] ${isScrolled ? 'bg-curandera-alt/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={asset(isScrolled ? 'images/Curandera_logo_balanced_dark.webp' : 'images/Curandera_logo_balanced_light.webp')} alt="CURANDERA" className="w-[240px] max-w-[50vw] md:max-w-[75vw] h-auto max-h-[60px]" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-body-l lowercase tracking-widest transition-colors ${
                isScrolled ? 'text-curandera-dark hover:text-curandera-accent' : 'text-white hover:text-curandera-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="#oferta" className={
            'px-5 py-2 rounded-none text-body-l lowercase tracking-widest transition-all bg-curandera-dark text-white hover:bg-curandera-accent'
          }>
            Wybierz Pakiet
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className={`lg:hidden transition-colors ${
            isScrolled ? 'text-curandera-dark' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-7 h-7">
            <Menu
              size={28}
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
            />
            <X
              size={28}
              aria-hidden="true"
              className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 w-full bg-curandera-bg shadow-lg lg:hidden flex flex-col items-center py-8 space-y-6 transition-all duration-800 overflow-hidden z-40 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
         {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-curandera-dark text-body-l lowercase tracking-widest font-serif"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a href="#oferta" className="px-5 py-2 rounded-none text-body-l lowercase tracking-widest transition-all bg-curandera-dark text-white hover:bg-curandera-accent" onClick={() => setMobileMenuOpen(false)}>
          Wybierz Pakiet
        </a>
      </div>
    </nav>
  );
};