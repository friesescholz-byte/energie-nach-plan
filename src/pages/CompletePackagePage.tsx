import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Sparkles, 
  Layers,
  ShieldCheck,
  Wrench,
  Calculator,
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

export const CompletePackagePage: React.FC = () => {
  const { openModal } = useContactModal();

  const faqData = [
    {
      q: 'Wie lange dauert die Erstellung des individuellen Sanierungsfahrplans (iSFP)?',
      a: 'Nach unserem ausführlichen Vor-Ort-Termin liegt Ihnen der fertige, vom BAFA geprüfte Sanierungsfahrplan in der Regel innerhalb von 3 bis 5 Wochen vor. Bei dringendem Heizungstausch können wir Vorab-Berechnungen für die KfW-Antragstellung auch kurzfristig priorisieren.'
    },
    {
      q: 'Bin ich verpflichtet, alle Maßnahmen aus dem Sanierungsfahrplan umzusetzen?',
      a: 'Nein, keineswegs. Der iSFP ist ein modularer 15-Jahre-Masterplan. Sie entscheiden völlig frei, ob und wann Sie welche Sanierungsstufe umsetzen. Das Beste: Sie sichern sich den 5 % Extra-Förderbonus für jede einzelne Hüllmaßnahme, die Sie innerhalb der 15 Jahre umsetzen.'
    },
    {
      q: 'Kann ich mit meinen eigenen regionalen Handwerksbetrieben arbeiten?',
      a: 'Ja, absolut. Wir sind ein 100 % hersteller- und installateurunabhängiges Planungsbüro. Sie können Ihre vertrauten Handwerksbetriebe beauftragen – wir unterstützen diese mit exakten Leistungsverzeichnissen, prüfen die Angebote neutral und sichern die technische Förderfähigkeit ab.'
    },
    {
      q: 'Was unterscheidet Energie nach Plan von klassischen Energieberatern?',
      a: 'Die meisten Energieberater sind reine Theoretiker am Schreibtisch. Wir sind beide gelernte HWK-Heizungsbaumeister mit über 15 Jahren Baustellenerfahrung. Wir planen nur, was technisch auf der Baustelle wirklich machbar, langlebig und wirtschaftlich sinnvoll ist.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Fließender Mint-zu-Weiß Verlauf & Blueprint Pattern) */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#E7F6F2] via-[#EDF8F5] to-white">
        {/* Subtiles Blueprint Raster */}
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
          imageSrc={ASSETS.subpageHeroKomplettpaket}
          imageAlt="Komplettpaket energetische Sanierung und Fachbauleitung Energie nach Plan"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="lg:w-[50%] xl:w-[48%] space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Das Rundum-Sorglos-Meisterpaket</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B1754] tracking-tight leading-[1.1]">
              Kein Schnittstellen-Chaos. Keine bösen Überraschungen auf der Baustelle.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Wir verbinden unabhängige Energieberatung mit meisterlicher Bauleitung. Sie erhalten einen festen 15-Jahre-Fahrplan, die maximale KfW-Förderung von bis zu 70 % und die lückenlose Qualitätskontrolle Ihrer Handwerker vor Ort.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal('isfp')}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-black text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-[0_20px_35px_-5px_rgba(45,224,84,0.4)] hover:-translate-y-1 active:translate-y-0.5 border-b-[4px] border-b-[#1b9e38]"
              >
                <span>Kostenloses Erstgespräch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-300/80 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] bg-white/90 hover:bg-white text-slate-800 hover:text-[#1B1754] font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 group backdrop-blur-sm"
              >
                <span>Ablauf im Detail</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B1754] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Ansicht des Hero-Bildes */}
            <SubpageHeroMobileImage 
              imageSrc={ASSETS.subpageHeroKomplettpaket}
              imageAlt="Komplettpaket energetische Sanierung und Fachbauleitung Energie nach Plan"
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
          eyebrow="Meisterliche Baupraxis"
          title="Präzision auf der Baustelle in Bildern"
          subtitle="Von der exakten raumweisen Berechnung über modernste Wärmepumpen- und Solaranlagen bis zur schlüsselfertigen Abnahme."
        />
      </div>

      {/* Feine, minimalistische Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 4. DER 3-PHASEN-MEISTERPROZESS (Editorial & Großzügig) */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F4F6FB] via-[#F8FAFC] to-[#EFF2F8] relative" id="ablauf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Lückenlose Begleitung
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Der Sanierungsablauf im Detail
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Kein Schritt wird dem Zufall überlassen. Drei Phasen sichern Ihnen maximale Fördermittel und höchste handwerkliche Ausführungsqualität.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
            
            {/* Phase 1 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm group">
                <img 
                  src={ASSETS.phaseAnalyseIsfp} 
                  alt="Vor-Ort Analyse und Energieaudit durch Handwerksmeister" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-[#2DE054]" />
                  <span>Analyse &amp; Strategie</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] tracking-tight">
                  Bestandsaufnahme &amp; Sanierungsfahrplan (iSFP)
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Wir begehen Ihre Immobilie von Keller bis Dach. Mit modernster Messtechnik ermitteln wir Wärmeverluste, analysieren Vorlauftemperaturen und berechnen die raumweise Heizlast nach DIN 12831. Sie erhalten einen maßgeschneiderten 15-Jahre-Plan.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Bis zu 80 % BAFA-Zuschuss</strong> auf das Beratungshonorar direkt gesichert</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Raumweise Heizlastberechnung DIN 12831</strong> (Reale Werte statt Daumenmaß)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>5 % Extra-Förderbonus (iSFP-Bonus)</strong> für alle künftigen Hüllmaßnahmen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm group order-first lg:order-last">
                <img 
                  src={ASSETS.phaseFoerderantrag} 
                  alt="Angebotsprüfung, Baupläne und Förderantrag" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-[#2DE054]" />
                  <span>Ausschreibung &amp; Fördersicherung</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] tracking-tight">
                  Herstellerneutrale Ausschreibung &amp; KfW-Antrag
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Sie holen Angebote ein – wir prüfen diese unabhängig auf Herz und Nieren. Wir kontrollieren, ob alle technischen Mindestanforderungen der KfW/BAFA erfüllt sind und stellen den Förderantrag rechtssicher vor Auftragsvergabe.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>100 % herstellerunabhängig:</strong> Wir prüfen Fabrikate ohne Provisionsbindung</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Rechtssichere KfW 458 &amp; BAFA-Antragstellung</strong> vor Vertragsunterschrift</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Bis zu 70 % staatlicher Zuschuss</strong> (max. 21.000 € gesichert)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm group">
                <img 
                  src={ASSETS.phaseAbnahmeBauleitung} 
                  alt="Fachbauleitung, Qualitätsprüfung und Abnahme" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs uppercase tracking-wider border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-[#2DE054]" />
                  <span>Qualität &amp; Endabnahme</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] tracking-tight">
                  Unabhängige Fachbauleitung &amp; Abnahmekontrolle
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Als Handwerksmeister prüfen wir vor Ort auf der Baustelle, ob die ausführenden Firmen alle Vorgaben exakt einhalten. Wir kontrollieren den hydraulischen Abgleich nach Verfahren B und erstellen den Verwendungsnachweis für die sofortige Zuschussauszahlung.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Vor-Ort-Kontrolltermine</strong> durch echte HWK-Heizungsbaumeister</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Prüfung des hydraulischen Abgleichs</strong> (Verfahren B nach VdZ-Formular)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Bestätigung nach Durchführung (BnD)</strong> für 100 % beanstandungsfreie Auszahlung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spezifische Komplettpaket Call-to-Action Box */}
            <div className="mt-14 p-8 sm:p-11 rounded-3xl bg-gradient-to-br from-[#1B1754] via-[#1F1A60] to-[#140F3E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DE054]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-2.5 text-center md:text-left relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#2DE054] text-xs font-bold uppercase tracking-wider border border-[#2DE054]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#2DE054]" />
                  100 % Rundum-Sorglos-Garantie
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Möchten Sie Ihr Komplettpaket schlüsselfertig anfragen?
                </h4>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                  Wir begleiten Sie vom ersten iSFP-Vor-Ort-Termin über die KfW-Förderung bis zur finalen Bauabnahme durch Nico Heidemann und Jan Osmer.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openModal('isfp')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(45,224,84,0.35)] hover:shadow-[0_8px_24px_rgba(45,224,84,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 relative z-10"
              >
                <span>Komplettpaket unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4 text-[#1B1754]" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 5. PERSÖNLICHER TRUST: DIE MEISTER AN IHRER SEITE */}
      <FounderTrustSection 
        eyebrow="Inhabergeführt &amp; Unabhängig"
        title="Ihre Baubegleiter mit Meisterbrief"
        subtitle="Zwei Handwerksmeister, eine gemeinsame Mission: Wir bringen über 15 Jahre handwerkliche Praxiserfahrung direkt an Ihren Planungstisch – ehrlich, unabhängig und mit meisterlicher Präzision."
        nicoQuote="„Ein Sanierungsfahrplan darf kein starres Bürokratie-Dokument sein. Er muss auf der Baustelle funktionieren und Ihnen bares Geld sparen.“"
        janQuote="„Wir verkaufen keine Geräte auf Hersteller-Provision. Wir prüfen neutral, was technisch und wirtschaftlich wirklich Sinn ergibt.“"
        heroWatermarkImage={ASSETS.subpageHeroKomplettpaket}
      />

      {/* 6. INTERAKTIVER FÖRDERMITTEL-CHECK TEASER */}
      <InteractiveCalculatorTeaser 
        topBackground="bg-transparent"
        bottomBackground="bg-[#F1F4FA]"
        className="-mt-16 sm:-mt-20 lg:-mt-24 relative z-20"
      />

      {/* 7. FAQ AKKORDEON */}
      <FaqAccordion 
        items={faqData}
        title="Häufige Fragen zum Komplettpaket"
        subtitle="Alles, was Sie über den Ablauf, Fördermittel und die Zusammenarbeit wissen müssen."
      />

      {/* 8. FINAL CALL TO ACTION */}
      <CtaBanner 
        topBackground="bg-[#EEF2F9]"
        title="Starten Sie Ihre Sanierung auf sicherem Fundament."
        subtitle="In 15 Minuten klären wir telefonisch oder vor Ort, welche Fördersätze und Sanierungsschritte für Ihre Immobilie den höchsten wirtschaftlichen Nutzen bringen."
      />
    </div>
  );
};
