import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-industrial-800 text-white relative scroll-mt-28">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white sm:text-4xl">
            Činnosti firmy
          </h2>
          <div className="w-24 h-1 bg-industrial-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-industrial-900 border border-industrial-700 p-8 hover:border-industrial-accent transition-colors duration-300 group">
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-industrial-800 rounded-sm group-hover:bg-industrial-accent transition-colors duration-300">
                        <Icon size={32} className="text-white" />
                    </div>
                    <span className="text-industrial-700 text-6xl font-black opacity-20 select-none group-hover:opacity-10 transition-opacity">
                        0{SERVICES.indexOf(service) + 1}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-industrial-accent mb-2 uppercase tracking-wide">
                  {service.title}
                </h3>
                <h4 className="text-lg font-semibold text-white mb-4">
                    {service.subtitle}
                </h4>
                
                <p className="text-gray-400 mb-6 leading-relaxed border-t border-industrial-800 pt-4">
                  {service.description}
                </p>

                {service.regions && (
                  <div className="mt-4 bg-industrial-800/50 p-4 rounded-sm border-l-2 border-industrial-accent">
                    <div className="flex items-center text-sm text-gray-300 mb-2">
                        <MapPin size={16} className="mr-2 text-industrial-accent" />
                        <span className="font-semibold uppercase text-xs tracking-wider">Působnost:</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        {service.regions.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;