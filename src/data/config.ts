import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brandName: 'GuacamoleGH',
  domain: 'guacamolegh.es',
  heroTitle: 'GuacamoleGH',
  heroSubtitle: 'Portal de servicios y homelab personal',
  heroDescription:
    'Punto de entrada a mis aplicaciones self-hosted, herramientas de gestión y proyectos personales.',
  
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/GuacamoleGH',

  infraInfo: {
    os: 'Ubuntu Server',
    orchestrator: 'Docker Compose',
    network: 'Cloudflare Tunnel',
    webServer: 'Nginx',
  },

  /**
   * Servicios públicos del Homelab
   */
  services: [
    {
      id: 'hub',
      name: 'Hub',
      description: 'Portal principal y punto de acceso centralizado a herramientas personales.',
      url: import.meta.env.VITE_HUB_URL || 'https://hub.guacamolegh.es',
      icon: 'LayoutGrid',
      category: 'core',
      accentColor: 'emerald',
      isExternal: true,
    },
    {
      id: 'atlas',
      name: 'Atlas',
      description: 'Plataforma personal de organización, mapas y gestión de proyectos.',
      url: import.meta.env.VITE_ATLAS_URL || 'https://atlas.guacamolegh.es',
      icon: 'Compass',
      category: 'application',
      accentColor: 'cyan',
      isExternal: true,
    },
    {
      id: 'coche',
      name: 'Coche',
      description: 'Control de mantenimiento, telemetría, consumos y estado del vehículo.',
      url: import.meta.env.VITE_COCHE_URL || 'https://coche.guacamolegh.es',
      icon: 'Car',
      category: 'iot',
      accentColor: 'emerald',
      isExternal: true,
    },
  ],

  /**
   * Configuración de Uptime Kuma (deshabilitado para el público general)
   */
  uptimeKuma: {
    enabled: false,
    name: 'Uptime Kuma',
    description: '',
    url: '',
    note: '',
  },

  /**
   * Proyectos personales en GitHub
   */
  projects: [
    {
      id: 'homelab',
      title: 'Homelab Infrastructure',
      description: 'Configuración y despliegue de servicios en Ubuntu con Docker Compose y Cloudflare Tunnel.',
      tags: ['Docker', 'Ubuntu', 'Cloudflare'],
      githubUrl: 'https://github.com/GuacamoleGH',
      icon: 'Server',
      featured: true,
    },
    {
      id: 'guacamolegh',
      title: 'GuacamoleGH Portal',
      description: 'Landing page y dashboard principal para el homelab construida en React, TypeScript y Tailwind.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/GuacamoleGH/guacamolegh',
      liveUrl: 'https://guacamolegh.es',
      icon: 'Globe',
      featured: true,
    },
    {
      id: 'coche-app',
      title: 'Coche App',
      description: 'Aplicación para seguimiento de revisiones, repostajes y mantenimiento automotriz.',
      tags: ['Full-Stack', 'IoT'],
      githubUrl: 'https://github.com/GuacamoleGH',
      icon: 'Wrench',
      featured: false,
    },
  ],
};
