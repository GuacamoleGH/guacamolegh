import React from 'react';
import { siteConfig } from '../data/config';
import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070a10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
          <Logo size={26} />
          <span className="text-xs text-slate-500 font-mono sm:pt-1">
            &copy; {CURRENT_YEAR} GuacamoleGH • Homelab personal
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="#services" className="hover:text-emerald-400 transition-colors">
            Servicios
          </a>
          <a href="#infra" className="hover:text-emerald-400 transition-colors">
            Arquitectura
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">
            Proyectos
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
