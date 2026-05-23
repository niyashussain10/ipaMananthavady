import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const placements = [
  { id: 1, name: "Rahul S", role: "Sr. Accountant", company: "Finance Corp" },
  { id: 2, name: "Sneha P", role: "GST Consultant", company: "Global Tax" },
  { id: 3, name: "Arjun K", role: "SAP Specialist", company: "Tech Solutions" },
  { id: 4, name: "Meera R", role: "Audit Associate", company: "Premium Audit" },
  { id: 5, name: "Kiran J", role: "Finance Manager", company: "Retail Hub" },
  { id: 6, name: "Anjali M", role: "Tax Analyst", company: "City Accounts" }
];

const PlacementPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-20 bg-navy text-white text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4"
          >
            Placement <span className="text-gold">Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl font-light"
          >
            Empowering careers in finance and accounting. Meet our graduates working in top-tier organizations.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {placements.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <span className="text-navy text-3xl font-black uppercase">{student.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-black text-navy uppercase mb-2 group-hover:text-gold transition-colors">
                {student.name}
              </h3>
              <p className="text-gold text-xs font-black uppercase tracking-widest mb-4">
                {student.role}
              </p>
              <div className="w-10 h-1 bg-slate-100 rounded-full mb-4" />
              <p className="text-slate-500 font-bold text-sm uppercase italic">
                Placed @ {student.company}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-center px-8 border-t border-slate-100 overflow-hidden relative">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-black text-navy uppercase tracking-tighter leading-none">
              Your Professional <br/>Career <span className="text-gold italic underline decoration-navy decoration-4 underline-offset-8">Starts Here</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light">
              Don't just learn accounting. Get trained on-the-job and join our elite league of professional accountants.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-navy text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all shadow-2xl shadow-navy/20"
            >
              Register For Placement Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlacementPage;
