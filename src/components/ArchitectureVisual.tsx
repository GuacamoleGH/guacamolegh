import React from 'react';
import { Globe, ShieldCheck, Server, LayoutGrid, Compass, Car, Gamepad2 } from 'lucide-react';

export const ArchitectureVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Sutil resplandor ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-2xl rounded-3xl -z-10"
      />

      <div className="rounded-3xl bg-[#0c1018]/90 border border-slate-800/80 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
        {/* Etiqueta del diagrama */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-medium text-slate-300">
              Topología del Servidor
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/90">
            guacamolegh.es
          </span>
        </div>

        {/* Ilustración de infraestructura con líneas de conexión */}
        <div className="flex flex-col items-center">
          {/* Nodo 1: Internet */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 shadow-sm">
            <Globe className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-semibold">Internet (HTTPS)</span>
          </div>

          {/* Línea conectora 1 */}
          <div className="w-px h-6 bg-gradient-to-b from-teal-400/60 to-emerald-400/60" />

          {/* Nodo 2: Cloudflare Tunnel */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-300 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold">Cloudflare Tunnel</span>
          </div>

          {/* Línea conectora 2 */}
          <div className="w-px h-6 bg-gradient-to-b from-emerald-400/60 to-teal-400/60" />

          {/* Nodo 3: Servidor Ubuntu (Host Docker) */}
          <div className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-slate-200">
            <Server className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-semibold">Ubuntu Server • Docker Host</span>
          </div>

          {/* Conexión ramificada SVG hacia los 4 servicios */}
          <svg
            className="w-full h-8 text-slate-700"
            viewBox="0 0 300 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Línea central */}
            <path d="M150 0V16" stroke="currentColor" strokeWidth="1.5" />
            {/* Ramal horizontal */}
            <path d="M38 16H262" stroke="currentColor" strokeWidth="1.5" />
            {/* Bajada a cada uno de los 4 servicios */}
            <path d="M38 16V32" stroke="currentColor" strokeWidth="1.5" />
            <path d="M112 16V32" stroke="currentColor" strokeWidth="1.5" />
            <path d="M188 16V32" stroke="currentColor" strokeWidth="1.5" />
            <path d="M262 16V32" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Nodos de servicios Docker */}
          <div className="w-full grid grid-cols-4 gap-1.5 pt-1">
            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-emerald-500/25 text-center">
              <LayoutGrid className="w-3.5 h-3.5 text-emerald-400 mb-1" />
              <span className="text-[11px] font-bold text-white">Hub</span>
              <span className="text-[9px] font-mono text-slate-400">Portal</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <Compass className="w-3.5 h-3.5 text-teal-400 mb-1" />
              <span className="text-[11px] font-bold text-white">Atlas</span>
              <span className="text-[9px] font-mono text-slate-400">Gestión</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <Car className="w-3.5 h-3.5 text-emerald-400 mb-1" />
              <span className="text-[11px] font-bold text-white">Coche</span>
              <span className="text-[9px] font-mono text-slate-400">Vehículo</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <Gamepad2 className="w-3.5 h-3.5 text-teal-400 mb-1" />
              <span className="text-[11px] font-bold text-white">Games</span>
              <span className="text-[9px] font-mono text-slate-400">Arcade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
