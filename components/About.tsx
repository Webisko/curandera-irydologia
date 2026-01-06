import React from 'react';
import { Section } from './Section';
import { asset } from '../utils/asset';

export const About: React.FC = () => {
  return (
    <Section id="omnie">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Images Column */}
        <div className="relative">
          <div className="relative z-10 rounded-none overflow-hidden shadow-2xl max-w-sm mx-auto">
            <img 
              src={asset('images/Olga.webp')} 
              alt="Olga Michalik Portrait" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-4 z-20 w-32 md:w-48 bg-white p-2 rounded-none shadow-lg rotate-3">
             <div className="bg-curandera-bg h-24 md:h-32 flex items-center justify-center text-center p-2">
                <span className="font-serif text-xs md:text-sm italic text-curandera-dark">Certyfikowany <br/> Irydolog</span>
             </div>
          </div>
          <div className="absolute top-10 left-4 w-20 h-20 bg-curandera-accent/10 rounded-none -z-0 blur-xl"></div>
        </div>

        {/* Text Column */}
        <div className="space-y-6 md:pl-8">
          <span className="text-curandera-accent uppercase tracking-widest text-sm font-medium">O mnie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-curandera-dark">Olga Michalik</h2>
          <h3 className="text-xl font-light italic text-stone-500">Certyfikowany irydolog, fitoterapeuta, właścicielka marki Curandera.</h3>
          
          <div className="space-y-4 text-stone-700 font-sans leading-relaxed text-lg">
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
          
          <div className="pt-6">
            <img 
               src="https://picsum.photos/id/360/200/100" 
               alt="Signature or decorative leaf" 
               className="h-16 opacity-60 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};