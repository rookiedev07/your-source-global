import React from 'react';
import { Container } from '../ui/Container';
import ShortLeadForm from '../forms/ShortLeadForm';
import { COMPANY } from '../../content/company';
import { SERVICES } from '../../content/services';
import {
  Globe,
  MapPin,
  Mail,
  Phone,
  ArrowUp,
  Linkedin,
  Twitter,
  Youtube,
  ShieldCheck,
  Building,
} from 'lucide-react';

const SITEMAP_LINKS = [
  { label: 'Home / Hero', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Industries We Serve', href: '#industries' },
  { label: 'Technology & Security', href: '#security' },
  { label: 'Global Presence', href: '#global' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact / Request a Quote', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-navy-950 text-slate-300 border-t border-navy-800">
      <div className="py-16 md:py-20 border-b border-navy-800/80 bg-gradient-to-b from-navy-900 to-navy-950">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-800 text-slate-300 rounded-full border border-navy-700">
                Let's Build Your Dedicated Pod
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Scale Efficiently with World-Class Offshore Talent.
              </h3>
              <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                Connect with our executive solutions team to structure a customized staffing plan across the US, Australia, and the Philippines.
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NDA Protected
                </span>
                <span>•</span>
                <span>&lt; 24h Turnaround</span>
                <span>•</span>
                <span>Zero Commitment</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ShortLeadForm
                formId="footer-quick-lead"
                theme="dark"
                title="Initiate Your Quote Request"
                subtitle="Provide your contact details for an immediate team feasibility review."
                buttonText="Submit Fast-Track Inquiry"
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16 md:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-navy-800">
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/brand/logo.svg"
                  alt="Your Source Global Logo"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
                Your Source Global (YSG) is an enterprise BPO and strategic global staffing partner delivering high-performing dedicated pods across Finance, Customer Care, IT, and Operations.
              </p>
              <p className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                Sourcing. Solutions. Success.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#footer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                The 7 Core Services
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a
                      href="#services"
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="font-mono text-slate-500 text-[10px]">{s.number}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Sitemap Index
              </h4>
              <ul className="space-y-2 text-xs">
                {SITEMAP_LINKS.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
                Global Office Hubs
              </h4>
              <div className="space-y-3 text-xs">
                {COMPANY.presence.map((hub) => (
                  <div key={hub.country} className="p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                    <div className="flex items-center justify-between font-bold text-white mb-1">
                      <span>{hub.country}</span>
                      <span className="text-[10px] font-mono text-slate-400">{hub.regionCode}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono mb-1">{hub.address}</p>
                    <p className="text-[11px] text-slate-400 font-mono">{hub.phone}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              &copy; {new Date().getFullYear()} Your Source Global (YSG). All rights reserved. Sourcing. Solutions. Success.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a href="#security" className="hover:text-white transition-colors">
                Security &amp; Data Governance
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Confidentiality Notice
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors ml-2 font-mono text-[11px]"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;
