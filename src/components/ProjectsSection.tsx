import React from 'react';
import { siteConfig } from '../data/config';
import { DynamicIcon } from './DynamicIcon';
import { GithubIcon } from './GithubIcon';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = siteConfig;

  // Si no hay proyectos configurados, ocultar la sección limpiamente
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              <FolderGit2 className="w-4 h-4" />
              <span>Código & Proyectos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Proyectos Personales
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Repositorios y desarrollos personales alojados en GitHub y en el ecosistema homelab.
            </p>
          </div>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/10 px-3 py-1.5 rounded-lg w-fit transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ver todos en GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={project.icon || 'FolderGit2'} className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Repositorio de ${project.title}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Sitio web de ${project.title}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-white/5 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-950/70 text-slate-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
