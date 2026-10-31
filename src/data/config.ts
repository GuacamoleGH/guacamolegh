import type { SiteConfig } from '../types';

/**
 * ==============================================================================
 * GUACAMOLEGH - CONFIGURACIÓN CENTRALIZADA DEL HOMELAB & PROYECTOS
 * ==============================================================================
 * Modifica este archivo para añadir, eliminar o actualizar servicios, enlaces
 * y proyectos sin tener que tocar los componentes visuales.
 */

export const siteConfig: SiteConfig = {
  brandName: 'GuacamoleGH',
  domain: 'guacamolegh.es',
  heroTitle: 'GuacamoleGH',
  heroSubtitle: 'Personal services & projects',
  heroDescription:
    'A collection of personal projects, self-hosted services and tools running on a private homelab server.',
  
  // Enlace a tu perfil u organización de GitHub
  // Puedes sobreescribirlo con la variable de entorno VITE_GITHUB_URL en .env
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/guacamolegh',

  // Configuración de infraestructura (badges informativos en hero y footer)
  infraInfo: {
    os: 'Ubuntu Server LTS',
    orchestrator: 'Docker Compose',
    network: 'Cloudflare Tunnel',
    webServer: 'Nginx Alpine',
  },

  /**
   * ----------------------------------------------------------------------------
   * SERVICIOS PRINCIPALES DEL HOMELAB
   * ----------------------------------------------------------------------------
   * Cada tarjeta en la sección de servicios representa un contenedor o app activa.
   */
  services: [
    {
      id: 'hub',
      name: 'Hub',
      description: 'Portal principal de acceso centralizado y herramientas personales del homelab.',
      url: import.meta.env.VITE_HUB_URL || 'https://hub.guacamolegh.es',
      icon: 'LayoutGrid',
      badge: 'Core Portal',
      category: 'core',
      accentColor: 'emerald',
      isExternal: true,
    },
    {
      id: 'atlas',
      name: 'Atlas',
      description: 'Aplicación personal y plataforma de organización y mapas de proyectos.',
      url: import.meta.env.VITE_ATLAS_URL || 'https://atlas.guacamolegh.es',
      icon: 'Compass',
      badge: 'Personal App',
      category: 'application',
      accentColor: 'cyan',
      isExternal: true,
    },
    {
      id: 'coche',
      name: 'Coche',
      description: 'Gestión integral, telemetría, revisiones y mantenimiento del vehículo.',
      url: import.meta.env.VITE_COCHE_URL || 'https://coche.guacamolegh.es',
      icon: 'Car',
      badge: 'Vehículo & IoT',
      category: 'iot',
      accentColor: 'blue',
      isExternal: true,
    },
    {
      id: 'uptime-kuma',
      name: 'Uptime Kuma',
      description: 'Monitorización 24/7 de disponibilidad, latencia y estado de los servicios.',
      url: import.meta.env.VITE_UPTIME_KUMA_URL || 'https://status.guacamolegh.es',
      icon: 'Activity',
      badge: 'Monitorización',
      category: 'monitoring',
      accentColor: 'purple',
      isExternal: true,
    },
  ],

  /**
   * ----------------------------------------------------------------------------
   * CONFIGURACIÓN DE UPTIME KUMA
   * ----------------------------------------------------------------------------
   * Requisitos de seguridad:
   * - No exponemos tokens ni APIs privadas en el frontend.
   * - Enlazamos a la página de estado pública oficial o al panel de Uptime Kuma.
   * - Si tienes configurada una Status Page pública en Uptime Kuma (ej. /status/servicios
   *   o un subdominio status.guacamolegh.es), asígnala aquí o mediante VITE_UPTIME_STATUS_PAGE_URL.
   */
  uptimeKuma: {
    enabled: true,
    name: 'Monitorización Uptime Kuma',
    description:
      'Sistema de monitorización activo que comprueba continuamente la respuesta y salud de todos los contenedores y dominios expuestos.',
    url: import.meta.env.VITE_UPTIME_KUMA_URL || 'https://status.guacamolegh.es',
    statusPageUrl: import.meta.env.VITE_UPTIME_STATUS_PAGE_URL || 'https://status.guacamolegh.es',
    note: 'El estado se audita mediante sondas HTTP/TCP periódicas a través de Uptime Kuma.',
  },

  /**
   * ----------------------------------------------------------------------------
   * PROYECTOS PERSONALES Y REPOSITORIOS
   * ----------------------------------------------------------------------------
   * Añade o elimina objetos de esta lista para actualizar la sección de proyectos.
   * Si no deseas mostrar ninguno temporalmente, deja el array vacío [].
   */
  projects: [
    {
      id: 'homelab-infra',
      title: 'Homelab Infrastructure',
      description: 'Infraestructura contenerizada con Docker Compose, Cloudflare Zero Trust Tunnels y monitorización Uptime Kuma.',
      tags: ['Docker', 'Ubuntu', 'Cloudflare', 'Nginx'],
      githubUrl: 'https://github.com/guacamolegh',
      icon: 'Server',
      featured: true,
    },
    {
      id: 'guacamolegh-portal',
      title: 'GuacamoleGH Portal',
      description: 'Dashboard principal público para el homelab desarrollado en React 19, TypeScript, Vite y Tailwind CSS.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/guacamolegh/guacamolegh',
      liveUrl: 'https://guacamolegh.es',
      icon: 'Globe',
      featured: true,
    },
    {
      id: 'coche-management',
      title: 'Coche Management App',
      description: 'Módulo de registro de repostajes, revisiones mecánicas, alertas de mantenimiento y control de costes.',
      tags: ['Full-Stack', 'IoT', 'Docker', 'SQLite'],
      githubUrl: 'https://github.com/guacamolegh',
      icon: 'Wrench',
      featured: false,
    },
  ],
};
