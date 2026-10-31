import React from 'react';
import { siteConfig } from '../data/config';
import {
  Activity,
  ShieldCheck,
  ExternalLink,
  Bell,
  Clock,
  CheckCircle,
} from 'lucide-react';

export const StatusSection: React.FC = () => {
  const { uptimeKuma } = siteConfig;

  if (!uptimeKuma.enabled) return null;

  return (
    <section id="status" className="py-12 md:py-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Monitorización & Disponibilidad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Estado de los Servicios
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Supervisión continua de salud, tiempos de respuesta y conectividad de cada servicio del homelab.
          </p>
        </div>

        {/* Main Status Container */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/90 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md shadow-xl">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Columna izquierda: Información del motor de monitorización */}
            <div className="lg:col-span-2 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    {uptimeKuma.name}
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      Activo 24/7
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Engine: Uptime Kuma Container • Notificaciones instantáneas
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {uptimeKuma.description}
              </p>

              {/* Grid de especificaciones de auditoría */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Sondas HTTP / TCP</div>
                    <div className="text-[11px] text-slate-400">Pings periódicos y SSL</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Cloudflare Tunnel</div>
                    <div className="text-[11px] text-slate-400">Tráfico cifrado de extremo a extremo</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                  <Bell className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-200">Alertas en tiempo real</div>
                    <div className="text-[11px] text-slate-400">Detección inmediata de cortes</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                <span>{uptimeKuma.note}</span>
              </div>
            </div>

            {/* Columna derecha: Call to action a la Status Page */}
            <div className="lg:col-span-1 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="w-full p-5 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Status Page Oficial</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Consulta el historial de incidentes, porcentaje de SLA y latencias detalladas.
                  </p>
                </div>

                <a
                  href={uptimeKuma.statusPageUrl || uptimeKuma.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs tracking-wide uppercase transition-all shadow-md shadow-emerald-950/50 hover:shadow-emerald-900/60"
                >
                  <span>Ver Panel de Estado</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="text-[11px] font-mono text-slate-400">
                  {uptimeKuma.statusPageUrl ? (
                    <span className="truncate block">{uptimeKuma.statusPageUrl.replace(/^https?:\/\//, '')}</span>
                  ) : (
                    <span>Configurable en config.ts / .env</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
