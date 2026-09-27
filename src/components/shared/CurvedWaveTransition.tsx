import React from 'react';

interface CurvedWaveProps {
  fillNavy?: string;
  className?: string;
}

/**
 * Eleganter geschwungener Übergang mit dezenten Designer-Linien (Grüner Akzent + Blueprint Gestrichelt)
 * Schafft einen sauberen, architektonischen Übergang von hellen Abschnitten in Marken-Navy.
 */
export const CurvedWaveTop: React.FC<CurvedWaveProps> = ({ 
  fillNavy = '#140F3E',
  className = '' 
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none -mb-[1px] ${className}`}>
      <svg 
        viewBox="0 0 1440 90" 
        fill="none" 
        preserveAspectRatio="none" 
        className="w-full h-14 sm:h-20 lg:h-24 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Solide Navy-Fläche */}
        <path 
          d="M 0,90 L 0,40 C 320,80 620,15 980,48 C 1180,66 1340,55 1440,38 L 1440,90 Z" 
          fill={fillNavy} 
        />
        {/* Primäre grüne Designer-Linie */}
        <path 
          d="M 0,40 C 320,80 620,15 980,48 C 1180,66 1340,55 1440,38" 
          stroke="#2DE054" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        {/* Zweite technische Designer-Linie (Dezentes Blueprint-Raster) */}
        <path 
          d="M 0,48 C 320,88 620,23 980,56 C 1180,74 1340,63 1440,46" 
          stroke="rgba(255,255,255,0.22)" 
          strokeWidth="1.2" 
          strokeDasharray="8 6"
        />
      </svg>
    </div>
  );
};

export const CurvedWaveBottom: React.FC<CurvedWaveProps> = ({ 
  fillNavy = '#140F3E',
  className = '' 
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none -mt-[1px] ${className}`}>
      <svg 
        viewBox="0 0 1440 90" 
        fill="none" 
        preserveAspectRatio="none" 
        className="w-full h-14 sm:h-20 lg:h-24 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Solide Navy-Fläche */}
        <path 
          d="M 0,0 L 0,50 C 320,10 620,75 980,42 C 1180,24 1340,35 1440,52 L 1440,0 Z" 
          fill={fillNavy} 
        />
        {/* Primäre grüne Designer-Linie */}
        <path 
          d="M 0,50 C 320,10 620,75 980,42 C 1180,24 1340,35 1440,52" 
          stroke="#2DE054" 
          strokeWidth="2.5" 
          strokeLinecap="round"
        />
        {/* Zweite technische Designer-Linie */}
        <path 
          d="M 0,42 C 320,2 620,67 980,34 C 1180,16 1340,27 1440,44" 
          stroke="rgba(255,255,255,0.22)" 
          strokeWidth="1.2" 
          strokeDasharray="8 6"
        />
      </svg>
    </div>
  );
};

/**
 * Schicker, dezenter geschwungener Übergang für helle Abschnitte ("nichts Wildes").
 * Verbindet organisch Abschnitte mit Muster/Gradient mit dem nachfolgenden Abschnitt,
 * inklusive feiner grüner CI-Linie und technischer Blueprint-Gestaltung.
 */
export const CurvedWaveLightDivider: React.FC<{
  fillColor?: string;
  className?: string;
}> = ({
  fillColor = '#EFF2F8',
  className = ''
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none relative z-20 pointer-events-none -mb-[1px] ${className}`}>
      <svg 
        viewBox="0 0 1440 60" 
        fill="none" 
        preserveAspectRatio="none" 
        className="w-full h-10 sm:h-14 lg:h-16 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 0,60 L 0,25 C 360,50 720,12 1080,35 C 1240,45 1360,38 1440,22 L 1440,60 Z" 
          fill={fillColor} 
        />
        <path 
          d="M 0,25 C 360,50 720,12 1080,35 C 1240,45 1360,38 1440,22" 
          stroke="#2DE054" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.85"
        />
        <path 
          d="M 0,31 C 360,56 720,18 1080,41 C 1240,51 1360,44 1440,28" 
          stroke="rgba(148, 163, 184, 0.45)" 
          strokeWidth="1" 
          strokeDasharray="6 5"
        />
      </svg>
    </div>
  );
};

