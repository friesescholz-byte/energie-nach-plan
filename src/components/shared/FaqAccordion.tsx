import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  eyebrow = 'Transparente Antworten',
  title = 'Häufig gestellte Fragen (FAQ)',
  subtitle,
  items,
  className = ''
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`pt-24 pb-28 bg-gradient-to-b from-[#F1F4FA] via-white to-[#EEF2F9] relative ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {eyebrow && (
            <span className="badge-eyebrow mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0F19] tracking-tight leading-[1.15]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4 sm:space-y-5">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-slate-300 bg-white shadow-md border-b-[4px] border-b-[#BBBE22]' 
                    : 'border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300 shadow-xs border-b-[3.5px] border-b-slate-200 hover:border-b-[#0B0F19] hover:-translate-y-0.5'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#BBBE22] text-[#0B0F19]' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#0B0F19] tracking-tight">
                      {item.q}
                    </h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-slate-100 text-slate-700' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="pl-12 sm:pl-13">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
