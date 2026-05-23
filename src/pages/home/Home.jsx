import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import CEOSection from './components/CEOSection';
import SoftwareShowcase from './components/SoftwareShowcase';
import CoursesPreview from './components/CoursesPreview';
import { MediaShowcaseFooter } from './components/MediaShowCaseFooter.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      
      {/* About Section Summary */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-8 md:px-12 text-center max-w-4xl">
          <h6 className="text-gold text-sm font-black uppercase tracking-[4px] mb-6">About IPA</h6>
          <h2 className="text-navy text-4xl md:text-5xl font-black uppercase mb-8">
            Expert Accounting Training for a <span className="text-gold">Global Career</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Our on-the-job training programs are designed to equip individuals with the necessary skills and knowledge 
            to become successful accountants. By offering practical, hands-on experience, we ensure that graduates 
            are well-prepared for the challenges they will face in real-world accounting scenarios.
          </p>
          <a 
            href="/about" 
            className="text-navy font-black uppercase tracking-widest border-b-2 border-gold pb-2 hover:text-gold transition-all"
          >
            Read Our Full Story
          </a>
        </div>
      </section>

      <CoursesPreview />

      <SoftwareShowcase />

      <CEOSection />
      <MediaShowcaseFooter />
    </>
  );
};

export default Home;
