import React from 'react';
import { Globe, ShieldCheck, Server, Layers, ArrowRight } from 'lucide-react';

export const InfraSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Internet',
      subtitle: 'Tráfico cifrado',
      desc: 'Peticiones web HTTPS dirigidas a guacamolegh.es y sus subdominios.',
      icon: Globe,
      color: 'text-teal-400',
      border: 'border-teal-500/20',
      bg: 'bg-teal-500/10',
    },
    {
      step: '02',
      title: 'Cloudflare Tunnel',
      subtitle: 'Conexión Zero Trust',
      desc: 'Túnel seguro saliente que expone las apps sin abrir puertos en el router.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/10',
    },
    {
      step: '03',
      title: 'Ubuntu Server',
      subtitle: 'Servidor anfitrión',
      desc: 'Sistema base y orquestación ligera con Docker Compose.',
      icon: Server,
      color: 'text-teal-400',
      border: 'border-teal-500/20',
      bg: 'bg-teal-500/10',
    },
    {
      step: '04',
      title: 'Servicios Docker',
      subtitle: 'Contenedores aislados',
      desc: 'Instancias independientes para Hub, Atlas, Coche y Uptime Kuma.',
      icon: Layers,
      color: 'text-emerald-400',
      border: 'border-emerald-500/20',
      bg: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="infra" className="py-16 md:py-20 border-t border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
            Arquitectura
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Esquema del Homelab
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Flujo de conexión y aislamiento de los servicios alojados en el servidor.
          </p>
        </div>

        {/* Diagrama horizontal de 4 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} ${item.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/80 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Flecha conectora entre pasos (visible en escritorio) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resumen de tecnologías confirmadas */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-500">Tecnologías del stack:</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Ubuntu Server
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Docker Compose
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              Cloudflare Tunnel
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
              GitHub Repos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
