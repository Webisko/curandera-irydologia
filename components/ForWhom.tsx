import React from 'react';
import { Section } from './Section';
import { Check, X } from 'lucide-react';

export const ForWhom: React.FC = () => {
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
    <Section id="forwhom" bg="alt">
      <div className="max-w-5xl mx-auto">
        {/* Comparison Section Header */}
        <h2 className="font-serif text-h-l text-curandera-primary text-center mb-10">
          Czy irydologia online jest dla mnie?
        </h2>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">

          <div className="bg-white p-8 rounded-none border-t-4 border-curandera-accent shadow-md">
            <h3 className="font-serif text-h-m text-curandera-secondary mb-6 flex items-center">
              <span className="bg-curandera-accent text-white rounded-full p-2 mr-3">
                <Check size={16} />
              </span>
              Irydologia online jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-4 pl-[7px]">
              {forYou.map((item, idx) => (
                <li key={idx} className="flex items-start text-curandera-body">
                  <Check size={18} className="text-curandera-accent mr-3 mt-2 flex-shrink-0" />
                  <span className="ml-[7px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-white p-8 rounded-none border-t-4 border-curandera-dark shadow-md">
            <h3 className="font-serif text-h-m text-curandera-secondary mb-6 flex items-center">
              <span className="bg-curandera-body text-white rounded-full p-2 mr-3">
                <X size={16} />
              </span>
              Irydologia nie jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-4 pl-[7px]">
              {notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start text-curandera-body">
                  <X size={18} className="text-curandera-body mr-3 mt-2 flex-shrink-0" />
                  <span className="ml-[7px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </Section>
  );
};
