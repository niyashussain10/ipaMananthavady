import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Calculator } from 'lucide-react';

const Facebook = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Twitter = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
);
const Linkedin = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
);
import { Link } from 'react-router-dom';
import IPALogo from './IPALogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-8 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="group-hover:rotate-6 transition-transform">
                  <IPALogo className="h-10 md:h-11 w-24 md:w-28" />
                </div>
                <div className="flex flex-col leading-tight justify-center pl-1">
                  <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-white leading-none">IPA</h2>
                  <span className="text-[10px] md:text-xs font-black uppercase text-gold italic tracking-[0.15em] mt-0.5">MANANTHAVADY</span>
                  <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-[1.5px] text-white/40 mt-0.5">Academy of Accountants</p>
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Incorporated in 2002, IPA serves the noble purpose of imparting quality education in the niche of accounting. ISO 9001: 2015 Certified Institute.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black uppercase tracking-[0.3em]">Quick Menu</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Courses', href: '/courses' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-white/60 hover:text-gold text-sm font-medium flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black uppercase tracking-[0.3em]">Top Courses</h4>
            <ul className="space-y-4">
              {['ACPA', 'CPIFA', 'PGDIFA', 'PGDCAM'].map((course) => (
                <li key={course}>
                  <Link 
                    to="/courses"
                    className="text-white/60 hover:text-gold text-sm font-medium flex items-center gap-2 group transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black uppercase tracking-[0.3em]">Office</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-gold shrink-0 w-5 h-5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  IPA, Near Muncipal Bustand, Calicut Road, Mananthavady
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="text-gold shrink-0 w-5 h-5" />
                <div className="space-y-1">
                  <p className="text-white/60 text-sm font-bold">
                    <a href="tel:+919400382776" className="hover:text-white transition-colors">📞 Call: +91 9400382776</a>
                  </p>
                  <p className="text-white/60 text-sm font-bold">
                    <a href="https://wa.me/919400382776" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">🟢 WA: +91 9400382776</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-gold shrink-0 w-5 h-5" />
                <p className="text-white/60 text-sm font-medium">info@ipakerala.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
            © {currentYear} IPA MANANTHAVADY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
