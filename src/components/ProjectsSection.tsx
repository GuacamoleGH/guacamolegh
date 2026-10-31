import React from 'react';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { DynamicIcon } from './DynamicIcon';
import { ExternalLink } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = siteConfig;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-8 md:py-12 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Proyectos
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Repositorios y proyectos de código personal en GitHub.
            </p>
          </div>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <span>Ver perfil en GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl || siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-2xl bg-slate-900/30 hover:bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 text-emerald-400 flex items-center justify-center">
                    <DynamicIcon name={project.icon || 'FolderGit2'} className="w-4 h-4" />
                  </div>
                  <GithubIcon className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/50">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
