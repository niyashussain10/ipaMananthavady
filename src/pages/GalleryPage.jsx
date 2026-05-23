import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, title: "Tally Prime Training Workshop", url: "/gallery_lab.png" },
  { id: 2, title: "SAP S/4 HANA Advanced Lab", url: "/gallery_classroom.png" },
  { id: 3, title: "Executive Certification Ceremony", url: "/gallery_ceremony.png" },
  { id: 4, title: "Wayanad Campus Career Seminar", url: "/gallery_seminar.png" },
  { id: 5, title: "Student Group Discussion", url: "/gallery_group.png" },
  { id: 6, title: "Practical Business Ledger Lab", url: "/gallery_lab.png" },
  { id: 7, title: "SAP ERP Enterprise Systems Course", url: "/gallery_classroom.png" },
  { id: 8, title: "Annual Diploma Distribution", url: "/gallery_ceremony.png" },
  { id: 9, title: "Chartered Accountant Guest Lecture", url: "/gallery_seminar.png" },
  { id: 10, title: "Certified Professional Batch", url: "/gallery_group.png" },
  { id: 11, title: "Cloud QuickBooks Live Setup", url: "/gallery_lab.png" },
  { id: 12, title: "Corporate Financial Analysis Session", url: "/gallery_classroom.png" },
  { id: 13, title: "Academic Excellence Awards", url: "/gallery_ceremony.png" },
  { id: 14, title: "Finance Auditing Workshop", url: "/gallery_seminar.png" },
  { id: 15, title: "Post Graduate Finance Scholars", url: "/gallery_group.png" },
  { id: 16, title: "Zoho Books Cloud Billing Demo", url: "/gallery_lab.png" },
  { id: 17, title: "Gulf VAT Filing Simulation", url: "/gallery_classroom.png" },
  { id: 18, title: "Successful Placement Graduates", url: "/gallery_ceremony.png" },
  { id: 19, title: "Tax Compliance Guest Seminar", url: "/gallery_seminar.png" },
  { id: 20, title: "IPA Mananthavady Alumni Group", url: "/gallery_group.png" }
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-16 bg-navy text-white text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4"
          >
            IPA <span className="text-gold">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl font-light"
          >
            Visual highlights of our professional training, campus activities, and student achievements.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 container mx-auto px-8">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {galleryImages.map((img, index) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                className="relative break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
                onClick={() => openLightbox(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Section */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-navy/95 backdrop-blur-sm" 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button 
                onClick={closeLightbox}
                className="absolute -top-16 right-0 text-white hover:text-gold transition-colors p-4"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-white p-4 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col items-center">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                />
                <div className="w-full pt-6 px-4 text-center">
                  <h2 className="text-navy text-xl font-black uppercase tracking-tight">
                    {selectedImage.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="py-32 bg-white text-center px-8 border-t border-slate-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-black text-navy uppercase tracking-tighter italic">Join The Next Batch</h2>
          <p className="text-slate-500 font-light text-lg">
            Experience world-class accounting training in our modern campuses. Your professional journey starts here.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-navy text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-navy transition-all shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
