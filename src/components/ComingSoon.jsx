import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import bgImage from '../assets/images/coming-soon-bg.jpg';

const UpcomingBatch = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Set target date 30 days from now for demonstration
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeData = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGGJFr9kFVDeBH-RqXpelU25h1mvMREW4hqBdBh2JNp5w9B2vbmL1L3vICILIFBs2G/exec';
      await fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData, 
          subject: 'Entrance Exam Inquiry', 
          source: 'Upcoming Batch Form'
        }) 
      });
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="section3" 
      className="relative py-24 px-6 overflow-hidden bg-primary"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Timer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                Admissions Open
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                Upcoming <br />
                <span className="text-accent italic">Batch 2026</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md font-medium leading-relaxed">
                The next generation of aviation leaders is being shaped. Secure your place in our elite training program today.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4">
              {timeData.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-accent mb-1 group-hover:scale-110 transition-transform">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative min-h-[450px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight">Thank you!</h3>
                  <p className="text-white/60 font-medium">
                    Our admissions team will call you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="mt-8 text-accent text-sm font-bold border-b border-accent/30 hover:border-accent transition-all pb-1"
                  >
                    Register another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-8">
                    <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Register Interest</h4>
                    <h6 className="text-white/50 text-sm font-medium">
                      Register for the <span className="italic text-accent">Entrance Examination</span> and secure your seat in the academy.
                    </h6>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name" 
                      className="w-full bg-white/10 border-0 focus:ring-2 focus:ring-accent text-white placeholder-white/60 p-4 text-sm font-medium transition-all rounded-xl"
                    />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your Email" 
                      className="w-full bg-white/10 border-0 focus:ring-2 focus:ring-accent text-white placeholder-white/60 p-4 text-sm font-medium transition-all rounded-xl"
                    />
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your Phone Number" 
                      className="w-full bg-white/10 border-0 focus:ring-2 focus:ring-accent text-white placeholder-white/60 p-4 text-sm font-medium transition-all rounded-xl"
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-4 rounded-xl text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-accent transition-all duration-300 disabled:opacity-50 shadow-lg shadow-accent/20"
                    >
                      {isSubmitting ? "Sending..." : "Inquire Now"}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatch;
