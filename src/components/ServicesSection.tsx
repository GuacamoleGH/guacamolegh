import React from 'react';
import { siteConfig } from '../data/config';
import { ServiceCard } from './ServiceCard';
import { Server, Layers } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              <Layers className="w-4 h-4" />
              <span>Self-Hosted Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Servicios & Aplicaciones
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Acceso directo a las plataformas, dashboards y servicios contenerizados en el servidor.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-lg w-fit">
            <Server className="w-3.5 h-3.5 text-emerald-400" />
            <span>{siteConfig.services.length} servicios disponibles</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
