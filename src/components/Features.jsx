import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Network, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: <Briefcase size={28} />,
    title: "On-the-Job Training",
    description: "Equip yourself with practical skills through hands-on experience in real-world accounting scenarios.",
    link: "/about"
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Expert Mentorship",
    description: "Benefit from close collaboration with Chartered Accountants and industry professionals.",
    link: "/team"
  },
  {
    icon: <Network size={28} />,
    title: "Industry Network",
    description: "Access a global network of corporate connections for internships and job placement assistance.",
    link: "/contact"
  }
];

const Features = () => {
  return (
    <section className="bg-navy relative z-30">
      <div className="container mx-auto px-0 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group border-r border-white/5 last:border-r-0"
            >
              <div className="bg-navy/50 p-12 lg:p-16 h-full transition-all duration-700 group-hover:bg-gold relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -translate-y-12 translate-x-12 group-hover:bg-navy/10 transition-colors" />
                
                <div className="flex flex-col gap-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-navy group-hover:text-gold transition-all duration-500 shadow-xl">
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter group-hover:text-navy transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-white/60 group-hover:text-navy/70 transition-colors duration-500 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a 
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-gold group-hover:text-navy text-[10px] font-black uppercase tracking-widest border-b border-gold group-hover:border-navy pb-1 transition-all"
                    >
                      Learn More
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
