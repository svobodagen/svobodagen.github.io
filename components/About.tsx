import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-industrial-900 sm:text-4xl uppercase tracking-wide mb-6">
              O společnosti
            </h2>
            <div className="w-20 h-1 bg-industrial-accent mb-8"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Firma <strong>{COMPANY_NAME}</strong> se specializuje na komplexní zprostředkování obchodu a služeb v průmyslovém sektoru. 
              Naším cílem je zvyšování efektivity vašich procesů prostřednictvím kvalitní chemie, špičkového vybavení a spolehlivého servisu.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Díky strategickému partnerství se společností XINTEX a široké síti dodavatelů z EU a USA jsme schopni 
              reagovat na specifické požadavky trhu a dodávat řešení na míru.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 bg-industrial-light p-8 border border-gray-200 rounded-sm shadow-sm">
             <h3 className="text-xl font-bold text-industrial-800 mb-6 border-b border-gray-300 pb-4">
                Proč spolupracovat s námi?
             </h3>
             <ul className="space-y-4">
                {[
                    "Osobní přístup a technické poradenství",
                    "Zastoupení špičkových značek (XINTEX)",
                    "Flexibilita v dodávkách a servisu",
                    "Komplexní řešení pro výrobu i údržbu"
                ].map((item, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircle2 className="flex-shrink-0 h-6 w-6 text-industrial-accent mt-0.5" />
                        <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;