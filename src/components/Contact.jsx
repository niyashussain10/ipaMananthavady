import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, Navigation, Clock } from 'lucide-react';

const branches = [
  {
    name: "MANANTHAVADY",
    address: "IPA, Near Muncipal Bustand, Calicut Road, Mananthavady",
    phone: "9400382776",
    manager: "Mananthavady"
  },
  {
    name: "TIRUR",
    address: "Alungal Complex, Tirur-676101, Malappuram District",
    phone: "9995424363",
    manager: "ATC"
  },
  {
    name: "PERINTHALMANNA",
    address: "3rd Floor, Royal Plaza Opp.K.S.R.T.C. Bus Stand, Perinthalmanna",
    phone: "8078811792",
    manager: "ATC"
  },
  {
    name: "EDAPPAL",
    address: "2nd Floor, Rajadhani Complex, Kuttippuram Road, Edappal",
    phone: "9847016478",
    manager: "ATC"
  },
  {
    name: "KALPETTA",
    address: "1st Floor, Anappara Building, Near LEO Hospital, Opp. KSEB, Kalpetta",
    phone: "9446984090",
    manager: "ATC"
  },
  {
    name: "THAMARASSERY",
    address: "1st Floor, Maz Tower Chungam, Thamarassery",
    phone: "8281730358",
    manager: "ATC"
  },
  {
    name: "KOYILANDY",
    address: "2nd Floor, City Tower Above Supplyco, Koyilandy",
    phone: "9656294445",
    manager: "ATC"
  },
  {
    name: "PATTAMBI",
    address: "2nd Floor, Highway Mall Perintalmanna Road, Pattambi",
    phone: "9745139074",
    manager: "ATC"
  },
  {
    name: "SULTHAN BATHERY",
    address: "2nd Floor, Nicole Trade Centre, Police Station Road, Near Mint Mall, Sulthan Bathery",
    phone: "9037005999",
    manager: "ATC"
  }
];

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "🟢 Call / WhatsApp",
    detail: "+91 9400382776",
    sub: "Mananthavady",
    link: "https://wa.me/919400382776",
    color: "bg-navy"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    detail: "9.00 AM - 6.00 PM",
    sub: "Monday to Saturday",
    link: "#",
    color: "bg-gold"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    detail: "info@ipakerala.com",
    sub: "Official Support",
    link: "mailto:info@ipakerala.com",
    color: "bg-navy"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'IPA Course',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `*New Admission Inquiry - IPA Kerala*
----------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📚 *Course:* ${formData.subject}
✉️ *Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919400382776?text=${encodedMessage}`;

    // Direct submission to WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: 'ACPA (Advanced Certified Professional Accountant)', message: '' });
  };

  return (
    <section className="bg-white">
      {/* Hero Header */}
      <div className="bg-navy pt-60 pb-24 md:pb-32 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="text-gold text-sm font-black uppercase tracking-[0.3em]">IPA Mananthavady Network</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none"
          >
            Get In <span className="text-gold italic underline decoration-white/10 underline-offset-[16px]">Touch</span>
          </motion.h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            With 20+ years of excellence and  a wide network of branches, we are always close to help you build your career.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container mx-auto px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className={`w-16 h-16 ${info.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">{info.title}</h3>
              <p className="text-navy text-xl font-black mb-1">{info.detail}</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">{info.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-8 py-32 relative z-20">
        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tighter">Message Sent!</h2>
                  <p className="text-slate-500 text-lg">Our admissions team will contact you shortly.</p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-10 text-navy font-black border-b-2 border-gold hover:border-navy transition-all pb-1 uppercase text-xs tracking-widest"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mb-12">
                    <h2 className="text-4xl font-black text-navy mb-4 uppercase tracking-tighter">Inquiry Form</h2>
                    <div className="w-20 h-1.5 bg-gold rounded-full" />
                  </div>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: John Doe"
                          className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-gold transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Mobile Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-gold transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Select Course</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-gold transition-all text-slate-700"
                      >
                        <option>ACPA (Advanced Certified Professional Accountant)</option>
                        <option>CPIFA (Certified Practical International Financial Accountant)</option>
                        <option>PGDIFA (Post Graduate Diploma in International Financial Accounting)</option>
                        <option>PGDCAM (Post Graduate Diploma in Computerized Accounting & Management)</option>
                        <option>SAP Training</option>
                        <option>Tally Prime & Zoho Books</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-slate-50 border-0 rounded-2xl p-6 text-sm font-bold focus:ring-2 focus:ring-gold transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-navy transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl"
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Branches Side */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-black text-navy mb-12 flex items-center gap-4 uppercase tracking-tighter">
                  <Navigation className="text-gold" /> Our Chapters
                </h3>
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gold/20">
                  {branches.map((branch, idx) => (
                    <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-navy transition-all duration-500 border border-slate-100 hover:border-navy">
                      <h4 className="text-gold text-xs font-black tracking-widest uppercase mb-4 group-hover:text-gold">{branch.name}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-white/60 font-medium">{branch.address}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-navy font-black text-sm group-hover:text-white transition-colors tracking-tight">📞 PH: +91 {branch.phone}</span>
                        <div className="w-8 h-8 bg-white/10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <MapPin size={16} className="text-gold" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Map Section */}
      <div className="border-t border-slate-100 bg-slate-50 py-24 px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <span className="text-gold text-sm font-black uppercase tracking-[0.3em] block mb-2">Visit Our Branch</span>
              <h2 className="text-4xl font-black text-navy uppercase tracking-tighter">Mananthavady Office Map</h2>
              <div className="w-20 h-1.5 bg-gold rounded-full mt-4 mx-auto md:mx-0" />
            </div>
            
            <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 relative bg-white p-3">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7811.151829168344!2d76.00176275522055!3d11.794881433253764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5df0072fb7dcf%3A0x7d68406aa12668b1!2sDXD%20FITNESS!5e0!3m2!1sen!2sin!4v1779542893487!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for IPA Mananthavady"
                className="rounded-[2rem]"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
