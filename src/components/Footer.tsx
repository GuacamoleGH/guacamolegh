import React from 'react';
import { siteConfig } from '../data/config';
import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-slate-800/80 bg-[#090d15]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <span className="text-xs text-slate-500">
            &copy; {CURRENT_YEAR} GuacamoleGH. Homelab portal.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-xs text-slate-400">
          <a href="#services" className="hover:text-emerald-400 transition-colors">
            Servicios
          </a>
          <a href="#status" className="hover:text-emerald-400 transition-colors">
            Estado
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
