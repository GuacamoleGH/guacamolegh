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
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Nuevo logo oficial de GuacamoleGH */}
      <img
        src="/guacamoleghlogo.png"
        alt="GuacamoleGH Logo"
        className="rounded-xl object-contain shrink-0 border border-emerald-500/30 shadow-sm shadow-emerald-950/40 bg-slate-950"
        style={{ width: size, height: size }}
      />

      {showText && (
        <span className="text-base font-bold tracking-tight text-white">
          Guacamole<span className="text-emerald-400">GH</span>
        </span>
      )}
    </div>
  );
};
