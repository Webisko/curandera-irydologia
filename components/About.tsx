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
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Text Column - restored vertical padding */}
      <div className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="bg-curandera-bg p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <span className="text-curandera-accent lowercase tracking-widest text-h-m font-medium">o mnie</span>
            <h2 className="font-serif text-h-l text-curandera-primary mt-0" style={{marginTop: 0}}>Olga Michalik</h2>
            <h3 className="text-body-l font-light italic text-curandera-dark border-l-4 border-curandera-accent pl-4">
              Certyfikowany irydolog, fitoterapeuta, właścicielka marki Curandera —{' '}
              <button
                onClick={() => setShowCertificates(true)}
                className="text-curandera-secondary hover:text-curandera-accent transition-colors font-normal button-qualifications"
              >
                sprawdź moje kwalifikacje
              </button>
            </h3>

            <div className="space-y-4 text-curandera-body font-sans leading-relaxed text-body-l">
              <p>
                Nazywam się Olga Michalik. Jestem certyfikowanym irydologiem, zielarzem-fitoterapeutą i twórczynią marki Curandera. W przeszłości pracowałam również z ciałem jako trener personalny, dzięki czemu posiadam szeroką wiedzę na temat pracy ze zdrowiem człowieka – od kwestii związanych z odżywianiem i treningiem, poprzez dobór naturalnej suplementacji.
              </p>
              <p>
                W irydologii najbardziej fascynuje mnie, to że ciało nieustannie komunikuje się z nami, a my możemy nauczyć się je „czytać” i tym samym znacząco poprawić jakość swojego życia. Podczas analizy irydologicznej online patrzę szerzej na człowieka – na konstytucję ciała, obciążenia, tempo regeneracji, poziom skumulowanych toksyn.
              </p>
              <p>
                Łączę irydologię z ziołolecznictwem i pracą z grzybami witalnymi, ale zawsze dobieram wsparcie indywidualnie. Nie jestem zwolenniczką szybkich rozwiązań i maskowania objawów. Interesuje mnie to, jak działa organizm i gdzie leży przyczyna dolegliwości.
              </p>
              <p>
                Jeśli szukasz spokojnego, uważnego podejścia do zdrowia – jesteś w dobrym miejscu.<br />Na co dzień dzielę się swoją wiedzą na Instagramie <a href="https://instagram.com/olgamichalik_" target="_blank" rel="noopener" className="text-curandera-secondary hover:text-curandera-accent transition-colors font-normal">@olgamichalik_</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CertificatesLightbox isOpen={showCertificates} onClose={() => setShowCertificates(false)} />
    </div>
  );
};


