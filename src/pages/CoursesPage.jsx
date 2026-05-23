import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { CheckCircle, Info, Star, ChevronRight, BookOpen, Laptop, Globe, Cpu, Calculator, FileText, PieChart } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';

const coursesData = [
  {
    id: 1,
    title: "ACPA - Advanced Certified Professional Accountant",
    image: "/course_acpa.png",
    description: "Advanced accounting foundation in bookkeeping, GST, and Tally Prime with Microsoft Excel projects integration.",
    curriculum: [
      "Professional Accounting & Bookkeeping",
      "GST Concepts & Online Filing",
      "Project Accounting in Tally Prime",
      "Microsoft Excel Accounting Project"
    ],
    certificates: [
      "Digital Course Certificate",
      "Tally Prime Authorized Certificate",
      "MS Excel Project Certificate",
      "GST Proficiency Certificate"
    ],
    softwareLogos: ["tally", "excel", "gst"],
    skills: ["Bookkeeping", "GST Filing", "Tally Prime", "MS Excel"],
    isPremium: false
  },
  {
    id: 2,
    title: "CPIFA - Certified Professional in Indian & Foreign Accounting",
    image: "/course_cpifa.png",
    description: "Comprehensive training covering Indian tax compliance and standard foreign accounting platforms like QuickBooks and Zoho Books.",
    curriculum: [
      "Professional Accounting & Bookkeeping",
      "GST Concepts & Online Filing",
      "Project Accounting in Tally Prime",
      "Microsoft Excel Accounting Project",
      "QuickBooks Accounting",
      "Zoho Books Accounting",
      "Special Gulf VAT Accounting Projects"
    ],
    certificates: [
      "Digital Course Certificate",
      "Tally Prime Authorized Certificate",
      "MS Excel Project Certificate",
      "GST Proficiency Certificate",
      "Gulf VAT Proficiency Certificate",
      "QuickBooks Project Certificate",
      "Zoho Books Accounting Authorized Certificate",
      "Gulf VAT Concepts & Online Filing"
    ],
    softwareLogos: ["tally", "excel", "gst", "quickbooks", "zoho", "vat"],
    skills: ["GST & Gulf VAT", "QuickBooks", "Zoho Books", "Tally Prime"],
    isPremium: true
  },
  {
    id: 3,
    title: "PGDIFA - Post Graduate Diploma in Indian & Foreign Accounting",
    image: "/course_pgdifa.png",
    description: "Advanced postgraduate level training covering Indian and foreign corporate auditing, global GST/VAT setups, and SAP Business One.",
    curriculum: [
      "Professional Accounting & Bookkeeping",
      "GST Concepts & Online Filing",
      "Project Accounting in Tally Prime",
      "Microsoft Excel Accounting Project",
      "QuickBooks Accounting",
      "Zoho Books Accounting",
      "SAP Business One",
      "Gulf VAT Concepts & Online Filing",
      "Gulf Accounting Special Projects"
    ],
    certificates: [
      "Digital Course Certificate",
      "Tally Prime Authorized Certificate",
      "MS Excel Project Certificate",
      "GST Proficiency Certificate",
      "Gulf VAT Proficiency Certificate",
      "QuickBooks Project Certificate",
      "Zoho Books Accounting Authorized Certificate",
      "SAP Business One Project Certificate"
    ],
    softwareLogos: ["tally", "excel", "gst", "quickbooks", "zoho", "vat", "sap"],
    skills: ["SAP Business One", "Indian & Gulf Tax", "QuickBooks & Zoho", "Tally Prime"],
    isPremium: true
  },
  {
    id: 4,
    title: "PGDCAM - Post Graduate Diploma in Corporate Accounting & Management",
    image: "/course_pgdcam.png",
    description: "The ultimate master-level program covering the entire corporate landscape from Tally, QuickBooks, Zoho, Busy, to enterprise ERPs like SAP Business One and SAP S/4HANA.",
    curriculum: [
      "Professional Accounting & Bookkeeping",
      "GST Concepts & Online Filing",
      "Project Accounting in Tally Prime",
      "Microsoft Excel Accounting Project",
      "QuickBooks Accounting",
      "Busy Business Accounting",
      "SAP Business One",
      "Gulf VAT Concepts & Online Filing",
      "Gulf Accounting Special Projects",
      "Zoho Books Accounting",
      "SAP S/4HANA"
    ],
    certificates: [
      "Digital Course Certificate",
      "Tally Prime Authorized Certificate",
      "MS Excel Project Certificate",
      "GST Proficiency Certificate",
      "Gulf VAT Proficiency Certificate",
      "QuickBooks Project Certificate",
      "Busy Business Accounting Authorized Certificate",
      "SAP Business One Project Certificate",
      "Zoho Books Accounting Authorized Certificate",
      "SAP S/4HANA Authorized Certificate"
    ],
    softwareLogos: ["tally", "excel", "gst", "quickbooks", "zoho", "vat", "sap", "saps4", "busy"],
    skills: ["SAP S/4HANA", "SAP Business One", "Zoho & QuickBooks", "Tally & Busy"],
    isPremium: true,
    isFeatured: true
  }
];

