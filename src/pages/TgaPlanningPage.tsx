import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  CheckCircle2, 
  Building, 
  ArrowRight, 
  Layers, 
  FileSpreadsheet, 
  ShieldCheck, 
  Zap,
  Sparkles,
  Wind,
  FileCode,
  ThermometerSnowflake,
  Phone
} from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../constants/assets';
import { TrustBadgeBar } from '../components/shared/TrustBadgeBar';
import { InfiniteMarqueeSlider } from '../components/shared/InfiniteMarqueeSlider';
import { FounderTrustSection } from '../components/shared/FounderTrustSection';
import { InteractiveCalculatorTeaser } from '../components/shared/InteractiveCalculatorTeaser';
import { FaqAccordion } from '../components/shared/FaqAccordion';
import { CtaBanner } from '../components/shared/CtaBanner';
import { EcoHeroButton } from '../components/shared/EcoHeroButton';
import { SubpageHeroStage, SubpageHeroMobileImage } from '../components/shared/SubpageHeroStage';
import { useContactModal } from '../context/ContactModalContext';

export const TgaPlanningPage: React.FC = () => {
  const { openModal } = useContactModal();

  const tgaFaq = [
    {
      q: 'Nach welchen Leistungsphasen der HOAI arbeiten Sie?',
      a: 'Wir decken die HOAI § 56 Leistungsphasen 1 bis 8 modular ab: Von der Grundlagenermittlung und Vorplanung über die präzise Ausführungsplanung und Ausschreibung (LVs / GAEB) bis hin zur meisterlichen Fachbauleitung und Rechnungsprüfung vor Ort.'
    },
    {
      q: 'Welche Unterlagen benötigen Sie für eine raumweise Heizlastberechnung nach DIN 12831?',
      a: 'Ideal sind maßstäbliche Grundrisspläne, Schnitte, Ansichten sowie Angaben zum Wand- und Dachaufbau (U-Werte) und Fensterspezifikationen. Liegen keine Bestandspläne vor, können wir die Gebäudegeometrie vor Ort mit digitaler Laser-Messtechnik aufnehmen.'
    },
    {
      q: 'In welchen Dateiformaten liefern Sie die Berechnungsergebnisse?',
      a: 'Wir liefern die Ergebnisse standardmäßig als detaillierte PDF-Dokumentationen für Bauherren und Behörden sowie digital in gängigen Fachformaten (z. B. GAEB XML/X83 für Ausschreibungen, VdZ-Formulare für KfW/BAFA sowie CAD/DXF-Pläne).'
    },
    {
      q: 'Übernehmen Sie auch die Fachbauleitung und Abnahme vor Ort?',
      a: 'Ja, das ist unsere besondere Stärke. Als gelernte HWK-Heizungsbaumeister prüfen wir die Montagequalität direkt auf der Baustelle – von der korrekten Rohrverlegung über die Einregulierung der Heizkreise bis zur Freigabe der Fördermittelnachweise.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#E7F6F2] via-[#EDF8F5] to-white">
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1B1754 1px, transparent 1px),
              linear-gradient(to bottom, #1B1754 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* RECHTE HERO-BÜHNE (Desktop) */}
        <SubpageHeroStage 
          imageSrc={ASSETS.subpageHeroTgaPlanung}
          imageAlt="TGA-Fachplanung und Heizlastberechnung DIN 12831 Energie nach Plan"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="lg:w-[50%] xl:w-[48%] space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
              <Compass className="w-4 h-4 text-emerald-600" />
              <span>HOAI § 56 Fachplanung (Anlagengruppen 1–3 &amp; 8)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B1754] tracking-tight leading-[1.1]">
              TGA-Fachplanung mit meisterlicher Baustellen-Realität.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Präzise Dimensionierung statt Daumenwerte. Wir erstellen raumweise Heizlastberechnungen nach DIN EN 12831, Lüftungskonzepte nach DIN 1946-6 und Gebäudeenergetik nach DIN V 18599 – CAD-kompatibel, termintreu und haftungssicher.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-black text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-[0_20px_35px_-5px_rgba(45,224,84,0.4)] hover:-translate-y-1 active:translate-y-0.5 border-b-[4px] border-b-[#1b9e38]"
              >
                <span>Planungsanfrage stellen</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-300/80 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] bg-white/90 hover:bg-white text-slate-800 hover:text-[#1B1754] font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 group backdrop-blur-sm"
              >
                <span>Leistungsspektrum ansehen</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B1754] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Ansicht des Hero-Bildes */}
            <SubpageHeroMobileImage 
              imageSrc={ASSETS.subpageHeroTgaPlanung}
              imageAlt="TGA-Fachplanung und Heizlastberechnung DIN 12831 Energie nach Plan"
            />
          </div>
        </div>
      </section>

      {/* 2. DOCKED TRUST BADGE BAR */}
      <div className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadgeBar />
      </div>

      {/* 3. AUTOMATISCHER ENDLESS-DOPPELSLIDER */}
      <div className="mt-8">
        <InfiniteMarqueeSlider 
          eyebrow="Ingenieurwesen &amp; Ausführungsqualität"
          title="Technische Gebäudeausrüstung in Perfektion"
          subtitle="Verlässliche DIN-Berechnungen und meisterhafte Fachplanung für Architekten, Bauträger und Gewerbekunden."
        />
      </div>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 4. DAS TGA-LEISTUNGSSPEKTRUM IM DETAIL */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F4F6FB] via-[#F8FAFC] to-[#EFF2F8] relative" id="leistungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Fachdisziplinen &amp; Normen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Unsere Kernkompetenzen in der TGA-Fachplanung
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Exakt berechnet nach den jeweils gültigen DIN-Normen und anerkannten Regeln der Technik – für Wohn-, Nichtwohn- und Gewerbegebäude.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Leistung 1 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <FileSpreadsheet className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Heizlastberechnung nach DIN EN 12831
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Raumweise, exakte thermische Berechnung zur Vermeidung überdimensionierter Wärmepumpen, Kessel und Heizflächen. Verlässliche Grundlage für die Auslegung.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Reale Heizlast nach Raumgeometrie</span>
              </div>
            </div>

            {/* Leistung 2 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <Zap className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Hydraulischer Abgleich Verfahren B
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Rechtssichere Nachweise für KfW &amp; BAFA nach VdZ-Standard. Exakte Ermittlung von Vorlauftemperaturen, Massenströmen und Ventileinstellungen.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zwingende Fördervoraussetzung erfüllt</span>
              </div>
            </div>

            {/* Leistung 3 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <Wind className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Lüftungskonzepte nach DIN 1946-6
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Nachweis der lüftungstechnischen Notwendigkeit zum Feuchteschutz sowie fachgerechte Auslegung zentraler und dezentraler Be- und Entlüftungssysteme.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Schutz vor Schimmel &amp; Bauschäden</span>
              </div>
            </div>

            {/* Leistung 4 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <Building className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Nichtwohngebäude nach DIN V 18599
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Ganzheitliche energetische Fachplanung für Gewerbe- und Sonderbauten. Berechnung von Primärenergiebedarfen, Energieausweise und KfW-Konzepte.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>GEG- und KfW-Zulassung (z. B. KfW 299)</span>
              </div>
            </div>

            {/* Leistung 5 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <ThermometerSnowflake className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Sommerlicher Wärmeschutz (DIN 4108-2)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Thermische Gebäudesimulation zur Vermeidung sommerlicher Überhitzung. Gezielte Planung von passiven Sonnenschutz- und aktiven Kühlungslösungen.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Hoher Komfort ohne Klimalasten</span>
              </div>
            </div>

            {/* Leistung 6 */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 text-emerald-700 flex items-center justify-center shadow-xs transition-all duration-300 transform-gpu [transform-style:preserve-3d] group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.45)] group-hover:[transform:perspective(600px)_translateZ(16px)_rotateX(-8deg)_rotateY(10deg)_scale(1.1)]">
                <FileCode className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Ausschreibungstexte &amp; GAEB (X83)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Herstellerneutrale Leistungsverzeichnisse in GAEB XML zur direkten Einbindung in Ihre Ausschreibungssoftware. Für vergleichbare Handwerkerpreise.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100 % herstellerunabhängig formuliert</span>
              </div>
            </div>
          </div>

          {/* Spezifische TGA Call-to-Action Box */}
          <div className="mt-14 p-8 sm:p-11 rounded-3xl bg-gradient-to-br from-[#1B1754] via-[#1F1A60] to-[#140F3E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DE054]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2.5 text-center md:text-left relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#2DE054] text-xs font-bold uppercase tracking-wider border border-[#2DE054]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#2DE054]" />
                Für Architekten, Bauträger &amp; Bauherren
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Benötigen Sie eine DIN 12831 oder TGA-Fachplanung?
              </h4>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Reichen Sie Ihre Pläne digital ein. Wir liefern Ihnen prüffähige Berechnungen, hydraulische Netzauslegungen und herstellerneutrale Leistungsverzeichnisse nach HOAI.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openModal('fachbauleitung')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(45,224,84,0.35)] hover:shadow-[0_8px_24px_rgba(45,224,84,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 relative z-10"
            >
              <span>TGA-Planung unverbindlich anfragen</span>
              <ArrowRight className="w-4 h-4 text-[#1B1754]" />
            </button>
          </div>
        </div>
      </section>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 5. PERSÖNLICHER TRUST: INGENIEURS-PRÄZISION & MEISTERPRAXIS */}
      <FounderTrustSection 
        eyebrow="Meisterkompetenz seit 2008 / 2015"
        title="Ihre Baubegleiter mit Meisterbrief"
        subtitle="Als HWK-Heizungsbaumeister und zertifizierte Energieberater verbinden wir rechnerische Exzellenz mit echter Baustellenerfahrung. Wir sprechen die Sprache von Architekten und ausführenden Gewerken gleichermaßen."
        nicoQuote="„Ein theoretisch schöner Plan nützt nichts, wenn die Rohrleitungen auf der Baustelle kollidieren. Wir planen mit handwerklichem Verstand.“"
        janQuote="„Unsere DIN-Berechnungen sind das verlässliche Fundament, auf dem Architekten und Bauträger haftungssicher bauen können.“"
        heroWatermarkImage={ASSETS.subpageHeroTgaPlanung}
      />

      {/* 6. INTERAKTIVER FÖRDERMITTEL-CHECK TEASER */}
      <InteractiveCalculatorTeaser 
        topBackground="bg-transparent"
        bottomBackground="bg-[#F1F4FA]"
        className="-mt-16 sm:-mt-20 lg:-mt-24 relative z-20"
        eyebrow="Gewerbe- &amp; Mehrparteien-Planung"
        title="Planen Sie ein Gewerbe- oder Mehrfamilienhaus?"
        subtitle="Nutzen Sie die Bundesförderung für Nichtwohngebäude (NWG) und sichern Sie sich zinsgünstige KfW-Kredite mit meisterhafter Fachplanung."
        buttonText="TGA-Projektanfrage stellen"
      />

      {/* 7. FAQ AKKORDEON */}
      <FaqAccordion 
        items={tgaFaq}
        title="Häufige Fragen zur TGA-Fachplanung"
        subtitle="Alles zu HOAI-Leistungsphasen, DIN-Normen und Schnittstellen mit Architekturbüros."
      />

      {/* 8. FINAL CALL TO ACTION */}
      <CtaBanner 
        topBackground="bg-[#EEF2F9]"
        title="Lassen Sie uns Ihre TGA-Fachplanung präzise aufsetzen."
        subtitle="In 15 Minuten klären wir telefonisch oder persönlich den Umfang Ihres Projekts und erstellen ein verbindliches HOAI-Angebot."
      />
    </div>
  );
};
