import React from 'react';
import { Section } from '../ui/Section';
import { ScrollReveal } from '../ui/ScrollReveal';
import ShortLeadForm from '../forms/ShortLeadForm';
import { CheckCircle2 } from 'lucide-react';

export const QuickLeadCtaBanner = () => {
  return (
    <Section bg="subtle" padding="default" className="border-b border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <ScrollReveal className="lg:col-span-6 space-y-5">
          <div>
            <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-50 text-navy-800 rounded-full border border-navy-100">
              Rapid Staffing Deployment
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900 tracking-tight leading-tight">
            Ready to Accelerate Your Operations with a Dedicated Pod?
          </h3>

          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Whether you require a 3-person specialized AP team or a 50-seat 24/7 customer support hub, YSG delivers fully equipped talent pods onboarded within 2-3 weeks.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tailored timezone overlap across US, Australian, and APAC hours</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero-cost feasibility assessment &amp; comprehensive SLA proposal</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct oversight by experienced US &amp; Australian account leadership</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="lg:col-span-6">
          <ShortLeadForm
            formId="services-inline-cta"
            theme="dark"
            title="Design Your Dedicated Team"
            subtitle="Submit your criteria to receive staffing breakdown & rate card in < 24h."
            buttonText="Request Pod Proposal"
          />
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default QuickLeadCtaBanner;
