import React from 'react';
import { Phone, Mail, MapPin, Building2, FileText, CreditCard } from 'lucide-react';
import { CONTACT_INFO, COMPANY_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-industrial-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-industrial-900 sm:text-4xl uppercase tracking-widest">
            Kontakt
          </h2>
          <div className="w-24 h-1 bg-industrial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Contact Info */}
          <div className="bg-white p-8 shadow-sm border-t-4 border-industrial-900">
            <h3 className="text-xl font-bold text-industrial-900 mb-6 flex items-center gap-2">
                <Building2 className="text-industrial-accent" />
                Sídlo & Komunikace
            </h3>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Adresa</h4>
                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-industrial-700 mt-1" />
                        <p className="text-gray-800 font-medium">
                            {CONTACT_INFO.address.street}<br/>
                            {CONTACT_INFO.address.zip} {CONTACT_INFO.address.city}
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Telefony</h4>
                    <div className="space-y-2">
                        {CONTACT_INFO.phones.map((phone, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-industrial-700" />
                                <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-800 hover:text-industrial-accent transition-colors font-medium">
                                    {phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">E-maily</h4>
                    <div className="space-y-2">
                        {CONTACT_INFO.emails.map((email, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-industrial-700" />
                                <a href={`mailto:${email}`} className="text-gray-800 hover:text-industrial-accent transition-colors break-all font-medium">
                                    {email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>

          {/* Billing Info */}
          <div className="bg-white p-8 shadow-sm border-t-4 border-industrial-700">
            <h3 className="text-xl font-bold text-industrial-900 mb-6 flex items-center gap-2">
                <FileText className="text-industrial-accent" />
                Fakturační údaje
            </h3>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Název subjektu</h4>
                    <p className="text-lg font-bold text-industrial-900">{COMPANY_NAME}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">IČ</h4>
                        <p className="text-gray-800 font-mono text-lg">{CONTACT_INFO.legal.ic}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">DIČ</h4>
                        <p className="text-gray-800 font-mono text-lg">{CONTACT_INFO.legal.dic}</p>
                    </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                     <p className="text-sm text-gray-500 italic">
                        Fyzická osoba zapsaná v živnostenském rejstříku.
                     </p>
                </div>
            </div>
          </div>

          {/* Banking Info */}
          <div className="bg-white p-8 shadow-sm border-t-4 border-industrial-accent">
            <h3 className="text-xl font-bold text-industrial-900 mb-6 flex items-center gap-2">
                <CreditCard className="text-industrial-accent" />
                Bankovní spojení
            </h3>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Banka</h4>
                    <p className="text-gray-800 font-medium">{CONTACT_INFO.bank.bankName}</p>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Číslo účtu</h4>
                    <p className="text-2xl text-industrial-900 font-mono font-bold tracking-tight">
                        {CONTACT_INFO.bank.accountNumber}
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">IBAN (Mezinárodní platby)</h4>
                    <p className="text-gray-800 font-mono break-all text-sm sm:text-base font-medium">
                        {CONTACT_INFO.bank.iban}
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;