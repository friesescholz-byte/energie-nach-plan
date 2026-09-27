import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, ArrowUpRight, Star } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../../constants/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Energie nach Plan — Startseite">
              <img 
                src="/logo_horizontal_white.png" 
                alt="Energie nach Plan — Nico Heidemann & Jan Osmer" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Zertifizierte dena-Energieeffizienz-Experten und Handwerksmeister im Installateur- und Heizungsbauerhandwerk. 
              Wir begleiten Eigentümer, Hausverwaltungen und Architekten mit unabhängiger Beratung und bis zu 70 % staatlicher Förderung.
            </p>

            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors underline decoration-slate-600 underline-offset-2 hover:decoration-emerald-400"
                  title="Auf Google Maps öffnen"
                >
                  <span>{COMPANY_INFO.address}, {COMPANY_INFO.zipCity}</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-emerald-400 transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Google Bewertung Link & Vertrauens-Badge */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all text-xs text-white group shadow-xs"
                title="Jetzt Bewertung auf Google abgeben"
              >
                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center p-1 flex-shrink-0 shadow-xs">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <span>★★★★★</span>
                    <span className="text-white text-[11px] ml-1">4.9</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-400 transition-colors text-[11px] font-medium flex items-center gap-1">
                    Google Bewertung abgeben <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/foerdermittel-sanierungscheck" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1">
                  Fördermittel-Check
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-slate-400 hover:text-white transition-colors">
                  Über uns & Philosophie
                </Link>
              </li>
              <li>
                <Link to="/referenzen" className="text-slate-400 hover:text-white transition-colors">
                  Referenzen & Projekte
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-slate-400 hover:text-white transition-colors">
                  Kontakt & Anfahrt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Spezialbereiche */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Spezialbereiche
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/komplettpaket-sanierung" className="text-slate-400 hover:text-white transition-colors">
                  Komplettpaket Sanierung
                </Link>
              </li>
              <li>
                <Link to="/foerdermittelberatung" className="text-slate-400 hover:text-white transition-colors">
                  Fördermittelberatung (KfW/BAFA)
                </Link>
              </li>
              <li>
                <Link to="/fuer-hausverwaltungen" className="text-slate-400 hover:text-white transition-colors">
                  Für Hausverwaltungen & WEGs
                </Link>
              </li>
              <li>
                <Link to="/tga-planung" className="text-slate-400 hover:text-white transition-colors">
                  TGA-Fachplanung (HOAI § 56)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Zertifizierungen & Zulassungen */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Zertifizierungen
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Bundesweit gelistet in der <strong>dena Energieeffizienz-Expertenliste</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Heizungsbaumeister (Handwerkskammer Hannover)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Zulassung für BAFA BEG EM & KfW 458</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Partner der <strong>Klimaschutzagentur Mittelweser e.V.</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nico Heidemann & Jan Osmer Energie nach Plan GbR. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="hover:text-slate-300 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-slate-300 transition-colors">
              Datenschutz
            </Link>
            <Link to="/barrierefreiheit" className="hover:text-slate-300 transition-colors">
              Barrierefreiheit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
