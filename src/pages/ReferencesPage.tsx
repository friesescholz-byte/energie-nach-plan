import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  TrendingUp, 
  Award,
  Zap
} from 'lucide-react';
import { ASSETS } from '../constants/assets';
import { CtaBanner } from '../components/shared/CtaBanner';
import { ReferenceProject } from '../types';

export const ReferencesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('Alle');

  const projects: ReferenceProject[] = [
    {
      id: '1',
      title: 'Einfamilienhaus (Baujahr 1974): Heizungstausch Öl auf Wärmepumpe',
      category: 'Wohngebäude',
      location: 'Nienburg/Weser',
      year: '2024',
      image: ASSETS.referenceSingleFamily,
      summary: 'Vollständiger Ersatz einer 28 Jahre alten Öl-Zentralheizung durch eine moderne Luft-Wasser-Wärmepumpe ohne Austausch der Fußböden.',
      challenge: 'Eigentümer befürchteten, dass ohne Fußbodenheizung eine Wärmepumpe nicht warm genug heizen würde und die Stromkosten explodieren.',
      solution: 'Raumweise Heizlastberechnung DIN 12831: Lediglich zwei Heizkörper im Wohn- und Essbereich wurden gegen Typ-33-Flachheizkörper getauscht. Hydraulischer Abgleich Verfahren B durchgeführt.',
      subsidyRate: '70 % KfW-Zuschuss gesichert (inkl. Geschwindigkeitsbonus)',
      savings: '62 % CO₂-Einsparung und ca. 1.450 € jährliche Heizkostenersparnis'
    },
    {
      id: '2',
      title: 'Wohnungseigentümergemeinschaft (14 WE): iSFP Sanierungsfahrplan',
      category: 'WEG & Verwaltung',
      location: 'Drakenburg / Kreis Nienburg',
      year: '2024',
      image: ASSETS.referenceApartmentWeg,
      summary: 'Erstellung eines modularen Sanierungsfahrplans für eine Mehrfamilienhaus-WEG zur Beschlussfassung in der Eigentümerversammlung.',
      challenge: 'Große Uneinigkeit unter den Eigentümern bzgl. GEG-Pflichten, Gas-Weiterbetrieb vs. Umstellung auf erneuerbare Wärme.',
      solution: 'Neutrale Vor-Ort-Bestandsanalyse, transparente Kostengegenüberstellung und Präsentation auf der Eigentümerversammlung mit beschlussfähiger Beschlussvorlage.',
      subsidyRate: '80 % BAFA-Zuschuss auf den iSFP + 5 % Sanierungs-Extrabonus',
      savings: 'Einstimmiger WEG-Beschluss für stufenweise Strangsanierung gefasst'
    },
    {
      id: '3',
      title: 'Zweifamilienhaus (Baujahr 1986): Dachdämmung & Wärmepumpenvorbereitung',
      category: 'Wohngebäude',
      location: 'Heemsen / Rohrsen',
      year: '2023',
      image: ASSETS.referenceRoofRenovation,
      summary: 'Ganzheitliche Hüllensanierung inkl. Dachdämmung und Fenstertausch vor dem anstehenden Heizungstausch.',
      challenge: 'Hohe Wärmeverluste über das ungedämmte Steildach und fehlerhafte Alt-Fenster.',
      solution: 'iSFP-Begleitung mit 20 % Förderquote für Einzelmaßnahmen an der Gebäudehülle. Baubegleitung und Qualitätssicherung vor Ort.',
      subsidyRate: '20 % BAFA-Zuschuss auf alle Hüllengewerke',
      savings: 'Heizlast um 35 % gesenkt; Wärmepumpe kann kleiner dimensioniert werden'
    },
    {
      id: '4',
      title: 'Gewerbeobjekt / Praxisgebäude: TGA-Fachplanung gem. DIN V 18599',
      category: 'Gewerbe & TGA',
      location: 'Marklohe / Nienburg',
      year: '2024',
      image: ASSETS.referenceCommercialClinic,
      summary: 'Fachplanung der technischen Gebäudeausrüstung (Lüftung, Heizung, Kühlung) für ein Ärztehaus / Bürokomplex.',
      challenge: 'Strenge Vorgaben an Raumluftqualität, Hygiene und sommerlichen Wärmeschutz bei minimalen Betriebskosten.',
      solution: 'Vollständige TGA-Konzepterstellung nach HOAI Leistungsphase 1–5, hydraulische Rohrnetzberechnung und gewerbliche Fördermittelberatung.',
      subsidyRate: 'Bundesförderung für Nichtwohngebäude erfolgreich abgerufen',
      savings: 'Primärenergiebedarf um 48 % unter GEG-Standard'
    }
  ];

  const filtered = filter === 'Alle' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge-eyebrow mb-3">
              Praxisberichte &amp; Fallstudien
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Echte Kundenprojekte aus der Region
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Erfahren Sie, wie wir Eigentümern und Verwaltungen in Nienburg und Umgebung zu bezahlbarer, zukunftssicherer Wärme und maximaler staatlicher Förderung verholfen haben.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Alle', 'Wohngebäude', 'WEG & Verwaltung', 'Gewerbe & TGA'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filtered.map((proj, idx) => (
              <div 
                key={proj.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Image Column */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-semibold">
                        {proj.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-700" />
                        {proj.location}
                      </span>
                      <span>•</span>
                      <span>Jahr: {proj.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {proj.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
                          Die Ausgangslage:
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {proj.challenge}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                          Die Meisterlösung:
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {proj.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-slate-50 p-4 rounded-xl">
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wide font-bold text-slate-800 block">
                        Erreichte Förderung:
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {proj.subsidyRate}
                      </span>
                    </div>

                    <div className="space-y-1 text-left sm:text-right">
                      <span className="text-[11px] uppercase tracking-wide font-bold text-slate-500 block">
                        Resultat:
                      </span>
                      <span className="text-xs font-semibold text-slate-700">
                        {proj.savings}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Box */}
          <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FAFBF2] via-[#FBFCF7] to-[#F4F7ED] border border-[#BBBE22]/40 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
            <h3 className="text-2xl font-black text-[#0B0F19]">
              Möchten Sie eine ähnliche Lösung für Ihr Gebäude?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Lassen Sie uns unverbindlich prüfen, welche Maßnahmen bei Ihrem Objekt den größten Fördereffekt erzielen.
            </p>
            <div className="pt-3">
              <Link
                to="/foerdermittel-sanierungscheck"
                className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-2xl bg-gradient-to-r from-[#BBBE22] to-[#f6e21c] hover:from-[#A8AB1A] hover:to-[#ebd615] text-[#0B0F19] font-black text-base transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0.5 border-b-[4px] border-b-[#929515]"
              >
                <span>Fördermöglichkeiten berechnen</span>
                <ArrowRight className="w-5 h-5 text-[#0B0F19]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
