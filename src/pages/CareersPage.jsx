import React from "react";
import { motion } from "framer-motion";
import { Plane, Briefcase, Users, GraduationCap, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const benefits = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Global Exposure",
    desc: "Work with international partners and build a career that spans across borders."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Mentorship",
    desc: "Collaborate with veteran pilots and industry leaders in a supportive environment."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Career Growth",
    desc: "Structured paths for professional advancement within the world of aviation."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Continuous Learning",
    desc: "Access to advanced training modules and the latest aviation technology."
  }
];

const jobOpenings = [
  {
    title: "Aviation & Hospitality Faculty",
    experience: "2–5 Years",
    location: "Yelhanka New Town, Bangalore",
    type: "Full-Time",
    responsibilities: [
      "Deliver training in aviation, cabin crew & hospitality modules",
      "Train students in grooming, communication & customer service",
      "Conduct practical sessions, mock interviews & assessments",
      "Guide students for placements and career readiness"
    ],
    skills: [
      "Excellent communication & presentation skills",
      "Knowledge of aviation/hospitality industry standards",
      "Confident, well-groomed personality",
      "Teaching or industry experience preferred"
    ]
  },
  {
    title: "Tele-caller",
    experience: "2–3 Years",
    location: "Yelhanka New Town, Bangalore",
    type: "Full-Time",
    responsibilities: [
      "Call & follow up on leads",
      "Explain courses & fix appointments",
      "Update lead details in Excel",
      "Achieve daily/monthly targets"
    ],
    skills: [
      "Strong communication & convincing skills",
      "Target-oriented",
      "Education sector experience preferred"
    ]
  }
];

const steps = [
  { id: "01", title: "Apply", desc: "Submit your updated CV and professional portfolio." },
  { id: "02", title: "Review", desc: "Our HR team evaluates your credentials and experience." },
  { id: "03", title: "Interview", desc: "Technical and cultural fit discussions with our leadership." }
];

const CareersPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-44 md:pt-60 pb-20 md:pb-32 bg-primary text-white relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block px-5 py-2 bg-accent/20 text-accent rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-accent/20">
              Join Our Crew
            </span>
            <h1 className="text-3xl md:text-7xl font-black mb-6 leading-tight md:leading-[1.1] tracking-tight">
              Build Your Future <br /> 
              <span className="text-accent underline md:underline decoration-white/10 underline-offset-[12px]">With Sara Aviation</span>
            </h1>
            <p className="text-sm md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed md:leading-loose">
              We are on a mission to redefine aviation training. Be part of a team that inspires excellence and shapes the next generation of airline professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-6 md:py-12 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                {React.cloneElement(benefit.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-6 md:py-12 bg-gray-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-8">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">Opportunities</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary">Current Openings</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
              >
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-1.5 bg-accent/10 text-accent text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                    <Clock size={12} /> {job.type}
                  </span>
                  <span className="px-4 py-1.5 bg-primary/5 text-primary/60 text-[10px] font-bold rounded-full uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={12} /> {job.location}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4">{job.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                  <Briefcase size={16} />
                  <span>Experience: <span className="text-primary font-bold">{job.experience}</span></span>
                </div>

                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                          <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Skills Required
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100 italic">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-50">
                  <a 
                    href="mailto:info@saraaviation.in"
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-accent/20 group"
                  >
                    Apply Now
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 md:py-12 container mx-auto px-6 max-w-7xl">
        <div className="bg-primary rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-right hidden md:block" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">Our Hiring <br />Journey</h2>
              <p className="text-white/60 mb-8 md:mb-10 max-w-md text-sm md:text-base">We believe in a transparent and thorough recruitment process to find the perfect flight path for your career.</p>
              
              <div className="space-y-6 md:space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 md:gap-6 items-start">
                    <span className="text-3xl md:text-4xl font-black text-accent/30 tracking-tighter">{step.id}</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-1">{step.title}</h4>
                      <p className="text-white/50 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border border-white/10 text-center mt-4 md:mt-0">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-accent/40">
                <Mail className="text-white w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4">Spontaneous Application?</h3>
              <p className="text-white/60 mb-6 md:mb-8 text-sm max-w-xs mx-auto leading-relaxed">Don't see your role? We're always looking for exceptional talent. Send us your CV directly.</p>
              <a 
                href="mailto:info@saraaviation.in"
                className="inline-block w-full bg-white text-primary py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-accent hover:text-white transition-all duration-300"
              >
                info@saraaviation.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="py-12 md:py-20 text-center border-t border-gray-50">
        <p className="text-gray-300 text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold">Elevate Your Career • Sara Aviation Academy</p>
      </div>
    </div>
  );
};

export default CareersPage;
