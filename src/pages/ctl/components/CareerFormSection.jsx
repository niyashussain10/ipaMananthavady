import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, CheckCircle } from "lucide-react";

const CareerFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGGJFr9kFVDeBH-RqXpelU25h1mvMREW4hqBdBh2JNp5w9B2vbmL1L3vICILIFBs2G/exec';
      await fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify({...formData, source: 'Career Inquiry Form'}) 
      });

      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Illustration/Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-xs">Pilot Training Inquiry</span>
              <h2 className="text-5xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                Begin Your <br />
                <span className="text-accent italic">Aviation Career</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-lg">
                Fill out the form below and one of our licensed pilot mentors will get in touch with you shortly.
              </p>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/3]">
              <img 
                src="https://i.pinimg.com/736x/5d/c5/ff/5dc5ffbad0d623c3196bf4b55291992d.jpg" 
                alt="Cockpit" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-10">
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-2">Sara Aviation Academy</p>
                <h3 className="text-2xl font-black text-white uppercase">Your Cockpit Awaits.</h3>
                <p className="text-white/70 text-sm mt-2">Join hundreds of pilots who took the first step right here.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[3rem] shadow-xl shadow-primary/5 border border-gray-100 min-h-[550px] flex flex-col justify-center"
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
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-primary mb-4 uppercase tracking-tighter">Thank you!</h3>
                  <p className="text-gray-500 text-lg font-medium">
                    Our pilot mentorship team will call you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="mt-10 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center gap-2">
                          <User size={10} /> First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full bg-white border-0 p-4 text-sm font-bold rounded-xl focus:ring-2 focus:ring-accent transition-all shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center gap-2">
                          <User size={10} /> Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full bg-white border-0 p-4 text-sm font-bold rounded-xl focus:ring-2 focus:ring-accent transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center gap-2">
                        <Mail size={10} /> Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-0 p-4 text-sm font-bold rounded-xl focus:ring-2 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center gap-2">
                        <Phone size={10} /> +91 Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border-0 p-4 text-sm font-bold rounded-xl focus:ring-2 focus:ring-accent transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 flex items-center gap-2">
                        <BookOpen size={10} /> Select Your Interest
                      </label>
                      <div className="relative">
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-white border-0 p-4 text-sm font-bold rounded-xl focus:ring-2 focus:ring-accent transition-all shadow-sm appearance-none"
                        >
                          <option value="">Choose an option...</option>
                          <option value="Commercial Pilot License (CPL)">Commercial Pilot License (CPL)</option>
                          <option value="DGCA Licence Conversion">DGCA Licence Conversion</option>
                          <option value="Cadet Pilot Program">Cadet Pilot Program</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-white py-4 rounded-xl text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary transition-all duration-300 shadow-lg shadow-accent/30 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send My Enquiry"} <Send size={15} />
                    </motion.button>

                    <p className="text-center text-xs text-gray-400 mt-2 font-medium">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CareerFormSection;