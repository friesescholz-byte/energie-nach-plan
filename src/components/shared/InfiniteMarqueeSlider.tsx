import React from 'react';
import { ASSETS } from '../../constants/assets';

interface InfiniteMarqueeSliderProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  row1Images?: string[];
  row2Images?: string[];
  className?: string;
}

const DEFAULT_ROW_1 = [
  ASSETS.heatpumpExterior,
  ASSETS.planingDetail,
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  ASSETS.modernHeatingSystem,
  ASSETS.buildingBlueprint,
  ASSETS.consultingScene,
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
];

const DEFAULT_ROW_2 = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  ASSETS.boilerRoomCheck,
  ASSETS.measurementDevice,
  ASSETS.renovationHighRes1,
  ASSETS.trapHeatingAltbau,
  ASSETS.renovationHighRes2,
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
];

export const InfiniteMarqueeSlider: React.FC<InfiniteMarqueeSliderProps> = ({
  eyebrow = 'Meisterliche Praxis & Bau-Realität',
  title = 'Einblick in echte Planungs- und Sanierungsprojekte',
  subtitle = 'Von der exakten raumweisen Berechnung über modernste Wärmepumpen- und Solaranlagen bis zur schlüsselfertigen Abnahme.',
  row1Images = DEFAULT_ROW_1,
  row2Images = DEFAULT_ROW_2,
  className = ''
}) => {
  // Duplicate for seamless 50% translation loop
  const row1 = [...row1Images, ...row1Images];
  const row2 = [...row2Images, ...row2Images];

  return (
    <section className={`py-20 lg:py-28 overflow-hidden relative ${className}`}>
      {/* Optional Editorial Header */}
      {title && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
          {eyebrow && (
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-3 border border-emerald-200/80">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Marquee Container mit weichen Kantenmasken */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Row 1: Left */}
        <div className="flex gap-5 sm:gap-6 mb-5 sm:mb-6 animate-marquee-left">
          {row1.map((src, index) => (
            <div
              key={`r1-${index}`}
              className="w-[280px] sm:w-[360px] lg:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm flex-shrink-0 group relative cursor-pointer"
            >
              <img
                src={src}
                alt="Energie nach Plan Praxisprojekt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Sehr dezenter, edler Glanz-Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1754]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Row 2: Also Left (same direction) */}
        <div className="flex gap-5 sm:gap-6 animate-marquee-left-slow">
          {row2.map((src, index) => (
            <div
              key={`r2-${index}`}
              className="w-[280px] sm:w-[360px] lg:w-[420px] aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm flex-shrink-0 group relative cursor-pointer"
            >
              <img
                src={src}
                alt="Energie nach Plan Praxisprojekt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1754]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
