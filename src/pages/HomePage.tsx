import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck, 
  Flame, 
  Calculator, 
  Wrench, 
  Sparkles, 
  HelpCircle,
  ChevronDown,
  Building2,
  Compass
} from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../constants/assets';
import { TrustBadgeBar } from '../components/shared/TrustBadgeBar';
import { CtaBanner } from '../components/shared/CtaBanner';
import { InteractiveCalculatorTeaser } from '../components/shared/InteractiveCalculatorTeaser';
import { EcoHeroButton } from '../components/shared/EcoHeroButton';
import { CurvedWaveLightDivider } from '../components/shared/CurvedWaveTransition';
import { useContactModal } from '../context/ContactModalContext';

export const HomePage: React.FC = () => {
  const { openModal } = useContactModal();

  // FAQ Accordion State (Erste Frage standardmäßig geöffnet)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: 'Brauche ich zwingend eine Fußbodenheizung für eine Wärmepumpe?',
      a: 'Nein. Das ist einer der hartnäckigsten Mythen. Moderne Niedertemperatur- und Hochtemperatur-Wärmepumpen funktionieren auch mit herkömmlichen Heizkörpern hervorragend. Oft reicht es aus, lediglich 1–2 Heizkörper in kritischen Räumen gezielt gegen modernere Modelle zu tauschen. Das berechnen wir exakt für Ihr Gebäude nach DIN 12831.'
    },
    {
      q: 'Was kostet die Energieberatung nach Abzug der staatlichen Förderung?',
      a: 'Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) bezuschusst die Erstellung eines individuellen Sanierungsfahrplans (iSFP) mit bis zu 80 % der förderfähigen Kosten (maximal 1.300 € bei Ein- und Zweifamilienhäusern). Der tatsächliche Eigenanteil für Sie liegt dadurch meist nur bei wenigen hundert Euro – und amortisiert sich bereits durch den 5 % Extra-Zuschuss bei der ersten Maßnahme.'
    },
    {
      q: 'Wann muss der Förderantrag gestellt werden?',
      a: 'Wichtig: Der Förderantrag bei KfW oder BAFA muss zwingend gestellt werden, bevor Sie verbindliche Liefer- und Leistungsverträge mit Handwerksbetrieben unterzeichnen bzw. mit einer aufschiebenden Bedingung. Wir leiten Sie schrittgenau an, damit Ihr Förderanspruch zu 100 % rechtssicher erhalten bleibt.'
    },
    {
      q: 'Sind Sie an bestimmte Hersteller oder Handwerker gebunden?',
      a: 'Nein, zu 100 % unabhängig. Wir verkaufen keine Heizungsgeräte und erhalten keine Vermittlungsprovisionen von Fabrikaten. Sie können mit Ihrem eigenen regionalen Wunsch-Installateur zusammenarbeiten – wir prüfen lediglich neutral dessen Angebot und sichern die Förderfähigkeit ab.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Gemäß Farbvorgaben & Canva-Ausrichtung) */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#E7F6F2] via-[#EDF8F5] to-white">
        
        {/* SVG ClipPath Definition für die originale Canva-Form des Schnittmodells */}
        <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
          <defs>
            <clipPath id="canvaHouseFrameRef" clipPathUnits="objectBoundingBox">
              <path d="
                M 0.22, 0.00 
                L 1.00, 0.00 
                L 1.00, 1.00 
                L 0.48, 1.00 
                Q 0.38, 1.00 0.32, 0.92 
                L 0.04, 0.49 
                Q 0.015, 0.44 0.04, 0.39 
                L 0.20, 0.04 
                Q 0.21, 0.00 0.22, 0.00 
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* RECHTE HERO-BÜHNE: Bild und Grüne Form sitzen 100% bündig am rechten und unteren Rand */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[55%] xl:w-[53%] 2xl:w-[51%] items-end justify-end z-10 pointer-events-none overflow-hidden pr-0">
          {/* 1. Die organische grüne Form im Hintergrund: bündig an oberer und rechter Kante ohne Lücken */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none" 
              className="w-full h-full" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Oben rechts über das Dach geschwungen und 100% bündig an die rechte Kante bis nach unten gezogen */}
              <path
                d="
                  M 380, 0
                  C 370, 100 460, 200 660, 250
                  C 800, 285 910, 295 1000, 290
                  L 1000, 1000
                  L 900, 1000
                  C 960, 850 1000, 600 1000, 380
                  L 1000, 0
                  Z
                "
                fill="#2DE054"
              />
            </svg>
          </div>

          {/* 2. Das Haus-Schnittmodell: Unten und rechts bündig verankert mit der originalen Canva-Spitzenform */}
          <div 
            className="relative w-full h-full max-h-[700px] flex items-end justify-end filter drop-shadow-[0_25px_50px_rgba(27,23,84,0.18)] z-10"
            style={{ clipPath: 'url(#canvaHouseFrameRef)', WebkitClipPath: 'url(#canvaHouseFrameRef)' }}
          >
            <img
              src={ASSETS.heroCutaway}
              alt="Energie nach Plan Modernes Haus mit Wärmepumpe, PV und Speicher Schnittmodell"
              className="w-full h-full object-cover object-right-bottom"
              loading="eager"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="lg:w-[48%] xl:w-[46%] space-y-6 lg:space-y-7 pt-2 lg:pt-0">
            
            {/* Massive Bold Headline im Rhythmus des Screenshots: Fokus auf Planungsbüro & Meisterkompetenz */}
            <div className="space-y-1 sm:space-y-2 select-none">
              <div className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[78px] font-black tracking-tight text-[#1B1754] leading-[0.98]">
                Planen mit
              </div>
              <div>
                <span className="inline-block px-5 sm:px-8 py-1.5 sm:py-2 rounded-full bg-[#36E85B] text-[#1B1754] text-5xl sm:text-6xl lg:text-[70px] xl:text-[78px] font-black tracking-tight leading-[0.98] shadow-sm">
                  Meister-
                </span>
              </div>
              <div className="text-5xl sm:text-6xl lg:text-[70px] xl:text-[78px] font-black tracking-tight text-[#1B1754] leading-[0.98]">
                Garantie
              </div>
            </div>

            {/* Subline-Text: Positionierung als herstellerunabhängiges Planungsbüro & zertifizierte Experten */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#242068] font-medium leading-relaxed max-w-xl">
              Zertifizierte Energieeffizienz-Experten &amp; Ingenieurskompetenz aus Drakenburg. Unabhängige Fachplanung für Wärmepumpen, Photovoltaik, Dämmung und Sanierungskonzepte – herstellerunabhängig und mit <span className="whitespace-nowrap">bis zu 70&nbsp;%</span> staatlicher KfW-Förderung.
            </p>

            {/* Action Buttons: Fließender 3D-Hero-Button + Schlichterer 3D-Button daneben */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* 1. Haupt-Button: Öffnet das modale Flow-Formular mit der 4-Leistungs-Auswahl */}
              <EcoHeroButton onClick={() => openModal()} text="Jetzt anfragen" />

              {/* 2. Schlichterer, dezenterer Button zu den Leistungen mit taktilem 3D-Hover */}
              <Link
                to="/#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-300/80 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] bg-white/90 hover:bg-white text-slate-800 hover:text-[#1B1754] font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 group backdrop-blur-sm self-stretch sm:self-auto whitespace-nowrap"
              >
                <span>Zu den Leistungen</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1B1754] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile-Ansicht des Schnittmodells (unter Text auf Smartphones/Tablets) */}
            <div className="lg:hidden mt-8 w-full max-w-md mx-auto">
              <div 
                className="relative overflow-hidden filter drop-shadow-[0_20px_40px_rgba(27,23,84,0.18)]"
                style={{ clipPath: 'url(#canvaHouseFrameRef)', WebkitClipPath: 'url(#canvaHouseFrameRef)' }}
              >
                <img
                  src={ASSETS.heroCutaway}
                  alt="Energie nach Plan Modernes Haus mit Wärmepumpe, PV und Speicher Schnittmodell"
                  className="w-full h-auto object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FLIESSENDE TRUST-LEISTE (Floating 3D Dock Bridge direkt unter Hero) */}
      <div className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadgeBar />
      </div>

      {/* 3. UNSERE 4 KERNLEISTUNGEN AUF EINEN BLICK (Direkt unter dem Hero & TrustBar) */}
      <section className="pt-20 sm:pt-24 pb-28 bg-gradient-to-b from-white via-white to-[#F4F6FB] scroll-mt-24" id="leistungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 lg:mb-20">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
                Gebündelte Kompetenz
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
                Unsere 4 Kernleistungen auf einen Blick
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-normal">
                Alle Leistungen sind modular kombinierbar – von der ersten Eignungsprüfung bis zur schlüsselfertigen Fachbauleitung.
              </p>
            </div>
            <div>
              <Link
                to="/foerdermittel-sanierungscheck"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-emerald-50/80 hover:bg-[#2DE054] text-[#1B1754] font-semibold text-xs sm:text-sm border border-emerald-200/80 hover:border-[#2DE054] border-b-2 border-b-emerald-200 hover:border-b-[#1ba73c] shadow-xs hover:shadow transition-all duration-200 group"
              >
                <Calculator className="w-3.5 h-3.5 text-emerald-700 group-hover:text-[#1B1754] transition-colors" />
                <span>Kostenlosen Fördermittel-Check starten</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:text-[#1B1754] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* Leistung 1: Komplettpaket Sanierung */}
            <Link
              to="/komplettpaket-sanierung"
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 border-b-[4px] border-b-slate-200 hover:border-b-[#2DE054] shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#1B1754] flex items-center justify-center mb-6 shadow-xs border border-slate-200/80 border-b-[3px] border-b-slate-200 group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:border-b-[#1ba73c] group-hover:scale-110 group-hover:shadow-[0_10px_20px_-5px_rgba(45,224,84,0.45)] transition-all duration-300 flex-shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1B1754] mb-2.5 group-hover:text-emerald-700 transition-colors">
                  Komplettpaket Sanierung
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Von der Bestandsaufnahme über den iSFP bis zur meisterlichen Fachbauleitung vor Ort. Alles modular aus einer Hand.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-800 group-hover:text-emerald-600 inline-flex items-center gap-1.5 pt-4 border-t border-slate-200/60 w-full text-left">
                <span>Ablauf Komplettpaket ansehen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Leistung 2: Fördermittelberatung */}
            <Link
              to="/foerdermittelberatung"
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 border-b-[4px] border-b-slate-200 hover:border-b-[#2DE054] shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#1B1754] flex items-center justify-center mb-6 shadow-xs border border-slate-200/80 border-b-[3px] border-b-slate-200 group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:border-b-[#1ba73c] group-hover:scale-110 group-hover:shadow-[0_10px_20px_-5px_rgba(45,224,84,0.45)] transition-all duration-300 flex-shrink-0">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1B1754] mb-2.5 group-hover:text-emerald-700 transition-colors">
                  Fördermittelberatung (KfW / BAFA)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Bis zu 70 % Zuschuss und bis zu 21.000 € Barzuschuss. Wir wickeln Ihre Anträge 100 % rechtssicher ab.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-800 group-hover:text-emerald-600 inline-flex items-center gap-1.5 pt-4 border-t border-slate-200/60 w-full text-left">
                <span>Details zu Fördersätzen ansehen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Leistung 3: Für Hausverwaltungen */}
            <Link
              to="/fuer-hausverwaltungen"
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 border-b-[4px] border-b-slate-200 hover:border-b-[#2DE054] shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#1B1754] flex items-center justify-center mb-6 shadow-xs border border-slate-200/80 border-b-[3px] border-b-slate-200 group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:border-b-[#1ba73c] group-hover:scale-110 group-hover:shadow-[0_10px_20px_-5px_rgba(45,224,84,0.45)] transition-all duration-300 flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1B1754] mb-2.5 group-hover:text-emerald-700 transition-colors">
                  Für Hausverwaltungen &amp; WEG
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Spezialkonzepte für Mehrfamilienhäuser: Beschlussfähige Vorlagen, GEG-Fahrpläne und Begleitung der Versammlung.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-800 group-hover:text-emerald-600 inline-flex items-center gap-1.5 pt-4 border-t border-slate-200/60 w-full text-left">
                <span>Lösungen für WEGs ansehen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>

            {/* Leistung 4: TGA-Fachplanung */}
            <Link
              to="/tga-planung"
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 border-b-[4px] border-b-slate-200 hover:border-b-[#2DE054] shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white text-[#1B1754] flex items-center justify-center mb-6 shadow-xs border border-slate-200/80 border-b-[3px] border-b-slate-200 group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:border-b-[#1ba73c] group-hover:scale-110 group-hover:shadow-[0_10px_20px_-5px_rgba(45,224,84,0.45)] transition-all duration-300 flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1B1754] mb-2.5 group-hover:text-emerald-700 transition-colors">
                  TGA-Planung (HOAI § 56)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Raumweise Heizlastberechnung nach DIN EN 12831, Rohrnetzberechnung und hydraulischer Abgleich für Architekten &amp; Bauherren.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-800 group-hover:text-emerald-600 inline-flex items-center gap-1.5 pt-4 border-t border-slate-200/60 w-full text-left">
                <span>Details zur TGA-Planung ansehen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Praxisbeweis & Referenzen Hinweis */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Praxisbeweis &amp; Erfahrung</span>
                <span className="font-bold text-[#1B1754] text-sm sm:text-base">Über 350+ erfolgreich geplante und geförderte Sanierungsprojekte</span>
              </div>
            </div>
            <Link
              to="/referenzen"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#1B1754] text-[#1B1754] hover:text-white font-bold text-sm border border-slate-200 border-b-[2.5px] border-b-slate-300 hover:border-b-[#110e38] shadow-xs hover:shadow-md transition-all duration-200 flex-shrink-0"
            >
              <span>Zu den Referenzen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feine, dezente Designer-Haarlinie ohne Text und ohne Punkte */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 4. WARUM ENERGIE NACH PLAN DIE LOGISCHE ENTSCHEIDUNG IST (Mit verfeinertem, grün schimmerndem Architekturmuster) */}
      <section className="pt-24 sm:pt-28 pb-0 bg-gradient-to-b from-[#F4F7FB] via-[#F8FCF9] to-[#EEF5F1] relative overflow-hidden">
        {/* Ganz leicht grün schimmernde Ambient-Auren für Tiefe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[650px] bg-gradient-to-tr from-emerald-100/50 via-emerald-50/30 to-transparent rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-0 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none" />

        {/* Großformatiges, geschwungenes Architektur-Konturmuster mit dezenten smaragdgrünen Wellenlinien – reicht lückenlos bis zur Wellenlinie */}
        <div 
          className="absolute inset-0 opacity-[0.75] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_100%)]"
          style={{
            backgroundImage: `url('/images/pattern_curved_contour.svg')`,
            backgroundSize: '240px 120px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header der Vergleichs-Sektion */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Vergleich &amp; Mehrwert
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Warum Energie nach Plan die logische Entscheidung ist
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Im Markt gibt es fast nur zwei Extreme: Reine Schreibtischtäter ohne Praxiserfahrung oder reine Handwerker, die an bestimmte Marken gebunden sind. Wir schließen diese Lücke vollständig als unabhängiges Planungsbüro mit Meisterkompetenz.
            </p>
          </div>

          {/* High-End 3D Comparison Matrix */}
          <div className="overflow-x-auto pb-6">
            <div className="min-w-[720px] bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm border-b-[4px] border-b-slate-200">
              <div className="grid grid-cols-4 gap-6 pb-6 border-b border-slate-200 font-bold text-xs uppercase tracking-wider text-slate-500">
                <div className="col-span-1 text-slate-700">Kriterium</div>
                <div className="col-span-1 text-center text-slate-500">Klassischer Energieberater</div>
                <div className="col-span-1 text-center text-slate-500">Klassischer Heizungsbauer</div>
                <div className="col-span-1 text-center text-[#1B1754] bg-[#2DE054]/20 py-2.5 px-3 rounded-xl border border-[#2DE054]/50 shadow-sm font-black">
                  Energie nach Plan
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="grid grid-cols-4 gap-6 py-5 items-center hover:bg-slate-50/60 transition-colors rounded-xl px-2">
                  <div className="col-span-1 font-bold text-[#1B1754]">Echtes Handwerkswissen</div>
                  <div className="col-span-1 text-center text-slate-400 flex justify-center"><X className="w-5 h-5 text-rose-500" /></div>
                  <div className="col-span-1 text-center text-slate-700 flex justify-center"><Check className="w-5 h-5 text-slate-700" /></div>
                  <div className="col-span-1 text-center font-bold text-[#1B1754] flex justify-center">
                    <span className="w-8 h-8 rounded-full bg-[#2DE054]/20 flex items-center justify-center text-emerald-800">
                      <Check className="w-5 h-5 text-emerald-700 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 py-5 items-center hover:bg-slate-50/60 transition-colors rounded-xl px-2">
                  <div className="col-span-1 font-bold text-[#1B1754]">100 % Herstellerunabhängigkeit</div>
                  <div className="col-span-1 text-center text-slate-700 flex justify-center"><Check className="w-5 h-5 text-slate-700" /></div>
                  <div className="col-span-1 text-center text-slate-400 flex justify-center"><X className="w-5 h-5 text-rose-500" /></div>
                  <div className="col-span-1 text-center font-bold text-[#1B1754] flex justify-center">
                    <span className="w-8 h-8 rounded-full bg-[#2DE054]/20 flex items-center justify-center text-emerald-800">
                      <Check className="w-5 h-5 text-emerald-700 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 py-5 items-center hover:bg-slate-50/60 transition-colors rounded-xl px-2">
                  <div className="col-span-1 font-bold text-[#1B1754]">KfW- &amp; BAFA-Förderservice (iSFP)</div>
                  <div className="col-span-1 text-center text-slate-700 flex justify-center"><Check className="w-5 h-5 text-slate-700" /></div>
                  <div className="col-span-1 text-center text-slate-400 flex justify-center"><X className="w-5 h-5 text-rose-500" /></div>
                  <div className="col-span-1 text-center font-bold text-[#1B1754] flex justify-center">
                    <span className="w-8 h-8 rounded-full bg-[#2DE054]/20 flex items-center justify-center text-emerald-800">
                      <Check className="w-5 h-5 text-emerald-700 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 py-5 items-center hover:bg-slate-50/60 transition-colors rounded-xl px-2">
                  <div className="col-span-1 font-bold text-[#1B1754]">Raumweise Heizlastberechnung DIN 12831</div>
                  <div className="col-span-1 text-center text-slate-400 flex justify-center"><X className="w-5 h-5 text-rose-500" /></div>
                  <div className="col-span-1 text-center text-slate-500 flex justify-center text-xs">Oft nur Daumenwert</div>
                  <div className="col-span-1 text-center font-bold text-[#1B1754] flex justify-center">
                    <span className="w-8 h-8 rounded-full bg-[#2DE054]/20 flex items-center justify-center text-emerald-800">
                      <Check className="w-5 h-5 text-emerald-700 stroke-[3]" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 py-5 items-center hover:bg-slate-50/60 transition-colors rounded-xl px-2">
                  <div className="col-span-1 font-bold text-[#1B1754]">Fachbauleitung &amp; Abnahmekontrolle</div>
                  <div className="col-span-1 text-center text-slate-400 flex justify-center"><X className="w-5 h-5 text-rose-500" /></div>
                  <div className="col-span-1 text-center text-slate-500 flex justify-center text-xs">Nur Eigenkontrolle</div>
                  <div className="col-span-1 text-center font-bold text-[#1B1754] flex justify-center">
                    <span className="w-8 h-8 rounded-full bg-[#2DE054]/20 flex items-center justify-center text-emerald-800">
                      <Check className="w-5 h-5 text-emerald-700 stroke-[3]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schicker, organischer geschwungener Übergang direkt im Abschnitt – das Muster reicht lückenlos bis zur Wellenlinie */}
        <CurvedWaveLightDivider fillColor="#EFF2F8" className="mt-12 sm:mt-16" />
      </section>

      {/* 5. DIE 3 SANIERUNGSFALLEN (Spaziös, Weitläufig, mit Bild pro Problem) */}
      <section className="pt-20 sm:pt-24 pb-20 bg-gradient-to-b from-[#EFF2F8] via-white to-[#F0F3F9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Zwischen GEG, Förderdschungel und Handwerkermangel: Die 3 teuersten Sanierungsfallen
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Eine Heizungserneuerung kostet 25.000 € bis 45.000 €. Wer ohne meisterhafte Vor-Ort-Berechnung unterschreibt, zahlt oft doppelt.
            </p>
          </div>

          {/* Weitläufiges, cleanes Showcase mit 1 großem Bild pro Problem */}
          <div className="space-y-10 sm:space-y-14">
            
            {/* Problem 01 */}
            <div className="group bg-slate-50/60 hover:bg-white rounded-3xl border border-slate-200/90 border-b-[4px] border-b-slate-200 hover:border-b-rose-500 shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col lg:flex-row items-stretch overflow-hidden">
              <div className="w-full lg:w-5/12 min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] relative overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={ASSETS.trapHeatingAltbau}
                  alt="Komplexe Heizungsverrohrung und Altbau-Heiztechnik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-rose-600 block mb-2">
                    Gefahr Nr. 1: Fehlplanung
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] mb-4 leading-snug">
                    Die Wärmepumpen-Panik im Altbau
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
                    <em>„Funktioniert das bei mir ohne Fußbodenheizung?“</em> — Ohne präzise Vor-Ort-Messung der Vorlauftemperatur und raumweise Heizlastberechnung drohen überdimensionierte Anlagen und explodierende Stromkosten im Winter.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-3.5 text-emerald-950 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Die Meister-Lösung: Verbindlicher Eignungs-Check &amp; reale Heizlastberechnung nach DIN 12831</span>
                </div>
              </div>
            </div>

            {/* Problem 02 (Alternierendes Layout für maximale Ruhe) */}
            <div className="group bg-slate-50/60 hover:bg-white rounded-3xl border border-slate-200/90 border-b-[4px] border-b-slate-200 hover:border-b-amber-500 shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col lg:flex-row-reverse items-stretch overflow-hidden">
              <div className="w-full lg:w-5/12 min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] relative overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={ASSETS.trapFundingBureaucracy}
                  alt="Förderanträge, Berechnungen und Sanierungsunterlagen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-600 block mb-2">
                    Gefahr Nr. 2: Frist- &amp; Formfehler
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] mb-4 leading-snug">
                    Verschenkte Fördermittel &amp; Fristfehler
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
                    Ein falscher Satz im Handwerkerangebot oder ein Antrag nach Auftragsvergabe: Schon sind bis zu <strong>21.000 € Zuschuss</strong> für immer verloren. Ohne individuellen Sanierungsfahrplan (iSFP) entfällt zudem der staatliche 5 % Extrabonus.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-3.5 text-emerald-950 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Die Meister-Lösung: Rechtssicherer KfW/BAFA Full-Service mit maximaler Zuschuss-Garantie</span>
                </div>
              </div>
            </div>

            {/* Problem 03 */}
            <div className="group bg-slate-50/60 hover:bg-white rounded-3xl border border-slate-200/90 border-b-[4px] border-b-slate-200 hover:border-b-[#1B1754] shadow-sm hover:shadow-[0_25px_50px_-15px_rgba(27,23,84,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col lg:flex-row items-stretch overflow-hidden">
              <div className="w-full lg:w-5/12 min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] relative overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={ASSETS.trapSalesPressure}
                  alt="Beratungs- und Verkaufsgespräch zu Heizsystemen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1B1754] block mb-2">
                    Gefahr Nr. 3: Markenbindung
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B1754] mb-4 leading-snug">
                    Der Verkaufsdruck klassischer Betriebe
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
                    Klassische Betriebe verkaufen oft nur das Fabrikat, auf das sie die beste Einkaufsmarge erhalten. Niemand prüft unabhängig, ob das System für die spezifische Gebäudegeometrie und Ihr Verbrauchsverhalten optimal dimensioniert ist.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-3.5 text-emerald-950 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Die Meister-Lösung: 100 % herstellerunabhängige Fachplanung &amp; herstellerneutrale Leistungsverzeichnisse</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. INTERAKTIVER FÖRDERMITTEL-CHECK TEASER IN MARKEN-NAVY MIT GESCHWUNGENEM DESIGNER-ÜBERGANG */}
      <InteractiveCalculatorTeaser 
        topBackground="bg-[#F0F3F9]" 
        bottomBackground="bg-[#FAFBFC]" 
      />

      {/* 7. DIE GRÜNDER PERSÖNLICH („MEISTERWISSEN STATT THEORIE“) - REINES EDITORIAL-LAYOUT OHNE KACHELN */}
      <section className="py-28 lg:py-36 bg-gradient-to-b from-[#FAFBFC] via-white to-[#F1F4FA] relative" id="ueber-uns-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Inhabergeführt &amp; Unabhängig
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Wir sind keine Theoretiker. Wir sind Praktiker mit Meisterbrief.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Zwei Handwerksmeister, eine gemeinsame Mission: Wir bringen über 15 Jahre handwerkliche Praxiserfahrung direkt an Ihren Planungstisch – herstellerunabhängig, ehrlich und mit meisterlicher Präzision.
            </p>
          </div>

          {/* Offenes, weitläufiges Editorial-Layout ohne Kachel-Rahmen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-6xl mx-auto">
            {/* Nico Heidemann */}
            <div className="space-y-6">
              {/* Großes, freistehendes Porträt-Bild */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[400px] rounded-3xl overflow-hidden shadow-sm bg-slate-100 relative group">
                <img 
                  src={ASSETS.founderNico} 
                  alt="Nico Heidemann - Heizungsbaumeister und Gebäudeenergieberater HWK" 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Redaktionelle Angaben & Zitat - ohne Kachel-Box */}
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1B1754] tracking-tight">
                    Nico Heidemann
                  </h3>
                  <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide mt-1">
                    Geschäftsführer &amp; HWK-Heizungsbaumeister
                  </p>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-700 font-medium italic border-l-2 border-[#2DE054] pl-4 py-1 leading-relaxed">
                  „Ein Sanierungsfahrplan darf kein starres Bürokratie-Dokument sein. Er muss auf der Baustelle funktionieren und Ihnen bares Geld sparen.“
                </blockquote>

                <div className="space-y-2.5 text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Heizungsbaumeister HWK</strong> seit 2008 (Handwerkskammer Hannover)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Gebäudeenergieberater HWK</strong> (Zertifiziert nach DIN V 18599)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>dena-Energieeffizienz-Expertenliste</strong> für Bundesförderprogramme</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1B1754] hover:text-emerald-700 transition-colors group"
                  >
                    <span>Erstgespräch mit Nico anfragen</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jan Osmer */}
            <div className="space-y-6">
              {/* Großes, freistehendes Porträt-Bild */}
              <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] max-h-[400px] rounded-3xl overflow-hidden shadow-sm bg-slate-100 relative group">
                <img 
                  src={ASSETS.founderJan} 
                  alt="Jan Osmer - Heizungsbaumeister und Gebäudeenergieberater HWK" 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Redaktionelle Angaben & Zitat - ohne Kachel-Box */}
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1B1754] tracking-tight">
                    Jan Osmer
                  </h3>
                  <p className="text-sm font-bold text-emerald-700 uppercase tracking-wide mt-1">
                    Geschäftsführer &amp; HWK-Heizungsbaumeister
                  </p>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-700 font-medium italic border-l-2 border-[#2DE054] pl-4 py-1 leading-relaxed">
                  „Wir verkaufen keine Geräte auf Hersteller-Provision. Wir prüfen neutral, was technisch und wirtschaftlich wirklich Sinn ergibt.“
                </blockquote>

                <div className="space-y-2.5 text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Heizungsbaumeister HWK</strong> seit 2015 (Handwerkskammer Hannover)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>Gebäudeenergieberater HWK</strong> seit 2019</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span><strong>dena-Energieeffizienz-Expertenliste</strong> (Zugelassen für KfW &amp; BAFA)</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1B1754] hover:text-emerald-700 transition-colors group"
                  >
                    <span>Erstgespräch mit Jan anfragen</span>
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ECHTE KUNDENERFAHRUNGEN & GOOGLE-BEWERTUNGEN */}
      <section className="py-24 sm:py-28 bg-[#F8FAFD] border-y border-slate-200/80 relative overflow-hidden" id="google-bewertungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header mit offiziellem Google-Badge */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-4">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <span>★★★★★</span>
                <span className="text-slate-800 font-extrabold ml-1">4.9 Sterne</span>
              </div>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs font-semibold text-slate-600">Verifizierte Google-Rezensionen</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Echte Kundenstimmen aus der Praxis
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Was Eigentümer, Hausverwaltungen und Planungsbüros über die Zusammenarbeit mit Nico Heidemann und Jan Osmer berichten.
            </p>
          </div>

          {/* 3 Google Bewertungs-Karten */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Bewertung 1 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 border-b-[4px] border-b-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">vor 2 Monaten</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  „Herr Heidemann hat unsere alte Ölheizung auf eine Wärmepumpe umgeplant und die raumweise Heizlast millimetergenau berechnet. Die 55 % KfW-Zuschuss wurden reibungslos bewilligt. Echte Meister mit handwerklicher Bodenhaftung!“
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#1B1754]">Dr. Michael B.</div>
                  <div className="text-xs text-slate-500 font-medium">Einfamilienhaus · KfW 458 Förderung</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 flex-shrink-0" title="Verifizierte Google-Rezension">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bewertung 2 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 border-b-[4px] border-b-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">vor 1 Monat</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  „Herr Osmer hat die Sanierungsoptionen auf unserer Eigentümerversammlung für 16 Parteien verständlich und sachlich vorgestellt. Keine Verkaufsmasche, sondern reine Fakten. Der iSFP wurde einstimmig beschlossen.“
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#1B1754]">Sabine W.</div>
                  <div className="text-xs text-slate-500 font-medium">WEG-Verwaltung · Sanierungsfahrplan (iSFP)</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 flex-shrink-0" title="Verifizierte Google-Rezension">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bewertung 3 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 border-b-[4px] border-b-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">vor 3 Wochen</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  „Wir arbeiten bei Ausschreibungen und DIN 12831 Berechnungen regelmäßig mit Nico &amp; Jan zusammen. Herstellerneutral, schnell und mit absolutem Baustellenverstand. Eine echte Entlastung für unser Büro.“
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#1B1754]">Dipl.-Ing. Thomas K.</div>
                  <div className="text-xs text-slate-500 font-medium">Architekturbüro · TGA-Fachplanung HOAI</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-1.5 flex-shrink-0" title="Verifizierte Google-Rezension">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Zentraler Google Bewertungs-Button */}
          <div className="mt-12 sm:mt-14 text-center">
            <a
              href={COMPANY_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#1B1754] font-bold text-sm sm:text-base border border-slate-300/90 border-b-[3.5px] border-b-slate-300 hover:border-b-[#1B1754] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-1 transition-all group"
            >
              <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center p-0.5 flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
              <span>Jetzt eigene Google-Bewertung schreiben</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* Feine, dezente Designer-Haarlinie ohne Text und ohne Punkte */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-2">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />
      </div>

      {/* 9. FAQ MIT INTERAKTIVEM AUFKLAPP-AKKORDEON */}
      <section className="pt-24 pb-28 bg-gradient-to-b from-[#F1F4FA] via-white to-[#EEF2F9] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-200/80">
              Transparente Antworten
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight leading-[1.15]">
              Häufig gestellte Fragen (FAQ)
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-emerald-300 bg-white shadow-md border-b-[4px] border-b-[#2DE054]' 
                      : 'border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 shadow-xs border-b-[3.5px] border-b-slate-200 hover:border-b-[#1B1754] hover:-translate-y-0.5'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? 'bg-[#2DE054] text-[#1B1754]' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-[#1B1754] tracking-tight">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="pl-12 sm:pl-13">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <CtaBanner topBackground="bg-[#EEF2F9]" />
    </div>
  );
};
