import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { LEADERSHIP_CONTENT } from '../content/about';
import {
  UserCheck,
  CheckCircle2,
  Handshake,
  Target,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';

export const LeadershipSection = () => {
  const { founder, partnership, principles, tagline } = LEADERSHIP_CONTENT;

  return (
    <Section
      id="leadership"
      bg="subtle"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      {/* Section Header */}
      <ScrollReveal className="flex items-center justify-between mb-8 max-w-4xl mx-auto text-center flex-col">
        <div className="mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-100/70 text-navy-800 rounded-full border border-navy-200">
            {LEADERSHIP_CONTENT.eyebrow}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {LEADERSHIP_CONTENT.title}
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-body-lg text-slate-600 max-w-2xl">
          {LEADERSHIP_CONTENT.subtitle}
        </p>
      </ScrollReveal>

      {/* Founder Spotlight Card */}
      <ScrollReveal delay={100} className="mt-10">
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Col: Founder Profile Badge */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:border-r lg:border-slate-200 lg:pr-8">
              <div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-navy-950 text-amber-400 flex items-center justify-center shadow-lg mb-5 border border-navy-800">
                  <UserCheck className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-navy-700 mt-0.5">
                  {founder.role}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                  <Briefcase className="w-3.5 h-3.5 text-navy-800 shrink-0" />
                  {founder.experience}
                </div>
              </div>

              {/* Founder Key Takeaways / Pillars */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Core Foundations
                </span>
                {founder.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Founder Narrative */}
            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              {founder.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'text-slate-800 font-medium text-sm sm:text-base border-l-2 border-amber-400 pl-4 py-0.5'
                      : 'border-l-2 border-slate-200 pl-4 py-0.5'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Partnership & Core Principles Grid */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* A Partnership Approach Card */}
        <ScrollReveal delay={150} className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center border border-navy-100">
                  <Handshake className="w-5 h-5 text-navy-800" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-navy-900">
                    {partnership.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{partnership.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                {partnership.paragraphs.map((p, idx) => (
                  <p key={idx} className="border-l-2 border-slate-200 pl-3.5 py-0.5">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-navy-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dedicated long-term client alignment &amp; measurable KPIs</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission & Commitment Stack */}
        <ScrollReveal delay={200} className="lg:col-span-6 flex flex-col gap-6">
          {principles.map((item, idx) => {
            const isMission = item.type === 'mission';
            const IconComp = isMission ? Target : HeartHandshake;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isMission
                          ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-navy-900">
                        {item.title}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 border-l-2 border-slate-100">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>

      {/* Signature Tagline & CTA Banner */}
      <ScrollReveal delay={250} className="mt-8 sm:mt-10">
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-bold">
                The YSG Promise
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight text-white">
              {tagline}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Scalable, reliable, and commercially focused operational solutions built around your business goals.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 items-center justify-center shrink-0">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="text-xs sm:text-sm bg-white text-navy-950 hover:bg-slate-100 font-bold shadow-md"
            >
              Speak With Leadership
            </Button>
            <Button
              href="#services"
              variant="outline"
              size="md"
              className="text-xs sm:text-sm border-navy-700 text-slate-200 hover:bg-navy-900"
            >
              Explore Disciplines
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default LeadershipSection;
