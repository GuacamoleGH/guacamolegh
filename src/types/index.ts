export type ServiceCategory = 'core' | 'application' | 'iot' | 'monitoring' | 'tool';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string; // Lucide icon identifier
  badge?: string;
  category: ServiceCategory;
  accentColor?: 'emerald' | 'blue' | 'purple' | 'amber' | 'cyan';
  isExternal?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon?: string;
  featured?: boolean;
}

export interface SiteConfig {
  brandName: string;
  domain: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  githubUrl: string;
  services: ServiceItem[];
  projects: ProjectItem[];
  uptimeKuma: {
    enabled: boolean;
    name: string;
    description: string;
    // Public status page or dashboard URL (e.g., https://uptime.guacamolegh.es or https://status.guacamolegh.es)
    url: string;
    // Optional public status page slug or embed URL
    statusPageUrl?: string;
    note: string;
  };
  infraInfo: {
    os: string;
    orchestrator: string;
    network: string;
    webServer: string;
  };
}
