import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Mail, Phone, MapPin, Eye, Keyboard, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../constants/assets';

export const BarrierefreiheitPage: React.FC = () => {
  return (
    <div className="bg-[#FBFCFD] py-20 lg:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/80">
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            <span>Inklusion &amp; digitale Zugänglichkeit</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B1754] tracking-tight">
            Erklärung zur Barrierefreiheit
          </h1>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Gemäß dem Behindertengleichstellungsgesetz (BGG), der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) und dem Barrierefreiheitsstärkungsgesetz (BFSG).
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          
          {/* 1. Grundsatz & Geltungsbereich */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#1B1754]">
              1. Unser Anspruch an Barrierefreiheit
            </h2>
            <p>
              Die <strong>{COMPANY_INFO.name}</strong> legt großen Wert auf eine diskriminierungsfreie, intuitive und für alle Menschen uneingeschränkt nutzbare digitale Präsenz. Wir sind bestrebt, unsere Website im Einklang mit den nationalen Rechtsvorschriften zur Umsetzung der Richtlinie (EU) 2016/2102 sowie den Standards der <strong>Web Content Accessibility Guidelines (WCAG 2.1, Konformitätsstufe AA)</strong> barrierefrei zugänglich zu halten.
            </p>
            <p className="text-sm text-slate-600">
              Diese Erklärung gilt für alle unter <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-xs">energie-nach-plan.de</code> veröffentlichten Seiten und interaktiven Tools (inkl. Fördermittel-Check).
            </p>
          </section>

          {/* 2. Stand der Vereinbarkeit mit den Anforderungen */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#1B1754]">
              2. Umgesetzte Maßnahmen &amp; Konformitätsstatus
            </h2>
            <p>
              Diese Website ist mit den Kriterien der BITV 2.0 und den internationalen Standards der WCAG 2.1 (Level AA) größtenteils vereinbar. Folgende Kernmaßnahmen wurden technisch und redaktionell implementiert:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B1754] text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Hohe Kontrastwerte</span>
                </div>
                <p className="text-xs text-slate-600">
                  Verwendung eines klaren Light-Mode-Designs mit tiefdunkler Typografie auf hellem Hintergrund (Kontrastverhältnis über 4,5:1).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B1754] text-sm">
                  <Keyboard className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Tastaturbedienbarkeit</span>
                </div>
                <p className="text-xs text-slate-600">
                  Alle interaktiven Elemente (Navigation, Formulare, Akkordeons, Buttons) sind ohne Maus über die Tabulatortaste ansteuerbar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B1754] text-sm">
                  <Eye className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zoom &amp; Skalierbarkeit</span>
                </div>
                <p className="text-xs text-slate-600">
                  Die Typografie und Layout-Container passen sich bei browserseitiger Vergrößerung bis zu 200 % verlustfrei an (Responsive Design).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-[#1B1754] text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Screenreader-Struktur</span>
                </div>
                <p className="text-xs text-slate-600">
                  Semantische HTML5-Strukturierung (H1 bis H3 Hierarchien, Landmarken) und Alternativtexte (Alt-Tags) für informative Grafiken.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Bekannte Barrieren & Ausnahmen */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#1B1754]">
              3. Bekannte Barrieren &amp; laufende Optimierungen
            </h2>
            <p>
              Trotz sorgfältiger Entwicklung und kontinuierlicher Prüfung können vereinzelt Barrieren auftreten:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li>
                <strong>Komplexe Bau- &amp; CAD-Zeichnungen:</strong> Technische Berechnungsdiagramme, Heizlastkurven oder Architektur-Schnittmodelle enthalten komplexe geometrische Zusammenhänge, die nicht in allen Einzelheiten vollständig durch textuelle Beschreibungen ersetzt werden können.
              </li>
              <li>
                <strong>Ältere PDF-Dokumente:</strong> Falls Sie Förderantrags-Formulare oder historische Leitfäden als PDF herunterladen möchten, sind diese möglicherweise noch nicht in vollem Umfang barrierefrei formatiert. Gerne stellen wir Ihnen diese Dokumente auf Anfrage in barrierefreier Form zur Verfügung.
              </li>
            </ul>
          </section>

          {/* 4. Feedback und Kontakt */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#1B1754]">
              4. Feedback- und Kontaktmöglichkeit
            </h2>
            <p>
              Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten von <code className="text-xs font-mono">energie-nach-plan.de</code> aufgefallen oder haben Sie Hinweise zur Verbesserung der Zugänglichkeit? Bitte kontaktieren Sie uns direkt:
            </p>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
              <p className="font-bold text-[#1B1754]">Energie nach Plan GbR — Ansprechpartner Barrierefreiheit</p>
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Telefon: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>E-Mail: {COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Postanschrift: {COMPANY_INFO.address}, {COMPANY_INFO.zipCity}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Wir bemühen uns, Ihre Rückmeldungen innerhalb von 14 Tagen zu prüfen und festgestellte Barrieren schnellstmöglich zu beheben.
            </p>
          </section>

          {/* 5. Schlichtungsverfahren (§ 16 BGG) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#1B1754]">
              5. Durchsetzungs- &amp; Schlichtungsverfahren
            </h2>
            <p className="text-sm text-slate-600">
              Sollte auf Ihre Anfrage zur Barrierefreiheit keine zufriedenstellende Lösung gefunden werden, können Sie sich an die Schlichtungsstelle nach dem Behindertengleichstellungsgesetz wenden:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
              <p className="font-bold text-[#1B1754]">Schlichtungsstelle nach dem Behindertengleichstellungsgesetz</p>
              <p>bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen</p>
              <p>Mauerstraße 53, 10117 Berlin</p>
              <p>Telefon: 030 18 527-2805 | Website: <a href="https://www.schlichtungsstelle-bgg.de" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">www.schlichtungsstelle-bgg.de</a></p>
            </div>
          </section>

        </div>

        {/* Footer-Links */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Stand der Erklärung: September 2026 · Regelmäßige Überprüfung
          </div>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-emerald-700 transition-colors font-medium">
              Zum Impressum →
            </Link>
            <Link to="/datenschutz" className="hover:text-emerald-700 transition-colors font-medium">
              Zur Datenschutzerklärung →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
