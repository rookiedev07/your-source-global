import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { CAREERS_CONTENT } from '../content/careers';
import {
  Compass,
  HeartHandshake,
  GraduationCap,
  Building2,
  MapPin,
  ArrowRight,
  Mail,
} from 'lucide-react';

const ICON_MAP = {
  Compass: Compass,
  HeartHandshake: HeartHandshake,
  GraduationCap: GraduationCap,
  Building2: Building2,
};

export const CareersSection = () => {
  return (
    <Section
      id="careers"
      bg="white"
      padding="spacious"
      className="border-b border-slate-200 overflow-hidden"
    >
      <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
            {CAREERS_CONTENT.eyebrow}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700">
            {CAREERS_CONTENT.badge}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-h2 font-display font-bold text-navy-900 tracking-tight leading-tight max-w-3xl">
          {CAREERS_CONTENT.title}
        </h2>
        <p className="mt-4 text-base md:text-body-lg text-slate-600 max-w-2xl">
          {CAREERS_CONTENT.subtitle}
        </p>
      </ScrollReveal>

      <div className="mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CAREERS_CONTENT.cultureHighlights.map((col, idx) => {
          const IconComp = ICON_MAP[col.icon] || Compass;

          return (
            <ScrollReveal
              key={idx}
              delay={idx * 80}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-navy-800 flex items-center justify-center mb-4 shadow-sm">
                <IconComp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-display font-bold text-navy-900 mb-1.5">
                {col.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {col.desc}
              </p>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Talent Pipelines &amp; Disciplines
          </span>
          <h3 className="text-2xl font-display font-bold text-navy-900">
            Featured Specialization Categories
          </h3>
        </div>
        <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
          Static Profile Stubs [CONFIRM OPEN ROLES]
        </span>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAREERS_CONTENT.roleCategories.map((role, idx) => (
          <ScrollReveal
            key={role.id}
            delay={idx * 80}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-navy-500/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-navy-50 text-navy-800 border border-navy-100">
                  {role.department}
                </span>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {role.tag}
                </span>
              </div>

              <h4 className="text-base font-display font-bold text-navy-900 mb-2">
                {role.title}
              </h4>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{role.location}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-4">
                <span className="font-semibold text-slate-700 block mb-0.5">Typical Background:</span>
                {role.experience}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <a
                href="mailto:careers@yoursourceglobal.com?subject=Talent%20Inquiry%20-%20YSG"
                className="text-xs font-bold text-navy-800 hover:text-navy-950 flex items-center gap-1.5 transition-colors"
              >
                <span>Submit Profile / Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-navy-800">
        <div>
          <h4 className="text-lg font-display font-bold text-white">
            Don't see your specific specialization listed?
          </h4>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            We continuously recruit top 3% talent across specialized BPO, finance, IT, and customer care disciplines. Submit your CV for future pod matching.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Button
            href="mailto:careers@yoursourceglobal.com?subject=General%20Talent%20Application%20-%20YSG"
            variant="secondary"
            size="md"
            icon={Mail}
            iconPosition="left"
            className="bg-white text-navy-950 font-bold hover:bg-slate-100"
          >
            Email CV Directly
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default CareersSection;
