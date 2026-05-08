import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';

const IconInstagram = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconTwitter = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconFacebook = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
  </svg>
);

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    detail: "+91 9187250470",
    sub: "Mon - Sat, 9:00 AM - 6:00 PM",
    link: "tel:+919187250470",
    color: "bg-blue-500"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "WhatsApp",
    detail: "Chat with Admissions",
    sub: "Instant response during office hours",
    link: "https://wa.me/919187250470",
    color: "bg-green-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "info@saraaviation.in",
    sub: "Official Support",
    link: "mailto:info@saraaviation.in",
    color: "bg-accent"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions',
    message: ''
  });

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
        body: JSON.stringify({...formData, source: 'Contact Form'}) 
      });

      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Admissions', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white">
      {/* Hero Header */}
      <div className="bg-primary pt-60 md:pt-70 pb-24 md:pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="text-accent text-sm font-black uppercase tracking-[0.3em]">Contact Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
          >
            Get In <span className="text-accent italic">Touch</span>
          </motion.h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
            Have questions about our pilot training or hospitality courses? We're here to help you navigate your future.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 ${info.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">{info.title}</h3>
              <p className="text-primary text-lg font-black mb-1">{info.detail}</p>
              <p className="text-gray-500 text-xs">{info.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-24 relative z-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-gray-100 min-h-[600px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-black text-primary mb-4 uppercase tracking-tighter">Thank you!</h2>
                  <p className="text-gray-500 text-lg font-medium">
                    Our admissions team will call you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="mt-10 text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-10">
                    <h2 className="text-4xl font-black text-primary mb-4 uppercase tracking-tighter">Send an Inquiry</h2>
                    <div className="w-20 h-1.5 bg-accent rounded-full" />
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="RASH RAVEENDRAN"
                          className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-accent transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="cartnetecom@gmail.com"
                          className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-accent transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+917306763990"
                          className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-accent transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Inquiry Type</label>
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-accent transition-all text-gray-700"
                        >
                          <option>Admissions</option>
                          <option>Pilot Training</option>
                          <option>Cabin Crew</option>
                          <option>Hospitality</option>
                          <option>Career Opportunities</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                      <textarea 
                        rows="4" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your career goals..."
                        className="w-full bg-gray-50 border-0 rounded-2xl p-5 text-sm font-bold focus:ring-2 focus:ring-accent transition-all placeholder:text-gray-300 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-accent hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 flex items-center justify-center gap-3 group disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Map & Social Side */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-black text-primary mb-4 flex items-center gap-3">
                  <MapPin className="text-accent" /> Our Headquarters
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Sara Institute of Aviation & Hospitality<br />
                  #6/4, 2nd Floor, Above Tata Motors Showroom,<br />
                  Singanayakanahalli, Yelahanka, Bangalore,<br />
                  Karnataka, 560119 - India
                </p>
              </div>

              <div className="aspect-square w-full rounded-[3rem] overflow-hidden border-8 border-gray-50 shadow-inner group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.2991708409776!2d77.56881326955371!3d13.149990305137322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1fd97919ee1b%3A0x3c0c461be3a09a36!2sTata%20Motors%20Cars%20Showroom%20-%20Cauvery%20Motors%20Private%20Limited%2C%20Singanayakanahalli!5e0!3m2!1sen!2sin!4v1778241158967!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sara Aviation Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                ></iframe>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">Stay Connected</p>
                <div className="flex gap-4">
                  {[
                    { Icon: IconInstagram, href: 'https://www.instagram.com/sara_aviation_/?next=%2Fsara_group_sara_tuitions%2F' },
                    { Icon: IconFacebook, href: 'https://www.facebook.com/profile.php?id=61574363164488#' },
                    { Icon: IconTwitter, href: '#' },
                    { Icon: IconLinkedin, href: '#' }
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-gray-50 text-primary flex items-center justify-center hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300">
                      <social.Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Action (Mobile Only) */}
      <a
        href="https://wa.me/919187250470" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageSquare size={28} />
      </a>
    </section>
  );
};

export default Contact;
