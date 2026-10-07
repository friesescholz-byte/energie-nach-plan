import React from 'react';
import { 
  CheckCircle2, 
  Scale, 
  Wrench, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Award
} from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../constants/assets';
import { TrustBadgeBar } from '../components/shared/TrustBadgeBar';
import { CtaBanner } from '../components/shared/CtaBanner';
import { useContactModal } from '../context/ContactModalContext';

export const AboutPage: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <div className="bg-white">
      {/* 1. HERO MIT GROSSMÄCHTIGEM TEAM-BILD */}
      <section className="pt-14 sm:pt-20 pb-20 lg:pb-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="badge-eyebrow mb-5">
              <Award className="w-3.5 h-3.5 text-slate-700" />
              <span>Inhabergeführtes Planungsbüro</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B0F19] leading-[1.1]">
              Meisterwissen aus der Praxis. Unabhängig beraten.
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
              Wir sind keine reinen Theoretiker. Als erfahrene HWK-Heizungsbaumeister und staatlich anerkannte Gebäudeenergieberater verbinden Nico Heidemann und Jan Osmer fundiertes Handwerk mit maximaler Fördermittelkompetenz.
            </p>
          </div>

          {/* GROSSES TEAM-BILD IM HERO (Platzhalter für späteres Team-Foto) */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-100 group">
            <div className="w-full h-[320px] sm:h-[450px] lg:h-[540px]">
              <img
                src={ASSETS.meetingHandshake}
                alt="Das Team von Energie nach Plan - Fachberatung und Planung"
                className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B0F19]/90 via-[#0B0F19]/40 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#BBBE22] uppercase tracking-wider block mb-1">
                  Team &amp; Geschäftsführung
                </span>
                <p className="text-white font-bold text-base sm:text-lg">
                  Nico Heidemann &amp; Jan Osmer – Inhabergeführtes Planungsbüro Energie nach Plan GbR
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                  Weserweg 38 B, 31623 Drakenburg (Landkreis Nienburg / Mittelweser)
                </p>
              </div>

              <button
                type="button"
                onClick={() => openModal()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex-shrink-0"
              >
                Erstgespräch anfragen
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST-LEISTE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <TrustBadgeBar />
      </div>

      {/* 3. DIE GESCHÄFTSFÜHRER IM DETAIL (Sehr clean, ungekürzte Porträts, förmlich & leicht lesbar) */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Feststehendes, hauchzartes Hero-Wasserzeichen im Hintergrund */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-fixed bg-no-repeat bg-right-bottom bg-contain"
          style={{ backgroundImage: `url(${ASSETS.heroCutaway})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="badge-eyebrow mb-4">
              Ihre Meister-Partner
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight leading-[1.15]">
              Die Köpfe hinter Energie nach Plan
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Zwei Handwerksmeister mit jahrelanger Erfahrung im Heizungskeller und auf der Baustelle. Wir beraten auf Augenhöhe mit den ausführenden Handwerksbetrieben.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
            
            {/* Nico Heidemann */}
            <div className="space-y-6">
              {/* Unbeschnittenes Porträt-Bild (Vollständiger Kopf & Schultern) */}
              <div className="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200/90 relative group">
                <img
                  src={ASSETS.founderNico}
                  alt="Nico Heidemann - Gründer, Heizungsbaumeister & Energieberater HWK"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Förmlicher, eleganter Fließtext ohne Kacheln */}
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                    Nico Heidemann
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BBBE22]" />
                    Meister seit 2008
                  </span>
                </div>

                <blockquote className="text-base text-slate-700 font-medium italic border-l-2 border-[#BBBE22] pl-4 py-1 leading-relaxed">
                  „Wir kennen jede Schraube und jeden hydraulischen Engpass im Altbau. Gute Energieberatung beginnt nicht am Bildschirm, sondern vor Ort am Heizkreisverteiler.“
                </blockquote>

                <div className="space-y-2.5 text-sm text-slate-600 pt-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Heizungsbaumeister HWK</strong> seit 2008 (Handwerkskammer Hannover)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Gebäudeenergieberater HWK</strong> seit 2019</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span>Weiterbildung <strong>DIN V 18599</strong> für Nichtwohngebäude &amp; Gewerbe</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span>Gelisteter Experte in der <strong>dena-Energieeffizienz-Expertenliste</strong></span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0F19] hover:text-slate-700 transition-colors group"
                  >
                    <span>Erstgespräch mit Nico anfragen</span>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Jan Osmer */}
            <div className="space-y-6">
              {/* Unbeschnittenes Porträt-Bild (Vollständiger Kopf & Schultern) */}
              <div className="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200/90 relative group">
                <img
                  src={ASSETS.founderJan}
                  alt="Jan Osmer - Gründer, Heizungsbaumeister & Energieberater HWK"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Förmlicher, eleganter Fließtext ohne Kacheln */}
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                    Jan Osmer
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BBBE22]" />
                    Meister seit 2015
                  </span>
                </div>

                <blockquote className="text-base text-slate-700 font-medium italic border-l-2 border-[#BBBE22] pl-4 py-1 leading-relaxed">
                  „Eine Wärmepumpe im Altbau ist kein Hexenwerk, wenn man vorher sauber misst und rechnet. Wer das fundiert plant, heizt günstiger als mit Gas oder Öl.“
                </blockquote>

                <div className="space-y-2.5 text-sm text-slate-600 pt-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Heizungsbaumeister HWK</strong> seit 2015 (Handwerkskammer Hannover)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Gebäudeenergieberater HWK</strong> seit 2019</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span>Spezialisierung auf <strong>Hydraulischen Abgleich</strong> nach Verfahren B</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
                    <span>Gelisteter Experte für Bundesförderprogramme (KfW &amp; BAFA)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0F19] hover:text-slate-700 transition-colors group"
                  >
                    <span>Erstgespräch mit Jan anfragen</span>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. UNSERE PHILOSOPHIE: 100 % UNABHÄNGIGKEIT */}
      <section className="py-24 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="badge-eyebrow">
                Unsere Philosophie
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight leading-tight">
                Warum 100 % Unabhängigkeit der wichtigste Faktor für Ihr Geld ist
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Wer heute eine neue Heizung plant, steht vor einer Fülle an widersprüchlichen Aussagen: Hersteller werben für ihre eigenen Fabrikate, Gasversorger für Übergangslösungen, und viele Installateure verbauen schlicht das, worauf sie die höchste Händlermarge erhalten.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                <strong>Energie nach Plan verkauft keine Heizkörper, keine Wärmepumpen und keine Dämmstoffe.</strong> Wir erhalten keine Vertriebsprovisionen und sind an keinen Hersteller gebunden. Unser einziges Ziel ist die physikalisch, technisch und wirtschaftlich beste Lösung für Ihre Immobilie – inklusive der maximalen staatlichen Zuschüsse von bis zu 70 %.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="font-bold text-[#0B0F19] text-sm mb-1 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-slate-700" />
                    <span>Keine Markenbindung</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Volle Neutralität zwischen Viessmann, Vaillant, Buderus, NIBE, Daikin und weiteren Herstellern.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="font-bold text-[#0B0F19] text-sm mb-1 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-slate-700" />
                    <span>Baustellen-Praxis</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Wir sprechen die Sprache der Monteure und prüfen Handwerkerangebote neutral auf Fehler und versteckte Kosten.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
                <img
                  src={ASSETS.modernHeatingSystem}
                  alt="Moderne Wärmepumpen-Installation und Heiztechnik"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. REGIONALE VERWURZELUNG & SCHLUSS-CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="badge-eyebrow">
            Regionale Verwurzelung
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F19] tracking-tight">
            Verlässlicher Partner in Drakenburg, Nienburg und der gesamten Mittelweser
          </h2>
          <p className="text-slate-600 leading-relaxed text-base max-w-2xl mx-auto font-normal">
            Wir sind fest in der Region verwurzelt und engagiert im Gewerbeverein Heemsen sowie bei der Klimaschutzagentur Mittelweser e.V. Unsere Kunden schätzen kurze Wege, persönliche Ansprechpartner und eine Betreuung auf Augenhöhe.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 border-b-[3px] border-b-[#929515]"
            >
              <span>Gesprächstermin mit Nico &amp; Jan vereinbaren</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner />
    </div>
  );
};