const specialTraining = [
  { icon: <Cpu />, name: "SAP S/4HANA & SAP Business One" },
  { icon: <Globe />, name: "Zoho Books & QuickBooks" },
  { icon: <Calculator />, name: "GST & Gulf VAT Compliance" },
  { icon: <FileText />, name: "Busy Business Accounting" }
];

const CoursesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const courseIdParam = params.get('id');
    if (courseIdParam) {
      const courseId = parseInt(courseIdParam);
      // Smooth scroll to the target course card
      setTimeout(() => {
        const element = document.getElementById(`course-card-${courseId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [location]);

  const handleEnroll = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setModalOpen(true);
  };

  const toggleSyllabus = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-4 block">IPA MANANTHAVADY</span>
            <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Our Professional <span className="text-gold italic">Courses</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
              Equipping you with practical skills and hands-on experience to become a world-class professional accountant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <div className="container mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              id={`course-card-${course.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border ${course.isFeatured ? 'border-gold ring-1 ring-gold/20' : 'border-slate-100'} flex flex-col group scroll-mt-28`}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {course.isPremium && (
                  <div className="absolute top-6 left-6 bg-gold text-navy text-[10px] font-black px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg">
                    Advanced
                  </div>
                )}
                {course.isFeatured && (
                  <div className="absolute top-6 right-6 bg-navy text-gold text-[10px] font-black px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg border border-gold/30">
                    Most Popular
                  </div>
                )}
              </div>

              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-navy uppercase leading-tight mb-4 group-hover:text-gold transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{course.description}</p>
                
                <div className="space-y-6 mb-10 flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                    {/* Left: Course Details */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-4 border-b border-slate-100 pb-2">
                        📋 Course Details
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {course.curriculum.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-600 leading-tight">
                            <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right: Course Certificate */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-4 border-b border-slate-100 pb-2">
                        🎓 Course Certificates
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {course.certificates.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs font-bold text-slate-600 leading-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Software Logos Covered */}
                    <div className="col-span-1 lg:col-span-2 pt-6 border-t border-slate-100 mt-4">
                      <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Software & Tools Covered:
                      </h5>
                      <div className="flex flex-wrap items-center gap-4">
                        {course.softwareLogos.map((logo, lIdx) => (
                          <div key={lIdx} className="bg-white border border-slate-100 p-2 rounded-xl h-16 px-4 flex items-center justify-center shadow-sm">
                            {logo === "tally" && (
                              <img src="/tally_logo.png" alt="Tally Prime" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "zoho" && (
                              <img src="/zoho_logo.png" alt="Zoho Books" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "sap" && (
                              <img src="/sap_logo.png" alt="SAP B1" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "saps4" && (
                              <img src="/sap_logo.png" alt="SAP S/4HANA" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "quickbooks" && (
                              <img src="/quickbooks_logo.png" alt="QuickBooks" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "excel" && (
                              <img src="/excel_logo.png" alt="Excel" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "busy" && (
                              <img src="/busy_logo.png" alt="Busy" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "gst" && (
                              <img src="/gst_logo.png" alt="GST Portal" className="h-12 w-auto object-contain px-1" />
                            )}
                            {logo === "vat" && (
                              <img src="/gulf_vat_logo.png" alt="Gulf VAT" className="h-12 w-auto object-contain px-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleEnroll(course.title)}
                  className="w-full bg-navy text-white py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all shadow-xl group/btn flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practice Highlights */}
      <div className="container mx-auto px-8 pb-24">
        <section className="bg-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 transform origin-top-right" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
              DO Accounting <span className="text-gold italic">Practice</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Cash Book & Bank Book Writing",
                "GST Calculation & Filing",
                "TDS Computation & Returns",
                "EPF & ESI E-Filing",
                "Payroll Management",
                "Bank Reconciliation",
                "Adjusted Trial Balance",
                "Manufacturing & P&L Statements",
                "Income Tax Computation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-sm font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Training Grid */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h6 className="text-gold text-sm font-black uppercase tracking-[4px] mb-4">Certifications</h6>
            <h2 className="text-navy text-4xl font-black uppercase tracking-tight">Specialized Skillsets</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialTraining.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center flex flex-col items-center gap-6 group hover:border-gold transition-all duration-500"
              >
                <div className="w-20 h-20 bg-slate-50 text-gold rounded-2xl flex items-center justify-center group-hover:bg-navy transition-colors">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 className="text-navy font-black text-sm uppercase tracking-wide leading-relaxed">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCourse={selectedCourse}
        courses={coursesData}
      />
    </div>
  );
};

export default CoursesPage;
