import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calculator } from 'lucide-react';
import { CurvedWaveTop, CurvedWaveBottom } from './CurvedWaveTransition';

interface InteractiveCalculatorTeaserProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  topBackground?: string;
  bottomBackground?: string;
}

export const InteractiveCalculatorTeaser: React.FC<InteractiveCalculatorTeaserProps> = ({
  eyebrow = 'Interaktiver Fördermittel- & Sanierungsrechner',
  title = 'Wie viel staatliche Förderung steht Ihrer Immobilie zu?',
  subtitle = 'Beantworten Sie 4 kurze Fragen zu Baujahr, aktueller Heizung und geplanter Maßnahme. Unser System berechnet sofort Ihre voraussichtliche Förderquote von bis zu 70 %.',
  buttonText = 'Jetzt Förderung berechnen (60 Sek.)',
  className = '',
  topBackground = 'bg-transparent',
  bottomBackground = 'bg-[#FAFBFC]'
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Eleganter geschwungener Übergang oben mit smaragdgrüner Designer-Linie */}
      <CurvedWaveTop fillNavy="#0B0F19" className={topBackground} />

      {/* Haupt-Bereich in sattem Marken-Navy ohne matschige Verläufe */}
      <section className="py-20 lg:py-28 text-white relative overflow-hidden bg-[#0B0F19]">
        {/* Dezentes Architektur-Gittermuster */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Feines Micro-Punkt-Raster */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1.2px, transparent 1.2px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Weicher radialer Vignette-Schleier */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(11, 15, 25,0.7)_0%,rgba(16,12,51,0.95)_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative bg-white/[0.04] backdrop-blur-xl p-8 sm:p-14 rounded-3xl border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Subtile Designer-Eckmarkierungen (Precision Engineering) */}
            <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#BBBE22]/40" />
            <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#BBBE22]/40" />
            <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#BBBE22]/40" />
            <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#BBBE22]/40" />

            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#BBBE22] text-xs font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#BBBE22]" />
                {eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                {subtitle}
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link
                to="/foerdermittel-sanierungscheck"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-[0_20px_35px_-5px_rgba(187, 190, 34,0.4)] hover:-translate-y-1 active:translate-y-0.5 border-b-[4px] border-b-[#929515]"
              >
                <Calculator className="w-5 h-5" />
                <span>{buttonText}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eleganter geschwungener Übergang unten mit smaragdgrüner Designer-Linie */}
      <CurvedWaveBottom fillNavy="#0B0F19" className={bottomBackground} />
    </div>
  );
};
