import React, { useState, useEffect, useRef } from 'react';
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
      trigger: '#home',
      start: 'bottom 100px',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

    return () => {
      st.kill();
    };
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3.5'
            : 'bg-gradient-to-b from-navy-950/40 via-navy-950/10 to-transparent backdrop-blur-[2px] py-5 text-white'
        }`}
      >
        <Container size="wide" className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 rounded-lg p-1"
            aria-label="Your Source Global Home"
          >
            <img
              src="/brand/logo.svg"
              alt="Your Source Global Logo"
              className={`h-9 md:h-10 w-auto object-contain transition-all duration-300 ${
                !isScrolled ? 'brightness-0 invert drop-shadow' : ''
              }`}
            />
          </a>

          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-navy-900 hover:bg-slate-100/80'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              icon={ArrowRight}
              className={!isScrolled ? 'bg-white text-navy-900 hover:bg-slate-100 border-none shadow-md font-semibold' : ''}
            >
              {NAV_ACTIONS.primaryCta.label}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 ${
                isScrolled
                  ? 'text-navy-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/90 backdrop-blur-md lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 px-3">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-3 text-lg font-display font-medium text-white hover:text-slate-200 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
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
              className="w-full bg-white text-navy-900 hover:bg-slate-100 justify-center font-bold"
              icon={ArrowRight}
            >
              {NAV_ACTIONS.primaryCta.label}
            </Button>
            <p className="text-xs text-center text-slate-400 mt-2">
              Your Source Global • Sourcing. Solutions. Success.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
