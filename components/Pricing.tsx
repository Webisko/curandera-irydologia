import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Package } from '../types';

const packages: Package[] = [
  {
    id: 'basic',
    title: 'PAKIET I',
    price: '199 zł',
    shortDescription: 'Podstawowa, kompleksowa analiza tęczówki oka, pozwalająca lepiej zrozumieć kondycję organizmu oraz jego indywidualne predyspozycje.',
    features: [
      'Profesjonalna analiza irydologiczna na podstawie zdjęcia',
      'Ocena możliwych słabości narządów i układów',
      'Ocena stanu psychicznego',
      'Ocena predyspozycji organizmu',
      'Omówienie w formie nagrania wideo (20–30 minut)',
      'Plik tekstowy PDF z podsumowaniem analizy',
      '1 konsultacja mailowa'
    ],
    detailsTitle: 'Długi opis Pakietu I',
    detailsContent: `W ramach Pakietu I otrzymasz szczegółowy wgląd w stan swojego organizmu z perspektywy irydologii. Analiza ta nie jest diagnozą medyczną, lecz holistyczną oceną Twojej konstytucji. 
    
    Skupimy się na odczytaniu znaków na tęczówce, które mogą wskazywać na obszary o obniżonej witalności, genetyczne predyspozycje oraz wpływ stresu na Twój układ nerwowy. To doskonały punkt wyjścia dla osób, które chcą rozpocząć świadomą pracę nad swoim zdrowiem, ale nie potrzebują jeszcze konkretnego planu suplementacyjnego.`
  },
  {
    id: 'extended',
    title: 'PAKIET II',
    price: '299 zł',
    shortDescription: 'Rozszerzona analiza irydologiczna z indywidualnymi zaleceniami i naturalną suplementacją dopasowaną do Twoich potrzeb.',
    features: [
      'Pełna analiza irydologiczna jak w Pakiecie I',
      'Indywidualny plan naturalnej suplementacji (PDF)',
      'Indywidualne zalecenia dotyczące obszarów wymagających szczególnej troski (PDF)',
      '2 konsultacje mailowe',
      'Wsparcie w doborze ziół i ekstraktów'
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
    <Section id="oferta" bg="white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-curandera-dark mb-4">Oferta</h2>
        <div className="w-24 h-1 bg-curandera-accent mx-auto opacity-50"></div>
        <p className="mt-4 text-curandera-dark/70 uppercase tracking-widest text-sm">Wybierz drogę do zdrowia</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {packages.map((pkg, index) => (
          <div 
            key={pkg.id} 
            className={`
              relative rounded-none p-8 border transition-all duration-300 flex flex-col
              ${index === 1 ? 'bg-[#FDFBF7] border-curandera-accent/30 shadow-xl' : 'bg-white border-stone-200 shadow-sm hover:shadow-md'}
            `}
          >
            {index === 1 && (
              <div className="absolute top-0 right-0 bg-curandera-accent text-white text-xs px-4 py-1 rounded-none tracking-widest uppercase font-medium">
                Polecany
              </div>
            )}

            <div className="mb-6 text-center">
              <h3 className="font-serif text-2xl md:text-3xl mb-2">{pkg.title}</h3>
              <div className="text-4xl font-serif text-curandera-accent my-4">{pkg.price}</div>
              <p className="text-sm text-curandera-dark/70 font-sans leading-relaxed min-h-[80px]">
                {pkg.shortDescription}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm md:text-base text-curandera-dark/80">
                  <span className="bg-curandera-soft rounded-none p-1 mr-3 mt-0.5 text-curandera-green flex-shrink-0">
                    <Check size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-4">
              <Button className="w-full">
                {index === 0 ? 'Kup pakiet I' : 'Kup pakiet II'}
              </Button>
              
              {/* Expandable Section */}
              <div className="pt-4 border-t border-stone-100">
                <button 
                  onClick={() => toggleExpand(pkg.id)}
                  className="flex items-center justify-center w-full text-xs uppercase tracking-widest text-curandera-dark/60 hover:text-curandera-accent transition-colors"
                >
                  {expandedId === pkg.id ? 'Ukryj szczegóły' : 'Więcej o pakiecie'}
                  {expandedId === pkg.id ? <ChevronUp size={16} className="ml-1"/> : <ChevronDown size={16} className="ml-1"/>}
                </button>
                
                <div 
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${expandedId === pkg.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                  `}
                >
                  <p className="text-sm text-stone-600 font-sans leading-relaxed whitespace-pre-line bg-curandera-soft/50 p-4 rounded-none">
                    {pkg.detailsContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};