import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SERVICES, SERVICES_SECTION_HEADING } from '../content/services';
import {
  Calculator,
  Receipt,
  Headset,
  Database,
  Briefcase,
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Calculator: Calculator,
  Receipt: Receipt,
  Headset: Headset,
  Database: Database,
  Briefcase: Briefcase,
  Server: Server,
  Users: Users,
};

export const ServicesSection = ({ isIsolated = false }) => {
  const containerRef = useRef(null);
  const pinnedWrapperRef = useRef(null);
  const panelsRef = useRef([]);
  const bgParallaxRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const checkViewportAndMotion = () => {
      const isMobile = window.innerWidth < 1024;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobileOrReduced(isMobile || prefersReduced);
    };

    checkViewportAndMotion();
    window.addEventListener('resize', checkViewportAndMotion);

    return () => window.removeEventListener('resize', checkViewportAndMotion);
  }, []);

  useEffect(() => {
    if (isMobileOrReduced) {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      return;
    }

    const ctx = gsap.context(() => {
      const totalServices = SERVICES.length;

      panelsRef.current.forEach((panel, i) => {
        if (!panel) return;
        if (i === 0) {
          gsap.set(panel, {
            opacity: 1,
            scale: 1,
            y: 0,
            zIndex: 20,
            pointerEvents: 'auto',
            force3D: true,
          });
        } else {
          gsap.set(panel, {
            opacity: 0,
            scale: 1.04,
            y: 40,
            zIndex: 20 + i,
            pointerEvents: 'none',
            force3D: true,
          });
        }
      });

      if (bgParallaxRef.current) {
        gsap.to(bgParallaxRef.current, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }

      const scrubTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=380%',
          pin: pinnedWrapperRef.current,
          scrub: 0.4,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          snap: {
            snapTo: 1 / (totalServices - 1),
            duration: { min: 0.15, max: 0.35 },
            delay: 0.01,
            ease: 'power3.out',
            inertia: false,
          },
          onUpdate: (self) => {
            const raw = self.progress * (totalServices - 1);
            const currentStep = Math.min(totalServices - 1, Math.max(0, Math.round(raw)));
            setActiveIdx(currentStep);
          },
        },
      });

      scrollTriggerRef.current = scrubTimeline.scrollTrigger;

      for (let i = 0; i < totalServices - 1; i++) {
        const currentPanel = panelsRef.current[i];
        const nextPanel = panelsRef.current[i + 1];

        scrubTimeline.to(
          currentPanel,
          {
            opacity: 0,
            scale: 0.93,
            y: -30,
            duration: 1,
            ease: 'none',
            pointerEvents: 'none',
            force3D: true,
          },
          i
        );

        scrubTimeline.fromTo(
          nextPanel,
          {
            opacity: 0,
            scale: 1.04,
            y: 40,
            pointerEvents: 'none',
            force3D: true,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'none',
            pointerEvents: 'auto',
            force3D: true,
          },
          i
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [isMobileOrReduced]);

  const handleJumpToService = (targetIndex) => {
    if (isMobileOrReduced || !scrollTriggerRef.current) {
      const el = document.getElementById(`service-card-${targetIndex}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const st = scrollTriggerRef.current;
    const totalSteps = SERVICES.length - 1;
    const targetProgress = targetIndex / totalSteps;
    const scrollTarget = st.start + targetProgress * (st.end - st.start);

    window.scrollTo({
      top: scrollTarget + 1,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="services"
      ref={containerRef}
      className={`relative w-full bg-navy-950 text-white ${isIsolated ? 'min-h-screen' : ''}`}
    >
      {!isMobileOrReduced ? (
        <div
          ref={pinnedWrapperRef}
          className="relative w-full h-screen flex flex-col justify-between overflow-hidden"
          style={{ willChange: 'transform' }}
        >
          <div
            ref={bgParallaxRef}
            className="absolute inset-0 pointer-events-none -top-20 -bottom-20"
            style={{ transform: 'translate3d(0,0,0)' }}
          >
            <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-navy-800/40 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-2xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
                backgroundSize: '36px 36px',
              }}
            />
          </div>

          <div className="relative z-20 pt-24 pb-2 border-b border-navy-800/80 bg-navy-950/80">
            <Container size="wide" className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-800 text-slate-300 rounded-full border border-navy-700">
                  {SERVICES_SECTION_HEADING.eyebrow}
                </span>
              </div>

              <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="font-bold text-white bg-navy-800 px-2.5 py-0.5 rounded border border-navy-700 font-mono">
                  {SERVICES[activeIdx].number} / 07
                </span>
              </div>
            </Container>
          </div>

          <div className="relative z-10 flex-1 flex items-center">
            <Container size="wide" className="w-full grid grid-cols-12 gap-8 items-center h-full max-h-[640px]">

              <div className="col-span-4 hidden lg:flex flex-col justify-center space-y-2.5 pr-6 border-r border-navy-800/60">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
                  Service Directory
                </span>

                {SERVICES.map((srv, idx) => {
                  const isActive = activeIdx === idx;

                  return (
                    <button
                      key={srv.id}
                      onClick={() => handleJumpToService(idx)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between group ${isActive
                        ? 'bg-navy-800 text-white shadow-lg border border-navy-700 translate-x-1.5'
                        : 'hover:bg-navy-900/60 text-slate-400 hover:text-slate-200'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold ${isActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'
                            }`}
                        >
                          {srv.number}
                        </span>
                        <span className={`text-sm font-display font-semibold truncate ${isActive ? 'text-white' : ''}`}>
                          {srv.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${isActive ? 'bg-amber-400 scale-125' : 'bg-navy-700 group-hover:bg-slate-500'
                            }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                className="col-span-12 lg:col-span-8 relative h-[520px] flex items-center"
                style={{ perspective: 1000 }}
              >
                {SERVICES.map((service, idx) => {
                  const IconComponent = ICON_MAP[service.icon] || Briefcase;

                  return (
                    <div
                      key={service.id}
                      ref={(el) => (panelsRef.current[idx] = el)}
                      style={{
                        willChange: 'transform, opacity',
                        transform: 'translate3d(0,0,0)',
                        backfaceVisibility: 'hidden',
                      }}
                      className="absolute inset-0 w-full h-full p-8 md:p-10 rounded-3xl bg-[#121E36] border border-navy-700/90 shadow-2xl flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-navy-800">
                          <div className="flex items-center gap-3">
                            <span className="text-4xl md:text-5xl font-display font-black text-slate-400/80 tracking-tight font-mono">
                              {service.number}
                            </span>
                            <div className="h-8 w-px bg-navy-800" />
                            <div>
                              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block font-bold">
                                Discipline {service.number} of 07
                              </span>
                              <span className="text-xs text-amber-300 font-semibold">{service.tagline}</span>
                            </div>
                          </div>

                          <div className="w-12 h-12 rounded-2xl bg-navy-800 border border-navy-700 text-slate-200 flex items-center justify-center shadow-inner">
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-navy-800">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                            Ecosystem Tools:
                          </span>
                          {service.tools.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-navy-800 border border-navy-700 text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <Button
                          href="#contact"
                          variant="secondary"
                          size="sm"
                          icon={ArrowRight}
                          className="bg-white text-navy-950 font-bold hover:bg-slate-100"
                        >
                          Staff This Pod
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </Container>
          </div>

          <div className="relative z-20 pb-6">
            <Container size="wide">
              <div className="w-full bg-navy-900 h-1.5 rounded-full overflow-hidden border border-navy-800">
                <div
                  className="h-full bg-gradient-to-r from-slate-400 via-amber-400 to-white transition-all duration-300"
                  style={{
                    width: `${((activeIdx + 1) / SERVICES.length) * 100}%`,
                  }}
                />
              </div>
            </Container>
          </div>
        </div>
      ) : (
        <div className="py-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center">
              <span className="text-eyebrow uppercase tracking-widest font-bold px-3 py-1 bg-navy-800 text-slate-300 rounded-full border border-navy-700">
                {SERVICES_SECTION_HEADING.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              {SERVICES_SECTION_HEADING.title}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {SERVICES_SECTION_HEADING.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {SERVICES.map((service, idx) => {
              const IconComponent = ICON_MAP[service.icon] || Briefcase;

              return (
                <div
                  id={`service-card-${idx}`}
                  key={service.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#121E36] border border-navy-800 shadow-md space-y-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-2xl font-display font-black text-amber-400 font-mono">
                        {service.number}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white mt-1">
                        {service.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-semibold">{service.tagline}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-navy-800 text-slate-200 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-navy-800">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                      Core Workflows:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-navy-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tools.slice(0, 3).map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Button href="#contact" variant="primary" size="sm" className="bg-white text-navy-950">
                      Staff Pod
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
