import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  CheckCircle2, 
  FileText, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Scale, 
  PhoneCall, 
  Award,
  Clock,
  Sparkles,
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

export const PropertyManagersPage: React.FC = () => {
  const { openModal } = useContactModal();

  const wegFaq = [
    {
      q: 'Kommen Sie persönlich zur Eigentümerversammlung (ETV)?',
      a: 'Ja, selbstverständlich. Wir stellen den technischen Sanierungsfahrplan und die Wirtschaftlichkeitsberechnung persönlich auf Ihrer Versammlung vor und beantworten alle Fragen der Eigentümer und Beiräte. Das nimmt Ihnen als Verwalter den Druck und sorgt für hohe Beschlussquoten.'
    },
    {
      q: 'Wie berechnet sich die KfW-Förderung bei Mehrfamilienhäusern?',
      a: 'Bei Mehrfamilienhäusern gelten gestaffelte Höchstbeträge: 30.000 € für die 1. Wohneinheit, jeweils 15.000 € für die 2. bis 6. Wohneinheit und 8.000 € ab der 7. Wohneinheit. Bei einer WEG mit 10 Einheiten sind so bis zu 122.000 € förderfähig – mit bis zu 70 % Zuschuss!'
    },
    {
      q: 'Wird die Beratung für WEGs ebenfalls staatlich bezuschusst?',
      a: 'Ja. Das BAFA bezuschusst die Erstellung eines iSFP für Mehrfamilienhäuser mit bis zu 80 % der förderfähigen Kosten (maximal 1.700 € bei WEGs). Zusätzlich gibt es einen Zuschuss von bis zu 500 € für die Präsentation der Ergebnisse auf der Eigentümerversammlung.'
    },
    {
      q: 'Wie unterstützen Sie Verwalter bei der Beschlussvorbereitung?',
      a: 'Wir liefern Ihnen vorformulierte, juristisch und technisch fundierte Beschlussanträge nach aktuellem WEG-Recht. Inklusive transparenter Aufteilung der Investitions- und Förderkosten nach Miteigentumsanteilen (MEA).'
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
          imageSrc={ASSETS.subpageHeroHausverwaltungen}
          imageAlt="Energieberatung und Sanierungsfahrpläne für Hausverwaltungen und WEG Energie nach Plan"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="lg:w-[50%] xl:w-[48%] space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 text-emerald-800 text-xs font-bold tracking-wide shadow-xs">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Spezialisiert auf WEGs ab 3 bis 50+ Einheiten</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B1754] tracking-tight leading-[1.1]">
              Energetische Sanierung für WEGs: Beschlussfähig, neutral und rechtssicher.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Wir nehmen Hausverwaltern die Last des Gebäudeenergiegesetzes ab: Von der technischen Bestandsanalyse über beschlussfähige Vorlagen bis zur souveränen Präsentation auf Ihrer Eigentümerversammlung.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-black text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-[0_20px_35px_-5px_rgba(45,224,84,0.4)] hover:-translate-y-1 active:translate-y-0.5 border-b-[4px] border-b-[#1b9e38]"
              >
                <span>WEG-Erstberatung anfragen</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-slate-300/80 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] bg-white/90 hover:bg-white text-slate-800 hover:text-[#1B1754] font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 group backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Verwalter-Hotline: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile Ansicht des Hero-Bildes */}
            <SubpageHeroMobileImage 
              imageSrc={ASSETS.subpageHeroHausverwaltungen}
              imageAlt="Energieberatung und Sanierungsfahrpläne für Hausverwaltungen und WEG Energie nach Plan"
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
          eyebrow="Erprobte Mehrfamilienhaus-Praxis"
          title="Sanierungskonzepte für Wohnanlagen &amp; WEGs"
          subtitle="Von der Bestandsaufnahme über beschlussfähige Sanierungsfahrpläne bis zur meisterlichen Abnahme im Gemeinschaftseigentum."
        />
      </div>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 4. DIE 4 SÄULEN DER VERWALTER-ENTLASTUNG */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F4F6FB] via-[#F8FAFC] to-[#EFF2F8] relative" id="saeulen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Lückenlose Verwalter-Entlastung
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Vier Schritte zum erfolgreichen WEG-Beschluss
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Wir begleiten Sie von der ersten technischen Sichtung bis zur fertigen Abnahme – professionell, transparent und konfliktfrei.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Säule 1 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-4 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black text-[#1B1754]">
                Technische &amp; wirtschaftliche Vorprüfung
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Umfassende Bestandsanalyse des Gemeinschaftseigentums. Wir stellen Wärmepumpenkaskaden, Hybridanlagen und Fernwärme in einem neutralen 15-Jahre-Wirtschaftlichkeitsvergleich gegenüber.
              </p>
              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Raumweise Heizlastberechnung nach DIN EN 12831</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Vergleich von Investitions- &amp; Folgebetriebskosten</span>
                </div>
              </div>
            </div>

            {/* Säule 2 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-4 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black text-[#1B1754]">
                Beschlussfähige Vorlagen für die ETV
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Schluss mit unklaren Anträgen. Wir liefern Ihnen fertige, rechtssichere Beschlussentwürfe nach aktuellem WEG-Recht inklusive Kostentrennung nach Miteigentumsanteilen (MEA).
              </p>
              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Formulierte Tagesordnungspunkte (TOPs)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Transparente MEA-Kostenaufteilung für Eigentümer</span>
                </div>
              </div>
            </div>

            {/* Säule 3 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-4 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black text-[#1B1754]">
                Meister-Präsentation auf Ihrer ETV
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Zwei erfahrene Handwerksmeister moderieren den technischen Sanierungsfahrplan direkt vor Ihren Eigentümern. Wir beantworten kritische Fragen neutral, souverän und deeskalierend.
              </p>
              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Bis zu 500 € BAFA-Zuschuss für die ETV-Präsentation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hohe Zustimmungsquoten durch meisterliche Autorität</span>
                </div>
              </div>
            </div>

            {/* Säule 4 */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm border-b-[4px] border-b-slate-200 space-y-4 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black text-[#1B1754]">
                KfW-Mehrparteien-Förderung &amp; Abnahme
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Wir schöpfen die speziellen WEG-Staffelungen der KfW voll aus und begleiten die Baustelle mit regelmäßigen Kontrollterminen bis zur schlüsselfertigen Endabnahme.
              </p>
              <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Maximale KfW-Staffelung pro Wohneinheit gesichert</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Haftungssichere Bestätigung nach Durchführung (BnD)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spezifische Hausverwaltungs Call-to-Action Box */}
          <div className="mt-14 p-8 sm:p-11 rounded-3xl bg-gradient-to-br from-[#1B1754] via-[#1F1A60] to-[#140F3E] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2DE054]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-2.5 text-center md:text-left relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-[#2DE054] text-xs font-bold uppercase tracking-wider border border-[#2DE054]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#2DE054]" />
                Für Hausverwaltungen &amp; Beiräte
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Planen Sie eine Eigentümerversammlung (ETV)?
              </h4>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Wir erstellen den BAFA-geförderten WEG-Sanierungsfahrplan und präsentieren die Ergebnisse auf Wunsch persönlich vor Ihren Eigentümern.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openModal('allgemein')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#2DE054] hover:bg-[#25ca4a] text-[#1B1754] font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(45,224,84,0.35)] hover:shadow-[0_8px_24px_rgba(45,224,84,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex-shrink-0 relative z-10"
            >
              <span>WEG-Sanierung unverbindlich anfragen</span>
              <ArrowRight className="w-4 h-4 text-[#1B1754]" />
            </button>
          </div>
        </div>
      </section>

      {/* Feine Haarlinie */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 5. PERSÖNLICHER TRUST: AUF AUGENHÖHE MIT BEIRÄTEN */}
      <FounderTrustSection 
        eyebrow="Auf Augenhöhe mit Beiräten"
        title="Ihre Baubegleiter mit Meisterbrief"
        subtitle="Auf Eigentümerversammlungen zählen keine theoretischen Folien, sondern verlässliche Antworten aus der Praxis. Wir stehen Ihren Eigentümern Rede und Antwort – ehrlich, unabhängig und mit über 15 Jahren Handwerkserfahrung."
        nicoQuote="„In einer WEG prallen viele Meinungen aufeinander. Mit klaren Zahlen und meisterlichem Praxiswissen schaffen wir Einigkeit statt Streit.“"
        janQuote="„Verwalter haften für Beschlussmängel. Wir liefern Ihnen fundierte Beschlussvorlagen, die jeder juristischen Anfechtung standhalten.“"
        heroWatermarkImage={ASSETS.subpageHeroHausverwaltungen}
      />

      {/* 6. INTERAKTIVER FÖRDERMITTEL-CHECK TEASER */}
      <InteractiveCalculatorTeaser 
        topBackground="bg-transparent"
        bottomBackground="bg-[#F1F4FA]"
        className="-mt-16 sm:-mt-20 lg:-mt-24 relative z-20"
        eyebrow="KfW-Förderung für Mehrfamilienhäuser"
        title="Wie viel staatliche Förderung steht Ihrer WEG zu?"
        subtitle="Für Mehrfamilienhäuser gelten gestaffelte Fördersätze je Wohneinheit. Berechnen Sie das maximale Förderbudget für Ihr Gemeinschaftseigentum."
        buttonText="WEG-Förderung berechnen"
      />

      {/* 7. FAQ AKKORDEON */}
      <FaqAccordion 
        items={wegFaq}
        title="Häufige Fragen zur WEG-Sanierung"
        subtitle="Alles zu Eigentümerversammlungen, Beschlussfassungen und Förderstaffelungen für Mehrparteienhäuser."
      />

      {/* 8. FINAL CALL TO ACTION */}
      <CtaBanner 
        topBackground="bg-[#EEF2F9]"
        title="Machen Sie Ihre WEG zukunftssicher und GEG-konform."
        subtitle="In einem unverbindlichen Gespräch mit Nico Heidemann oder Jan Osmer klären wir Ihre anstehenden Beschlüsse und Fördermöglichkeiten."
      />
    </div>
  );
};
