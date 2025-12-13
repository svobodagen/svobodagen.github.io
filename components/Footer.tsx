import React from 'react';
import { COMPANY_NAME, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-industrial-900 text-white border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-xl font-bold tracking-wider uppercase">{COMPANY_NAME}</h2>
                <p className="text-gray-500 text-sm mt-1">Zprostředkování obchodu a služeb</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm text-gray-400">
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-industrial-accent transition-colors cursor-pointer">O nás</a>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-industrial-accent transition-colors cursor-pointer">Služby</a>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-industrial-accent transition-colors cursor-pointer">Kontakt</a>
                <a href={`https://${CONTACT_INFO.web}`} target="_blank" rel="noreferrer" className="hover:text-industrial-accent transition-colors">
                    {CONTACT_INFO.web}
                </a>
            </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-industrial-800 text-center text-xs text-gray-600">
            <p>&copy; {currentYear} {COMPANY_NAME}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;