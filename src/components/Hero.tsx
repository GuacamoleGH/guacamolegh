import React from 'react';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-14 pb-12 md:pt-20 md:pb-16 text-center">
      {/* Luz ambiente suave de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-emerald-500/10 blur-[100px] rounded-full -z-10"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Indicador sutil de homelab activo */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/25 text-xs text-emerald-400 font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Homelab activo</span>
        </div>

        {/* Título */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3">
          {siteConfig.heroTitle}
        </h1>

        {/* Subtítulo / Descripción */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal mb-3">
          {siteConfig.heroSubtitle}
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
          {siteConfig.heroDescription}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-emerald-950"
          >
            <span>Ver servicios</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>Ver en GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
