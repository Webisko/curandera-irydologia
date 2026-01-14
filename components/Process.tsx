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
      desc: "Po dokonaniu zakupu otrzymasz maila z instrukcją wykonania zdjęcia tęczówki oka."
    },
    {
      icon: <Camera size={32} />,
      title: "3. Wysyłka zdjęć",
      desc: "Wyślij zdjęcia na adres e-mail kontakt@curandera.pl, podpisz się imieniem i nazwiskiem. W pakiecie II napisz 2-3 zdania o dolegliwościach i listę leków."
    },
    {
      icon: <FileText size={32} />,
      title: "4. Analiza",
      desc: "Otrzymasz gotową analizę mailowo w ciągu 5–10 dni roboczych."
    }
  ];

  return (
    <Section id="proces" bg="default" className="text-curandera-body">
      <div className="text-center mb-8">
        <h2 className="font-serif text-h-l text-curandera-primary mb-10">Jak wygląda proces?</h2>
        {/* Usunięto zbędny podtytuł */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-curandera-secondary/20 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-curandera-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              {/* Force icon color to white */}
              <span className="text-white">{React.cloneElement(step.icon, { color: 'white' })}</span>
            </div>
            <h3 className="font-serif text-h-m mb-2 text-curandera-secondary">{step.title}</h3>
            <p className="text-body-m leading-relaxed max-w-[220px] mx-auto text-curandera-body">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};