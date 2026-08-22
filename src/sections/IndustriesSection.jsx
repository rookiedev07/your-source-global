import React from 'react';
import { Section } from '../components/ui/Section';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { INDUSTRIES_CONTENT } from '../content/industries';
import {
  Activity,
  BadgeDollarSign,
  ShoppingCart,
  Truck,
  Building,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const ICON_MAP = {
  Activity: Activity,
  BadgeDollarSign: BadgeDollarSign,
  ShoppingCart: ShoppingCart,
  Truck: Truck,
  Building: Building,
  Cpu: Cpu,
};

export const IndustriesSection = () => {
  return (
    <Section
      id="industries"
      bg="white"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            {INDUSTRIES_CONTENT.eyebrow}
          </span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700">
            {INDUSTRIES_CONTENT.badge}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {INDUSTRIES_CONTENT.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          {INDUSTRIES_CONTENT.subtitle}
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {INDUSTRIES_CONTENT.industries.map((ind, idx) => {
          const IconComponent = ICON_MAP[ind.icon] || Activity;

          return (
            <ScrollReveal
              key={ind.id}
              delay={idx * 80}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-navy-600/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 group-hover:bg-navy-100 group-hover:text-navy-900 transition-colors">
                    {ind.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-navy-900 mb-2 sm:mb-2.5">
                  {ind.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6">
                  {ind.description}
                </p>

                <div className="space-y-2 pt-3 sm:pt-4 border-t border-slate-100">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Specialized Pod Capabilities:
                  </span>
                  {ind.workflows.map((wf, wIdx) => (
                    <div key={wIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-navy-700 shrink-0" />
                      <span>{wf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs font-bold text-navy-800 hover:text-navy-950 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Inquire For This Sector</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
};

export default IndustriesSection;
