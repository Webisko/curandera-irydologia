import React from 'react';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <Section id="omnie">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Images Column */}
        <div className="relative order-2 md:order-1">
          <div className="relative z-10 rounded-t-[100px] rounded-b-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
            <img 
              src="https://picsum.photos/id/64/600/800" 
              alt="Olga Michalik Portrait" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-4 z-20 w-32 md:w-48 bg-white p-2 rounded-lg shadow-lg rotate-3">
             <div className="bg-curandera-bg h-24 md:h-32 flex items-center justify-center text-center p-2">
                <span className="font-serif text-xs md:text-sm italic text-curandera-dark">Certyfikowany <br/> Irydolog</span>
             </div>
          </div>
          <div className="absolute top-10 left-4 w-20 h-20 bg-curandera-accent/10 rounded-full -z-0 blur-xl"></div>
        </div>

        {/* Text Column */}
        <div className="space-y-6 md:pl-8 order-1 md:order-2">
          <span className="text-curandera-accent uppercase tracking-widest text-sm font-medium">O mnie</span>
          <h2 className="font-serif text-4xl md:text-5xl text-curandera-dark">Olga Michalik</h2>
          <h3 className="text-xl font-light italic text-stone-500">Certyfikowany irydolog, zielarz-fitoterapeuta i twórczynią marki Curandera.</h3>
          
          <div className="space-y-4 text-stone-700 font-sans leading-relaxed text-lg">
            <p>
              W przeszłości pracowałam również z ciałem jako trener personalny, dzięki czemu posiadam szeroką wiedzę na temat pracy ze zdrowiem człowieka – od kwestii związanych z odżywianiem i treningiem, poprzez dobór naturalnej suplementacji.
            </p>
            <p>
              W irydologii najbardziej pociąga mnie jedno: ciało nieustannie komunikuje się z nami, a my możemy nauczyć się je „czytać” i tym samym znacząco poprawić jakość swojego życia. Podczas analizy irydologicznej patrzę szerzej na człowieka – na konstytucję ciała, obciążenia, tempo regeneracji, poziom skumulowanych toksyn i to, jak organizm radzi sobie tu i teraz.
            </p>
            <p>
              Łączę irydologię z ziołolecznictwem i pracą z grzybami witalnymi, ale zawsze dobieram wsparcie indywidualnie. Nie jestem zwolenniczką szybkich rozwiązań i maskowania objawów. Interesuje mnie to, jak działa organizm i gdzie leży przyczyna dolegliwości.
            </p>
            <p className="font-medium">
              Jeśli szukasz spokojnego, uważnego podejścia do zdrowia – jesteś w dobrym miejscu.
            </p>
          </div>
          
          <div className="pt-6 border-t border-stone-200 mt-6">
             <p className="text-sm">
               Na co dzień dzielę się swoją wiedzą na Instagramie <a href="https://instagram.com/olgamichalik_" className="text-curandera-accent hover:underline font-medium">@olgamichalik_</a>.
             </p>
          </div>
        </div>
      </div>
    </Section>
  );
};