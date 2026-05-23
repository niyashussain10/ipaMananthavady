import React from "react";
import { motion } from "framer-motion";
import { User, Award, ShieldCheck } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "G. Ramakrishnan",
    role: "Founder & CEO",
    experience: "Pioneer in Accounting Training",
    image: "/ceo.png",
    bio: "GST Consultant, SAP Certified Consultant, and International Trainer. The visionary behind IPA's success."
  },
  {
    id: 2,
    name: "Akhil T K",
    role: "Centre-in-Charge & Chief Instructor",
    experience: "Sulthan Bathery Centre",
    image: "/akhil.png",
    bio: "Dedicated to providing top-quality practical training and career support to accounting aspirants."
  }
];

const advisoryPanel = [
  {
    name: "T.S. Anantharaman",
    role: "Chartered Accountant",
    desc: "Expert advisor on corporate taxation and financial auditing standards."
  },
  {
    name: "T.R. Anantharaman",
    role: "Chartered Accountant",
    desc: "Specialist in international accounting principles and IFRS compliance."
  },
  {
    name: "M. Vijayagopal",
    role: "Chartered Accountant",
    desc: "Provides strategic guidance on financial management and statutory audits."
  },
  {
    name: "T.S. Nagarajan",
    role: "Personality Development",
    desc: "Mentors students on soft skills, business communication, and career readiness."
  }
];

const TeamPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-24 bg-navy text-white text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-4 block">Our Team</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              The <span className="text-gold">Experts</span> Behind IPA
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Guided by veteran Chartered Accountants and industry professionals dedicated to your accounting career success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-navy text-3xl font-black uppercase tracking-tight">Executive Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-slate-100"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-60" />
              </div>

              {/* Info Section */}
              <div className="p-12">
                <span className="text-gold text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
                  {member.role}
                </span>
                <h3 className="text-3xl font-black text-navy mb-6 uppercase tracking-tighter">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed italic mb-8">
                  "{member.bio}"
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-navy text-[10px] font-black uppercase tracking-widest">
                    {member.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisory Panel */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-gold text-sm font-black uppercase tracking-[0.3em]">Expert Guidance</span>
            <h2 className="text-navy text-4xl font-black uppercase tracking-tighter">Advisory Panel</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisoryPanel.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-gold transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy transition-colors shadow-lg shadow-navy/10">
                  <Award size={24} />
                </div>
                <h3 className="text-navy font-black text-lg uppercase tracking-tight mb-2">{advisor.name}</h3>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-6">{advisor.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed font-light">
                  {advisor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialities Preview */}
      <section className="py-24 bg-navy text-white text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/20 via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
            Our Mentors Don't Just Teach, <br/> <span className="text-gold italic">They Train.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gold rounded-full mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
