import React from 'react';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { ArrowDown, Shield, Terminal, Cpu, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Decorative background radial ambient lights */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 right-10 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Homelab status pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-8 shadow-sm shadow-emerald-950/50 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="tracking-wide text-slate-300 font-medium">Homelab Online</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 flex items-center gap-1 font-sans">
            <Shield className="w-3 h-3 text-emerald-400" /> Cloudflare Tunnel
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {siteConfig.heroTitle}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-xl sm:text-2xl font-medium text-emerald-400/95 tracking-tight mb-4">
          {siteConfig.heroSubtitle}
        </p>

        {/* Short description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10">
          {siteConfig.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-900/30 hover:shadow-emerald-800/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <span>Explorar Servicios</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Mini Homelab Spec Strip */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-slate-400" />
            <span>Ubuntu Server</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-slate-400" />
            <span>Docker Compose</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>Cloudflare Edge</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            <span>Uptime Kuma Monitored</span>
          </div>
        </div>
      </div>
    </section>
  );
};
