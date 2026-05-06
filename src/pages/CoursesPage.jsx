import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info, Star, ChevronRight } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';

import course01 from '../assets/CourseImage/DiplomainAviation,HospitalityandTravelManagement.png';
import coursePGDiploma from '../assets/CourseImage/PG Diploma Course in Aviation, Hospitality and Travel Management.png';
import courseFoundation from '../assets/CourseImage/Foundation in Travel & Tourism with Amadeus.png';
import coursePassenger from '../assets/CourseImage/Passenger Ground Services Course.png';
import courseCargo from '../assets/CourseImage/Cargo Introductory Course.png';
import courseAirport from '../assets/CourseImage/Airport Operations Fundamentals.png';
import course02 from '../assets/images/courses-02.jpg';
import course03 from '../assets/images/courses-03.jpg';
import course04 from '../assets/images/courses-04.jpg';
import course05 from '../assets/images/courses-05.jpg';
import nilaniImg from '../assets/images/nilani.png';
import puminImg from '../assets/images/pumin.png';

const coursesData = [
  {
    id: 1,
    title: "Diploma in Aviation, Hospitality and Travel Management",
    image: course01,
    duration: "12 Months, 5 days/week (Mon- Fri) 2 hours/Day",
    eligibility: ["12th Pass And Above", "Age: 17 - 25 Years"],
    accreditation: ["AASSC"]
  },
  {
    id: 2,
    title: "PG Diploma Course in Aviation, Hospitality and Travel Management",
    image: coursePGDiploma,
    duration: "6 Months, 5 days/week (Mon-Fri), 2 hours/Day",
    eligibility: ["Graduates / Final Year Graduate", "Age: 19-27 Years"],
    accreditation: ["Sara", "AASSC"]
  },
  {
    id: 3,
    title: "Foundation in Travel & Tourism with Amadeus",
    image: courseFoundation,
    duration: "8 Months, 5 days/week (Mon-Fri) 2 hours/Day",
    eligibility: ["12th Pass & Graduate", "Age: 18-27 Years"],
    accreditation: ["SARA"]
  },
  {
    id: 4,
    title: "Passenger Ground Services Course",
    image: coursePassenger,
    duration: "6 Months, 5 days/week (Mon-Fri) 2 hours/Day",
    eligibility: ["12th Pass or Above", "Age: 18 - 27 Years"],
    accreditation: ["SARA"]
   },

    {
    id: 5,
    title: "Cargo Introductory Course",
    image: courseCargo,
    duration: "6 Months, 5 days/week (Mon-Fri) 2 hours/Day",
    eligibility: ["12th Pass or Above", "Age: 18 - 27 Years"],
    accreditation: ["SARA"]
  },
  {
    id: 6,
    title: "Airport Operations Fundamentals",
    image: courseAirport,
    duration: "6 Months, 5 days/week (Mon-Fri) 2 hours/Day",
    eligibility: ["Graduate preferred", "Age: 18 - 27 Years"],
    accreditation: ["SARA"]
  }
 
];

const TripleArrow = () => (
    <span className="inline-flex ml-1">
        <span className="opacity-40">›</span>
        <span className="opacity-70">›</span>
        <span>›</span>
    </span>
);

const CoursesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setModalOpen(true);
  };

  const handleEnquire = () => {
    setSelectedCourse("");
    setModalOpen(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary pt-48 pb-24 text-center">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-6"
          >
            Don't Just Dream. <span className="text-accent italic">Fly High</span>
          </motion.h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-sm font-medium leading-relaxed">
            From ground handling to cabin crew, we provide the expert training you need to excel in the global travel industry.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnquire}
            className="bg-accent text-white px-10 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all duration-300 rounded-sm shadow-xl"
          >
            Enquire Now
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Course Grid (Left) */}
          <div className="lg:w-2/3 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {coursesData.map((course) => (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <span className="text-white text-[10px] font-black uppercase tracking-widest bg-accent px-3 py-1">View Details</span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-lg font-black uppercase text-primary leading-tight mb-4 group-hover:text-accent transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-6 text-gray-400">
                       <Star className="text-accent" size={12} fill="currentColor" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Aviation Excellence</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary/40 mb-2">Duration</h4>
                        <p className="text-sm font-bold text-gray-600">{course.duration}</p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-200">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-[#121b2f] mb-4">Eligibility Criteria</h4>
                        <ul className="space-y-2">
                          {course.eligibility.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-gray-500">
                              <CheckCircle size={14} className="text-accent shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                         <h4 className="text-[11px] font-black uppercase tracking-widest text-primary/40 mb-3">Govt Recognized Certificate</h4>
                         <div className="flex gap-4">
                            {course.accreditation.map(brand => (
                              <div key={brand} className="bg-white border border-gray-100 px-4 py-2 rounded-lg shadow-sm font-black text-[10px] text-primary/50 tracking-tighter">
                                 {brand === 'AASSC' ? '🏛️ AASSC' : brand}
                              </div>
                            ))}
                         </div>
                      </div>

                      <button 
                        onClick={() => handleEnroll(course.title)}
                        className="w-full bg-accent text-white py-4 rounded-xl text-sm font-black uppercase tracking-[0.15em] hover:bg-primary transition-all shadow-lg shadow-accent/20"
                      >
                        Enroll Now!
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3 space-y-12 lg:sticky lg:top-10 h-fit">
            
            {/* Recommendation Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary p-10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-white text-2xl font-black leading-tight uppercase">Can I suggest a course for you?</h3>
                <p className="text-white/60 text-sm leading-relaxed">Answer a few quick questions and we'll recommend the perfect course based on your interests.</p>
                <button 
                  onClick={handleEnquire}
                  className="bg-accent text-white px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:text-accent transition-all shadow-xl shadow-black/20"
                >
                  Get Course Recommendation
                </button>
              </div>
            </motion.div>

            {/* Recent Placements */}
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-primary tracking-tight px-2 border-l-4 border-accent">Recent Placements</h3>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Neha Kapoor", role: "Air India", img: "/assets/Sarah Aviation Placements/Neha Kapoor.png" },
                  { name: "Aarav Mehtha", role: "Ground Services", img: "/assets/Sarah Aviation Placements/Aarav Mehtha.png" },
                  { name: "Aditi", role: "Vistara", img: "/assets/Sarah Aviation Placements/Aditi.png" },
                  { name: "Ananya", role: "Air India Express", img: "/assets/Sarah Aviation Placements/Ananya.png" },
                ].map((person, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100 group hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                  >
                    {/* Square avatar */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <img 
                        src={person.img} 
                        alt={person.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black uppercase text-primary truncate group-hover:text-accent transition-colors">{person.name}</h4>
                      <span className="text-[11px] font-bold text-accent uppercase tracking-widest">✈ {person.role}</span>
                    </div>
                    {/* Badge */}
                    <div className="flex-shrink-0">
                      <span className="text-[9px] font-black bg-accent/10 text-accent px-2 py-1 rounded-full uppercase tracking-wider">Placed</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
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
