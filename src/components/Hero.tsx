import React from 'react';
import { siteConfig } from '../data/config';
import { ArchitectureVisual } from './ArchitectureVisual';
import { GithubIcon } from './GithubIcon';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Columna Izquierda: Presentación y Acciones */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag de estado de infraestructura */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Homelab Privado</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-sans font-medium">Ubuntu & Cloudflare</span>
            </div>

            {/* Nombre e Identidad */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Guacamole<span className="text-emerald-400">GH</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 font-medium mt-2">
                {siteConfig.heroSubtitle}
              </p>
            </div>

            {/* Descripción breve y cuidada */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Punto de entrada unificado a mi infraestructura personal: aplicaciones contenerizadas, herramientas de gestión, telemetría y proyectos de código abierto.
            </p>

            {/* Botones de acción principales */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explorar servicios</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>Perfil de GitHub</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Elemento visual de arquitectura */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
