import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_NAME, TAGLINE } from '../constants';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-industrial-900 h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Industrial Background */}
      <div className="absolute inset-0 opacity-20">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="#334155" />
            <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" />
         </svg>
         <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-industrial-900"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-industrial-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
          Professional Services & Trade
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
          {COMPANY_NAME}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light border-l-4 border-industrial-accent pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          {TAGLINE}
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
            <a 
                href="#services" 
                onClick={(e) => handleScrollTo(e, 'services')}
                className="px-8 py-3 border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold cursor-pointer"
            >
                Naše služby
            </a>
            <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="px-8 py-3 bg-industrial-accent text-white hover:bg-orange-700 transition-colors duration-300 uppercase tracking-widest text-sm font-semibold flex items-center gap-2 group cursor-pointer"
            >
                Kontaktovat
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;