import React, { useState } from 'react';
import { Section } from './Section';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Katarzyna Podmokła",
    rating: 5,
    text: "Bardzo polecam analizę irydologiczną u Olgi. Nie spodziewałam się aż tak dokładnego opisu mojego stanu zdrowia, który się kompletnie pokrywa ze stanem faktycznym, choć pewne rewelacje muszę sprawdzić, bo o nich po prostu nie wiedziałam, co jest cudowne, bo zostałam nakierowana na aspekty dosyć istotne, na co nawet nie zwróciłam uwagi. Dzięki temu mogę zawczasu zadbać o profilaktykę, i mam nadzieję uniknąć chorób przewlekłych w przyszłości. Także nic tylko dziękować. Poza tym analiza opisana w prosty i czytelny sposób, poza krótszą formą pisemną obszerne wytłumaczenie w formie wideo, prosto, fajnie i przejrzyście."
  },
  {
    name: "Zuzanna Bergander",
    rating: 5,
    text: "Z analizy jestem bardzo zadowolona i z treści i z formy. Bardzo dużo rzeczy się pokrywa z moim stanem realnym. Są też rzeczy o których nie wiedziałam a dzięki analizie mogę teraz na nie zwrócić uwagę. Szczerze nie spodziewałam się, że tak wiele można “wyczytać” z naszych oczu. Myślę, że taka analiza to bardzo przydatne narzędzie dla ludzi którzy chcą świadomie dążyć do lepszego zdrowia. Dzięki niej wiadomo na czym się trzeba skupić. Dziękuję raz jeszcze za poświęcony czas."
  },
  {
    name: "Katarzyna Rink",
    rating: 5,
    text: "Wow Olga, mega ciekawa ta analiza. Trzymasz super strukturę jak opowiadasz i wszystko świetnie wyjaśniasz. Super, że przesłałaś to w formie wideo. Bardzo się u mnie zgadza analiza z moją historią zdrowotną. Tak jakbyś o tym wiedziała. Zmotywowałaś mnie do dbania o siebie i do odprowadzenia limfy z głowy! Dzięki wielkie."
  }
];

export const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);
  const hasMore = testimonials.length > 6;

  return (
    <Section id="opinie" bg="white">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-curandera-dark">Opinie klientów</h2>
        <div className="w-16 h-px bg-curandera-dark/20 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleTestimonials.map((t, idx) => (
          <div key={idx} className="bg-curandera-bg p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="flex space-x-1 text-curandera-accent mb-4">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="font-serif italic text-lg text-curandera-dark mb-6 flex-grow">"{t.text}"</p>
            <div className="font-sans text-sm font-semibold uppercase tracking-wider text-stone-500 mt-auto">
              — {t.name}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center text-curandera-dark hover:text-curandera-accent transition-colors font-medium uppercase tracking-widest text-sm"
          >
            {showAll ? 'Pokaż mniej' : 'Zobacz więcej opinii'}
            {showAll ? <ChevronUp size={16} className="ml-2"/> : <ChevronDown size={16} className="ml-2"/>}
          </button>
        </div>
      )}
    </Section>
  );
};