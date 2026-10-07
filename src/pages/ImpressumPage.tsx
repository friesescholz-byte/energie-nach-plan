import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Scale, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants/assets';

export const ImpressumPage: React.FC = () => {
  return (
    <div className="bg-[#FBFCFD] py-20 lg:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8">
          <div className="badge-eyebrow mb-4">
            <Scale className="w-3.5 h-3.5 text-slate-700" />
            <span>Rechtliche Angaben &amp; Pflichtinformationen</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Impressum
          </h1>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Gesetzliche Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).
          </p>
        </div>

        {/* Legal content sections */}
        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          
          {/* 1. Angaben gemäß § 5 DDG */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <span>1. Diensteanbieter gemäß § 5 DDG</span>
            </h2>
            <div className="space-y-1 text-slate-800">
              <p className="font-bold text-base text-[#0B0F19]">{COMPANY_INFO.name}</p>
              <p>Gesellschaft bürgerlichen Rechts (GbR)</p>
              <p>Vertretungsberechtigte Gesellschafter: <strong>Nico Heidemann</strong> &amp; <strong>Jan Osmer</strong></p>
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.zipCity}</p>
              <p className="text-slate-500 text-xs sm:text-sm">{COMPANY_INFO.region}</p>
            </div>
          </section>

          {/* 2. Kontaktaufnahme */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              2. Kontakt
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-700 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Telefon</div>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-slate-800 hover:text-[#0B0F19] transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-700 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">E-Mail</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-slate-800 hover:text-[#0B0F19] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2 pt-2">
                <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Firmensitz &amp; Anfahrt</div>
                  <a 
                    href={COMPANY_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-[#0B0F19] underline font-medium inline-flex items-center gap-1"
                  >
                    <span>{COMPANY_INFO.address}, {COMPANY_INFO.zipCity} auf Google Maps öffnen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Berufsbezeichnung & Handwerkskammer */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              3. Berufsbezeichnung &amp; berufsrechtliche Regelungen
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Gesetzliche Berufsbezeichnung:</strong><br />
                Installateur- und Heizungsbaumeister (HWK)<br />
                <span className="text-slate-500 text-sm">Verliehen durch die Handwerkskammer Hannover in der Bundesrepublik Deutschland.</span>
              </p>
              <p>
                <strong>Zuständige Handwerkskammer (Aufsichtsbehörde):</strong><br />
                Handwerkskammer Hannover<br />
                Berliner Allee 17, 30175 Hannover<br />
                Website: <a href="https://www.hwk-hannover.de" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">www.hwk-hannover.de</a>
              </p>
              <p>
                <strong>Berufsrechtliche Regelungen:</strong><br />
                Handwerksordnung (HwO) in der jeweils geltenden Fassung (einsehbar unter <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">www.gesetze-im-internet.de/hwo/</a>).
              </p>
            </div>
          </section>

          {/* 4. dena Energieeffizienz-Expertenliste */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              4. Zertifizierung &amp; Sachverständigen-Eintragung
            </h2>
            <p>
              Nico Heidemann und Jan Osmer sind bundesweit zugelassene und qualitätsgesicherte Energieeffizienz-Experten in der offiziellen Expertenliste der Deutschen Energie-Agentur GmbH (dena) für Bundesförderprogramme (KfW &amp; BAFA):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>Bundesförderung für effiziente Gebäude (BEG) – Wohngebäude &amp; Nichtwohngebäude</li>
              <li>Erstellung individueller Sanierungsfahrpläne (iSFP)</li>
              <li>Heizungsförderung nach KfW 458 und Einzelmaßnahmen nach BAFA BEG EM</li>
              <li>Fachbauleitung und Technische Bestätigung nach Durchführung (BnD)</li>
            </ul>
            <p className="text-sm text-slate-500">
              Zertifizierungsstelle: Deutsche Energie-Agentur GmbH (dena), Chausseestraße 128a, 10115 Berlin (<a href="https://www.energie-effizienz-experten.de" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">www.energie-effizienz-experten.de</a>).
            </p>
          </section>

          {/* 5. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              5. Verantwortlich für redaktionelle Inhalte gemäß § 18 Abs. 2 MStV
            </h2>
            <p>
              Nico Heidemann &amp; Jan Osmer<br />
              Weserweg 38 B<br />
              31623 Drakenburg
            </p>
          </section>

          {/* 6. Berufshaftpflichtversicherung */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              6. Berufshaftpflichtversicherung
            </h2>
            <p>
              Für die Energie nach Plan GbR sowie die Tätigkeiten der Gesellschafter als Handwerksmeister, Gebäudeenergieberater und Fachbauleiter besteht eine umfassende Berufs- und Betriebshaftpflichtversicherung bei einem in Deutschland zugelassenen Versicherungsunternehmen.
            </p>
            <p className="text-sm text-slate-500">
              Räumlicher Geltungsbereich: Bundesrepublik Deutschland.
            </p>
          </section>

          {/* 7. Streitbeilegung */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              7. Verbraucherstreitbeilegung &amp; Online-Streitbeilegung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">https://ec.europa.eu/consumers/odr</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nach dem Verbraucherstreitbeilegungsgesetz (VSBG) teilzunehmen.
            </p>
          </section>

          {/* 8. Haftung für Inhalte & Links */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19]">
              8. Haftung für Inhalte und Links
            </h2>
            <div className="space-y-3 text-slate-600 text-sm">
              <p>
                <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
              <p>
                <strong>Haftung für externe Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </section>

        </div>

        {/* Footer-Links */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Stand: {new Date().getFullYear()} · Energie nach Plan GbR
          </div>
          <div className="flex items-center gap-6">
            <Link to="/datenschutz" className="hover:text-[#0B0F19] transition-colors font-medium">
              Zur Datenschutzerklärung →
            </Link>
            <Link to="/barrierefreiheit" className="hover:text-[#0B0F19] transition-colors font-medium">
              Zur Erklärung zur Barrierefreiheit →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
