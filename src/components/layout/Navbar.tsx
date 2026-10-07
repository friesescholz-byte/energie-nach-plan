import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Award, Calculator } from 'lucide-react';
import { ASSETS, COMPANY_INFO } from '../../constants/assets';
import { useContactModal } from '../../context/ContactModalContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const serviceLinks = [
    { title: 'Komplettpaket Sanierung', desc: 'Der gesamte Ablauf von A bis Z', path: '/komplettpaket-sanierung' },
    { title: 'Fördermittelberatung', desc: 'KfW 458 & BAFA bis zu 70 %', path: '/foerdermittelberatung' },
    { title: 'Für Hausverwaltungen', desc: 'Spezialkonzepte für WEGs & Beiräte', path: '/fuer-hausverwaltungen' },
    { title: 'TGA-Planung (HOAI § 56)', desc: 'Fachplanung für Architekten & Gewerbe', path: '/tga-planung' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-[#0B0F19] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#141A29]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a 
              href={COMPANY_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#BBBE22] transition-colors group"
              title="Standort auf Google Maps öffnen"
            >
              <MapPin className="w-3.5 h-3.5 text-[#BBBE22] flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium underline decoration-slate-600 underline-offset-2 hover:decoration-[#BBBE22]">
                {COMPANY_INFO.address}, {COMPANY_INFO.zipCity} ({COMPANY_INFO.region})
              </span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`} 
              className="inline-flex items-center gap-1.5 font-bold text-[#BBBE22] hover:text-[#f6e21c] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-200 border-b ${scrolled ? 'border-slate-200/80 shadow-sm py-3' : 'border-slate-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5" aria-label="Energie nach Plan — Startseite">
            <img 
              src={ASSETS.logo} 
              alt="Energie nach Plan — Nico Heidemann & Jan Osmer" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-slate-700">
            <Link 
              to="/" 
              className={`hover:text-[#0B0F19] transition-colors py-1 ${location.pathname === '/' ? 'text-[#0B0F19] font-bold border-b-2 border-[#BBBE22]' : ''}`}
            >
              Startseite
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group py-2" 
              onMouseEnter={handleServicesEnter} 
              onMouseLeave={handleServicesLeave}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/#leistungen"
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
                      setServicesOpen(false);
                    }
                  }}
                  className="hover:text-[#0B0F19] transition-colors py-1 font-semibold"
                >
                  Leistungen
                </Link>
                <button 
                  className="p-1 hover:text-[#0B0F19] transition-colors focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpen(!servicesOpen);
                  }}
                  aria-label="Leistungen Menü öffnen"
                >
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#0B0F19]' : ''}`} />
                </button>
              </div>

              {/* Dropdown Container mit invisible hover bridge (before:-top-3) und nahtlosem Übergang */}
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 relative before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4">
                    <Link
                      to="/#leistungen"
                      onClick={(e) => {
                        if (location.pathname === '/') {
                          e.preventDefault();
                          document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
                        }
                        setServicesOpen(false);
                      }}
                      className="block p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors mb-1.5 border border-slate-200"
                    >
                      <div className="font-bold text-[#0B0F19] text-xs uppercase tracking-wider flex items-center justify-between">
                        <span>Alle 4 Kernleistungen im Überblick</span>
                        <span className="text-[#0B0F19]">→</span>
                      </div>
                    </Link>
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setServicesOpen(false)}
                        className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="font-semibold text-slate-900 group-hover/item:text-[#0B0F19] text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 font-normal">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/foerdermittel-sanierungscheck" 
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-tight transition-all duration-200 group ${
                location.pathname === '/foerdermittel-sanierungscheck'
                  ? 'bg-[#0B0F19] text-white shadow-sm border-b-2 border-b-[#BBBE22]'
                  : 'bg-gradient-to-r from-[#BBBE22]/15 to-[#f6e21c]/25 hover:from-[#BBBE22] hover:to-[#f6e21c] text-[#0B0F19] border border-[#BBBE22]/30 hover:border-[#BBBE22] border-b-[2.5px] border-b-[#BBBE22]/40 hover:border-b-[#929515] shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0.5'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-[#0B0F19]" />
              <span>Fördermittel-Check</span>
            </Link>

            <Link 
              to="/ueber-uns" 
              className={`hover:text-[#0B0F19] transition-colors py-1 ${location.pathname === '/ueber-uns' ? 'text-[#0B0F19] font-bold border-b-2 border-[#BBBE22]' : ''}`}
            >
              Über uns
            </Link>

            <Link 
              to="/referenzen" 
              className={`hover:text-[#0B0F19] transition-colors py-1 ${location.pathname === '/referenzen' ? 'text-[#0B0F19] font-bold border-b-2 border-[#BBBE22]' : ''}`}
            >
              Referenzen
            </Link>

            <Link 
              to="/kontakt" 
              className={`hover:text-[#0B0F19] transition-colors py-1 ${location.pathname === '/kontakt' ? 'text-[#0B0F19] font-bold border-b-2 border-[#BBBE22]' : ''}`}
            >
              Kontakt
            </Link>
          </div>

          {/* Desktop Right CTA: öffnet das modale Flow-Formular */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#1E293B] rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Erstgespräch anfragen
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold flex items-center gap-1 mr-1 hover:bg-[#BBBE22] hover:text-[#0B0F19] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Anrufen</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-elevated">
            <Link 
              to="/" 
              className="block py-2 text-base font-semibold text-slate-800 hover:text-[#0B0F19]"
            >
              Startseite
            </Link>
            
            <div className="pt-2 pb-1 border-y border-slate-100">
              <Link
                to="/#leistungen"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
                className="text-xs font-bold text-[#0B0F19] uppercase tracking-wider block mb-2 hover:text-slate-700 flex items-center justify-between"
              >
                <span>Leistungen &amp; Spezialbereiche</span>
                <span className="text-[#0B0F19] font-bold">Übersicht →</span>
              </Link>
              <div className="space-y-2 pl-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-1 text-sm font-medium text-slate-700 hover:text-[#0B0F19]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/foerdermittel-sanierungscheck" 
              className="flex items-center gap-2 py-2 text-base font-semibold text-[#0B0F19]"
            >
              <Calculator className="w-4 h-4 text-[#0B0F19]" />
              Fördermittel- & Sanierungscheck
            </Link>

            <Link 
              to="/ueber-uns" 
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0B0F19]"
            >
              Über uns
            </Link>

            <Link 
              to="/referenzen" 
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0B0F19]"
            >
              Referenzen
            </Link>

            <Link 
              to="/kontakt" 
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0B0F19]"
            >
              Kontakt
            </Link>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openModal();
                }}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#1E293B] rounded-xl transition-colors shadow-sm"
              >
                Kostenfreies Erstgespräch anfragen
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
