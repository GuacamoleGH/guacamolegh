import React from 'react';
import type { LucideProps } from 'lucide-react';
import {
  LayoutGrid,
  Compass,
  Car,
  Activity,
  Server,
  Globe,
  Wrench,
  ExternalLink,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
  Wifi,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
  Monitor,
  HeartPulse,
  FolderGit2,
  Lock,
  Gamepad2,
  Flag,
  BatteryCharging,
  Headphones,
} from 'lucide-react';

const iconMap: Record<string, React.FC<LucideProps>> = {
  LayoutGrid,
  Compass,
  Car,
  Activity,
  Server,
  Globe,
  Wrench,
  ExternalLink,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
  Wifi,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
  Monitor,
  HeartPulse,
  FolderGit2,
  Lock,
  Gamepad2,
  Flag,
  BatteryCharging,
  Headphones,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || Server;
  return <IconComponent {...props} />;
};
