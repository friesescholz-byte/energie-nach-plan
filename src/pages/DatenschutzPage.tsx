import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, Database, Globe, Settings, Mail, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../constants/assets';

export const DatenschutzPage: React.FC = () => {
  return (
    <div className="bg-[#FBFCFD] py-20 lg:py-28 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="border-b border-slate-200/80 pb-8">
          <div className="badge-eyebrow mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
            <span>Datenschutz nach DSGVO &amp; TDDDG</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Information über die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten auf dieser Website.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          
          {/* 1. Einleitung & Verantwortliche Stelle */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Lock className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>1. Name und Anschrift des Verantwortlichen</span>
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO), sonstiger in den Mitgliedstaaten der Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist die:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm">
              <p className="font-bold text-base text-[#0B0F19]">{COMPANY_INFO.name}</p>
              <p>Vertretungsberechtigte Gesellschafter: Nico Heidemann &amp; Jan Osmer</p>
              <p>{COMPANY_INFO.address}</p>
              <p>{COMPANY_INFO.zipCity}</p>
              <p className="mt-2">Telefon: {COMPANY_INFO.phone}</p>
              <p>E-Mail: {COMPANY_INFO.email}</p>
            </div>
            <p className="text-xs text-slate-500">
              Ein Datenschutzbeauftragter ist gesetzlich nicht erforderlich, da in unserem Betrieb weniger als 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (§ 38 Abs. 1 BDSG).
            </p>
          </section>

          {/* 2. Allgemeine Hinweise & Rechtsgrundlagen */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Eye className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>2. Allgemeine Hinweise &amp; Rechtsgrundlagen</span>
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO) und dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG, ehemals TTDSG).
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Die betroffene Person hat ihre Einwilligung zur Verarbeitung der sie betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben.</p>
              <p><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich (z. B. Angebotsanfrage, Heizlast-Erstberatung).</p>
              <p><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich (z. B. steuerliche Aufbewahrungsfristen).</p>
              <p><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Die Verarbeitung ist zur Wahrung unserer berechtigten Interessen oder der eines Dritten erforderlich, sofern nicht die Interessen der betroffenen Person überwiegen (z. B. Gewährleistung der IT-Sicherheit und Systemstabilität).</p>
            </div>
          </section>

          {/* 3. Server-Log-Dateien & Hosting */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Database className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>3. Server-Log-Dateien &amp; Cloudflare CDN</span>
            </h2>
            <p>
              Beim Aufrufen unserer Website erfasst der Provider der Seiten automatisch Informationen, die Ihr Browser an unseren Server übermittelt (sogenannte Server-Logfiles):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners / IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>Übertragene Datenmenge und HTTP-Statuscode</li>
            </ul>
            <p className="text-sm">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (Berechtigtes Interesse an der technisch fehlerfreien Darstellung, Stabilität und IT-Sicherheit unseres Webauftritts).
            </p>
            <div className="pt-2">
              <h3 className="font-bold text-[#0B0F19] text-base mb-1">Content Delivery Network (Cloudflare)</h3>
              <p className="text-sm text-slate-600">
                Zur schnellen und sicheren Auslieferung statischer Mediendateien (Bilder, Schriften) setzen wir das Content Delivery Network von Cloudflare, Inc. (101 Townsend St, San Francisco, CA 94107, USA) ein. Die Einbindung erfolgt auf Grundlage unseres berechtigten Interesses an einer performanten und ausfallsicheren Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO). Die Datenübermittlung in die USA erfolgt im Rahmen des <em>EU-US Data Privacy Framework (DPF)</em> sowie standardisierter EU-Standardvertragsklauseln.
              </p>
            </div>
          </section>

          {/* 4. SSL- / TLS-Verschlüsselung */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Lock className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>4. SSL- bzw. TLS-Verschlüsselung</span>
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie beispielsweise Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </section>

          {/* 5. Cookies & Consent Management (§ 25 TDDDG) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>5. Cookies &amp; Speichertechnologien (§ 25 TDDDG &amp; DSGVO)</span>
            </h2>
            <p>
              Unsere Website verwendet Cookies und vergleichbare Speichertechnologien (z. B. LocalStorage). Cookies sind kleine Textdateien, die auf Ihrem Endgerät abgelegt werden und die Ihr Browser speichert.
            </p>
            <div className="space-y-3 text-sm">
              <p>
                <strong>Technisch notwendige Cookies:</strong> Bestimmte Funktionen unserer Website (z. B. Zwischenspeicherung des Zustands des Fördermittel-Checks oder Cookie-Präferenzen) erfordern technisch notwendige Cookies. Diese werden auf Grundlage von <strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> i. V. m. <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> gespeichert.
              </p>
              <p>
                <strong>Analyse- &amp; Marketing-Cookies:</strong> Cookies und Tracking-Technologien für statistische Auswertungen oder Marketingzwecke (wie Google Analytics und Meta Pixel) werden ausschließlich gesetzt, wenn Sie zuvor Ihre ausdrückliche Einwilligung erteilt haben (<strong>§ 25 Abs. 1 TDDDG</strong> i. V. m. <strong>Art. 6 Abs. 1 lit. a DSGVO</strong>). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft in den Cookie-Einstellungen widerrufen.
              </p>
            </div>
          </section>

          {/* 6. Formulare: Kontaktformular & Fördermittel-Rechner */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Mail className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>6. Kontaktformulare &amp; Fördermittel-Rechner</span>
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular, Erstgesprächs-Modal oder über den interaktiven Fördermittel-Rechner Anfragen zukommen lassen, verarbeiten wir die von Ihnen eingegebenen Daten (wie Vorname, Nachname, Telefonnummer, E-Mail-Adresse, Postleitzahl/Ort, Baujahr des Gebäudes, aktuelle Heizungsart, gewünschte Fördermaßnahmen):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li><strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Vorbereitung des Vor-Ort-Termins, Berechnung potenzieller KfW/BAFA-Fördersätze und Kontaktaufnahme durch Nico Heidemann oder Jan Osmer.</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung bei freiwilligen Zusatzangaben).</li>
              <li><strong>Speicherdauer:</strong> Ihre Angaben werden gelöscht, sobald der Sachverhalt abschließend geklärt ist und keine gesetzlichen Aufbewahrungsfristen (z. B. nach HGB oder AO bei Zustandekommen eines Auftrags) entgegenstehen.</li>
            </ul>
            <p className="text-sm font-semibold text-slate-800">
              Vertraulichkeitsgarantie: Wir verkaufen oder vermitteln Ihre Kontaktdaten niemals an dritte Handwerksbetriebe oder Provisionsportale.
            </p>
          </section>

          {/* 7. Google Analytics (GA4) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>7. Google Analytics (Google Analytics 4)</span>
            </h2>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die <strong>Google Ireland Limited</strong>, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                Google Analytics ermöglicht es uns, das Nutzerverhalten auf unserer Website zu analysieren (z. B. aufgerufene Seiten, Verweildauer, Klicks auf Buttons wie den Fördermittel-Check). Dabei werden Cookies eingesetzt. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p>
                <strong>IP-Anonymisierung:</strong> Auf dieser Website ist die IP-Anonymisierung standardmäßig aktiv. Ihre IP-Adresse wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung gekürzt.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Die Nutzung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und <strong>§ 25 Abs. 1 TDDDG</strong>. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                <strong>Widerspruch &amp; Browser-Plugin:</strong> Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19] font-medium">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
              </p>
              <p>
                Google ist unter dem <em>EU-US Data Privacy Framework (DPF)</em> zertifiziert und gewährleistet damit ein dem europäischen Standard angemessenes Datenschutzniveau.
              </p>
            </div>
          </section>

          {/* 8. Google Maps & Google Bewertungen */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>8. Google Maps &amp; Google Rezensionsdienste</span>
            </h2>
            <p>
              Unsere Website verlinkt auf Kartendienste und das Unternehmensprofil der Energie nach Plan GbR bei <strong>Google Maps</strong> (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                Wenn Sie auf die verlinkte Google Maps Adresse oder den Bewertungs-Link klicken, werden Sie direkt zu den Servern von Google weitergeleitet. Erst mit diesem Klick erfasst Google personenbezogene Daten (wie Ihre IP-Adresse und ggf. Standortdaten, sofern Sie bei Google eingeloggt sind).
              </p>
              <p>
                Rechtsgrundlage für die Einbindung der Anfahrts- und Standortverlinkung ist unser berechtigtes Interesse an einer leichten Auffindbarkeit unseres Betriebsstandorts in 31623 Drakenburg (<strong>Art. 6 Abs. 1 lit. f DSGVO</strong>).
              </p>
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">https://policies.google.com/privacy?hl=de</a>.
              </p>
            </div>
          </section>

          {/* 9. Meta Pixel (Facebook & Instagram Pixel) */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>9. Meta-Pixel (ehemals Facebook Pixel)</span>
            </h2>
            <p>
              Zur Conversion-Messung und zielgerichteten Bewerbung unserer Sanierungsberatung nutzen wir das Besucheraktions-Pixel der <strong>Meta Platforms Ireland Limited</strong>, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland („Meta“).
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook- oder Instagram-Werbeanzeige auf unsere Website weitergeleitet wurden. Dadurch können wir die Wirksamkeit der Werbeanzeigen für statistische und Marktforschungszwecke auswerten und zukünftige Werbemaßnahmen optimieren.
              </p>
              <p>
                Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse auf die Identität der Nutzer ziehen. Die Daten werden jedoch von Meta gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Meta die Daten für eigene Werbezwecke verwenden kann.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Die Nutzung des Meta-Pixels erfolgt ausschließlich auf Grundlage Ihrer Einwilligung gemäß <strong>Art. 6 Abs. 1 lit. a DSGVO</strong> und <strong>§ 25 Abs. 1 TDDDG</strong>. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner oder Ihre Facebook-Werbeeinstellungen widerrufen.
              </p>
              <p>
                Meta Platforms, Inc. ist unter dem <em>EU-US Data Privacy Framework (DPF)</em> zertifiziert. Weitere Details entnehmen Sie den Datenschutzhinweisen von Meta: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">https://www.facebook.com/about/privacy/</a>.
              </p>
            </div>
          </section>

          {/* 10. Betroffenenrechte nach DSGVO */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0B0F19] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-700 flex-shrink-0" />
              <span>10. Ihre gesetzlichen Rechte als betroffene Person</span>
            </h2>
            <p>
              Als betroffene Person stehen Ihnen nach der DSGVO umfassende Schutzrechte zu:
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu verlangen.</p>
              <p><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten zu verlangen.</p>
              <p><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer bei uns gespeicherten personenbezogenen Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
              <p><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung Ihrer Daten zu fordern.</p>
              <p><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur Vertragserfüllung verarbeiten, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
              <p><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Verarbeiten wir Ihre Daten auf Basis unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO), haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einzulegen.</p>
              <p><strong>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können einmal erteilte Einwilligungen (z. B. für Cookies oder den Newsletter) jederzeit formlos mit Wirkung für die Zukunft widerrufen.</p>
            </div>
            <div className="pt-3 border-t border-slate-100">
              <h3 className="font-bold text-[#0B0F19] text-sm mb-1">Beschwerderecht bei der zuständigen Aufsichtsbehörde (Art. 77 DSGVO)</h3>
              <p className="text-sm text-slate-600">
                Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde zu. Die für uns zuständige Landesdatenschutzbehörde ist:<br />
                <strong>Die Landesbeauftragte für den Datenschutz Niedersachsen (LfD Niedersachsen)</strong><br />
                Prinzenstraße 5, 30159 Hannover<br />
                Telefon: 0511 120-4500 | Website: <a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline hover:text-[#0B0F19]">www.lfd.niedersachsen.de</a>
              </p>
            </div>
          </section>

        </div>

        {/* Footer-Links */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Stand der Datenschutzerklärung: September 2026 · DSGVO-konform
          </div>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-[#0B0F19] transition-colors font-medium">
              Zum Impressum →
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
