import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 32,
  showText = true,
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icono del logo GuacamoleGH */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-600/15 to-emerald-950/40 p-1 border border-emerald-500/30"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Silueta exterior */}
          <path
            d="M24 5L39 12V25C39 34 32.5 40.5 24 43C15.5 40.5 9 34 9 25V12L24 5Z"
            fill="url(#logo_grad_bg)"
            stroke="url(#logo_grad_border)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Núcleo orgánico central */}
          <ellipse
            cx="24"
            cy="26.5"
            rx="7"
            ry="9"
            fill="url(#logo_grad_core)"
            stroke="#34d399"
            strokeWidth="1.5"
          />
          {/* Nodos de conexión */}
          <circle cx="24" cy="11" r="2.2" fill="#34d399" />
          <path d="M24 13.5V17.5" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="26.5" r="3" fill="#ecfdf5" />

          <defs>
            <linearGradient id="logo_grad_bg" x1="9" y1="5" x2="39" y2="43" gradientUnits="userSpaceOnUse">
              <stop stopColor="#064e3b" stopOpacity="0.85" />
              <stop stopColor="#042f2e" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="logo_grad_border" x1="24" y1="5" x2="24" y2="43" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" />
              <stop stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="logo_grad_core" x1="24" y1="17.5" x2="24" y2="35.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop stopColor="#0f766e" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <span className="text-base font-bold tracking-tight text-white">
          Guacamole<span className="text-emerald-400">GH</span>
        </span>
      )}
    </div>
  );
};
