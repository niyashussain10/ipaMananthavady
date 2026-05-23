import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, GraduationCap, Mail, MapPin, Clock, ChevronRight, Calculator, PieChart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Global Standards",
    desc: "Train students on international accounting standards including GCC VAT and SAP."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Team",
    desc: "Work with certified SAP consultants and GST experts in a professional environment."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Career Path",
    desc: "Growth opportunities within our growing network of accounting institutes across Kerala."
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Impactful Work",
    desc: "Help graduates secure high-paying jobs in the global accounting industry."
  }
];

const jobOpenings = [
  {
    title: "Accounting Faculty (SAP & GST)",
    experience: "3–5 Years",
    location: "Mananthavady / Sulthan Bathery",
    type: "Full-Time",
    responsibilities: [
      "Deliver training in SAP FI/CO, Business One, and GST modules",
      "Guide students in Tally Prime, Zoho Books, and QuickBooks",
      "Conduct practical on-the-job training sessions",
      "Develop and update curriculum based on industry trends"
    ],
    skills: [
      "Expertise in SAP (Certified preferred)",
      "Deep knowledge of Indian GST & Gulf VAT",
      "Proficiency in Tally Prime & MS Excel",
      "Strong communication & teaching skills"
    ]
  },
  {
    title: "Academic Counselor",
    experience: "1–3 Years",
    location: "Kozhikode / Kalpetta",
    type: "Full-Time",
    responsibilities: [
      "Advise students on accounting career pathways",
      "Handle course inquiries and admissions",
      "Manage student registrations and documentation",
      "Achieve monthly enrollment targets"
    ],
    skills: [
      "Excellent communication & convincing skills",
      "Knowledge of accounting career trends",
      "Customer-centric approach",
      "Proficiency in MS Office"
    ]
  }
];

const steps = [
  { id: "01", title: "Apply", desc: "Submit your CV and experience portfolio." },
  { id: "02", title: "Interview", desc: "Technical and skill assessment with our experts." },
  { id: "03", title: "Onboarding", desc: "Join the IPA family and start mentoring." }
];

const CareersPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-navy text-white relative overflow-hidden px-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block px-5 py-2 bg-gold/20 text-gold rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-gold/20">
              Join Our Faculty
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
              Shape the <span className="text-gold">Future</span> <br /> 
              of Accounting
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-lg font-light leading-relaxed">
              We are on a mission to redefine accounting training. Be part of a team that inspires excellence and shapes the next generation of finance professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy text-white flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-black text-navy mb-4 uppercase">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-24 bg-slate-100/50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Work With Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter">Open Positions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
              >
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-1.5 bg-gold/10 text-gold text-[10px] font-black rounded-full uppercase tracking-wider flex items-center gap-2">
                    <Clock size={12} /> {job.type}
                  </span>
                  <span className="px-4 py-1.5 bg-navy/5 text-navy/60 text-[10px] font-black rounded-full uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={12} /> {job.location}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-navy mb-4 uppercase">{job.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-10">
                  <Briefcase size={16} />
                  <span className="font-bold">Exp: {job.experience}</span>
                </div>

                <div className="space-y-10 flex-grow">
                  <div>
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" /> Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                          <ChevronRight size={16} className="text-gold shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-navy font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" /> Expertise Required
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-4 py-1 bg-slate-50 text-navy/70 text-[10px] font-bold rounded-lg border border-slate-100 uppercase tracking-tighter">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50">
                  <a 
                    href="mailto:info@ipakerala.com"
                    className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 shadow-xl shadow-navy/10"
                  >
                    Apply Now
                    <ChevronRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="py-24 text-center border-t border-slate-100">
        <p className="text-slate-300 text-[10px] uppercase tracking-[0.4em] font-black">Professional Excellence • IPA Academy</p>
      </div>
    </div>
  );
};

export default CareersPage;
