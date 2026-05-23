import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Facebook = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Twitter = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
);
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import IPALogo from './IPALogo';

const navGroups = [
  [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
  ],
  [
    { name: 'COURSES', href: '/courses' },
    { name: 'OUR TEAM', href: '/team' },
  ],
  [
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ]
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-navy border-b border-white/5 py-3 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/60 text-[10px] font-black uppercase tracking-widest">
              <Clock size={12} className="text-gold" />
              <span>9.00 AM - 6.00 PM</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                <Phone size={12} className="text-gold" />
                <a href="tel:+919400382776">+91 9400382776</a>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                <span className="text-emerald-500 mr-0.5">🟢</span>
                <a href="https://wa.me/919400382776" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WA: +91 9400382776</a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Facebook size={14} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Instagram size={14} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
              <Twitter size={14} className="text-white/40 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={cn(
        "w-full transition-all duration-500",
        scrolled ? "bg-navy/95 backdrop-blur-md py-4 shadow-2xl" : "bg-navy/80 backdrop-blur-sm py-6"
      )}>
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
          
          {/* Official Logo + Text */}
          <Link to="/" className="flex items-center gap-2 md:gap-6 group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <IPALogo />
            </div>
            <div className="flex flex-col pl-1 justify-center leading-tight">
              {/* <h1 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tighter uppercase">
                IPA
              </h1> */}
              <span className="text-[10px] md:text-xs font-black text-gold italic uppercase tracking-[0.15em] mt-0.5">
                MANANTHAVADY
              </span>
              <span className="text-[7px] md:text-[8px] font-bold text-white/40 tracking-[1.5px] uppercase mt-0.5">
                Academy of Accountants
              </span>
            </div>
          </Link>

          {/* Desktop Grid Menu */}
          <nav className="hidden lg:flex gap-10 xl:gap-14 pt-1">
            {navGroups.map((group, gIndex) => (
              <div key={gIndex} className="flex flex-col gap-2">
                {group.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.href}
                    className={cn(
                      "text-[11px] font-black tracking-widest uppercase transition-all duration-300 hover:text-gold",
                      location.pathname === item.href ? "text-gold" : "text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="absolute top-full left-0 w-full bg-navy origin-top lg:hidden shadow-3xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-8 py-12 grid grid-cols-1 gap-y-8">
              {navGroups.flat().map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-[14px] font-black tracking-[0.2em] uppercase",
                    location.pathname === item.href ? "text-gold" : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                   <Phone size={14} className="text-gold" />
                   <a href="tel:+919400382776" className="hover:text-gold transition-colors">+91 9400382776</a>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                   <span className="text-emerald-500 mr-0.5">🟢</span>
                   <a href="https://wa.me/919400382776" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WA: +91 9400382776</a>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                   <Clock size={14} className="text-gold" />
                   9.00 AM - 6.00 PM
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
