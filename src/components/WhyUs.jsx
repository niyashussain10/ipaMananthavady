import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const placeholderImg = "https://i.pinimg.com/736x/14/a1/88/14a188950a021ac3b9ec74d75b1c884c.jpg";

const tabs = [
  {
    id: 'practical-training',
    label: 'Practical Training',
    title: '100% Hands-on Experience',
    image: placeholderImg,
    content: 'At IPA Kerala, we believe in "Training, not Teaching". Our curriculum is built around real-world accounting scenarios, ensuring you master Tally, SAP, and GST filing through practical projects rather than just theory.'
  },
  {
    id: 'expert-faculties',
    label: 'Expert Faculties',
    title: 'Learn from Professionals',
    image: placeholderImg,
    content: 'Our instructors include Chartered Accountants, Tax Consultants, and industry veterans with decades of experience. You gain insights into current corporate requirements and best practices directly from those working in the field.'
  },
  {
    id: 'placement-success',
    label: 'Placement Success',
    title: 'Global Career Support',
    image: placeholderImg,
    content: 'With a vast network of corporate partners across India and the Gulf, our dedicated placement cell helps you secure high-paying roles as Accountants, SAP Consultants, or Financial Auditors immediately after certification.'
  }
];

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-gold/30 px-8 py-4 rounded-full"
          >
            <h2 className="text-gold text-sm font-black uppercase tracking-[0.4em]">
              Why choose IPA Kerala?
            </h2>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-12 border-b border-white/5 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-8 text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 w-full md:w-auto ${
                  activeTab.id === tab.id ? 'text-gold' : 'text-white/40 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab.id === tab.id && (
                  <motion.div 
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold rounded-t-full shadow-[0_-4px_20px_rgba(197,160,89,0.5)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
              >
                <div className="relative group">
                  <div className="overflow-hidden rounded-[3rem] shadow-2xl border border-white/10 group-hover:border-gold/20 transition-all duration-500">
                    <img 
                      src={activeTab.image} 
                      alt={activeTab.title} 
                      className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-[2.5rem] -z-10 blur-2xl opacity-20" />
                </div>
                <div className="text-left space-y-8">
                  <h4 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                    {activeTab.title}
                  </h4>
                  <p className="text-white/60 text-lg leading-relaxed font-light">
                    {activeTab.content}
                  </p>
                  <div className="pt-6">
                    <button className="text-gold font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group">
                      Learn More About Our Methodology
                      <div className="w-8 h-px bg-gold group-hover:w-16 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
