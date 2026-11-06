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
    {
      id: 'games',
      name: 'Games',
      description: 'Catálogo de 9 juegos arcade clásicos para navegador (Snake, Pong, Tetris, Space Invaders, etc.).',
      url: import.meta.env.VITE_GAMES_URL || 'https://games.guacamolegh.es',
      icon: 'Gamepad2',
      category: 'application',
      accentColor: 'cyan',
      isExternal: true,
    },
    {
      id: 'flags',
      name: 'Flags',
      description: 'Quiz interactivo de banderas de los 196 países oficiales del mundo con rankings globales.',
      url: import.meta.env.VITE_FLAGS_URL || 'https://flags.guacamolegh.es',
      icon: 'Flag',
      category: 'application',
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
   * Proyectos personales y repositorios destacados en GitHub
   */
  projects: [
    {
      id: 'tachyon',
      title: 'Tachyon',
      description: 'Telemetría automovilística de alto rendimiento para circuito y carretera en Android: interfaz estilo MyChron 5 / MoTeC, OBD-II BLE de alta velocidad, IMU a 50 Hz, GPS 10 Hz y grabación FHD 1080p.',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'OBD-II BLE', 'CameraX'],
      githubUrl: 'https://github.com/GuacamoleGH/Tachyon',
      icon: 'Zap',
      featured: true,
    },
    {
      id: 'tachyon-studio-rust',
      title: 'Tachyon Studio',
      description: 'Suite de escritorio en Rust y Tauri 2 para telemetría automovilística: editor visual de overlays a 60 FPS, aceleración por hardware con WebCodecs y pipeline de memoria acotada (< 500 MB).',
      tags: ['Rust', 'Tauri 2', 'React 19', 'TypeScript', 'WebCodecs'],
      githubUrl: 'https://github.com/GuacamoleGH/Tachyon-Studio-Rust',
      icon: 'Gauge',
      featured: true,
    },
    {
      id: 'flags-quiz',
      title: 'GuacamoleGH Flags',
      description: 'Quiz interactivo bilingüe de banderas de los 196 países del mundo con modos por continente, anti-trampas heurístico y rankings globales.',
      tags: ['TypeScript', 'Express', 'SQLite', 'Docker'],
      githubUrl: 'https://github.com/GuacamoleGH/flags',
      liveUrl: 'https://flags.guacamolegh.es',
      icon: 'Flag',
      featured: true,
    },
    {
      id: 'stream-deck-battery',
      title: 'Stream Deck Battery Plugin',
      description: 'Plugin de Stream Deck para Windows que muestra el porcentaje de batería de periféricos (Razer Viper Ultimate e HyperX Cloud III S) por HID directo.',
      tags: ['C#', '.NET', 'Stream Deck', 'HID'],
      githubUrl: 'https://github.com/GuacamoleGH/Stream-Deck-Battery-Plugin',
      icon: 'BatteryCharging',
      featured: true,
    },
    {
      id: 'hyperx-battery-tray',
      title: 'HyperX Battery Tray',
      description: 'Aplicación ligera de System Tray en Windows para monitorizar la batería de auriculares HyperX Cloud III S Wireless sin necesidad de NGENUITY.',
      tags: ['C#', 'Windows', 'System Tray', 'HID'],
      githubUrl: 'https://github.com/GuacamoleGH/HyperX-Battery-Tray',
      icon: 'Headphones',
      featured: true,
    },
    {
      id: 'games-app',
      title: 'GuacamoleGH Games',
      description: 'Catálogo web de 9 juegos arcade clásicos (Snake, Pong, Tetris, Breakout, Tres en raya, Space Invaders, Pac-Man, Asteroids, Blackjack) con TypeScript, Vite y Web Audio API.',
      tags: ['TypeScript', 'Vite', 'Web Audio API', 'Vitest'],
      githubUrl: 'https://github.com/GuacamoleGH/games',
      liveUrl: 'https://games.guacamolegh.es',
      icon: 'Gamepad2',
      featured: false,
    },
    {
      id: 'homelab',
      title: 'Homelab Infrastructure',
      description: 'Configuración y despliegue de servicios en Ubuntu Server con Docker Compose y Cloudflare Zero Trust Tunnels.',
      tags: ['Docker', 'Ubuntu', 'Cloudflare'],
      githubUrl: 'https://github.com/GuacamoleGH',
      icon: 'Server',
      featured: false,
    },
    {
      id: 'guacamolegh',
      title: 'GuacamoleGH Portal',
      description: 'Dashboard principal público para el homelab desarrollado en React, TypeScript y Tailwind CSS.',
      tags: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/GuacamoleGH/guacamolegh',
      liveUrl: 'https://guacamolegh.es',
      icon: 'Globe',
      featured: false,
    },
  ],
};
