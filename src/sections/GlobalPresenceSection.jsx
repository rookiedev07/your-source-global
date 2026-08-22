import React from 'react';
import { Section } from '../components/ui/Section';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { COMPANY } from '../content/company';
import {
  Globe2,
  MapPin,
  Clock,
  Phone,
  Mail,
  Building,
  CheckCircle2,
} from 'lucide-react';

export const GlobalPresenceSection = () => {
  return (
    <Section
      id="global"
      bg="subtle"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            {COMPANY.globalPresenceHeading.eyebrow}
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-navy-900 text-white">
            {COMPANY.globalPresenceHeading.badge}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {COMPANY.globalPresenceHeading.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          {COMPANY.globalPresenceHeading.subtitle}
        </p>
      </ScrollReveal>

      <ScrollReveal
        delay={100}
        className="mt-12 mb-12 relative p-6 md:p-8 rounded-3xl bg-navy-950 border border-navy-800 text-white shadow-xl overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-navy-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-slate-300">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Global Operations Network
              </h3>
              <p className="text-xs text-slate-400">
                Synchronized 24/7/365 coverage across UAE Headquarters, North America, and Philippines Delivery Hubs.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              UAE Global HQ
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              US Hub
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              Philippines 24/7 Hub
            </span>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] min-h-[220px] max-h-[340px] flex items-center justify-center">
          <svg
            viewBox="0 0 1000 450"
            className="w-full h-full text-navy-800/60 fill-current select-none"
            aria-label="World map visualization showing YSG offices"
          >
            <path d="M120 70 Q 180 50 260 70 Q 280 120 250 180 Q 180 200 130 160 Z" opacity="0.35" />
            <path d="M180 110 Q 240 100 270 140 Q 240 180 190 170 Z" opacity="0.5" />
            <path d="M260 220 Q 310 240 300 320 Q 250 380 230 310 Z" opacity="0.3" />
            <path d="M460 70 Q 520 60 550 110 Q 510 150 460 120 Z" opacity="0.35" />
            <path d="M470 160 Q 550 160 540 270 Q 480 320 450 230 Z" opacity="0.3" />
            <path d="M570 60 Q 750 50 820 140 Q 750 220 620 180 Z" opacity="0.4" />
            <path d="M780 280 Q 880 270 890 350 Q 810 390 770 330 Z" opacity="0.5" />

            <path
              d="M 230 140 Q 400 120 595 190"
              fill="none"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />
            <path
              d="M 595 190 Q 690 170 785 205"
              fill="none"
              stroke="#64748B"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.6"
            />

            <g transform="translate(230, 140)">
              <circle r="16" fill="#34D399" fillOpacity="0.2" className="animate-ping" />
              <circle r="7" fill="#10B981" />
              <circle r="3" fill="#FFFFFF" />
              <text x="12" y="4" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="Manrope, sans-serif">
                US (Strategy)
              </text>
            </g>

            <g transform="translate(595, 190)">
              <circle r="16" fill="#F59E0B" fillOpacity="0.25" className="animate-ping" />
              <circle r="7" fill="#F59E0B" />
              <circle r="3" fill="#FFFFFF" />
              <text x="12" y="4" fill="#FCD34D" fontSize="12" fontWeight="bold" fontFamily="Manrope, sans-serif">
                UAE (Global HQ)
              </text>
            </g>

            <g transform="translate(785, 205)">
              <circle r="18" fill="#22D3EE" fillOpacity="0.25" className="animate-ping" />
              <circle r="7.5" fill="#06B6D4" />
              <circle r="3" fill="#FFFFFF" />
              <text x="14" y="4" fill="#67E8F9" fontSize="12" fontWeight="bold" fontFamily="Manrope, sans-serif">
                Philippines (24/7 Operations)
              </text>
            </g>
          </svg>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {COMPANY.presence.map((loc, idx) => (
          <ScrollReveal
            key={loc.country}
            delay={idx * 120}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-navy-900 text-white">
                    {loc.regionCode}
                  </span>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-navy-900">
                    {loc.country}
                  </h3>
                </div>
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {loc.city}
              </div>
              <div className="text-xs sm:text-sm font-bold text-navy-800 mb-3 pb-3 border-b border-slate-100">
                {loc.role}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                {loc.focus}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-navy-800 shrink-0" />
                  <span className="font-mono text-[11px] font-semibold">{loc.timezone}</span>
                </div>
                <div className="text-[11px] text-slate-500 pl-5.5">
                  {loc.coverage}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Location Capabilities:
                </span>
                {loc.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-500">
              <div className="flex items-start gap-2">
                <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-semibold leading-relaxed">
                  {loc.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-semibold">
                  {loc.phone}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-slate-600 truncate">{loc.email}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default GlobalPresenceSection;
