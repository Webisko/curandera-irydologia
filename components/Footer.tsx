import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-curandera-bg pt-12 pb-8 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Disclaimer Box */}
        <div className="border border-curandera-accent/30 bg-white p-6 rounded-xl text-center mb-12 shadow-sm">
          <p className="text-sm text-stone-600 font-sans leading-relaxed">
            <strong className="text-curandera-accent block mb-2 uppercase tracking-wider text-xs">Klauzula informacyjna</strong>
            Analiza irydologiczna nie zastępuje diagnostyki medycznej czy wizyty u lekarza, a wyniki uzyskane podczas analizy irydologicznej należy traktować jako wstępne – warto je potwierdzić metodami konwencjonalnymi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm font-sans">
          <div className="mb-4 md:mb-0">
            <span className="font-serif text-curandera-dark font-bold text-lg tracking-wider block mb-1">CURANDERA</span>
            &copy; {new Date().getFullYear()} Olga Michalik
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-curandera-accent transition-colors">Regulamin</a>
            <a href="#" className="hover:text-curandera-accent transition-colors">Polityka Prywatności</a>
            <a href="mailto:kontakt@curandera.pl" className="hover:text-curandera-accent transition-colors">kontakt@curandera.pl</a>
          </div>
        </div>
      </div>
    </footer>
  );
};