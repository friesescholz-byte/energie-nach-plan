import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Phone, Check } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../../constants/assets';
import { useContactModal } from '../../context/ContactModalContext';

interface FounderTrustSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  nicoQuote?: string;
  janQuote?: string;
  heroWatermarkImage?: string;
  className?: string;
}

/**
 * Modernes, kachelloses Duo-Leadership-Layout für Nico Heidemann & Jan Osmer.
 * Förmliche, seriöse redaktionelle Typografie ohne kitschige Pill-Badges,
 * mit großzügigem Weißraum und einem feststehenden, dezenten Hero-Wasserzeichen im Hintergrund.
 */
export const FounderTrustSection: React.FC<FounderTrustSectionProps> = ({
  eyebrow = 'Inhabergeführt & Unabhängig',
  title = 'Ihre Baubegleiter mit Meisterbrief',
  subtitle = 'Als Inhaber verbinden wir über 15 Jahre handwerkliche Praxiserfahrung auf der Baustelle mit zertifizierter Ingenieurspräzision am Planungstisch – persönlich, unabhängig und ohne Verkaufsdruck.',
  nicoQuote = '„Ein Sanierungsfahrplan darf kein starres Bürokratie-Dokument sein. Er muss auf der Baustelle funktionieren und Ihnen bares Geld sparen.“',
  janQuote = '„Wir verkaufen keine Geräte auf Hersteller-Provision. Wir prüfen vor Ort neutral, was technisch und wirtschaftlich wirklich Sinn ergibt.“',
  heroWatermarkImage = ASSETS.heroCutaway,
  className = ''
}) => {
  const { openModal } = useContactModal();

  return (
    <section 
      className={`pt-24 sm:pt-28 pb-14 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#FAFBFC] via-white to-[#F3F6FA] relative overflow-hidden ${className}`} 
      id="ueber-uns-preview"
    >
      {/* 1. Feststehendes Hero-Hintergrundbild mit weicher Vignette in der exakten Abschnitts-Hintergrundfarbe */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0 bg-no-repeat bg-right-center sm:bg-fixed bg-contain lg:bg-[length:48%] opacity-[0.18] grayscale contrast-125"
          style={{ 
            backgroundImage: `url(${heroWatermarkImage})`,
            backgroundPosition: 'right 4% center',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 75% 50%, black 20%, rgba(0,0,0,0.7) 55%, transparent 95%)',
            maskImage: 'radial-gradient(ellipse 80% 75% at 75% 50%, black 20%, rgba(0,0,0,0.7) 55%, transparent 95%)'
          }}
        />

        {/* Echte radiale Vignette in der exakten Hintergrundfarbe des Abschnitts (#FAFBFC / Weiß) */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 78% 72% at 75% 50%, transparent 20%, rgba(250, 251, 252, 0.45) 52%, rgba(250, 251, 252, 0.85) 75%, #FAFBFC 100%)'
          }}
        />

        {/* Zusätzliche Kantenverläufe in Abschnittsfarbe für vollkommen nahtlose Übergänge oben, unten und links */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#FAFBFC] via-[#FAFBFC]/95 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FAFBFC] via-[#FAFBFC]/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F3F6FA] via-[#F3F6FA]/60 to-transparent pointer-events-none" />
      </div>

      {/* 2. Sanfte dezent kühle Ambient-Lichter für Tiefenwirkung */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="mb-4">
            <span className="badge-eyebrow">
              {eyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight leading-[1.15]">
            {title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Gemeinsame Duo-Bühne: Asymmetrisches redaktionelles 2-Spalten-Layout OHNE Kacheln */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Linke Spalte: Beide Gründer gemeinsam dargestellt (Duo-Showcase, freistehend ohne störende Kasten-Überlagerung) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Feine Ambient-Aura hinter den Köpfen */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

              {/* Das gemeinsame Team-Porträt von Nico & Jan */}
              <div className="relative z-10 flex justify-center">
                <img 
                  src={ASSETS.foundersDuoPortrait} 
                  alt="Nico Heidemann und Jan Osmer - Gründer und Heizungsbaumeister HWK Energie nach Plan" 
                  className="w-full max-w-[420px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(11, 15, 25,0.15)]"
                />
              </div>

              {/* Förmliche, ruhige Typografie direkt unter dem Porträt – kein störender Card-Kasten */}
              <div className="mt-5 text-center">
                <div className="text-base sm:text-lg font-black text-[#0B0F19] tracking-tight">
                  Nico Heidemann &amp; Jan Osmer
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Geschäftsführer &amp; Handwerksmeister HWK
                </p>
                <p className="text-xs text-slate-700 font-bold uppercase tracking-wider mt-1">
                  Meister seit 2008 &amp; 2015 · Drakenburg (Landkreis Nienburg)
                </p>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Redaktioneller, förmlicher Fließtext OHNE Kacheln - seriös, klar und lesefreundlich */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Nico Heidemann - Redaktioneller Bereich */}
            <div className="space-y-3.5">
              <div className="border-b border-slate-200/80 pb-2.5">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                  Nico Heidemann
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mt-1">
                  HWK-Heizungsbaumeister seit 2008 · Gebäudeenergieberater HWK
                </p>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-700 font-medium italic border-l-2 border-[#BBBE22] pl-4 py-1 leading-relaxed">
                {nicoQuote}
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span>Raumweise Heizlastberechnung DIN 12831</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span>dena-Energieeffizienz-Experte (KfW/BAFA)</span>
                </div>
              </div>
            </div>

            {/* Feine Trennlinie */}
            <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

            {/* Jan Osmer - Redaktioneller Bereich */}
            <div className="space-y-3.5">
              <div className="border-b border-slate-200/80 pb-2.5">
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                  Jan Osmer
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mt-1">
                  HWK-Heizungsbaumeister seit 2015 · TGA-Fachplanung &amp; Bauleitung
                </p>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-700 font-medium italic border-l-2 border-[#BBBE22] pl-4 py-1 leading-relaxed">
                {janQuote}
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span>Hydraulischer Abgleich nach Verfahren B</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  <span>Unabhängige Qualitätskontrolle vor Ort</span>
                </div>
              </div>
            </div>

            {/* Gemeinsame Kontakt- und Aktionszeile */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(187, 190, 34,0.35)] hover:shadow-[0_8px_24px_rgba(187, 190, 34,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Erstgespräch mit Nico &amp; Jan anfragen</span>
                <ArrowRight className="w-4 h-4 text-[#0B0F19]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-slate-300/80 bg-white/90 hover:bg-white text-slate-800 font-bold text-sm transition-all shadow-sm hover:border-[#0B0F19]"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Hotline: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Feine Qualitäts-Zertifikatsleiste unten */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-slate-700" />
            <span>100 % herstellerneutral &amp; provisionsfrei</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-slate-700" />
            <span>Zugelassen für KfW &amp; BAFA Bundesförderung</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-slate-700" />
            <span>Persönliche Betreuung durch die Handwerksmeister</span>
          </div>
        </div>

      </div>
    </section>
  );
};
