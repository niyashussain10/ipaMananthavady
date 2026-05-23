import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Database, Cpu, FileSpreadsheet, Globe, ShieldCheck, Briefcase, BarChart3 } from 'lucide-react';

const softwareList = [
  {
    name: "SAP S/4HANA & SAP Business One",
    category: "Enterprise ERP",
    desc: "Comprehensive hands-on training on industry-standard SAP S/4 HANA and Business One modules.",
    image: "/sap_logo.png",
    color: "bg-blue-600"
  },
  {
    name: "Tally Prime",
    category: "Authorized Training",
    desc: "Master the most popular accounting software in India with multi-state GST and payroll management.",
    image: "/tally_logo.png",
    color: "bg-green-600"
  },
  {
    name: "QuickBooks",
    category: "Global Accounting",
    desc: "Hands-on experience with the world's leading cloud-based accounting platform for SMEs worldwide.",
    image: "/quickbooks_logo.png",
    color: "bg-teal-600"
  },
  {
    name: "Zoho Books",
    category: "Cloud Accounting",
    desc: "Authorized course covering modern cloud business finance, digital invoicing, and compliance tracking.",
    image: "/zoho_logo.png",
    color: "bg-orange-600"
  },
  {
    name: "Microsoft Excel",
    category: "Data Analysis",
    desc: "Advanced Excel skills for accounting projects, dynamic reporting, and robust data visualization.",
    image: "/excel_logo.png",
    color: "bg-green-700"
  },
  {
    name: "Busy Accounting",
    category: "Business Software",
    desc: "Practical training on Busy for multi-location inventory and business management.",
    image: "/busy_logo.png",
    color: "bg-orange-600"
  },
  {
    name: "Gulf VAT",
    category: "International Tax",
    desc: "Specialized training on GCC VAT compliance, regulations, and digital online filing processes.",
    image: "/gulf_vat_logo.png",
    color: "bg-navy"
  },
  {
    name: "GST Portal",
    category: "Tax Compliance",
    desc: "Live project training on GSTR-1, GSTR-2B, and GSTR-3B return filing procedures.",
    image: "/gst_logo.png",
    color: "bg-navy"
  }
];

const SoftwareShowcase = () => {
  return (
    <section className="pt-12 pb-12 md:pt-24 md:pb-12 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-navy rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border-[40px] border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-1.5 block"
          >
            Tools of the Trade
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-3"
          >
            Master World-Class <span className="text-gold italic">Accounting Software</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto"
          >
            Gain hands-on expertise in the most demanded software used by global corporations and local businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {softwareList.map((software, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 p-3.5 md:p-5 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 hover:border-gold/30 transition-all duration-300 group flex flex-col"
            >
              <div className="w-full h-16 md:h-24 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-sm md:shadow-md border border-slate-100 overflow-hidden group-hover:scale-102 transition-transform duration-300">
                {software.image ? (
                  <img src={software.image} alt={software.name} className="w-full h-full object-contain scale-[1.55] transition-transform duration-300 group-hover:scale-[1.65]" />
                ) : (
                  <div className={`w-full h-full ${software.color} text-white flex items-center justify-center`}>
                    {software.icon}
                  </div>
                )}
              </div>
              <h4 className="text-gold text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-0.5 md:mb-1">{software.category}</h4>
              <h3 className="text-navy text-xs md:text-base font-black uppercase tracking-tighter mb-1 md:mb-1.5 group-hover:text-gold transition-colors line-clamp-1">
                {software.name}
              </h3>
              <p className="text-slate-500 text-[9px] md:text-[11px] leading-snug font-medium opacity-85 group-hover:opacity-100 line-clamp-2">
                {software.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-navy px-8 py-4 rounded-2xl shadow-xl">
            <span className="text-white font-bold text-xs">Ready to become an expert?</span>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <a href="/courses" className="text-gold font-black uppercase tracking-widest text-[10px] hover:text-white transition-colors">
              Explore Our Modules →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
