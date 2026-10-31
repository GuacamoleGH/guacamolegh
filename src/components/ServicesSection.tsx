import React from 'react';
import { siteConfig } from '../data/config';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-8 md:py-12 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Servicios
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Aplicaciones y herramientas alojadas en el servidor.
          </p>
        </div>

        {/* Grid de servicios (2 columnas en escritorio, 1 en móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
