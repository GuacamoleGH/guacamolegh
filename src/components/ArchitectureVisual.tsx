import React from 'react';
import { Shield, Server, Box, Globe } from 'lucide-react';

export const ArchitectureVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Resplandor ambiental de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent blur-2xl rounded-3xl"
      />

      <div className="relative rounded-2xl bg-[#0e131f]/90 border border-slate-800/90 shadow-2xl p-5 sm:p-6 backdrop-blur-xl">
        {/* Cabecera de la consola de nodo */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-300">
              guacamolegh.es
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/90 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            Cloudflare Tunnel
          </span>
        </div>

        {/* Flujo de red estilizado */}
        <div className="space-y-3 font-mono text-xs">
          {/* Nodo 1: Tráfico entrante */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <div className="text-slate-200 font-medium">Tráfico Público</div>
                <div className="text-[11px] text-slate-500">Peticiones seguras HTTPS</div>
              </div>
            </div>
            <span className="text-[10px] text-slate-400">DNS Edge</span>
          </div>

          {/* Línea conectora */}
          <div className="flex justify-center -my-1">
            <div className="h-4 w-[1px] bg-gradient-to-b from-teal-500/40 to-emerald-500/40" />
          </div>

          {/* Nodo 2: Servidor anfitrión */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <Server className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="text-slate-200 font-medium">Ubuntu Server</div>
                <div className="text-[11px] text-slate-500">Docker Engine Host</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>Zero Trust</span>
            </div>
          </div>

          {/* Línea conectora */}
          <div className="flex justify-center -my-1">
            <div className="h-4 w-[1px] bg-gradient-to-b from-emerald-500/40 to-teal-500/40" />
          </div>

          {/* Nodo 3: Contenedores activos */}
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Box className="w-3.5 h-3.5 text-teal-400" />
                <span>Servicios Docker</span>
              </div>
              <span className="text-[10px] text-slate-500">3 servicios</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-[11px]">
              <div className="px-2 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between text-slate-300">
                <span className="font-semibold text-emerald-300">hub</span>
                <span className="text-[10px] text-slate-500">core</span>
              </div>
              <div className="px-2 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between text-slate-300">
                <span className="font-semibold text-teal-300">atlas</span>
                <span className="text-[10px] text-slate-500">app</span>
              </div>
              <div className="px-2 py-1.5 rounded-lg bg-slate-950/70 border border-slate-800/60 flex items-center justify-between text-slate-300">
                <span className="font-semibold text-emerald-300">coche</span>
                <span className="text-[10px] text-slate-500">app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
