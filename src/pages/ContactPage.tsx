import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../constants/assets';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Allgemeine Anfrage / Erstberatung',
    message: '',
    honeypot: '' // Spam-Schutz
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam Bot detected
      return;
    }
    setSent(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block mb-3">
              Persönlicher Kontakt
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Sprechen Sie direkt mit unseren Meistern
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Ob Sanierungsfahrplan, Wärmepumpen-Eignung oder WEG-Projekt: Wir beraten Sie persönlich, unabhängig und auf Augenhöhe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Energie nach Plan GbR
                </h2>
                <p className="text-sm text-slate-600">
                  Nico Heidemann &amp; Jan Osmer<br />
                  Zertifizierte Energieeffizienz-Experten &amp; Heizungsbaumeister
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a 
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-emerald-300 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                      Telefonische Direktberatung
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Mo – Fr: 08:00 – 17:00 Uhr
                    </span>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-emerald-300 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                      E-Mail-Anfragen
                    </span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Antwort meist innerhalb von 24 Stunden
                    </span>
                  </div>
                </a>

                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">
                      Büro- und Postanschrift
                    </span>
                    <span className="text-base font-bold text-slate-900 block">
                      {COMPANY_INFO.address}
                    </span>
                    <span className="text-xs text-slate-600 block">
                      {COMPANY_INFO.zipCity}
                    </span>
                    <span className="text-xs text-slate-400 block mt-1">
                      Termine vor Ort in der gesamten Region Nienburg / Mittelweser
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-subtle h-64 bg-slate-100">
                <iframe
                  title="Standort Energie nach Plan Drakenburg"
                  src="https://maps.google.com/maps?q=Weserweg%2038B%2C%2031623%20Drakenburg&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-premium">
                {!sent ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Schreiben Sie uns eine Nachricht
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Wir melden uns schnellstmöglich für ein persönliches Erstgespräch.
                      </p>
                    </div>

                    {/* Honeypot Spam-Schutz (Versteckt für Menschen) */}
                    <div className="hidden" aria-hidden="true">
                      <input 
                        type="text" 
                        name="website_url_honeypot" 
                        tabIndex={-1} 
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Ihr vollständiger Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="z. B. Sandra Becker"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Telefonnummer für Rückruf *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="z. B. 05021 987654"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ihre-mail@beispiel.de"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Themenbereich
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
                        >
                          <option value="Heizungstausch / Wärmepumpe">Heizungstausch / Wärmepumpe</option>
                          <option value="Sanierungsfahrplan (iSFP)">Sanierungsfahrplan (iSFP)</option>
                          <option value="Hausverwaltung / WEG-Anfrage">Hausverwaltung / WEG-Anfrage</option>
                          <option value="TGA-Fachplanung / Gewerbe">TGA-Fachplanung / Gewerbe</option>
                          <option value="Fördermittelberatung KfW/BAFA">Fördermittelberatung KfW/BAFA</option>
                          <option value="Sonstiges">Sonstiges</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Ihre Nachricht / Kurzbeschreibung des Vorhabens *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Beschreiben Sie kurz Ihr Gebäude (Baujahr, aktuelle Heizung) oder welche Frage Sie klären möchten..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
                      <input 
                        type="checkbox" 
                        required 
                        id="privacy"
                        className="mt-1 rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <label htmlFor="privacy">
                        Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage erhoben und verarbeitet werden. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Nachricht absenden</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-5 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Vielen Dank für Ihre Anfrage!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Wir haben Ihre Nachricht erhalten. Nico Heidemann oder Jan Osmer wird sich in Kürze telefonisch oder per E-Mail bei Ihnen zurückmelden.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSent(false)}
                        className="text-xs font-semibold text-emerald-700 hover:underline"
                      >
                        Weitere Nachricht senden
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
