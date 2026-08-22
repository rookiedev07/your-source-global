import React from 'react';
import { Section } from '../components/ui/Section';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { WHY_US_CONTENT } from '../content/whyUs';
import {
  UserCheck,
  Clock,
  Target,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  UserCheck: UserCheck,
  Clock: Clock,
  Target: Target,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
  CheckCircle: CheckCircle,
};

export const WhyUsSection = () => {
  return (
    <Section
      id="why-us"
      bg="subtle"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            {WHY_US_CONTENT.eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {WHY_US_CONTENT.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          {WHY_US_CONTENT.subtitle}
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {WHY_US_CONTENT.reasons.map((item, idx) => {
          const IconComponent = ICON_MAP[item.icon] || CheckCircle;

          return (
            <ScrollReveal
              key={item.index}
              delay={idx * 80}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-display font-black text-slate-300 group-hover:text-navy-800 transition-colors tracking-tighter">
                    {item.index}
                  </span>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-100 group-hover:bg-navy-800 text-slate-700 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-navy-900 mb-2 sm:mb-3 group-hover:text-navy-800 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400">
                <span className="uppercase tracking-wider">YSG Pillar {item.index}</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-semibold">
                  {item.tag}
                </span>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-display font-bold text-navy-900">
            Ready to experience the YSG difference firsthand?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Let's structure a dedicated pod tailored to your organization's precise requirements.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-bold px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl bg-navy-800 text-white hover:bg-navy-900 shadow-sm transition-all duration-200 gap-2"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default WhyUsSection;
