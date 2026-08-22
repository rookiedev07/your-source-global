import React from 'react';
import { Section } from '../components/ui/Section';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SECURITY_CONTENT } from '../content/security';
import {
  Shield,
  Lock,
  Layers,
  Server,
  FileCheck,
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

const ICON_MAP = {
  Shield: Shield,
  Lock: Lock,
  Layers: Layers,
  Server: Server,
  FileCheck: FileCheck,
  Award: Award,
};

export const SecuritySection = () => {
  return (
    <Section
      id="security"
      bg="navy"
      padding="spacious"
      className="border-b border-navy-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[600px] h-[400px] bg-navy-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-slate-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10">
        <ScrollReveal className="flex items-center justify-between mb-4 max-w-4xl mx-auto text-center flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-800 text-slate-300 rounded-full border border-navy-700">
              {SECURITY_CONTENT.eyebrow}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300">
              {SECURITY_CONTENT.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-h2 font-display font-bold text-white tracking-tight leading-tight max-w-3xl">
            {SECURITY_CONTENT.title}
          </h2>
          <p className="mt-4 text-base md:text-body-lg text-slate-300 max-w-2xl">
            {SECURITY_CONTENT.subtitle}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SECURITY_CONTENT.tiles.map((tile, idx) => {
            const IconComponent = ICON_MAP[tile.icon] || Shield;
            const isCert = tile.isCertTile;

            return (
              <ScrollReveal
                key={tile.id}
                delay={idx * 80}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isCert
                    ? 'bg-navy-900/90 border-amber-500/40 hover:border-amber-400/70 shadow-lg'
                    : 'bg-navy-900/60 border-navy-800/90 hover:border-slate-600/80 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isCert
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-navy-800 text-slate-300 border border-navy-700'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded ${
                        isCert
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-navy-800 text-slate-300 border border-navy-700'
                      }`}
                    >
                      {tile.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2.5">
                    {tile.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {tile.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-navy-800">
                    {tile.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        {isCert ? (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        )}
                        <span className={isCert ? 'font-mono text-amber-200' : ''}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-slate-500">Security Control</span>
                  {isCert ? (
                    <span className="text-amber-300 font-mono text-[10px]">Client Validation Required</span>
                  ) : (
                    <span className="text-slate-400 text-[11px]">Active Baseline</span>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-14 p-6 md:p-8 rounded-2xl bg-navy-900/80 border border-navy-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-300 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold text-white">
                Comprehensive Mutual NDA &amp; Data Security Addendum
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every client engagement is safeguarded by bilateral non-disclosure agreements and strict IP assignment clauses.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-xs font-bold px-5 py-2.5 rounded-lg bg-white text-navy-950 hover:bg-slate-100 transition-colors shrink-0 gap-2"
          >
            <span>Request Security Brief</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default SecuritySection;
