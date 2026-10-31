import React from 'react';
import type { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Configuración de colores de acento por categoría/servicio
  const accentClasses = {
    emerald: {
      border: 'hover:border-emerald-500/40',
      bgGlow: 'group-hover:bg-emerald-500/10',
      iconBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
      glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)]',
    },
    cyan: {
      border: 'hover:border-cyan-500/40',
      bgGlow: 'group-hover:bg-cyan-500/10',
      iconBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
      glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(6,182,212,0.12)]',
    },
    blue: {
      border: 'hover:border-blue-500/40',
      bgGlow: 'group-hover:bg-blue-500/10',
      iconBg: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
      glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)]',
    },
    purple: {
      border: 'hover:border-purple-500/40',
      bgGlow: 'group-hover:bg-purple-500/10',
      iconBg: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
      badge: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
      glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(168,85,247,0.12)]',
    },
    amber: {
      border: 'hover:border-amber-500/40',
      bgGlow: 'group-hover:bg-amber-500/10',
      iconBg: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
      glowShadow: 'group-hover:shadow-[0_8px_30px_rgb(245,158,11,0.12)]',
    },
  }[service.accentColor || 'emerald'];

  // Formato limpio del display URL (ej. "hub.guacamolegh.es")
  const displayUrl = service.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <a
      href={service.url}
      target={service.isExternal ? '_blank' : undefined}
      rel={service.isExternal ? 'noopener noreferrer' : undefined}
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 ${accentClasses.border} ${accentClasses.glowShadow} backdrop-blur-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
    >
      {/* Top Header Card */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${accentClasses.iconBg} ${accentClasses.bgGlow}`}
          >
            <DynamicIcon name={service.icon} className="w-6 h-6 transition-transform group-hover:scale-110 duration-300" />
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <span
                className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${accentClasses.badge}`}
              >
                {service.badge}
              </span>
            )}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-white/5 transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
          {service.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="truncate max-w-[220px] text-slate-400 group-hover:text-slate-300 transition-colors">
          {displayUrl}
        </span>
        <span className="flex items-center gap-1 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0">
          Abrir <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </a>
  );
};
