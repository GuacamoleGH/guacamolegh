import React from 'react';
import { siteConfig } from '../data/config';
import { Activity, ExternalLink } from 'lucide-react';

export const StatusSection: React.FC = () => {
  const { uptimeKuma } = siteConfig;

  if (!uptimeKuma.enabled) return null;

  return (
    <section id="status" className="py-6 md:py-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Info de monitorización */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-white">
                  Estado de los servicios
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Monitorizado
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">
                Supervisión de salud y disponibilidad gestionada con Uptime Kuma.
              </p>
            </div>
          </div>

          {/* Enlace directo a Uptime Kuma */}
          <a
            href={uptimeKuma.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700/80 hover:text-white border border-slate-700 transition-colors shrink-0"
          >
            <span>Abrir Uptime Kuma</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
