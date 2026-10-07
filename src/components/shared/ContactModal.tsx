import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  FileCheck, 
  Flame, 
  Calculator, 
  Wrench, 
  Sparkles,
  Phone,
  Mail,
  User,
  MapPin,
  Clock
} from 'lucide-react';
import { useContactModal, ServiceType } from '../../context/ContactModalContext';

export const ContactModal: React.FC = () => {
  const { isOpen, selectedService, closeModal, selectService } = useContactModal();

  // Current step in the flow (1, 2, 3) or 4 (success)
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    // Common contact fields
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    notes: '',

    // iSFP specific
    buildingType: 'Einfamilienhaus',
    buildingYear: 'Vor 1978',
    plannedMeasures: [] as string[],
    currentHeatingIsfp: 'Gasheizung',

    // Wärmepumpe specific
    currentHeatingWp: 'Gasheizung',
    heatingAge: 'Älter als 15 Jahre',
    heatDistribution: 'Reine Heizkörper',
    livingArea: '120 - 180 m²',

    // Förderservice specific
    fundingGoal: 'Heizungstausch (bis zu 70 % KfW-Zuschuss)',
    contractorOffersReady: 'Nein, noch keine Angebote',

    // Fachbauleitung specific
    projectScope: 'Wärmepumpen-Installation & Hydraulik',
    projectTiming: 'In den nächsten 1–3 Monaten',
    contractorAssigned: 'Handwerker ist bereits beauftragt'
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset step when modal opens/closes or service changes
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setErrorMsg('');
    }
  }, [isOpen, selectedService]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  // Service configuration
  const serviceMeta: Record<ServiceType, { title: string; subtitle: string; icon: React.ReactNode }> = {
    isfp: {
      title: 'Sanierungsfahrplan (iSFP)',
      subtitle: 'Bis zu 80 % staatlicher Zuschuss + 5 % Extra-Förderung für alle Folgemaßnahmen',
      icon: <FileCheck className="w-5 h-5 text-slate-800" />
    },
    waermepumpe: {
      title: 'Wärmepumpen-Check',
      subtitle: 'Verbindliche Eignungsprüfung & reale Heizlastberechnung nach DIN 12831',
      icon: <Flame className="w-5 h-5 text-slate-800" />
    },
    foerderung: {
      title: 'Förderservice (KfW / BAFA)',
      subtitle: 'Bis zu 70 % Zuschuss – 100 % rechtssicher vor Auftragsvergabe gesichert',
      icon: <Calculator className="w-5 h-5 text-slate-800" />
    },
    fachbauleitung: {
      title: 'Fachbauleitung & Abnahme',
      subtitle: 'Unabhängige meisterhafte Qualitätskontrolle und Förderabnahme auf der Baustelle',
      icon: <Wrench className="w-5 h-5 text-slate-800" />
    },
    allgemein: {
      title: 'Kostenloses Erstgespräch',
      subtitle: 'Unverbindliche Beratung durch unsere Handwerksmeister Nico Heidemann & Jan Osmer',
      icon: <Sparkles className="w-5 h-5 text-slate-800" />
    }
  };

  const handleMeasureToggle = (measure: string) => {
    setFormData(prev => {
      const exists = prev.plannedMeasures.includes(measure);
      return {
        ...prev,
        plannedMeasures: exists 
          ? prev.plannedMeasures.filter(m => m !== measure)
          : [...prev.plannedMeasures, measure]
      };
    });
  };

  const validateStep3 = () => {
    if (!formData.name.trim()) {
      setErrorMsg('Bitte geben Sie Ihren Namen an.');
      return false;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMsg('Bitte geben Sie eine Telefonnummer oder E-Mail-Adresse für die Rückmeldung an.');
      return false;
    }
    setErrorMsg('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Simulate short network request
    setTimeout(() => {
      setIsSubmitting(false);
      setCurrentStep(4); // Success screen
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0B0D1B]/70 backdrop-blur-md transition-opacity duration-300"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal Dialog Window */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2.5">
            {selectedService && currentStep > 1 && currentStep < 4 && (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="p-1.5 -ml-1 text-slate-400 hover:text-[#0B0F19] rounded-lg hover:bg-white transition-colors"
                title="Zurück zum vorherigen Schritt"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {selectedService && currentStep === 1 && (
              <button
                type="button"
                onClick={() => selectService(null as any)}
                className="p-1.5 -ml-1 text-slate-400 hover:text-[#0B0F19] rounded-lg hover:bg-white transition-colors text-xs font-bold flex items-center gap-1"
                title="Zurück zur Leistungsauswahl"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Leistungen</span>
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BBBE22]" />
              <span className="font-extrabold text-[#0B0F19] text-sm tracking-tight">
                Energie nach Plan
              </span>
              <span className="text-xs text-slate-400 font-medium">| Meisterberatung</span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-200/60 transition-colors"
            aria-label="Fenster schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with internal scrolling */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 flex-1">
          
          {/* ======================================================== */}
          {/* CASE 1: KEINE LEISTUNG GEWÄHLT -> ÜBERSICHTS-AUSWAHL    */}
          {/* ======================================================== */}
          {!selectedService && (
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto pt-2">
                <span className="badge-eyebrow mb-2.5">
                  Erstgespräch vereinbaren
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                  Wählen Sie Ihr Anliegen
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  Klicken Sie auf Ihre gewünschte Leistung für ein gezielt vorbereitetes Erstgespräch mit unseren Handwerksmeistern:
                </p>
              </div>

              {/* 4 Interaktive Leistungs-Kacheln zur Auswahl */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {/* 1. iSFP */}
                <button
                  type="button"
                  onClick={() => selectService('isfp')}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#BBBE22] border-b-[3.5px] border-b-slate-200 hover:border-b-[#929515] bg-slate-50/60 hover:bg-white text-left transition-all duration-200 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/90 flex items-center justify-center group-hover:bg-[#BBBE22] group-hover:text-[#0B0F19] group-hover:border-[#BBBE22] transition-all mb-3.5 shadow-xs">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-[#0B0F19] text-base mb-1 group-hover:text-[#0B0F19] transition-colors">
                      Sanierungsfahrplan (iSFP)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Der 15-Jahre-Plan für Ihr Gebäude. Bis zu 80 % BAFA-Zuschuss und 5 % Extra-Förderung.
                    </p>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-700 group-hover:text-[#0B0F19] flex items-center gap-1">
                    <span>Auswählen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 2. Wärmepumpen-Check */}
                <button
                  type="button"
                  onClick={() => selectService('waermepumpe')}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#BBBE22] border-b-[3.5px] border-b-slate-200 hover:border-b-[#929515] bg-slate-50/60 hover:bg-white text-left transition-all duration-200 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/90 flex items-center justify-center group-hover:bg-[#BBBE22] group-hover:text-[#0B0F19] group-hover:border-[#BBBE22] transition-all mb-3.5 shadow-xs">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-[#0B0F19] text-base mb-1 group-hover:text-[#0B0F19] transition-colors">
                      Wärmepumpen-Check
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Verbindliche Eignungsprüfung für Heizkörper &amp; reale Heizlastberechnung DIN 12831.
                    </p>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-700 group-hover:text-[#0B0F19] flex items-center gap-1">
                    <span>Auswählen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 3. Förderservice */}
                <button
                  type="button"
                  onClick={() => selectService('foerderung')}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#BBBE22] border-b-[3.5px] border-b-slate-200 hover:border-b-[#929515] bg-slate-50/60 hover:bg-white text-left transition-all duration-200 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/90 flex items-center justify-center group-hover:bg-[#BBBE22] group-hover:text-[#0B0F19] group-hover:border-[#BBBE22] transition-all mb-3.5 shadow-xs">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-[#0B0F19] text-base mb-1 group-hover:text-[#0B0F19] transition-colors">
                      Förderservice (KfW / BAFA)
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Rechtssichere Beantragung für bis zu 70 % KfW-Zuschuss vor verbindlicher Auftragsvergabe.
                    </p>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-700 group-hover:text-[#0B0F19] flex items-center gap-1">
                    <span>Auswählen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                {/* 4. Fachbauleitung & Abnahme */}
                <button
                  type="button"
                  onClick={() => selectService('fachbauleitung')}
                  className="p-5 rounded-2xl border border-slate-200 hover:border-[#BBBE22] border-b-[3.5px] border-b-slate-200 hover:border-b-[#929515] bg-slate-50/60 hover:bg-white text-left transition-all duration-200 group flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/90 flex items-center justify-center group-hover:bg-[#BBBE22] group-hover:text-[#0B0F19] group-hover:border-[#BBBE22] transition-all mb-3.5 shadow-xs">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h4 className="font-black text-[#0B0F19] text-base mb-1 group-hover:text-[#0B0F19] transition-colors">
                      Fachbauleitung &amp; Abnahme
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Unabhängige Prüfung der Ausführung vor Ort durch erfahrene HWK-Heizungsbaumeister.
                    </p>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-700 group-hover:text-[#0B0F19] flex items-center gap-1">
                    <span>Auswählen</span> <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Generische Option am Fuß */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => selectService('allgemein')}
                  className="text-xs font-bold text-slate-600 hover:text-[#0B0F19] underline underline-offset-4 transition-colors"
                >
                  Sie sind noch unsicher oder haben eine allgemeine Frage? Hier klicken ➔
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* CASE 2: SPEZIFISCHES FLOW-FORMULAR FÜR DIE LEISTUNG      */}
          {/* ======================================================== */}
          {selectedService && currentStep < 4 && (
            <div className="space-y-6">
              
              {/* Badge & Active Service Title */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/90 flex items-center justify-center">
                    {serviceMeta[selectedService].icon}
                  </div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {serviceMeta[selectedService].title}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-normal">
                  {serviceMeta[selectedService].subtitle}
                </p>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1.5">
                    <span>Schritt {currentStep} von 3</span>
                    <span>
                      {currentStep === 1 && 'Projekt- & Objektdaten'}
                      {currentStep === 2 && 'Spezifische Anforderungen'}
                      {currentStep === 3 && 'Kontaktdaten & Rückruf'}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] transition-all duration-300 rounded-full"
                      style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------- */}
              {/* FLOW 1: SANIERUNGSFAHRPLAN (iSFP)                  */}
              {/* -------------------------------------------------- */}
              {selectedService === 'isfp' && (
                <>
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Welcher Gebäudetyp soll saniert werden?
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {['Einfamilienhaus', 'Zweifamilienhaus', 'Mehrfamilienhaus / WEG', 'Gewerbeimmobilie'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, buildingType: opt }))}
                              className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.buildingType === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.buildingType === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Ungefähres Baujahr der Immobilie
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Vor 1978', '1978 – 1995', '1996 – 2010', 'Nach 2010'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, buildingYear: opt }))}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                                formData.buildingYear === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Welche Maßnahmen haben Sie im Auge? (Mehrfachauswahl)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {[
                            'Heizungstausch (Wärmepumpe)',
                            'Dachdämmung / oberste Geschossdecke',
                            'Fassadendämmung (WDVS)',
                            'Fenster- & Türentausch',
                            'Photovoltaik & Batteriespeicher',
                            'Komplettsanierung (Effizienzhaus)'
                          ].map((opt) => {
                            const selected = formData.plannedMeasures.includes(opt);
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleMeasureToggle(opt)}
                                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                  selected
                                    ? 'bg-slate-100 text-[#0B0F19] border-[#0B0F19]'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                                }`}
                              >
                                <span>{opt}</span>
                                {selected && <Check className="w-4 h-4 text-[#0B0F19]" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Wie wird das Gebäude aktuell beheizt?
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Gasheizung', 'Ölheizung', 'Nachtspeicher / Sonstiges'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, currentHeatingIsfp: opt }))}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                                formData.currentHeatingIsfp === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* -------------------------------------------------- */}
              {/* FLOW 2: WÄRMEPUMPEN-CHECK                          */}
              {/* -------------------------------------------------- */}
              {selectedService === 'waermepumpe' && (
                <>
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Welche Heizung ist aktuell im Gebäude verbaut?
                        </label>
                        <div className="grid grid-cols-2 gap-2.5">
                          {['Gasbrennwert / Gastherme', 'Ölheizung', 'Nachtspeicher / Strom', 'Pellet / Holz / Sonstiges'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, currentHeatingWp: opt }))}
                              className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.currentHeatingWp === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.currentHeatingWp === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Wie alt ist Ihre bestehende Heizanlage?
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Über 20 Jahre', '10 bis 20 Jahre', 'Unter 10 Jahre'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, heatingAge: opt }))}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                                formData.heatingAge === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Wie wird die Wärme in den Räumen verteilt?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {[
                            'Reine Heizkörper (Radiatoren)',
                            'Fußbodenheizung überall',
                            'Gemischt (z.B. FBH im EG, HK im OG)'
                          ].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, heatDistribution: opt }))}
                              className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.heatDistribution === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.heatDistribution === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Zu beheizende Wohnfläche ca.
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Unter 130 m²', '130 – 220 m²', 'Über 220 m²'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, livingArea: opt }))}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                                formData.livingArea === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed">
                        <strong>Wichtig:</strong> Für Wärmepumpen berechnen wir vor Ort die tatsächliche Vorlauftemperatur. Meist reicht der Tausch von nur 1–2 Heizkörpern völlig aus.
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* -------------------------------------------------- */}
              {/* FLOW 3: FÖRDERMITTEL-SERVICE (KfW / BAFA)          */}
              {/* -------------------------------------------------- */}
              {selectedService === 'foerderung' && (
                <>
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Welche Fördermaßnahme soll beantragt werden?
                        </label>
                        <div className="space-y-2">
                          {[
                            'Heizungstausch KfW 458 (bis zu 70 % Zuschuss für Wärmepumpe)',
                            'Gebäudehülle BAFA BEG EM (15 % bis 20 % Zuschuss für Dämmung / Fenster)',
                            'Gesamtsanierung zum KfW-Effizienzhaus (Kredit & Tilgungszuschuss)'
                          ].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, fundingGoal: opt }))}
                              className={`w-full p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.fundingGoal === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.fundingGoal === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Liegt bereits ein Angebot eines Handwerkers vor?
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            'Ja, schriftliches Angebot liegt vor',
                            'Nein, bin noch in der Planungsphase'
                          ].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, contractorOffersReady: opt }))}
                              className={`p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.contractorOffersReady === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.contractorOffersReady === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                        <strong>Rechtlicher Hinweis:</strong> Förderanträge müssen zwingend <em>vor</em> der verbindlichen Vergabe an Handwerker gestellt werden! Wir prüfen Angebote neutral auf Förderkonformität (BzA / BzA-ID).
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* -------------------------------------------------- */}
              {/* FLOW 4: FACHBAULEITUNG & ABNAHME                   */}
              {/* -------------------------------------------------- */}
              {selectedService === 'fachbauleitung' && (
                <>
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          1. Für welches Gewerk benötigen Sie die Bauleitung?
                        </label>
                        <div className="space-y-2">
                          {[
                            'Wärmepumpen-Installation & Hydraulischer Abgleich',
                            'Dämmarbeiten, Fenstertausch & Luftdichtheitsprüfung',
                            'Gewerbliche TGA-Planung & Fachbauleitung (HOAI)',
                            'Komplettsanierung (Mehrere Gewerke koordiniert)'
                          ].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, projectScope: opt }))}
                              className={`w-full p-3.5 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                                formData.projectScope === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19] shadow-sm'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <span>{opt}</span>
                              {formData.projectScope === opt && <Check className="w-4 h-4 text-[#BBBE22]" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          2. Wann soll die Maßnahme beginnen?
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Sofort / 1–4 Wochen', 'In 1–3 Monaten', 'In 3–6 Monaten'].map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, projectTiming: opt }))}
                              className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                                formData.projectTiming === opt
                                  ? 'bg-[#0B0F19] text-white border-[#0B0F19]'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* -------------------------------------------------- */}
              {/* FLOW 5: ALLGEMEINES ERSTGESPRÄCH                   */}
              {/* -------------------------------------------------- */}
              {selectedService === 'allgemein' && (
                <>
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Wobei können wir Ihnen helfen?
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                          placeholder="z.B. Ich überlege meine Gasheizung zu tauschen, weiß aber nicht welche Förderung möglich ist..."
                          className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] focus:ring-1 focus:ring-[#BBBE22] text-sm text-slate-800 placeholder-slate-400"
                        />
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                        Vielen Dank! Im nächsten Schritt benötigen wir lediglich Ihre Kontaktdaten, damit sich Jan Osmer oder Nico Heidemann direkt mit Ihnen in Verbindung setzen können.
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* -------------------------------------------------- */}
              {/* SCHRITT 3: KONTAKTDATEN (FÜR ALLE SERVICES GLEICH) */}
              {/* -------------------------------------------------- */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs text-slate-600 mb-2">
                    Wohin dürfen unsere Meister Ihre Auswertung senden bzw. Sie für den Vor-Ort-Termin kontaktieren?
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Ihr Name / Ansprechpartner *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Max Mustermann"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] focus:ring-1 focus:ring-[#BBBE22] text-sm text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Telefonnummer (für Rückfragen) *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="0170 1234567"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] focus:ring-1 focus:ring-[#BBBE22] text-sm text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        E-Mail-Adresse
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="beispiel@mail.de"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] focus:ring-1 focus:ring-[#BBBE22] text-sm text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        PLZ / Ort des Objekts
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          placeholder="31623 Drakenburg / Nienburg"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] focus:ring-1 focus:ring-[#BBBE22] text-sm text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Zusätzliche Notizen oder Wunschtermin (optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      placeholder="z.B. Gebäude ist vermietet, bevorzugt nachmittags erreichbar..."
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-[#BBBE22] text-xs text-slate-800"
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 leading-normal pt-1">
                    🔒 Ihre Daten werden vertraulich behandelt und ausschließlich zur Bearbeitung Ihrer Anfrage durch Energie nach Plan genutzt. Keine Weitergabe an Werbedritte.
                  </div>
                </form>
              )}

              {/* Navigation Controls inside Flow */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold text-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Zurück</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => selectService(null as any)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-bold text-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Leistung ändern</span>
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-xs sm:text-sm border-b-[2.5px] border-b-[#929515] transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
                  >
                    <span>Weiter</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-xs sm:text-sm border-b-[3px] border-b-[#929515] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Wird gesendet...</span>
                    ) : (
                      <>
                        <span>Anfrage unverbindlich absenden</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* CASE 3: BESTÄTIGUNG / ERFOLG (STEP 4)                    */}
          {/* ======================================================== */}
          {selectedService && currentStep === 4 && (
            <div className="text-center py-6 sm:py-8 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200/90 flex items-center justify-center mx-auto text-[#0B0F19] shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#0B0F19] stroke-[2.5]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="badge-eyebrow mb-2">
                  Erfolgreich eingegangen
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B0F19] tracking-tight">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Ihre Daten für <strong>{serviceMeta[selectedService].title}</strong> wurden an unsere Meister Nico Heidemann und Jan Osmer übermittelt.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B0F19]">
                  <Clock className="w-4 h-4 text-slate-700" />
                  <span>So geht es jetzt weiter:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Wir prüfen Ihre Angaben vorab anhand der Kataster- und Gebäudedaten. Innerhalb von <strong>24 Stunden (werktags)</strong> melden wir uns telefonisch oder per E-Mail für einen ersten Abstimmungstermin bei Ihnen.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-8 py-3 rounded-xl bg-[#0B0F19] hover:bg-[#05080E] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md"
                >
                  Fenster schließen
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
