import React from 'react';
import { siteConfig } from '../data/config';
import { DynamicIcon } from './DynamicIcon';
import { ArrowUpRight, Lock, ExternalLink } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Servicios Alojados
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
              Plataformas y herramientas self-hosted en ejecución en el servidor local.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg w-fit">
            <span>{siteConfig.services.length} servicios públicos</span>
          </div>
        </div>

        {/* Lista editorial interactiva de servicios */}
        <div className="space-y-4">
          {siteConfig.services.map((service) => {
            const cleanUrl = service.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
            const isHub = service.id === 'hub';

            return (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col md:flex-row md:items-center justify-between p-5 sm:p-6 rounded-2xl border transition-all duration-200 ${
                  isHub
                    ? 'bg-slate-900/70 hover:bg-slate-900 border-emerald-500/35 hover:border-emerald-500/60 shadow-sm shadow-emerald-950/20'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
                } hover:-translate-y-0.5`}
              >
                {/* Lado izquierdo: Icono y Nombre */}
                <div className="flex items-center gap-4 min-w-[260px]">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isHub
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/25'
                        : 'bg-slate-800/80 border-slate-700/70 text-teal-400 group-hover:bg-slate-800 group-hover:border-teal-500/40'
                    }`}
                  >
                    <DynamicIcon name={service.icon} className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {service.name}
                      </span>
                      {isHub && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          Portal Core
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                      {cleanUrl}
                    </span>
                  </div>
                </div>

                {/* Centro: Descripción con tamaño y contraste aumentados */}
                <p className="text-sm sm:text-base text-slate-200 font-normal my-3 md:my-0 md:px-6 max-w-xl leading-relaxed">
                  {service.description}
                </p>

                {/* Lado derecho: Enlace y flecha */}
                <div className="flex items-center justify-end gap-2 text-xs sm:text-sm font-medium text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0">
                  <span>Abrir servicio</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-emerald-500/15 border border-slate-700/60 group-hover:border-emerald-500/30 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Acceso discreto a Uptime Kuma para administración interna */}
        <div className="mt-6 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Monitorización de disponibilidad interna del homelab mediante Uptime Kuma.</span>
          </div>
          <a
            href="https://kuma.guacamolegh.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0 font-medium"
          >
            <span>Acceso a Uptime Kuma</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
