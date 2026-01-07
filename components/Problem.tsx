import React from 'react';
import { Section } from './Section';
import { Check, X } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    "Zmagasz się z dolegliwościami zdrowotnymi i nie umiesz dojść do przyczyny?",
    "Twoje badania są \"w normie\", ale mimo to nadal czujesz, że coś jest nie tak?",
    "Chcesz zrozumieć jak działa Twoje ciało?",
    "Potrzebujesz szybkiej diagnozy bez ingerencji w tkanki ciała?"
  ];

  const forYou = [
    "chcesz zrozumieć przyczyny swoich dolegliwości, nie tylko objawy",
    "interesuje Cię profilaktyka i holistyczne podejście do zdrowia",
    "jesteś na etapie szukania kierunku w drodze do zdrowia",
    "chcesz zrozumieć, jak działa Twoje ciało i do jakich schorzeń ma predyspozycje"
  ];

  const notForYou = [
    "szukasz jednoznacznej diagnozy medycznej",
    "oczekujesz \"gotowego rozwiązania\" dla swoich problemów zdrowotnych",
    "nie jesteś gotowa/-y na zmianę diety, stylu życia, nawyków"
  ];

  return (
    <Section id="problem" bg="white">
      <div className="max-w-5xl mx-auto">
        
        {/* Intro Questions */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-curandera-dark mb-6">Kiedy irydologia online może Ci pomóc?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {problems.map((prob, idx) => (
              <div key={idx} className="flex items-start bg-curandera-bg p-4 rounded-none">
                <span className="text-curandera-accent text-lg mr-3 font-serif italic">?</span>
                <p className="font-sans text-sm text-curandera-dark/80 leading-snug">{prob}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base font-serif italic text-curandera-dark">
            Analiza irydologiczna pomaga zrozumieć predyspozycje organizmu, zanim pojawią się poważne sygnały.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          
          {/* For You */}
          <div className="bg-[#F6F8F5] p-8 rounded-none border border-curandera-green/20">
            <h3 className="font-serif text-2xl text-curandera-green mb-6 flex items-center">
              <span className="bg-curandera-green text-white rounded-full p-1 mr-3">
                <Check size={16} />
              </span>
              Irydologia online jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-700">
                  <Check size={18} className="text-curandera-green mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-[#FFF5F5] p-8 rounded-none border border-red-100">
            <h3 className="font-serif text-2xl text-red-800/70 mb-6 flex items-center">
              <span className="bg-red-800/70 text-white rounded-full p-1 mr-3">
                <X size={16} />
              </span>
              Irydologia nie jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start text-stone-700">
                  <X size={18} className="text-red-800/50 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Section>
  );
};