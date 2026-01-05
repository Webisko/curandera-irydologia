import React from 'react';
import { Section } from './Section';
import { Mail, Camera, FileText, Gift } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Gift size={32} />,
      title: "1. Zakup pakietu",
      desc: "Wybierz interesujący Cię pakiet i dokonaj płatności."
    },
    {
      icon: <Mail size={32} />,
      title: "2. Instrukcja",
      desc: "Otrzymasz maila z PDF zawierającym instrukcję wykonania poprawnych zdjęć tęczówki."
    },
    {
      icon: <Camera size={32} />,
      title: "3. Wysyłka zdjęć",
      desc: "Wyślij zdjęcia oraz opis dolegliwości na kontakt@curandera.pl."
    },
    {
      icon: <FileText size={32} />,
      title: "4. Analiza",
      desc: "Otrzymasz gotową analizę w ciągu 5–10 dni roboczych."
    }
  ];

  return (
    <Section id="proces" className="bg-curandera-dark text-white">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Jak wygląda proces?</h2>
        <p className="opacity-80 font-sans font-light">Prosta droga do poznania swojego organizmu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-white/20 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-curandera-accent flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="font-serif text-xl mb-3">{step.title}</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-[200px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};