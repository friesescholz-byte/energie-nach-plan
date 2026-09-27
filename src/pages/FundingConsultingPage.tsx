import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Coins, 
  ShieldCheck, 
  Percent, 
  FileCheck,
  Sparkles,
  TrendingUp,
  Award
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

export const FundingConsultingPage: React.FC = () => {
  const { openModal } = useContactModal();

  const fundingFaq = [
    {
      q: 'Wann genau muss der Förderantrag bei der KfW gestellt werden?',
      a: 'Zwingend VOR Beginn der Bauarbeiten bzw. vor Auftragsvergabe. Schließen Sie bereits einen Handwerkervertrag ab, muss dieser eine rechtsgültige Klausel mit „aufschiebender oder auflösender Bedingung der Förderzusage“ enthalten. Wir formulieren diese Klausel für Sie rechtssicher, damit Ihr Förderanspruch zu 100 % geschützt bleibt.'
    },
    {
      q: 'Wie hoch ist die maximale Auszahlungssumme bei der KfW 458?',
      a: 'Bei einem Einfamilienhaus sind bis zu 30.000 € der Anschaffungs- und Installationskosten förderfähig. Bei einem maximalen Fördersatz von 70 % erhalten Sie somit bis zu 21.000 € als reinen, nicht rückzahlbaren Zuschuss direkt auf Ihr Konto überwiesen.'
    },
    {
      q: 'Wird auch die Fachplanung und Energieberatung staatlich bezuschusst?',
      a: 'Ja! Das BAFA bezuschusst die Fachplanung und Baubegleitung durch zugelassene Energieeffizienz-Experten mit bis zu 50 % der förderfähigen Kosten (maximal 2.500 € bei Ein- und Zweifamilienhäusern bzw. bis zu 2.000 € pro Wohneinheit bei Mehrfamilienhäusern). Sie zahlen also nur einen Bruchteil unseres Honorars selbst.'
    },
    {
      q: 'Gilt die 70 % Förderung auch für Vermieter oder Zweitwohnsitze?',
      a: 'Vermieter und Eigentümer von Zweitwohnsitzen erhalten die reguläre Grundförderung von 30 % sowie gegebenenfalls den Effizienzbonus von 5 % (gesamt bis zu 35 %). Der 20 % Geschwindigkeitsbonus und der einkommensabhängige Zusatzbonus sind selbstnutzenden Eigentümern vorbehalten.'
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
          imageSrc={ASSETS.subpageHeroFoerdermittel}
          imageAlt="KfW und BAFA Fördermittelberatung Energie nach Plan"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="lg:w-[50%] xl:w-[48%] space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
              <Coins className="w-4 h-4 text-emerald-600" />
              <span>Bundesförderung für effiziente Gebäude (BEG)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B1754] tracking-tight leading-[1.1]">
              Holen Sie sich bis zu 70 % Zuschuss. Ohne bürokratische Fallstricke.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Die aktuellen KfW- und BAFA-Richtlinien bieten historische Höchstfördersätze von bis zu 21.000 € Barzuschuss – sind aber voller Formfehler-Fallen. Wir sichern Ihre Förderquote 100 % rechtssicher vor Auftragsvergabe.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/foerdermittel-sanierungscheck"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-black text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-[0_20px_35px_-5px_rgba(45,224,84,0.4)] hover:-translate-y-1 active:translate-y-0.5 border-b-[4px] border-b-[#1b9e38]"
              >
                <Calculator className="w-5 h-5" />
                <span>Förderanspruch in 60 Sek. berechnen</span>
              </Link>

              <a
                href="#foerderstufen"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-300/80 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] bg-white/90 hover:bg-white text-slate-800 hover:text-[#1B1754] font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 group backdrop-blur-sm"
              >
                <span>Förderstufen im Detail</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B1754] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Ansicht des Hero-Bildes */}
            <SubpageHeroMobileImage 
              imageSrc={ASSETS.subpageHeroFoerdermittel}
              imageAlt="KfW und BAFA Fördermittelberatung Energie nach Plan"
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
          eyebrow="Staatlich geförderte Projekte"
          title="Erfolgreich bewilligte Förderprojekte"
          subtitle="Über 350+ begleitete Heizungserneuerungen, Wärmepumpen-Installationen und Sanierungen ohne eine einzige Förderkürzung."
        />
      </div>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 4. DIE TRANSPARENTE ZUSCHUSS-MATRIX (KfW 458 Aufschlüsselung) */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F4F6FB] via-[#F8FAFC] to-[#EFF2F8] relative" id="foerderstufen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              KfW 458 Heizungstausch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              So setzt sich Ihr Zuschuss von bis zu 70 % zusammen
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Die Bundesförderung für effiziente Gebäude (BEG EM) kombiniert mehrere Bausteine. Wir optimieren Ihren Antrag auf das gesetzliche Maximum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Box 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[#1B1754] tracking-tight block mb-3">
                  30 %
                </span>
                <h3 className="text-lg font-black text-[#1B1754] mb-2">
                  Grundförderung
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Gilt für alle privaten Eigentümer beim Einbau einer förderfähigen Wärmepumpe, Biomasseanlage oder Hybridheizung.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Basis für jeden Eigentümer</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight block mb-3">
                  + 20 %
                </span>
                <h3 className="text-lg font-black text-[#1B1754] mb-2">
                  Geschwindigkeitsbonus
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Für selbstnutzende Eigentümer bei vorzeitigem Austausch einer funktionierenden Öl-, Kohle-, Gas- oder Nachtspeicherheizung.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Klima-Geschwindigkeit</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[#1B1754] tracking-tight block mb-3">
                  + 5 %
                </span>
                <h3 className="text-lg font-black text-[#1B1754] mb-2">
                  Effizienzbonus
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Für Wärmepumpen mit natürlichem Kältemittel (z. B. R290 / Propan) oder bei Nutzung von Erdwärme / Grundwasser als Wärmequelle.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Natürliche Kältemittel</span>
              </div>
            </div>

            {/* Box 4: Maximum Box */}
            <div className="bg-[#1B1754] text-white rounded-3xl p-8 shadow-xl border border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#2DE054]/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="text-4xl sm:text-5xl font-black text-[#2DE054] tracking-tight block mb-3">
                  = 70 %
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  Maximaler Zuschuss
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  Gesamtzuschuss gedeckelt auf max. 70 % von 30.000 € förderfähigen Kosten. Das entspricht bis zu <strong>21.000 € Direktzuschuss</strong>.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-black text-[#2DE054]">
                <Sparkles className="w-4 h-4 text-[#2DE054]" />
                <span>Maximaler Förderbetrag</span>
              </div>
            </div>
          </div>

          {/* iSFP Zusatz-Karte */}
          <div className="mt-10 max-w-6xl mx-auto p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/60">
                Zusatzbonus für die Gebäudehülle
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#1B1754]">
                Der iSFP-Bonus: + 5 % Extra &amp; doppeltes Fördervolumen
              </h4>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Für alle weiteren Maßnahmen (Dämmung, neue Fenster, Lüftung) steigt die Förderung mit Sanierungsfahrplan von 15 % auf 20 % – und das förderfähige Budget verdoppelt sich von 30.000 € auf <strong>60.000 € pro Wohneinheit</strong>!
              </p>
            </div>
            <Link
              to="/komplettpaket-sanierung"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-[#1B1754] text-[#1B1754] hover:text-white font-bold text-sm border border-slate-200 border-b-[3px] border-b-slate-300 hover:border-b-[#110e38] transition-all flex-shrink-0"
            >
              <span>Sanierungsfahrplan ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 5. DIE 3 GEFÄHRLICHSTEN FÖRDERFALLEN (Problem-Agitate) */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#EFF2F8] via-white to-[#F0F3F9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-widest mb-4 border border-rose-200/80">
              Vermeidbare Kostenfallen
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Die 3 teuersten Fehler bei der KfW-Antragstellung
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Ein falscher Satz im Vertrag oder ein verpasster Fristtermin führt zum Totalverlust der Förderung. Wir sichern Sie dagegen lückenlos ab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Falle 1 - Vorzeitiger Vorhabensbeginn */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center">
                <div className="inline-flex items-center px-3.5 py-2 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs group-hover:border-[#2DE054]/60 group-hover:bg-white group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.22)] transition-all duration-300 transform-gpu group-hover:[transform:perspective(600px)_translateZ(12px)_rotateX(-4deg)_rotateY(4deg)_scale(1.04)]">
                  <img 
                    src="/logo_horizontal_navy.png" 
                    alt="Energie nach Plan" 
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Vorzeitiger Vorhabensbeginn
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Wer einen Handwerkervertrag unterschreibt, bevor der Antrag gestellt wurde (oder ohne die vorgeschriebene aufschiebende Bedingungsklausel), verliert den Förderanspruch für immer.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Wir liefern die rechtssichere Klausel</span>
              </div>
            </div>

            {/* Falle 2 - Fehlende Mindestanforderungen */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center">
                <div className="inline-flex items-center px-3.5 py-2 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs group-hover:border-[#2DE054]/60 group-hover:bg-white group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.22)] transition-all duration-300 transform-gpu group-hover:[transform:perspective(600px)_translateZ(12px)_rotateX(-4deg)_rotateY(4deg)_scale(1.04)]">
                  <img 
                    src="/logo_horizontal_navy.png" 
                    alt="Energie nach Plan" 
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Fehlende Mindestanforderungen
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Die KfW verlangt exakte technische Parameter: Jahresarbeitszahl, raumweise Heizlastberechnung und hydraulischer Abgleich nach Verfahren B. Fehlt nur ein Detail, wird der Zuschuss gestrichen.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Wir prüfen Angebote vor Unterschrift</span>
              </div>
            </div>

            {/* Falle 3 - Fehlerhafter Verwendungsnachweis */}
            <div className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-5 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center">
                <div className="inline-flex items-center px-3.5 py-2 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-xs group-hover:border-[#2DE054]/60 group-hover:bg-white group-hover:shadow-[0_12px_24px_-6px_rgba(45,224,84,0.22)] transition-all duration-300 transform-gpu group-hover:[transform:perspective(600px)_translateZ(12px)_rotateX(-4deg)_rotateY(4deg)_scale(1.04)]">
                  <img 
                    src="/logo_horizontal_navy.png" 
                    alt="Energie nach Plan" 
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#1B1754]">
                Fehlerhafter Verwendungsnachweis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Nach Fertigstellung muss die Bestätigung nach Durchführung (BnD) von einem gelisteten Energieeffizienz-Experten eingereicht werden. Handwerkerrechnungen müssen exakte Pflichtangaben enthalten.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-800 flex items-center gap-2 border-t border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Wir übernehmen die komplette Endabnahme</span>
              </div>
            </div>
          </div>

          {/* Spezifische Fördermittel Call-to-Action Box */}
          <div className="mt-14 max-w-6xl mx-auto p-8 sm:p-11 rounded-3xl bg-gradient-to-br from-[#1B1754] via-[#1F1A60] to-[#140F3E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DE054]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2.5 text-center md:text-left relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#2DE054] text-xs font-bold uppercase tracking-wider border border-[#2DE054]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#2DE054]" />
                100 % Rechtssicherheit vor Auftragsvergabe
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Möchten Sie bis zu 21.000 € Barzuschuss sicher beantragen?
              </h4>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Wir erstellen Ihre Bestätigung zum Antrag (BzA), formulieren die Handwerkerklausel und garantieren die maximale Ausschöpfung aller Boni.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openModal('foerderung')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(45,224,84,0.35)] hover:shadow-[0_8px_24px_rgba(45,224,84,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 relative z-10"
            >
              <span>Förderantrag jetzt absichern</span>
              <ArrowRight className="w-4 h-4 text-[#1B1754]" />
            </button>
          </div>
        </div>
      </section>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 6. PERSÖNLICHER TRUST: GELICHTETE EXPERTEN DER DENA */}
      <FounderTrustSection 
        eyebrow="Gelistete dena-Experten &amp; HWK-Meister"
        title="Ihre Baubegleiter mit Meisterbrief"
        subtitle="Die KfW schreibt vor: Nur bundesweit anerkannte Energieeffizienz-Experten dürfen Förderanträge und technische Bestätigungen (BzA / BnD) rechtssicher freigeben. Wir verbinden diese Zulassung mit meisterlicher Praxiskompetenz direkt auf Ihrer Baustelle."
        nicoQuote="„Bürokratie darf Sie nicht um Ihren Förderanspruch bringen. Wir machen die Beantragung für Sie stressfrei und 100 % rechtssicher.“"
        janQuote="„Wir optimieren jeden Förderantrag so, dass Sie wirklich den maximalen Cent an staatlichen Mitteln ausgeschöpft bekommen.“"
        heroWatermarkImage={ASSETS.subpageHeroFoerdermittel}
      />

      {/* 7. INTERAKTIVER FÖRDERMITTEL-CHECK TEASER */}
      <InteractiveCalculatorTeaser 
        topBackground="bg-transparent"
        bottomBackground="bg-[#F1F4FA]"
        className="-mt-16 sm:-mt-20 lg:-mt-24 relative z-20"
      />

      {/* 8. FAQ AKKORDEON */}
      <FaqAccordion 
        items={fundingFaq}
        title="Häufige Fragen zur Fördermittelberatung"
        subtitle="Alles zu Antragsfristen, Auszahlungsprozessen und der 70 % Förderung."
      />

      {/* 9. FINAL CALL TO ACTION */}
      <CtaBanner 
        topBackground="bg-[#EEF2F9]"
        title="Lassen Sie uns Ihre maximale Förderung sichern."
        subtitle="In 15 Minuten klären wir telefonisch oder vor Ort, welche Boni Ihnen zustehen und wie wir Ihren Förderantrag rechtssicher aufsetzen."
      />
    </div>
  );
};
