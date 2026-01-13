import React from 'react';
import { Section } from './Section';
import { asset } from '../utils/asset';

export const About: React.FC = () => {
  return (
    <div id="omnie" className="bg-curandera-bg min-h-screen grid md:grid-cols-2 gap-0">
      {/* Images Column - Full width on left, no padding */}
      <div className="relative h-48 md:h-screen overflow-hidden">
        <img 
          src={asset('images/Olga.webp')} 
          alt="Olga Michalik Portrait" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Column */}
      <div className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 md:px-16 flex flex-col justify-center min-h-screen">
        <div className="space-y-6">
          <span className="text-curandera-accent uppercase tracking-widest text-body-m font-medium">O mnie</span>
          <h2 className="font-serif text-h-l text-curandera-primary">Olga Michalik</h2>
          <h3 className="text-body-l font-light italic text-curandera-dark border-l-4 border-curandera-accent pl-4">Certyfikowany irydolog, fitoterapeuta, właścicielka marki Curandera.</h3>
          
          <div className="space-y-4 text-stone-700 font-sans leading-relaxed text-body-l">
            <p>
              Moja droga do zdrowia zawsze wiodła przez naturę. Wierzę, że organizm ma niezwykłą zdolność do samoregulacji, jeśli tylko damy mu odpowiednie narzędzia.
            </p>
            <p>
              Jako irydolog łączę wiedzę o fizjologii z wnikliwą obserwacją. Tęczówka oka jest dla mnie fascynującą mapą, która opowiada historię Twojego zdrowia – nie tylko fizycznego, ale i emocjonalnego.
            </p>
            <p>
              W swojej pracy stawiam na holistyczne podejście, empatię i rzetelną wiedzę. Nie oceniam, lecz pomagam zrozumieć sygnały płynące z ciała, byś mógł/mogła podjąć świadome decyzje służące Twojemu zdrowiu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};