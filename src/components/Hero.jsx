import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] md:min-h-screen flex items-center pt-28 pb-16 md:py-20 bg-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-10" />
        <img 
          src="/hero_bg.png" 
          alt="Accounting Training" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        {/* Animated Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-8 relative z-20">
        <div className="max-w-4xl">

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-[1.05] uppercase tracking-tighter mb-6 md:mb-10 break-words"
          >
            Become a Professional <br/>
            <span className="text-gold italic underline decoration-white/10 underline-offset-[20px]">Accountant</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8 md:mb-12"
          >
            <p className="text-white/60 text-base md:text-2xl font-light leading-relaxed max-w-xl">
              Equip yourself with practical accounting skills and work anywhere in the world. IPA is your <span className="text-gold font-black italic">PASSPORT</span> to a successful career!
            </p>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="flex flex-col gap-1">
              <span className="text-gold text-3xl font-black tracking-tighter">20+</span>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none">Years of Excellence</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6"
          >
            <a 
              href="/courses"
              className="px-6 py-4 md:px-10 md:py-5 bg-gold text-navy rounded-xl md:rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
            >
              Explore Courses
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact"
              className="px-6 py-4 md:px-10 md:py-5 bg-white/5 text-white border border-white/20 rounded-xl md:rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-3"
            >
              Contact Branches
              <div className="w-2 h-2 bg-gold rounded-full" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Info */}
      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6">
        <div className="text-right">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Admissions Open</p>
          <a href="tel:+919400382776" className="text-white text-lg font-black tracking-tight underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors">+91 9400382776</a>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center shadow-2xl">
          <GraduationCap className="text-navy w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
