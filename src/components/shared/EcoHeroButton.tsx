import React from 'react';
import { Link } from 'react-router-dom';

interface EcoHeroButtonProps {
  to?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
}

export const EcoHeroButton: React.FC<EcoHeroButtonProps> = ({
  to = '/kontakt',
  onClick,
  text = 'Jetzt anfragen',
  className = ''
}) => {
  return (
    <Link
      to={to}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative inline-flex items-center select-none focus:outline-none eco-hero-btn filter drop-shadow-[0_12px_24px_rgba(11, 15, 25,0.16)] active:drop-shadow-[0_4px_8px_rgba(11, 15, 25,0.22)] ${className}`}
    >
      {/* 
        3D ARCHITEKTUR-BUTTON CONTAINER:
        - Spezielle Form: Sanfte Rundung links für die Sonne, architektonischer Dachschrägen-Chamfer oben rechts
        - 3D-Effekt: Physischer 3D-Sockel (Extrusion) unten + Druck-Interaktion (active:translate-y-[4px])
        - Pfeil und Wärmepumpe überschneiden sich NICHT mehr (448px Breite mit freiem Raum dazwischen)
        - Tag (Default): Weißer Button, grüner Rand (#BBBE22), grüner Sockel (#15803D)
        - Nacht (Hover): Tiefschwarz (#080C14), tiefblauer Rand (#0B0F19), strahlend warmes Hauslicht & rotierende Sonne
      */}
      <div className="relative w-[370px] sm:w-[450px] h-[74px] sm:h-[78px] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 active:translate-y-[4px]">
        
        {/* 1. SVG 3D CHASSIS (Physischer 3D-Sockel + Frontfläche mit nahtlosem Chamfer) */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          viewBox="0 0 450 78" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exakter ClipPath für die Innenfläche */}
            <clipPath id="heroBtnInteriorClip">
              <path d="M 36,1 L 396,1 L 446,30 L 446,52 A 20 20 0 0 1 426,71 L 36,71 A 35 35 0 0 1 36,1 Z" />
            </clipPath>
          </defs>

          {/* A) 3D PHYSICAL EXTRUSION SOCKEL (Sichtbare 6px 3D-Tiefe an der Unterkante) */}
          <path
            d="M 36,7 L 396,7 L 446,36 L 446,58 A 20 20 0 0 1 426,77 L 36,77 A 36 36 0 0 1 36,7 Z"
            className="fill-[#929515] group-hover:fill-[#0A0F1D] transition-colors duration-500"
          />

          {/* B) BUTTON-FRONTFLÄCHE MIT INTEGRIERTEM ARCHITEKTUR-CHAMFER & RAND */}
          <path
            d="M 36,1 L 396,1 L 446,30 L 446,52 A 20 20 0 0 1 426,71 L 36,71 A 35 35 0 0 1 36,1 Z"
            className="fill-white group-hover:fill-[#080C14] stroke-[#BBBE22] group-hover:stroke-[#0B0F19] transition-all duration-500"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* C) 3D LICHTKANTE (Highlight-Reflexion am oberen Rand) */}
          <path
            d="M 36,2.5 L 394,2.5 L 443,30.5"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="group-hover:opacity-15 transition-opacity duration-500"
          />
        </svg>

        {/* 2. INNENLEBEN (Beschnitten durch die exakte architektonische Form) */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            clipPath: 'url(#heroBtnInteriorClip)',
            WebkitClipPath: 'url(#heroBtnInteriorClip)'
          }}
        >
          {/* Dezente funkelnde Sterne bei Nacht (Hover) */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
            <svg className="w-full h-full" viewBox="0 0 450 72" fill="none">
              <circle cx="45" cy="18" r="1.1" fill="#FFFFFF" opacity="0.6" />
              <circle cx="85" cy="14" r="1.3" fill="#FFFFFF" opacity="0.8" />
              <circle cx="130" cy="22" r="0.9" fill="#93C5FD" opacity="0.7" />
              <circle cx="185" cy="12" r="1.2" fill="#FFFFFF" opacity="0.7" />
              <circle cx="245" cy="16" r="0.8" fill="#FFFFFF" opacity="0.5" />
              <circle cx="390" cy="14" r="1.1" fill="#FFFFFF" opacity="0.7" />
            </svg>
          </div>

          {/* A) DIE GELIEBTE SONNE OBEN LINKS:
              - Bleibt exakt oben links am Rand
              - Rotiert dynamisch heraus und verschwindet bei Nacht (Hover)
          */}
          <div className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-center -top-[14px] -left-[14px] w-[82px] h-[82px] opacity-100 rotate-0 scale-100 group-hover:rotate-[240deg] group-hover:scale-[0.1] group-hover:-translate-x-12 group-hover:-translate-y-12 group-hover:opacity-0 z-20">
            <svg viewBox="0 0 82 82" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round">
                <line x1="41" y1="12" x2="41" y2="4" />
                <line x1="61" y1="21" x2="68" y2="14" />
                <line x1="70" y1="41" x2="78" y2="41" />
                <line x1="61" y1="61" x2="68" y2="68" />
                <line x1="41" y1="70" x2="41" y2="78" />
                <line x1="21" y1="61" x2="14" y2="68" />
                <line x1="12" y1="41" x2="4" y2="41" />
                <line x1="21" y1="21" x2="14" y2="14" />
              </g>
              <circle cx="41" cy="41" r="18" fill="#FACC15" stroke="#EAB308" strokeWidth="2" />
              <circle cx="37" cy="37" r="13" fill="#FDE047" opacity="0.9" />
            </svg>
          </div>

          {/* B) ARCHITEKTEN-HAUS MIT FEST VERBUNDENEM DACH, PV-ANLAGE & WÄRMEPUMPE:
              - Sitzt rechts mit freiem Abstand zum Pfeil
              - Dach und Fassade sind eine 100% geschlossene, nahtlose Einheit
              - Nachts brennt schön warmes Licht in den Fenstern
          */}
          <div className="absolute right-2 sm:right-3 bottom-0 pointer-events-none transition-all duration-500 ease-out w-[172px] sm:w-[185px] h-[72px] z-10">
            <svg viewBox="0 0 185 72" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              
              {/* 1. WÄRMEPUMPE MONOBLOC (Links neben dem Haus, komplett frei vom Pfeil!) */}
              <g transform="translate(2, 3)">
                {/* Gehäuse */}
                <rect
                  x="4"
                  y="36"
                  width="28"
                  height="22"
                  rx="3"
                  className="fill-[#F1F5F9] group-hover:fill-[#1E293B] stroke-[#0B0F19] group-hover:stroke-[#64748B] transition-colors duration-500"
                  strokeWidth="1.6"
                />
                {/* Lüfterring */}
                <circle
                  cx="19.5"
                  cy="47"
                  r="7.5"
                  className="fill-[#E2E8F0] group-hover:fill-[#0F172A] stroke-[#BBBE22] transition-colors duration-500"
                  strokeWidth="1.4"
                />
                {/* Rotierendes Lüfterrad */}
                <g style={{ transformOrigin: '19.5px 47px', animation: 'spinPumpFan 2.5s linear infinite' }}>
                  <circle cx="19.5" cy="47" r="2" className="fill-[#0B0F19] group-hover:fill-[#BBBE22] transition-colors duration-500" />
                  <line x1="19.5" y1="40.5" x2="19.5" y2="53.5" className="stroke-[#0B0F19] group-hover:stroke-[#BBBE22] transition-colors duration-500" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="13" y1="47" x2="26" y2="47" className="stroke-[#0B0F19] group-hover:stroke-[#BBBE22] transition-colors duration-500" strokeWidth="1.4" strokeLinecap="round" />
                </g>
                {/* Status-LED grün */}
                <circle cx="8" cy="40" r="1.3" fill="#BBBE22" className="group-hover:[filter:drop-shadow(0_0_5px_#BBBE22)] transition-all" />
                {/* Verbindungsrohre zum Haus */}
                <line x1="32" y1="49" x2="42" y2="49" stroke="#0B0F19" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="32" y1="53" x2="42" y2="53" stroke="#BBBE22" strokeWidth="1.8" strokeLinecap="round" />
              </g>

              {/* 2. ARCHITEKTUR-HAUS: FASSADE VOLLSTÄNDIG MIT DEM DACH VERSCHMOLZEN */}
              <polygon
                points="42,20 136,27.5 136,62 42,62"
                className="fill-[#F8FAFC] group-hover:fill-[#1E293B] stroke-[#0B0F19] group-hover:stroke-[#64748B] transition-colors duration-500"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Pultdachbalken mit Überstand (sitzt bündig auf der Fassade) */}
              <polygon
                points="38,19 140,27 139,30.5 38,22.5"
                className="fill-[#0B0F19] group-hover:fill-[#334155] stroke-[#0B0F19] group-hover:stroke-[#475569] transition-colors duration-500"
                strokeWidth="1"
                strokeLinejoin="round"
              />

              {/* Photovoltaik-Module (Aufdach-Montage mit Solarzellen-Gitter) */}
              <g transform="rotate(5.2 42 20)">
                <rect
                  x="44"
                  y="13"
                  width="90"
                  height="8.5"
                  rx="1"
                  className="fill-[#0284C7] group-hover:fill-[#0369A1] stroke-[#0369A1] group-hover:stroke-[#0284C7] transition-colors duration-500"
                  strokeWidth="1.2"
                />
                {/* Grid-Linien der Solarzellen */}
                <line x1="66" y1="13" x2="66" y2="21.5" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.8" />
                <line x1="88" y1="13" x2="88" y2="21.5" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.8" />
                <line x1="110" y1="13" x2="110" y2="21.5" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.8" />
              </g>

              {/* 3. FENSTER & LICHT-EFFEKT („In dem Haus brennt schön Licht“) */}
              {/* OG Fenster links */}
              <rect
                x="49"
                y="25"
                width="31"
                height="11"
                rx="1.5"
                className="fill-[#E0F2FE] group-hover:fill-[#FEF08A] stroke-[#0B0F19] group-hover:stroke-[#FACC15] group-hover:[filter:drop-shadow(0_0_8px_rgba(254,240,138,0.95))_drop-shadow(0_0_16px_rgba(250,204,21,0.85))] transition-all duration-500"
                strokeWidth="1.3"
              />
              {/* OG Fenster rechts */}
              <rect
                x="88"
                y="28"
                width="43"
                height="11"
                rx="1.5"
                className="fill-[#E0F2FE] group-hover:fill-[#FEF08A] stroke-[#0B0F19] group-hover:stroke-[#FACC15] group-hover:[filter:drop-shadow(0_0_8px_rgba(254,240,138,0.95))_drop-shadow(0_0_16px_rgba(250,204,21,0.85))] transition-all duration-500"
                strokeWidth="1.3"
              />

              {/* EG Panorama-Glasfront Wohnbereich */}
              <rect
                x="49"
                y="42"
                width="56"
                height="18"
                rx="1.5"
                className="fill-[#E0F2FE] group-hover:fill-[#FEF08A] stroke-[#0B0F19] group-hover:stroke-[#FACC15] group-hover:[filter:drop-shadow(0_0_10px_rgba(254,240,138,0.95))_drop-shadow(0_0_20px_rgba(250,204,21,0.9))] transition-all duration-500"
                strokeWidth="1.4"
              />
              {/* Fenstersprosse */}
              <line x1="77" y1="42" x2="77" y2="60" className="stroke-[#0B0F19] group-hover:stroke-[#FACC15] transition-colors duration-500" strokeWidth="1" />

              {/* Haustür mit Glaselement */}
              <rect
                x="112"
                y="42"
                width="20"
                height="20"
                rx="1"
                className="fill-[#F1F5F9] group-hover:fill-[#334155] stroke-[#0B0F19] group-hover:stroke-[#64748B] transition-colors duration-500"
                strokeWidth="1.4"
              />
              {/* Türgriff */}
              <line x1="116" y1="51" x2="116" y2="56" stroke="#0B0F19" strokeWidth="1.4" strokeLinecap="round" className="group-hover:stroke-white transition-colors" />
            </svg>
          </div>
        </div>

        {/* 3. VORDERGRUND: TYPOGRAFIE & CTA PFEIL (Mit sauberem Abstand zur Wärmepumpe!) */}
        <div className="relative z-30 flex items-center justify-between h-[70px] sm:h-[72px] px-5 sm:px-6 pr-4 sm:pr-5">
          <div className="flex items-center gap-3 sm:gap-3.5 pl-6 sm:pl-8">
            <span className="font-black text-[20px] sm:text-[23px] tracking-tight text-[#0B0F19] group-hover:text-white transition-colors duration-500 whitespace-nowrap drop-shadow-sm">
              {text}
            </span>

            {/* Action Pfeil-Kreis mit 3D Push (Komplett frei, verdeckt nichts!) */}
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] group-hover:from-[#A8AB1A] group-hover:to-[#ebd615] text-[#0B0F19] group-hover:text-[#0B0F19] group-hover:translate-x-1 group-hover:scale-105 transition-all duration-500 flex-shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>

        {/* Keyframe für den Lüfter der Wärmepumpe */}
        <style>{`
          @keyframes spinPumpFan {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </Link>
  );
};
