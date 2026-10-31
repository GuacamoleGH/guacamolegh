import React from 'react';
import { siteConfig } from '../data/config';
import { DynamicIcon } from './DynamicIcon';
import { ArrowUpRight, Activity, ExternalLink } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Servicios Alojados
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Plataformas y herramientas self-hosted en ejecución en el servidor local.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg w-fit">
            <span>4 servicios activos</span>
          </div>
        </div>

        {/* Lista editorial interactiva de servicios */}
        <div className="space-y-3">
          {siteConfig.services.map((service) => {
            const cleanUrl = service.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
            const isHub = service.id === 'hub';

            return (
              <a
                key={service.id}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${
                  isHub
                    ? 'bg-slate-900/80 hover:bg-slate-900 border-emerald-500/30 hover:border-emerald-500/50 shadow-sm shadow-emerald-950/20'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
                } hover:-translate-y-0.5`}
              >
                {/* Lado izquierdo: Icono y Nombre */}
                <div className="flex items-center gap-4 min-w-[240px]">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isHub
                        ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500/20'
                        : 'bg-slate-800/70 border-slate-700/60 text-teal-400 group-hover:bg-slate-800 group-hover:border-teal-500/40'
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
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Portal Core
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                      {cleanUrl}
                    </span>
                  </div>
                </div>

                {/* Centro: Descripción clara */}
                <p className="text-sm text-slate-300 my-3 sm:my-0 sm:px-6 max-w-md sm:max-w-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Lado derecho: Enlace y flecha */}
                <div className="flex items-center justify-end gap-2 text-xs font-medium text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0">
                  <span>Abrir</span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/60 group-hover:bg-emerald-500/10 border border-slate-700/50 group-hover:border-emerald-500/30 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Sección de Estado integrada discretamente */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#0c101a] border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Activity className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Monitorización en tiempo real
              </div>
              <div className="text-xs text-slate-400">
                Disponibilidad y tiempos de respuesta auditados con Uptime Kuma.
              </div>
            </div>
          </div>

          <a
            href={siteConfig.uptimeKuma.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0"
          >
            <span>Ver panel en Kuma</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
