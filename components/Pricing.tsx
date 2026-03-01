import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Package } from '../types';

const packages: Package[] = [
  {
    id: 'basic',
    title: 'pakiet I',
    price: '199 zł',
    shortDescription: 'Podstawowa, kompleksowa analiza tęczówki oka, pozwalająca lepiej zrozumieć kondycję organizmu oraz jego indywidualne predyspozycje.',
    features: [
      'Profesjonalna analiza irydologiczna online na podstawie przesłanego zdjęcia',
      'Ocena możliwych słabości narządów i układów ciała',
      'Plik tekstowy PDF z podsumowaniem analizy',
      '1 konsultacja mailowa w przypadku dodatkowych pytań'
    ],
    detailsTitle: 'Długi opis Pakietu I',
    detailsContent: `W ramach Pakietu I otrzymasz szczegółowy wgląd w stan swojego organizmu z perspektywy irydologii. Analiza ta nie jest diagnozą medyczną, lecz holistyczną oceną Twojej konstytucji. 
    
    Skupimy się na odczytaniu znaków na tęczówce, które mogą wskazywać na obszary o obniżonej witalności, genetyczne predyspozycje oraz wpływ stresu na Twój układ nerwowy. To doskonały punkt wyjścia dla osób, które chcą rozpocząć świadomą pracę nad swoim zdrowiem, ale nie potrzebują jeszcze konkretnego planu suplementacyjnego.`
  },
  {
    id: 'extended',
    title: 'pakiet II',
    price: '299 zł',
    shortDescription: 'Kompleksowa analiza irydologiczna z indywidualnymi zaleceniami i planem suplementacji dopasowanym do Twoich potrzeb.',
    features: [
      'Pełna analiza irydologiczna online jak w Pakiecie I',
      'Indywidualny plan naturalnej suplementacji (PDF)',
      'Indywidualne zalecenia dotyczące wsparcia zdrowia poszczególnych narządów ciała (PDF)',
      'Wsparcie w doborze ziół i ekstraktów',
      '1 konsultacja mailowa w przypadku dodatkowych pytań'
    ],
    detailsTitle: 'Długi opis Pakietu II',
    detailsContent: `Pakiet II to kompleksowe narzędzie do pracy nad zdrowiem. Oprócz pełnej analizy stanu organizmu (identycznej jak w Pakiecie I), otrzymasz konkretny plan działania.
    
    Na podstawie obrazu Twojej tęczówki oraz wywiadu, przygotuję dla Ciebie spersonalizowany protokół suplementacyjny oparty na naturalnych ekstraktach (np. grzyby witalne, zioła adaptogenne). Dowiesz się, jakie zmiany w stylu życia będą dla Ciebie najkorzystniejsze, aby wzmocnić słabsze ogniwa Twojego organizmu. To rozwiązanie dla osób szukających gotowej, naturalnej ścieżki do poprawy samopoczucia.`
  }
];

export const Pricing: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="oferta" bg="default">
      <div className="text-center mb-8">
        <h2 className="font-serif text-h-l text-curandera-primary mb-10 lowercase">Oferta</h2>
        <p className="text-curandera-dark/70 text-body-l lowercase font-sans">wybierz drogę do zdrowia</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
        {packages.map((pkg, index) => (
          <div 
            key={pkg.id} 
            className={`
              relative rounded-none p-8 border transition-all duration-300 flex flex-col min-h-full
              ${index === 1 ? 'bg-curandera-bg border-curandera-accent/30 shadow-xl' : 'bg-curandera-bg border-stone-200 shadow-sm hover:shadow-md'}
            `}
          >
            {index === 1 && (
              <div className="absolute top-0 right-0 bg-curandera-accent text-white text-body-m px-4 py-1 rounded-none tracking-widest uppercase font-medium">
                Polecany
              </div>
            )}

            <div className="mb-8 text-center">
              <h3 className="font-serif text-h-m mb-2 text-curandera-secondary">{pkg.title}</h3>
              <div className="text-h-l font-serif text-curandera-accent my-4">{pkg.price}</div>
              <p className="text-body-l text-curandera-dark/70 font-sans leading-relaxed">
                {pkg.shortDescription}
              </p>
            </div>

            <ul className="space-y-4 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-body-m text-curandera-dark/80">
                  <span
                    className="flex items-center justify-center w-[20px] h-[20px] border-2 border-curandera-primary bg-white rounded-none mr-3 mt-0.5 flex-shrink-0"
                  >
                    <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#BE5705" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10 space-y-4">
              <Button
                className="w-full"
                onClick={() => {
                  const url = index === 0 
                    ? 'https://curandera.pl/?lp_package=5392&to=checkout' 
                    : 'https://curandera.pl/?lp_package=5401&to=checkout';
                  window.open(url, '_blank');
                }}
              >
                {index === 0 ? 'kup pakiet I' : 'kup pakiet II'}
              </Button>
              {/* Expandable Section - only for this package */}
              <div className="pt-4 border-t border-stone-100">
                <button 
                  type="button"
                  aria-expanded={expandedId === pkg.id}
                  aria-controls={`package-details-${pkg.id}`}
                  onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
                  className="flex items-center justify-center w-full text-body-m uppercase tracking-widest text-curandera-dark/60 hover:text-curandera-accent transition-colors"
                >
                  {expandedId === pkg.id ? 'Ukryj szczegóły' : 'Więcej o pakiecie'}
                  {expandedId === pkg.id
                    ? <ChevronUp size={16} className="ml-1" aria-hidden="true" />
                    : <ChevronDown size={16} className="ml-1" aria-hidden="true" />}
                </button>
                <div 
                  id={`package-details-${pkg.id}`}
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${expandedId === pkg.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                  `}
                >
                  {expandedId === pkg.id && (
                    <p className="text-body-m text-curandera-body font-sans leading-relaxed whitespace-pre-line bg-curandera-alt p-4 rounded-none">
                      {pkg.detailsContent}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};