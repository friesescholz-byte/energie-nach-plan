import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

export const TrustBadgeBar: React.FC = () => {
  const badges = [
    {
      icon: Award,
      title: 'dena Expertenliste',
    },
    {
      icon: ShieldCheck,
      title: 'Heizungsbaumeister HWK',
    },
    {
      icon: CheckCircle2,
      title: 'BAFA & KfW zugelassen',
    },
    {
      icon: Building2,
      title: 'Regionale Qualität',
    },
  ];

  return (
    <div className="relative w-full">
      {/* Floating Trust Dock Capsule - Groß, clean, ohne Randnotiz-Clutter */}
      <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-200/90 border-b-[4px] border-b-slate-300 shadow-[0_20px_50px_-15px_rgba(27,23,84,0.12)] p-2.5 sm:p-4 transition-all duration-300 hover:border-b-[#2DE054]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {badges.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div 
                key={idx} 
                className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-slate-50/80 hover:-translate-y-1 cursor-default active:translate-y-0"
              >
                {/* Clean 3D Icon Badge */}
                <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 flex items-center justify-center shadow-xs group-hover:bg-[#2DE054] group-hover:text-[#1B1754] group-hover:border-[#2DE054] group-hover:scale-105 group-hover:shadow-[0_8px_16px_-4px_rgba(45,224,84,0.4)] transition-all duration-300">
                  <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>

                {/* Nur Schrift groß & sichtbar in Blau wie gewünscht */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg lg:text-[18px] font-black tracking-tight text-[#1B1754] leading-snug group-hover:text-emerald-700 transition-colors">
                    {b.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
