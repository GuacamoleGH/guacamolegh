import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-slate-950/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Logo */}
        <a
          href="#"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg group transition-transform hover:scale-[1.01]"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <a
            href="#services"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#status"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Estado
          </a>
          {siteConfig.projects.length > 0 && (
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Proyectos
            </a>
          )}
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/40 rounded-lg transition-all"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top duration-200">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            Servicios Homelab
          </a>
          <a
            href="#status"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <span>Monitorización & Uptime</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </a>
          {siteConfig.projects.length > 0 && (
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              Proyectos Personales
            </a>
          )}
          <div className="pt-2">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-center rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-medium hover:bg-emerald-600/30"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver en GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
