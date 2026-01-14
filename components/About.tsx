import React, { useState } from 'react';
import { Section } from './Section';
import { asset } from '../utils/asset';
import { CertificatesLightbox } from './CertificatesLightbox';

export const About: React.FC = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <div id="omnie" className="bg-curandera-alt grid lg:grid-cols-2 gap-0 items-stretch">
      {/* Images Column - stretches to fill sekcja */}
      <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
        <img 
          src={asset('images/Olga.webp')} 
          alt="Olga Michalik Portrait" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Column - restored vertical padding */}
      <div className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="bg-curandera-bg p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <span className="text-curandera-accent uppercase tracking-widest text-h-m font-medium lowercase">o mnie</span>
            <h2 className="font-serif text-h-l text-curandera-primary mt-0" style={{marginTop: 0}}>Olga Michalik</h2>
            <h3 className="text-body-l font-light italic text-curandera-dark border-l-4 border-curandera-accent pl-4">
              Certyfikowany irydolog, fitoterapeuta, właścicielka marki Curandera —{' '}
              <button
                onClick={() => setShowCertificates(true)}
                className="text-curandera-secondary hover:text-curandera-accent transition-colors font-normal italic"
              >
                sprawdź moje kwalifikacje
              </button>
            </h3>

            <div className="space-y-4 text-curandera-body font-sans leading-relaxed text-body-l">
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

      <CertificatesLightbox isOpen={showCertificates} onClose={() => setShowCertificates(false)} />
    </div>
  );
};


