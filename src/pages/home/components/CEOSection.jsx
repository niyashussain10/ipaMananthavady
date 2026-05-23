import React from 'react';
import { motion } from 'framer-motion';

const CEOSection = () => {
  return (
    <section className="py-12 md:py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="/ceo.png" 
                  alt="G. Ramakrishnan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold p-10 rounded-[2rem] shadow-2xl">
                <h4 className="text-navy text-2xl font-black uppercase">G. Ramakrishnan</h4>
                <p className="text-navy/70 text-xs font-black uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold text-sm font-black uppercase tracking-[0.3em]">CEO's Message</span>
              <h2 className="text-white text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter">
                Moulding Accountants <br/> <span className="text-gold italic">Capably</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                "It is important to note that learning Computer Accounting Software does not imply that you have become an accountant. Accounting software can only be used by an experienced accountant. The IPA moulds accountants who are capable of operating any accounting software with ease."
              </p>
              <p>
                "The mere knowledge of Tally or any other software is not sufficient if you desire to work as a Financial Controller, Accounts Manager, or Audit Assistant in a reputable organization. Ideally, you should have complete working experience in all accounting tasks that an accountant is expected to perform."
              </p>
              <p className="italic text-gold font-medium">
                "IPA never teaches, but trains!"
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="text-white">
                <p className="text-2xl font-black uppercase tracking-tighter">20+ Years</p>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest">Of Excellence</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-white">
                <p className="text-2xl font-black uppercase tracking-tighter">ISO 9001:2015</p>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest">Certified</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CEOSection;
