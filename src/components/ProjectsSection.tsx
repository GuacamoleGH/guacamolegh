import React from 'react';
import { siteConfig } from '../data/config';
import { GithubIcon } from './GithubIcon';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = siteConfig;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-slate-800/60 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-800/80 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
              Código Fuente
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Proyectos Personales
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-xl leading-relaxed">
              Repositorios y código de las herramientas del homelab alojados en GitHub.
            </p>
          </div>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors w-fit"
          >
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>github.com/GuacamoleGH</span>
          </a>
        </div>

        {/* Lista visual de repositorios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl || siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#0c1018] hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <FolderGit2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-base font-bold font-mono text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0" />
                </div>

                {/* Texto descriptivo aumentado en legibilidad y contraste */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              {/* Tecnologías confirmadas */}
              <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-800/70 font-mono text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300"
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
