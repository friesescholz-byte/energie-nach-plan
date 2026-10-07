import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Flame, 
  Wrench, 
  Sparkles, 
  Phone, 
  Mail, 
  Download, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../constants/assets';
import { LeadData } from '../types';

export const CalculatorPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadData>({
    buildingType: 'Einfamilienhaus',
    buildingYear: '1978 – 1995',
    currentHeating: 'Ölheizung (funktionsfähig)',
    plannedMeasure: 'Heizungstausch auf Wärmepumpe',
    timeframe: 'In den nächsten 3 bis 6 Monaten',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Dynamic calculations
  const calculateSubsidy = () => {
    let maxPercent = 30; // Grundförderung
    let maxBonus = 0;
    let description = '';

    if (formData.plannedMeasure.includes('Wärmepumpe') || formData.plannedMeasure.includes('Heizungstausch')) {
      maxPercent = 30; // Grundförderung
      if (formData.currentHeating.includes('Öl') || formData.currentHeating.includes('Gas') || formData.currentHeating.includes('Nachtspeicher')) {
        maxPercent += 20; // Geschwindigkeitsbonus
      }
      maxPercent += 5; // Effizienzbonus (natürliches Kältemittel / Erdwärme)
      maxBonus = 70; // Cap
      description = '30 % Grundförderung + 20 % Klimageschwindigkeitsbonus + ggf. 5 % Effizienzbonus (gedeckelt auf maximal 70 %)';
    } else if (formData.plannedMeasure.includes('Sanierungsfahrplan')) {
      maxPercent = 80;
      maxBonus = 80;
      description = 'Bis zu 80 % staatliche BAFA-Förderung auf die Beratung selbst + 5 % Sanierungs-Extrabonus für Folgemaßnahmen';
    } else {
      maxPercent = 20;
      maxBonus = 20;
      description = '15 % Grundförderung für Gebäudehülle/Fenster + 5 % iSFP-Sanierungsbonus';
    }

    const finalPercent = Math.min(maxPercent, maxBonus);
    return { percent: finalPercent, description };
  };

  const subsidyInfo = calculateSubsidy();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: LeadData = {
      ...formData,
      estimatedSubsidyPercent: subsidyInfo.percent,
      submittedAt: new Date().toISOString()
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('energie_nach_plan_leads') || '[]');
      existing.push(submission);
      localStorage.setItem('energie_nach_plan_leads', JSON.stringify(existing));
    } catch (err) {
      console.error('Error saving lead locally:', err);
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-gradient-to-b from-[#FAFBF2] via-[#FBFCF7] to-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-eyebrow mb-4">
            <Calculator className="w-3.5 h-3.5 text-slate-700" />
            <span>Interaktiver Fördermittel- &amp; Sanierungsrechner</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight">
            Fördermittel-Check für Ihr Gebäude
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Ermitteln Sie in 60 Sekunden, welche KfW- und BAFA-Zuschüsse für Ihre Immobilie möglich sind.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden border-b-[4px] border-b-slate-300">
          
          {/* Progress Bar */}
          {!submitted && (
            <div className="bg-slate-50 p-4 sm:px-8 border-b border-slate-200/80">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 mb-2">
                <span>Schritt {step} von 4</span>
                <span className="text-slate-800 font-bold">{step === 1 ? 'Gebäudeart' : step === 2 ? 'Baujahr & Heizung' : step === 3 ? 'Vorhaben' : 'Ihre Kontaktdaten'}</span>
              </div>
              <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            {!submitted ? (
              <div>
                {/* STEP 1: GEBÄUDEART */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B0F19]">
                        Um welche Art von Gebäude handelt es sich?
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Wählen Sie den Gebäudetyp aus, der auf Ihr Objekt zutrifft.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Einfamilienhaus (EFH)', desc: 'Freistehend oder Doppelhaushälfte', icon: Building2 },
                        { title: 'Zweifamilienhaus (ZFH)', desc: 'Mit zwei getrennten Wohneinheiten', icon: Building2 },
                        { title: 'Mehrfamilienhaus / WEG', desc: 'Wohnungseigentümergemeinschaft oder Mietobjekt', icon: Building2 },
                        { title: 'Gewerbeimmobilie / Nichtwohngebäude', desc: 'Büro, Halle, Praxis gem. DIN 18599', icon: Building2 },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, buildingType: item.title })}
                          className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                            formData.buildingType === item.title
                              ? 'border-[#0B0F19] bg-slate-50 ring-2 ring-slate-300 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                          }`}
                        >
                          <div className="font-bold text-[#0B0F19] text-base flex items-center justify-between">
                            <span>{item.title}</span>
                            {formData.buildingType === item.title && (
                              <CheckCircle2 className="w-5 h-5 text-[#0B0F19]" />
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-1.5 leading-normal">
                            {item.desc}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-sm border-b-[3px] border-b-[#929515] transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0.5"
                      >
                        <span>Weiter zu Schritt 2</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: BAUJAHR & HEIZUNG */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B0F19]">
                        Baujahr und derzeitige Heizungsart
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Das Alter der aktuellen Heizung beeinflusst den staatlichen Klimageschwindigkeitsbonus (bis zu 20 % extra).
                      </p>
                    </div>

                    {/* Baujahr */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Ungefähres Baujahr des Gebäudes
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Vor 1978', '1978 – 1995', '1996 – 2009', 'Ab 2010'].map((year) => (
                          <button
                            key={year}
                            type="button"
                            onClick={() => setFormData({ ...formData, buildingYear: year })}
                            className={`p-3.5 rounded-xl border text-center text-sm font-semibold transition-all ${
                              formData.buildingYear === year
                                ? 'border-[#0B0F19] bg-slate-50 text-[#0B0F19] font-bold ring-2 ring-slate-300'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Aktuelle Heizung */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Aktuelle Heizungsanlage
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          'Ölheizung (funktionsfähig)',
                          'Gasheizung älter als 20 Jahre',
                          'Gasheizung jünger als 20 Jahre',
                          'Nachtspeicher / Stromheizung',
                          'Pellets / Holzheizung',
                          'Sonstige / Unbekannt'
                        ].map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => setFormData({ ...formData, currentHeating: h })}
                            className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                              formData.currentHeating === h
                                ? 'border-[#0B0F19] bg-slate-50 text-[#0B0F19] font-bold ring-2 ring-slate-300'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Zurück</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-sm border-b-[3px] border-b-[#929515] transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0.5"
                      >
                        <span>Weiter zu Schritt 3</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: VORHABEN & ZEITRAHMEN */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B0F19]">
                        Welches Vorhaben planen Sie?
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Wählen Sie Ihre primäre Zielsetzung für die Modernisierung.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { 
                          title: 'Heizungstausch auf Wärmepumpe', 
                          desc: 'Bis zu 70 % KfW-Zuschuss für das neue Heizsystem',
                          badge: 'Bis 70 %'
                        },
                        { 
                          title: 'Individueller Sanierungsfahrplan (iSFP)', 
                          desc: '15-Jahre-Fahrplan mit 5 % Extra-Zuschuss auf alle Maßnahmen',
                          badge: 'Bis 80 %'
                        },
                        { 
                          title: 'Gebäudehülle (Dämmung / Fenster / Dach)', 
                          desc: 'Gezielte Einzelmaßnahmen oder Gesamtsanierung',
                          badge: 'Bis 20 %'
                        },
                        { 
                          title: 'TGA-Fachplanung / Gewerbe', 
                          desc: 'Für Architekten, Bauträger & Gewerbeobjekte gem. § 56',
                          badge: 'Individuell'
                        },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, plannedMeasure: item.title })}
                          className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                            formData.plannedMeasure === item.title
                              ? 'border-[#0B0F19] bg-slate-50 ring-2 ring-slate-300 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-1.5">
                            <span className="font-bold text-[#0B0F19] text-base">{item.title}</span>
                            <span className="text-[11px] font-bold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-full border border-slate-200/90">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </button>
                      ))}
                    </div>

                    {/* Zeitrahmen */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold uppercase text-slate-500 tracking-wider">
                        Geplanter Umsetzungszeitraum
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          'Schnellstmöglich (dringend)',
                          'In den nächsten 3 bis 6 Monaten',
                          'Mittelfristig (in 6 bis 12 Monaten)'
                        ].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeframe: t })}
                            className={`p-3.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                              formData.timeframe === t
                                ? 'border-[#0B0F19] bg-slate-50 text-[#0B0F19] font-bold ring-2 ring-slate-300'
                                : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Zurück</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-sm border-b-[3px] border-b-[#929515] transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0.5"
                      >
                        <span>Zur Auswertung &amp; Kontakt</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: KONTAKTDATEN & ERGEBNIS-VORSCHAU */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
                    {/* Live Calculation Preview Banner */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0B0F19] via-[#111625] to-[#0B0F19] text-white border border-white/10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-44 h-44 bg-[#BBBE22]/20 rounded-full blur-3xl pointer-events-none" />
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BBBE22] uppercase tracking-wider block mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#BBBE22]" />
                          Ihre voraussichtliche Förderquote
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          Bis zu {subsidyInfo.percent} % Zuschuss
                        </div>
                        <p className="text-xs text-slate-300 mt-1 max-w-md">
                          {subsidyInfo.description}
                        </p>
                      </div>
                      <div className="text-right sm:border-l sm:border-white/10 sm:pl-6 w-full sm:w-auto relative z-10">
                        <span className="text-xs text-slate-400 block font-medium">Mögliche Fördersumme</span>
                        <span className="text-2xl font-black text-[#BBBE22]">Bis zu 21.000 €*</span>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0B0F19]">
                        Wohin dürfen wir Ihre detaillierte Fördermittel-Auswertung senden?
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        Kostenfrei und unverbindlich. Nico Heidemann &amp; Jan Osmer prüfen Ihre Daten persönlich.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Vor- und Nachname *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="z. B. Michael Meyer"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#BBBE22] focus:border-[#BBBE22] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Telefonnummer für Rückfragen *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="z. B. 0171 1234567"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#BBBE22] focus:border-[#BBBE22] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ihre-mail@beispiel.de"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#BBBE22] focus:border-[#BBBE22] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Standort des Objekts (PLZ / Ort)
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="z. B. 31623 Drakenburg"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#BBBE22] focus:border-[#BBBE22] text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Haben Sie bereits konkrete Pläne oder Fragen? (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="z. B. Haus hat 140 qm Wohnfläche, möchten Ölheizung tauschen und wissen, ob Heizkörper reichen..."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#BBBE22] focus:border-[#BBBE22] text-sm"
                      />
                    </div>

                    <div className="text-xs text-slate-500 leading-relaxed">
                      Mit dem Absenden stimmen Sie zu, dass Ihre Angaben zur Beantwortung der Anfrage verarbeitet werden. Keine Weitergabe an Dritte. Widerruf jederzeit möglich.
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Zurück</span>
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-base border-b-[3.5px] border-b-[#929515] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5"
                      >
                        <span>Fördermittel-Auswertung anfordern</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* SUBMITTED SUCCESS SCREEN */
              <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200/90 text-[#0B0F19] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-1">
                    Anfrage erfolgreich übermittelt
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0F19]">
                    Vielen Dank, {formData.fullName}!
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mt-2 leading-relaxed">
                    Wir haben Ihre Daten erhalten. Nico Heidemann oder Jan Osmer wird sich innerhalb von 24 Stunden persönlich bei Ihnen melden, um die Fördersätze für Ihr Gebäude detailliert durchzugehen.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 text-left max-w-lg mx-auto text-sm space-y-3 shadow-xs">
                  <div className="font-bold text-[#0B0F19] border-b border-slate-200 pb-2.5 flex justify-between">
                    <span>Ihre Angaben im Überblick:</span>
                    <span className="text-[#0B0F19] font-bold">Bis zu {subsidyInfo.percent} % Förderung</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Gebäudetyp:</span>
                    <strong className="text-[#0B0F19]">{formData.buildingType}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Baujahr:</span>
                    <strong className="text-[#0B0F19]">{formData.buildingYear}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Bestehende Heizung:</span>
                    <strong className="text-[#0B0F19]">{formData.currentHeating}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Geplantes Vorhaben:</span>
                    <strong className="text-[#0B0F19]">{formData.plannedMeasure}</strong>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Telefon:</span>
                    <strong className="text-[#0B0F19]">{formData.phone}</strong>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=F%C3%B6rdermittel-Anfrage%20von%20${encodeURIComponent(formData.fullName)}&body=Geb%C3%A4ude:%20${encodeURIComponent(formData.buildingType)}%0ABaujahr:%20${encodeURIComponent(formData.buildingYear)}%0AHeizung:%20${encodeURIComponent(formData.currentHeating)}%0AVorhaben:%20${encodeURIComponent(formData.plannedMeasure)}%0ATelefon:%20${encodeURIComponent(formData.phone)}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] hover:bg-slate-800 text-white font-medium text-sm transition-colors border border-white/10"
                  >
                    <Mail className="w-4 h-4 text-[#BBBE22]" />
                    <span>Zusätzliche E-Mail senden</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 font-medium text-sm hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-slate-700" />
                    <span>Direkt anrufen: {COMPANY_INFO.phone}</span>
                  </a>
                </div>

                <div className="pt-4">
                  <Link to="/" className="text-xs font-bold text-slate-800 hover:text-[#0B0F19] hover:underline">
                    ← Zurück zur Startseite
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
