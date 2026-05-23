import React from "react"; 
import { motion } from "framer-motion";
import CEOSection from "./home/components/CEOSection";
import { CheckCircle2, Award, BookCheck, ShieldCheck, GraduationCap } from "lucide-react";

const specialities = [
  "Syllabus meeting global standards.",
  "Authorised Tally Training Centre",
  "Faculties include Chartered Accountants & Tax Consultants.",
  "On Job Training Assistance.",
  "Campus Selection.",
  "Registered under Ministry of Finance, Govt. of India.",
  "ISO 9001:2015 Certified.",
  "Projects & Assignments.",
  "Specialization in Foreign Accounting."
];

const certifications = [
  "IPA Course Certificate",
  "Internship Certificate",
  "Practical GST Certificate",
  "Practical Gulf-VAT Certificate",
  "Tally Project Certificate",
  "TDS|EPF|ESI Participation",
  "Project Certificate on SAP Business One",
  "SAP FICO Authorized Certificate",
  "Tally Prime Authorized Certificate"
];

const AboutPage = () => (
  <div className="bg-slate-50 min-h-screen">
    {/* Hero Section */}
    <section className="bg-navy pt-28 md:pt-48 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-4 block">Est. 2002</span>
          <h1 className="text-white text-3xl md:text-7xl font-black uppercase tracking-tight mb-6 leading-none">
            Welcome to <span className="text-gold italic">IPA Kerala</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Incorporated by an expert group of Professionals, IPA is an initiative that serves the noble purpose of imparting quality education in the niche of accounting.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Intro Section */}
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6 md:space-y-10">
            <div className="space-y-4">
              <h2 className="text-navy text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1]">
                Quality Education <br/> In <span className="text-gold">Accounting</span>
              </h2>
              <div className="w-20 h-1.5 bg-gold rounded-full" />
            </div>
            <div className="space-y-6 text-slate-500 text-base md:text-lg font-light leading-relaxed">
              <p>
                The ISO 9001: 2015 Certified Institute ever since its inception has grown by leaps and bounds. 
                Our on-the-job training programs are designed to equip individuals with the necessary skills and knowledge to 
                become successful accountants.
              </p>
              <p>
                By offering practical, hands-on experience, we ensure that graduates are well-prepared for the challenges 
                they will face in real-world accounting scenarios. IPA never teaches, but trains!
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-navy text-2xl md:text-3xl font-black uppercase">2002</h4>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest">Year Incorporated</p>
              </div>
              <div>
                <h4 className="text-navy text-2xl md:text-3xl font-black uppercase">ISO</h4>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest">9001:2015 Certified</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative z-10 border border-slate-50">
              <h3 className="text-navy text-xl sm:text-2xl font-black uppercase mb-6 sm:mb-10 tracking-tight">Our Specialities</h3>
              <div className="space-y-4 sm:space-y-5">
                {specialities.map((item, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4 items-start group">
                    <CheckCircle2 className="text-gold w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-600 text-xs sm:text-sm font-bold uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>

    {/* Certifications Section */}
    <section className="py-12 md:py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <span className="text-gold text-xs sm:text-sm font-black uppercase tracking-[0.3em]">Recognition</span>
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter">Certifications Provided</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl group hover:bg-gold transition-all duration-500"
            >
              <div className="flex gap-3 sm:gap-4 items-center">
                <Award className="text-gold group-hover:text-navy transition-colors w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
                <span className="text-white group-hover:text-navy text-xs sm:text-sm font-black uppercase tracking-tight leading-snug">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CEOSection />
  </div>
); 

export default AboutPage;
