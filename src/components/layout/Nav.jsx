import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Menu, X, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_ITEMS, NAV_ACTIONS } from '../../content/navigation';

gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 'top -20px',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

    return () => {
      st.kill();
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-20 flex items-center bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-navy-900 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <Container size="wide" className="flex items-center justify-between w-full">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 rounded-lg p-1 shrink-0"
            aria-label="Your Source Global Home"
          >
            <img
              src="/brand/logo.png"
              alt="Your Source Global Logo"
              className="h-9 md:h-18 w-auto object-contain transition-all duration-300"
            />
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 text-slate-700 hover:text-navy-900 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              {NAV_ACTIONS.primaryCta.label}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 text-navy-900 hover:bg-slate-100"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </motion.header>

      <div
        className={`fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen
          ? 'opacity-100 pointer-events-auto translate-y-0'
          : 'opacity-0 pointer-events-none -translate-y-4'
          }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="flex flex-col space-y-1.5 pt-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2 px-3">
            Navigation Menu
          </span>
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms',
              }}
              className={`px-3 py-3 text-lg font-display font-medium text-white hover:text-slate-200 hover:bg-white/5 rounded-xl transition-all duration-300 flex items-center justify-between ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                }`}
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-slate-500">{item.href}</span>
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-navy-800 flex flex-col gap-3">
          <Button
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            variant="primary"
            size="lg"
            className="w-full bg-white text-navy-900 hover:bg-slate-100 justify-center font-bold shadow-lg"
            icon={ArrowRight}
          >
            {NAV_ACTIONS.primaryCta.label}
          </Button>
          <p className="text-xs text-center text-slate-400 mt-2">
            Your Source Global • Sourcing. Solutions. Success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
