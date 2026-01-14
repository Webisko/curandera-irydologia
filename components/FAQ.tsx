import React, { useState } from 'react';
import { Section } from './Section';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Czym jest irydologia?",
    answer: (
      <div className="space-y-4">
        <p>Irydologia, zwana też irydodiagnostyką, jest to dziedzina medycyny alternatywnej (niekonwencjonalnej), zajmująca się analizą tęczówki oka. Na podstawie takiej analizy, irydolog jest w stanie odkryć problemy zdrowotne pacjenta i ocenić całościowy stan jego zdrowia. Można więc powiedzieć, że irydologia jest niekonwencjonalną metodą diagnostyczną, polegającą na obserwacji <strong>tęczówki oka</strong>, w której zapisane są informacje o:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Konstytucji i typie organizmu</li>
          <li>Obciążeniach narządowych</li>
          <li>Tendencjach do stanów zapalnych, osłabień lub napięć</li>
        </ul>
        <p>Nie jest to metoda diagnostyczna w sensie medycznym, lecz <strong>narzędzie wspierające holistyczne spojrzenie na organizm</strong>. Irydologia pomaga wyznaczyć priorytety w profilaktyce zdrowotnej i określa kierunek działań na ścieżce do pełnego zdrowia. Oczy są mapą ciała – irydolog pomaga ją odczytać.</p>
      </div>
    )
  },
  {
    question: "Do czego służy irydologia? Praktyczne zastosowania irydodiagnostyki",
    answer: (
      <p>
        Irydodiagnostyka czyli analiza tęczówki oka może stanowić <strong>uzupełnienie</strong> standardowej diagnostyki medycznej. Często analiza irydologiczna pokazuje chorobę (słabość narządu/jakaś zmiana/niepokojący znak) na bardzo wczesnych etapach rozwoju (zanim pojawią się objawy), dzięki czemu można zareagować bardzo szybko i wprowadzić odpowiednie działania profilaktyczne, zanim choroba się rozwinie. Niestety diagnostyka medyczna ma pewne wady i zdarza się, że choroby wykrywane są zbyt późno. Współpraca medycyny konwencjonalnej z irydologią pozwoliłaby wypełnić tę lukę i pomóc wykrywać choroby szybciej i całkowicie bezboleśnie. Coraz więcej specjalistów medycyny konwencjonalnej interesuje się irydologią, ze względu na jej wysoki poziom skuteczności. Irydologia może być również wykorzystywana w psychologii (określa m.in. stopień radzenia sobie ze stresem, skłonność do pewnych reakcji układu nerwowego np. skłonność do nerwic czy depresji, a nawet jest w stanie wskazać na pewne cechy osobowości np. temperament).
      </p>
    )
  },
  {
      question: "Jakie są zalety irydologii? Korzyści analizy tęczówki online",
      answer: "Jej dużą zaletą jest możliwość oceny stanu zdrowia pacjenta w sposób szybki i całkowicie bezbolesny (bez ingerencji w tkanki ciała, co ma miejsce w przypadku innych metod diagnostycznych). Wymaga jedynie dobrego oświetlenia tęczówki oka i wykonania zdjęcia, na podstawie którego irydolog przeprowadza analizę. Dodatkowo jest to metoda bardzo bezpieczna, a więc mogą z niej skorzystać zarówno dzieci, kobiety w ciąży, osoby z chorobami przewlekłymi, jak i osoby w wieku podeszłym. Irydologia online nie wymaga również specjalnego przygotowania pacjenta. Bardzo dużą zaletą jest holistyczna ocena stanu zdrowia – pomaga spojrzeć na wszystkie organy i układy ciała jednocześnie. Dzięki tak szerokiemu spojrzeniu, możemy łatwiej zrozumieć swoje ciało i znacznie podnieść jakość swojego życia."
  },
  {
    question: "Jakie ograniczenia ma irydologia?",
    answer: "Irydologia nie daje konkretnej, jednoznacznej diagnozy – nie nazywa chorób. Daje raczej wskazówki, jaki organ jest osłabiony, czy w którym miejscu w ciele toczy się proces chorobowy. Dodatkowo, nie wszystkie procesy chorobowe czy zaburzenia funkcjonalne uwidaczniają się na tęczówce oka."
  },
  {
    question: "Jak działa irydologia i czy jest wiarygodną metodą diagnostyczną?",
    answer: (
      <p>
        Ludzki organizm jest systemem naczyń połączonych – wszystkie narządy ściśle współpracują ze sobą. Tęczówka oka jest połączona ze wszystkimi narządami i systemami ciała poprzez <strong>układ nerwowy i krwionośny</strong>. Dzięki temu uwidaczniają się na niej wszelkie zmiany i zaburzenia w funkcjonowaniu ciała. Kiedy pojawi się jakaś nieprawidłowość w ciele, układ przywspółczulny wysyła na tęczówkę informację o tym. Możemy to obserwować pod postacią różnych znaków irydologicznych: zatok, krypt, zmian barwnikowych, pierścieni, linii, czy nieprawidłowości w kształcie i wielkości różnych struktur np. kryzy czy źrenicy. Znaki pojawiające się na tęczówce pozwalają określić kondycję fizyczną, emocjonalną i psychiczną człowieka, a także jego predyspozycje do schorzeń, co pozwala na wprowadzenie szybkiej profilaktyki, zanim choroba zacznie się rozwijać. Irydodiagnostyka jako metoda daje bardzo wysoką skuteczność, jednak trzeba wiedzieć, że dużo zależy od umiejętności irydologa.
      </p>
    )
  },
  {
    question: "Czego możemy dowiedzieć się o swoim ciele za pomocą analizy tęczówki online?",
    answer: (
      <>
        <p className="mb-3">Irydodiagnostyka (analiza tęczówki oka) pomaga określić m.in.:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Konstytucję i typ ciała</li>
          <li>Stan systemu nerwowego, kondycję psychiczną i poziom stresu</li>
          <li>Kondycję poszczególnych narządów i systemów ciała</li>
          <li>Predyspozycje do schorzeń i obciążenia genetyczne</li>
          <li>Lokalizację obszarów w ciele obciążonych toksynami</li>
          <li>Poziom odporności organizmu</li>
        </ul>
      </>
    )
  },
  {
    question: "Czy dzieci i zwierzęta również mogą otrzymać analizę irydologiczną online?",
    answer: "Nie wykonuję analizy irydologicznej dla zwierząt. Jeśli chodzi o dzieci - jest to możliwe, jednak należy wiedzieć, że tęczówka oka rozwija się do 3 roku życia. Po 3 roku życia, tęczówka oka osiąga już swój finalny kolor i wtedy możliwe jest wykonanie analizy. Jednak z uwagi na trudności w wykonaniu zdjęcia oka dziecku w nieruchomej pozycji, zalecam aby zgłaszać do analizy dzieci starsze."
  },
  {
    question: "Czy są przeciwwskazania do wykonania analizy irydologicznej online?",
    answer: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Wiek poniżej 4 roku życia (słabo wykształcona struktura tęczówki oraz niemożliwość wykonania zdjęcia w nieruchomej pozycji dziecku)</li>
        <li>Choroby oczu, w przebiegu których doszło do uszkodzenia tęczówki (zapalenie tęczówki, jaskra, zaćma)</li>
        <li>Podeszły wiek, ze względu na pewne zniekształcenia tęczówki spowodowane wiekiem (rozmycie) i przyjmowanymi lekami</li>
      </ul>
    )
  },
  {
    question: "Czy irydologia zastępuje wizytę u lekarza i/lub diagnostykę medyczną?",
    answer: "Analiza irydologiczna nie zastępuje diagnostyki medycznej czy wizyty u lekarza, a wyniki uzyskane podczas analizy irydologicznej należy traktować jako wstępne – warto je potwierdzić metodami konwencjonalnymi."
  }
];

export const FAQ: React.FC = () => {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  return (
    <Section id="faq" bg="default">
      <div className="max-w-4xl mx-auto">
        {/* Title styled like the reference: large, serif, accent */}
        <h2 className="font-serif text-curandera-primary text-h-l text-center mb-10 lowercase">Pytania i odpowiedzi</h2>

        {/* Minimal list style: accent-colored questions, plus/minus icons, no separators */}
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className="py-4">
              <button
                className="w-full text-left flex items-center gap-3 group"
                onClick={() => {
                  setOpenSet(prev => {
                    const next = new Set(prev);
                    if (next.has(index)) {
                      next.delete(index);
                    } else {
                      next.add(index);
                    }
                    return next;
                  });
                }}
              >
                <span className="text-curandera-accent">
                  {openSet.has(index) ? <Minus size={30} strokeWidth={1} /> : <Plus size={30} strokeWidth={1} />}
                </span>
                <span className="font-serif text-h-m text-curandera-secondary">
                  {item.question}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openSet.has(index) ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-9 font-sans text-curandera-body font-normal leading-relaxed text-body-l">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
