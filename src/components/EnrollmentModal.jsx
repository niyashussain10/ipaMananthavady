import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

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
    
    // LOG DATA FOR TESTING
    console.log("Enrollment Form Data:", formData);

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGGJFr9kFVDeBH-RqXpelU25h1mvMREW4hqBdBh2JNp5w9B2vbmL1L3vICILIFBs2G/exec';
      await fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify({
          ...formData, 
          subject: formData.course, // Map Course to Subject column
          message: "Education: " + formData.education, // Map Education to Message column
          source: 'Enrollment Modal'
        }) 
      });
      
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', course: '', education: '' });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary p-8 text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-white text-2xl font-black uppercase tracking-tight mb-2">
                Course Enrollment
              </h2>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Start your journey with Sara Aviation
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {showSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="mx-auto text-green-500 mb-6" size={80} />
                  <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
                  <p className="text-gray-500 font-medium">Our admissions team will call you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#121b2f]">Your Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-accent p-4 text-sm font-medium rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#121b2f]">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-accent p-4 text-sm font-medium rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#121b2f]">Phone Number</label>
                      <input 
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-accent p-4 text-sm font-medium rounded-xl transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#121b2f]">Preferred Course</label>
                      <select 
                        required
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-accent p-4 text-sm font-medium rounded-xl transition-all appearance-none"
                      >
                        <option value="">Select a course</option>
                        {courses.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#121b2f]">Last Education Level</label>
                    <input 
                      required
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      type="text" 
                      placeholder="e.g. 12th Pass, Graduate"
                      className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-accent p-4 text-sm font-medium rounded-xl transition-all"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-accent text-white py-5 text-sm font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#121b2f] transition-all duration-300 shadow-lg shadow-accent/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Enrollment"}
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
