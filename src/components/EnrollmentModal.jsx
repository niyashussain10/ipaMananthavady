import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, GraduationCap } from 'lucide-react';

const EnrollmentModal = ({ isOpen, onClose, selectedCourse, courses }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse || '',
    education: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setFormData(prev => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const messageText = `*New Course Enrollment - IPA Kerala*
----------------------------------
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🎓 *Course:* ${formData.course}
🎓 *Education:* ${formData.education}
💻 *Source:* Enrollment Modal`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/919400382776?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      // Submit to Google Sheets for backend logging
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGGJFr9kFVDeBH-RqXpelU25h1mvMREW4hqBdBh2JNp5w9B2vbmL1L3vICILIFBs2G/exec';
      fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify({
          ...formData, 
          subject: formData.course,
          message: "Education: " + formData.education,
          source: 'Enrollment Modal'
        }) 
      }).catch(err => console.error("Sheets log failed:", err));
      
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', course: '', education: '' });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative bg-white w-full max-w-xl rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100"
          >
            {/* Header */}
            <div className="bg-navy p-10 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
              
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-white/30 hover:text-gold transition-colors z-20"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-gold w-8 h-8" />
              </div>

              <h2 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">
                Join <span className="text-gold">IPA</span> Kerala
              </h2>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                Advance Your Professional Career
              </p>
            </div>

            {/* Content */}
            <div className="p-10 md:p-12">
              {showSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-100">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-navy mb-3 uppercase tracking-tighter">Application Sent!</h3>
                  <p className="text-slate-500 font-medium">Our admissions team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-gold p-5 text-sm font-bold rounded-2xl transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Mobile Number</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-gold p-5 text-sm font-bold rounded-2xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Select Course</label>
                    <select 
                      required
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-gold p-5 text-sm font-bold rounded-2xl transition-all appearance-none"
                    >
                      <option value="">Select a program</option>
                      {courses.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Educational Qualification</label>
                    <input 
                      required
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      type="text" 
                      placeholder="e.g. B.Com, M.Com, Plus Two"
                      className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-gold p-5 text-sm font-bold rounded-2xl transition-all"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-navy text-white py-6 text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-gold hover:text-navy transition-all duration-500 shadow-xl shadow-navy/10 disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Secure Admission"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
