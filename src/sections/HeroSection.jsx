import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles, Globe, Shield, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-between bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-28 sm:pt-32 md:pt-40 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-navy-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-slate-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container size="wide" className="relative z-10 my-auto">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800/80 border border-navy-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              Sourcing. Solutions. Success.
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] mb-5 sm:mb-6"
          >
            <span className="block">High-Impact Global Teams</span>
            <span className="block text-slate-200">Engineered to Scale</span>
            <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Your Core Operations.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10"
          >
            Your Source Global (YSG) builds dedicated, enterprise-grade offshore teams across
            Finance, Support, Back-Office, and Technical disciplines — delivering measurable operational
            efficiency and seamless timezone alignment across the US, UAE, and the Philippines.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-12 sm:mb-16"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="bg-white text-navy-950 hover:bg-slate-100 font-bold shadow-lg shadow-navy-950/50 justify-center text-sm sm:text-base py-3 sm:py-3.5"
            >
              Request a Quote
            </Button>
            <Button
              href="#services"
              variant="secondary"
              size="lg"
              className="bg-navy-800/80 text-white border-navy-700 hover:bg-navy-700 hover:text-white backdrop-blur-sm justify-center text-sm sm:text-base py-3 sm:py-3.5"
            >
              Explore Our 7 Services
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-6 sm:pt-8 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl text-xs"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono uppercase tracking-wider text-[10px] sm:text-xs">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                Footprint
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">UAE • US • PH</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Strategic 24/7 delivery</div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono uppercase tracking-wider text-[10px] sm:text-xs">
                <Zap className="w-3.5 h-3.5 text-slate-400" />
                Service Lines
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">7 Core Disciplines</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">Finance, Tech, Support</div>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-slate-400 font-mono uppercase tracking-wider text-[10px] sm:text-xs">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                Governance
              </div>
              <div className="font-bold text-white text-xs sm:text-sm">Enterprise Security</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400">NDA &amp; IP Protection</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto w-full flex justify-between items-end text-slate-400"
      >
        <div className="hidden sm:block text-[11px] font-mono tracking-wider text-slate-500 uppercase">
          Your Source Global &copy; {new Date().getFullYear()}
        </div>

        <a
          href="#about"
          className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-slate-400 hover:text-white transition-colors duration-200 group ml-auto"
          aria-label="Scroll to About Us section"
        >
          <span className="font-bold">SCROLL</span>
          <div className="w-6 h-10 sm:w-7 sm:h-11 rounded-full border-2 border-slate-500 group-hover:border-white transition-colors flex items-start justify-center p-1.5">
            <span className="w-1.5 h-2 bg-slate-300 group-hover:bg-white rounded-full animate-bounce mt-0.5 transition-colors" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
