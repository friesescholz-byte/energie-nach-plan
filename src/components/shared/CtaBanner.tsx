import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/assets';
import { useContactModal } from '../../context/ContactModalContext';
import { CurvedWaveTop } from './CurvedWaveTransition';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  topBackground?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = 'Lassen Sie uns Ihr Gebäude zukunftssicher planen.',
  subtitle = 'In 15 Minuten klären wir telefonisch oder vor Ort in Drakenburg und Nienburg, welche Fördersätze und Heizungskonzepte für Ihr Objekt den höchsten wirtschaftlichen Nutzen bringen.',
  topBackground = 'bg-white'
}) => {
  const { openModal } = useContactModal();

  return (
    <div className="relative">
      {/* Geschwungener Übergang oben mit smaragdgrüner Designer-Linie */}
      <CurvedWaveTop fillNavy="#140F3E" className={topBackground} />

      {/* Haupt-Bereich in sattem Marken-Navy */}
      <section className="pt-20 pb-24 text-white relative overflow-hidden bg-[#140F3E]">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(27,23,84,0.7)_0%,rgba(14,10,45,0.95)_100%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#2DE054] text-xs font-bold mb-6 tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#2DE054]" />
            Unverbindliche Meister-Erstberatung
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-[1.15]">
            {title}
          </h2>

          <p className="mt-5 text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(45,224,84,0.35)] hover:shadow-[0_8px_24px_rgba(45,224,84,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Kostenloses Erstgespräch anfragen</span>
              <ArrowRight className="w-4 h-4 text-[#1B1754]" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-semibold text-sm sm:text-base border border-white/20 hover:border-white/35 backdrop-blur-sm hover:-translate-y-0.5 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#2DE054]" />
              <span>Direkt anrufen: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DE054]" />
              Keine Verkaufsabsicht für Heizgeräte
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DE054]" />
              100 % herstellerunabhängig
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2DE054]" />
              Gelistete dena-Experten (KfW/BAFA)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
