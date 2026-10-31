import React, { useState } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090d14]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg hover:opacity-95 transition-opacity"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6">
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#infra"
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
          >
            Arquitectura
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
          >
            Proyectos
          </a>
          <div className="h-4 w-[1px] bg-slate-800" />
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de GuacamoleGH"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>GitHub</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="sm:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-800 bg-[#090d14] px-4 py-4 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
          >
            Servicios alojados
          </a>
          <a
            href="#infra"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
          >
            Arquitectura homelab
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400"
          >
            Proyectos GitHub
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-200"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>Ver perfil en GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
};
