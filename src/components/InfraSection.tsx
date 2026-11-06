import React from 'react';
import { Globe, ShieldCheck, Server, Layers, ChevronRight } from 'lucide-react';

export const InfraSection: React.FC = () => {
  const pipeline = [
    {
      step: '1',
      title: 'Petición Externa',
      tech: 'Internet / DNS',
      desc: 'Acceso seguro vía HTTPS hacia el dominio guacamolegh.es.',
      icon: Globe,
    },
    {
      step: '2',
      title: 'Túnel Zero Trust',
      tech: 'Cloudflare Tunnel',
      desc: 'Enrutamiento cifrado saliente que evita abrir puertos en el router.',
      icon: ShieldCheck,
    },
    {
      step: '3',
      title: 'Servidor Local',
      tech: 'Ubuntu Server',
      desc: 'Entorno anfitrión donde reside el daemon de Docker.',
      icon: Server,
    },
    {
      step: '4',
      title: 'Contenedores',
      tech: 'Docker Compose',
      desc: 'Instancias aisladas para Hub, Atlas, Coche, Games, Flags y Nginx.',
      icon: Layers,
    },
  ];

  return (
    <section id="infra" className="py-16 md:py-20 border-t border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="mb-10 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
            Flujo de Datos
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Arquitectura de Despliegue
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
            Canal de comunicación seguro desde el navegador hasta los contenedores.
          </p>
        </div>

        {/* Diagrama de Flujo / Pipeline continuo */}
        <div className="relative rounded-3xl bg-[#0b0f17]/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md">
          {/* Línea horizontal continua visible en escritorio, exactamente centrada con los nodos */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[67px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-teal-500/30 via-emerald-500/40 to-teal-500/30"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 relative z-10">
            {pipeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative flex flex-col items-start sm:items-center text-left sm:text-center p-3"
                >
                  {/* Nodo numérico con icono sobre la línea */}
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900 border border-emerald-500/30 text-emerald-400 shadow-md mb-4 shrink-0">
                    <Icon className="w-5 h-5" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300 flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  {/* Título de la etapa */}
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400/90 mb-2">
                    {item.tech}
                  </span>

                  {/* Descripción técnica breve sin duplicar datos */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Indicador de flecha entre pasos para móvil/tablet */}
                  {index < pipeline.length - 1 && (
                    <div className="lg:hidden mt-4 self-center text-slate-600">
                      <ChevronRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Stack tecnológico confirmado */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-400">Componentes de infraestructura:</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Ubuntu Server LTS
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Docker Compose
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Cloudflare Zero Trust
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
              Nginx Reverse Proxy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
