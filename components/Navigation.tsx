import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { name: 'Kontakt', href: '#proces' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 max-h-[80px] ${isScrolled ? 'bg-curandera-alt/95 backdrop-blur-sm shadow-sm py-2' : 'bg-curandera-alt py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/images/CURANDERA logo z nazwą.webp" alt="CURANDERA" className="w-[320px] max-w-[75vw] h-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-body-l lowercase tracking-widest text-curandera-dark hover:text-curandera-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#oferta" className="px-5 py-2 bg-[#030303] text-white rounded-none text-body-l lowercase tracking-widest hover:bg-curandera-accent transition-colors">
            Wybierz Pakiet
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-curandera-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-curandera-bg shadow-lg lg:hidden flex flex-col items-center py-8 space-y-6">
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
        </div>
      )}
    </nav>
  );
};