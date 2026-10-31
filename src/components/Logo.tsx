import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 36,
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon del logo GuacamoleGH */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-emerald-500/20 via-emerald-600/10 to-teal-950/40 p-1.5 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Escudo geométrico exterior */}
          <path
            d="M24 4L40 12V25C40 34.5 33.2 41.5 24 44C14.8 41.5 8 34.5 8 25V12L24 4Z"
            fill="url(#logo_grad_bg)"
            stroke="url(#logo_grad_border)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Nodo central orgánico / avocado core */}
          <ellipse
            cx="24"
            cy="27"
            rx="7.5"
            ry="9.5"
            fill="url(#logo_grad_core)"
            stroke="#34d399"
            strokeWidth="1.5"
          />
          {/* Circuito de conexión homelab */}
          <path
            d="M24 10V17.5M16 20L20 22M32 20L28 22"
            stroke="#a7f3d0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="24" cy="10" r="2" fill="#34d399" />
          <circle cx="24" cy="27" r="3.5" fill="#ecfdf5" />

          {/* Gradientes */}
          <defs>
            <linearGradient id="logo_grad_bg" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#064e3b" stopOpacity="0.8" />
              <stop stopColor="#022c22" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="logo_grad_border" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" />
              <stop stopColor="#059669" />
            </linearGradient>
            <linearGradient id="logo_grad_core" x1="24" y1="17.5" x2="24" y2="36.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop stopColor="#047857" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            Guacamole<span className="text-emerald-400 font-extrabold">GH</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-emerald-500/80 -mt-1">
            Homelab Portal
          </span>
        </div>
      )}
    </div>
  );
};
