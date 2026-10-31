import React from 'react';
import { siteConfig } from '../data/config';
import { Logo } from './Logo';
import { GithubIcon } from './GithubIcon';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size={30} />
            <p className="text-xs text-slate-400 mt-2 font-medium">
              Personal homelab & projects
            </p>
          </div>

          {/* Quick links & Homelab status */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <a
              href="#services"
              className="hover:text-emerald-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#status"
              className="hover:text-emerald-400 transition-colors"
            >
              Monitorización
            </a>
            <a
              href="#projects"
              className="hover:text-emerald-400 transition-colors"
            >
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

          {/* Copyright & Infrastructure */}
          <div className="text-center md:text-right">
            <p className="text-xs text-slate-400">
              &copy; {CURRENT_YEAR} {siteConfig.brandName}. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-slate-400 mt-1 flex items-center justify-center md:justify-end gap-1.5">
              <span>Ubuntu Server</span>
              <span>•</span>
              <span>Docker Compose</span>
              <span>•</span>
              <span>Cloudflare Tunnel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
