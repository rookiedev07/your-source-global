import React, { useEffect } from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import QuickLeadCtaBanner from './components/cta/QuickLeadCtaBanner';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import LeadershipSection from './sections/LeadershipSection';
import ServicesSection from './sections/ServicesSection';
import WhyUsSection from './sections/WhyUsSection';
import IndustriesSection from './sections/IndustriesSection';
import SecuritySection from './sections/SecuritySection';
import GlobalPresenceSection from './sections/GlobalPresenceSection';
import CareersSection from './sections/CareersSection';
import ContactSection from './sections/ContactSection';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  useEffect(() => {
    ScrollTrigger.sort();
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-900 selection:bg-navy-800 selection:text-white">
      <Nav />

      <main className="flex-1">
        <div className="w-full flex flex-col">
          <HeroSection />
          <AboutSection />
          <LeadershipSection />
          <ServicesSection />
          
          <QuickLeadCtaBanner />

          <WhyUsSection />
          <IndustriesSection />
          <SecuritySection />
          <GlobalPresenceSection />
          <CareersSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
