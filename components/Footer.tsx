import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-curandera-alt pt-12 pb-8 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6">
        {/* Disclaimer Box */}
        <div className="border border-curandera-accent/30 bg-curandera-bg p-6 rounded-none text-center mb-12 shadow-sm">
          <p className="text-body-m text-stone-600 font-sans leading-relaxed">
            <strong className="text-curandera-primary block mb-2 uppercase tracking-wider text-h-m">Klauzula informacyjna</strong>
            Analiza irydologiczna nie zastępuje diagnostyki medycznej czy wizyty u lekarza, a wyniki uzyskane podczas analizy irydologicznej należy traktować jako wstępne – warto je potwierdzić metodami konwencjonalnymi.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-stone-500 text-body-m font-sans">
          {/* Left: Logo */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
            <img src="/images/CURANDERA logo z nazwą.webp" alt="CURANDERA" className="h-8 w-auto" />
          </div>
          {/* Center: Dynamic copyright */}
          <div className="flex-1 flex justify-center items-center text-center">
            <span>
              &copy; {new Date().getFullYear()} CURANDERA | wszelkie prawa zastrzeżone
            </span>
          </div>
          {/* Right: Webisko link */}
          <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            <span className="lowercase mr-1">realizacja:</span>
            <a
              href="https://webisko.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-curandera-secondary hover:text-curandera-accent transition-colors"
            >
              Webisko.pl
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};