import React from 'react';
import { Section } from './Section';

export const Problem: React.FC = () => {
  const problems = [
    "Zmagasz się z dolegliwościami zdrowotnymi i nie umiesz dojść do przyczyny?",
    "Twoje badania są \"w normie\", ale mimo to nadal czujesz, że coś jest nie tak?",
    "Chcesz zrozumieć jak działa Twoje ciało?",
    "Potrzebujesz szybkiej diagnozy bez ingerencji w tkanki ciała?"
  ];

  return (
    <Section id="problem" bg="default">
      <div className="max-w-5xl mx-auto">
        {/* Intro Questions */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-h-l text-curandera-primary mb-10">Kiedy irydologia online może Ci pomóc?</h2>
          <p className="text-body-l text-curandera-body mb-8 max-w-3xl mx-auto">
            Analiza irydologiczna pomaga zrozumieć predyspozycje organizmu, zanim pojawią się poważne sygnały.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 text-left">
            {problems.map((prob, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white p-4 rounded-none shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-curandera-accent text-h-l ml-6 mr-5 font-serif flex-shrink-0">?</span>
                <p className="font-sans text-body-l text-curandera-dark/80 leading-snug">{prob}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};