import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Katarzyna Podmokła",
    rating: 5,
    text: `Bardzo polecam analizę irydologiczną u Olgi. Nie spodziewałam się aż tak dokładnego opisu mojego stanu zdrowia, który się kompletnie pokrywa ze stanem faktycznym, choć pewne rewelacje muszę sprawdzić, bo o nich po prostu nie wiedziałam, co jest cudowne, bo zostałam nakierowana na aspekty dosyć istotne, na co nawet nie zwróciłam uwagi. Dzięki temu mogę zawczasu zadbać o profilaktykę, i mam nadzieję uniknąć chorób przewlekłych w przyszłości. Także nic tylko dziękować 🥰❤️ Poza tym analiza opisana w prosty i czytelny sposób, poza krótszą formą pisemną obszerne wytłumaczenie w formie wideo, prosto, fajnie i przejrzyście 🥲`
  },
  {
    name: "Zuzanna Bergander",
    rating: 5,
    text: `Z analizy jestem bardzo zadowolona i z treści, i z formy. Bardzo dużo rzeczy się pokrywa z moim stanem realnym. Są też rzeczy, o których nie wiedziałam, a dzięki analizie mogę teraz na nie zwrócić uwagę 🙏🏻 Szczerze nie spodziewałam się, że tak wiele można „wyczytać" z naszych oczu. Myślę, że taka analiza to bardzo przydatne narzędzie dla ludzi, którzy chcą świadomie dążyć do lepszego zdrowia. Dzięki niej wiadomo, na czym się trzeba skupić. Dziękuję raz jeszcze za poświęcony czas 🙏🏻.`
  },
  {
    name: "Katarzyna Rink",
    rating: 5,
    text: `Wow Olga, mega ciekawa ta analiza. Trzymasz super strukturę, jak opowiadasz i wszystko świetnie wyjaśniasz ❤️  Super, że przesłałaś to w formie wideo. Bardzo się u mnie zgadza analiza z moją historią zdrowotną. Tak jakbyś o tym wiedziała. Zmotywowałaś mnie do dbania o siebie i do odprowadzenia limfy z głowy! Dzięki wielkie ❤️`
  },
  {
    name: "Ewelina Szwejda",
    rating: 5,
    text: `Badanie irydologiczne zaproponowane przez Olgę było dla mnie czymś zupełnie nowym. Nigdy wcześniej nie przyszło mi do głowy, że poprzez oczy można zobaczyć, jak funkcjonuje cały organizm. Już samo to było dla mnie bardzo ciekawe i otwierające. Podczas badania zrobiłyśmy zdjęcie oka, a następnie wspólnie je obserwowałyśmy. Olga niezwykle dokładnie i jasno wszystko mi wytłumaczyła – każdą zmianę, każdy znak w oku, pokazując, z czym w organizmie jest on powiązany. Jej sposób tłumaczenia był bardzo zrozumiały, spokojny i pełen uważności. To doświadczenie zainspirowało mnie do głębszego wglądu w swoje ciało oraz do większej troski o jego oczyszczanie i regenerację. Samo badanie ma prostą formę – wykonanie zdjęcia – jednak to, co dzieje się później, jest bardzo wartościowe. Olga przygotowała dla mnie szczegółowy opis, a także poleciła zioła, które mogę pić, aby wspierać oczyszczanie organizmu. Dodatkowo książka, którą pożyczyła mi do przeczytania, pokazała mi, jak mogę dalej o siebie dbać po takim badaniu i jak świadomie kontynuować ten proces. Z pełnym przekonaniem mogę powiedzieć, że było to dla mnie cenne doświadczenie, które dało mi nowe spojrzenie na moje ciało i zdrowie. Dziękuję ❤️🍀`
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});

  const toggleExpanded = (index: number) => {
    setExpandedStates(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        goNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Section id="opinie" bg="alt">
      <div className="text-center mb-8">
        <h2 className="font-serif text-h-l text-curandera-primary lowercase">Opinie klientów</h2>
      </div>

      <div className="max-w-5xl mx-auto px-0 sm:px-4 md:px-0">
        <div 
          className="relative flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow - Absolute positioning on mobile */}
          <button
            onClick={goPrev}
            className="absolute left-0 sm:relative sm:left-0 flex-shrink-0 p-1.5 sm:p-2 border border-curandera-primary text-curandera-primary hover:bg-curandera-primary hover:text-white transition-colors rounded-full z-20 bg-transparent"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Carousel Container with overflow hidden */}
          <div className="flex-1 overflow-hidden rounded-none px-0 sm:px-4 md:px-0 mx-0 sm:mx-4 md:mx-0">
            <div
              className="flex items-center transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={t.name} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-curandera-bg p-6 sm:p-8 rounded-none shadow-sm">
                    <div className="flex space-x-1 text-curandera-accent mb-4">
                      {Array.from({ length: t.rating }, (_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <div className="relative">
                      {(() => {
                        const isExpanded = !!expandedStates[index];
                        const clampClasses = !isExpanded ? 'max-h-[14rem] md:max-h-[18rem] overflow-hidden' : '';

                        return (
                          <>
                            <div className={`relative ${clampClasses}`}>
                              <p className="font-sans text-body-l text-curandera-body mb-4 leading-relaxed">
                                &ldquo;{t.text}&rdquo;
                              </p>
                              {!isExpanded && (
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-curandera-bg via-curandera-bg/70 to-transparent" />
                              )}
                            </div>
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="text-curandera-primary text-body-m font-semibold hover:text-curandera-accent transition-colors mb-4"
                            >
                              {isExpanded ? 'Zwiń' : 'Czytaj więcej'}
                            </button>
                          </>
                        );
                      })()}
                    </div>
                    <div className="font-sans font-semibold uppercase tracking-wider text-curandera-secondary text-body-m text-right">
                      — {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Absolute positioning on mobile */}
          <button
            onClick={goNext}
            className="absolute right-0 sm:relative sm:right-0 flex-shrink-0 p-1.5 sm:p-2 border border-curandera-primary text-curandera-primary hover:bg-curandera-primary hover:text-white transition-colors rounded-full z-20 bg-transparent"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Section>
  );
};