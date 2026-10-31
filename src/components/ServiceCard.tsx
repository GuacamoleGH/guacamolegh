import React from 'react';
import type { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Limpiar protocolo para mostrar enlace limpio (ej. hub.guacamolegh.es)
  const cleanUrl = service.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md hover:shadow-emerald-950/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <div>
        {/* Cabecera de la tarjeta: Icono y flecha de apertura */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 transition-colors">
            <DynamicIcon name={service.icon} className="w-6 h-6" />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:bg-slate-800/60 transition-colors">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Título y descripción */}
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Enlace directo limpio */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-300 font-mono transition-colors">
        <span>{cleanUrl}</span>
        <span className="text-emerald-400/80 group-hover:text-emerald-400 font-sans font-medium">
          Abrir servicio &rarr;
        </span>
      </div>
    </a>
  );
};
