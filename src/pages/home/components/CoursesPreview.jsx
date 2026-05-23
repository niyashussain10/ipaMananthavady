import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const coursesList = [
  {
    id: 1,
    acronym: "ACPA",
    name: "Advanced Certified Professional Accountant",
    badge: "Foundation Program",
    desc: "Practical bookkeeping, multi-state GST, Tally Prime, and advanced Excel project integrations.",
    image: "/course_acpa.png",
    color: "from-blue-500/10 to-indigo-500/10"
  },
  {
    id: 2,
    acronym: "CPIFA",
    name: "Certified Professional in Indian & Foreign Accounting",
    badge: "Global Accounting",
    desc: "Indian tax setups, cloud-based QuickBooks, Zoho Books, and specialized Gulf VAT modules.",
    image: "/course_cpifa.png",
    color: "from-emerald-500/10 to-teal-500/10"
  },
  {
    id: 3,
    acronym: "PGDIFA",
    name: "Post Graduate Diploma in Indian & Foreign Accounting",
    badge: "Corporate ERP",
    desc: "Corporate finance auditing, advanced accounting setups, and core SAP Business One modules.",
    image: "/course_pgdifa.png",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    id: 4,
    acronym: "PGDCAM",
    name: "Post Graduate Diploma in Corporate Accounting & Management",
    badge: "Master Program",
    desc: "Enterprise ERP systems including SAP S/4HANA, Tally Prime, Busy, QuickBooks, and Zoho Books.",
    image: "/course_pgdcam.png",
    color: "from-amber-500/10 to-orange-500/10"
  }
];

const CoursesPreview = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[11px] font-black uppercase tracking-[0.4em] mb-2 block"
          >
            Academic Programs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-navy text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4"
          >
            Courses <span className="text-gold italic">We Offer</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto"
          >
            Choose from our highly specialized accounting tracks designed to deliver absolute on-the-job mastery.
          </motion.p>
        </div>

        {/* 2-Column Mobile & 4-Column Desktop Course Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {coursesList.map((course, idx) => (
            <Link 
              key={idx} 
              to={`/courses?id=${course.id}`}
              className="group bg-white rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Course Image Wrapper */}
              <div className="w-full h-24 sm:h-32 md:h-40 overflow-hidden bg-slate-100 relative">
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                
                {/* Float Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-100">
                  <span className="text-[7px] md:text-[8px] font-black text-navy uppercase tracking-widest block leading-none">
                    {course.badge}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-navy text-sm md:text-xl font-black uppercase tracking-tight mb-1 group-hover:text-gold transition-colors leading-tight">
                    {course.acronym}
                  </h3>
                  <h4 className="text-slate-400 text-[8px] md:text-[10px] font-bold uppercase tracking-wide mb-3 leading-snug">
                    {course.name}
                  </h4>
                  <p className="text-slate-500 text-[9px] md:text-[11px] leading-snug font-medium line-clamp-2 md:line-clamp-3">
                    {course.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-navy font-black uppercase text-[8px] md:text-[10px] tracking-wider group-hover:text-gold transition-colors">
                  <span>View Details</span>
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
