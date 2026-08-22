import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ABOUT_CONTENT } from '../content/about';
import { ArrowRight, Globe2, Building2 } from 'lucide-react';

export const AboutSection = () => {
  return (
    <Section
      id="about"
      bg="white"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            {ABOUT_CONTENT.eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {ABOUT_CONTENT.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          {ABOUT_CONTENT.subtitle}
        </p>
      </ScrollReveal>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        <ScrollReveal delay={100} className="lg:col-span-6 space-y-6">
          <div className="prose prose-slate max-w-none space-y-3.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-slate-200 pl-4 py-0.5">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-navy-900 text-xs sm:text-sm mb-1">
                <Globe2 className="w-4 h-4 text-navy-800" />
                Strategic Oversight
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                US &amp; UAE leadership for account management, governance, and SLA assurance.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-navy-900 text-xs sm:text-sm mb-1">
                <Building2 className="w-4 h-4 text-navy-800" />
                24/7 Global Hubs
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Modern operational delivery centers in the Philippines powering 24/7 client execution.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
            <Button href="#why-us" variant="primary" size="md" icon={ArrowRight} className="text-xs sm:text-sm">
              Discover The YSG Advantage
            </Button>
            <Button href="#contact" variant="outline" size="md" className="text-xs sm:text-sm">
              Speak With Leadership
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} className="lg:col-span-6">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white shadow-xl border border-navy-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy-600/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-navy-800">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
                    Operational Benchmark
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white mt-1">
                    Measurable Client Impact
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-navy-800 border border-navy-700 text-slate-300">
                  Verified Model
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {ABOUT_CONTENT.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-navy-900/80 border border-navy-800/80 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-500/20 px-1.5 py-0.5 rounded">
                        {stat.marker}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-1">{stat.label}</div>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                <span>Tailored pods built to client specs</span>
                <span className="font-mono text-slate-400">Audited Global Metrics</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default AboutSection;
