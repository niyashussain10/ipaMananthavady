import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AirlinePartners from "./home/components/AirlinePartners";

const placeholderImg = "https://i.pinimg.com/736x/5d/c5/ff/5dc5ffbad0d623c3196bf4b55291992d.jpg";

const students = [
  { id: 1, name: "Aarav Mehtha", airline: "Air India", img: "/assets/Sarah Aviation Placements/Aarav Mehtha.png" },
  { id: 2, name: "Aazan Khan", airline: "IndiGo", img: "/assets/Sarah Aviation Placements/Aazan Khan.png" },
  { id: 3, name: "Adithya", airline: "SpiceJet", img: "/assets/Sarah Aviation Placements/Adithya.png" },
  { id: 4, name: "Aditi", airline: "Vistara", img: "/assets/Sarah Aviation Placements/Aditi.png" },
  { id: 5, name: "Ananya", airline: "Air India Express", img: "/assets/Sarah Aviation Placements/Ananya.png" },
  { id: 6, name: "Anjali", airline: "Akasa Air", img: "/assets/Sarah Aviation Placements/Anjali.png" },
  { id: 7, name: "Evangeline", airline: "Qatar Airways", img: "/assets/Sarah Aviation Placements/Evangeline.png" },
  { id: 8, name: "Farhan Ahmed", airline: "Emirates", img: "/assets/Sarah Aviation Placements/Farhan Ahmed.png" },
  { id: 9, name: "Gloria", airline: "Etihad Airways", img: "/assets/Sarah Aviation Placements/Gloria.png" },
  { id: 10, name: "Karthik", airline: "AirAsia India", img: "/assets/Sarah Aviation Placements/Karthik.png" },
  { id: 11, name: "Manjunath", airline: "GMR Group", img: "/assets/Sarah Aviation Placements/Manjunath.png" },
  { id: 12, name: "Meera", airline: "IndiGo", img: "/assets/Sarah Aviation Placements/Meera.png" },
  { id: 13, name: "Mehek", airline: "Vistara", img: "/assets/Sarah Aviation Placements/Mehek.png" },
  { id: 14, name: "Neha Kapoor", airline: "Air India", img: "/assets/Sarah Aviation Placements/Neha Kapoor.png" },
  { id: 15, name: "Nisha", airline: "Akasa Air", img: "/assets/Sarah Aviation Placements/Nisha.png" },
  { id: 16, name: "Pooja", airline: "IndiGo", img: "/assets/Sarah Aviation Placements/Pooja.png" },
  { id: 17, name: "Ritu", airline: "Vistara", img: "/assets/Sarah Aviation Placements/Ritu.png" },
  { id: 18, name: "Rohit", airline: "SpiceJet", img: "/assets/Sarah Aviation Placements/Rohit.png" },
  { id: 19, name: "Rohit Kumar", airline: "Air India", img: "/assets/Sarah Aviation Placements/Rohit (2).png" },
  { id: 20, name: "Sachin", airline: "IndiGo", img: "/assets/Sarah Aviation Placements/Sachin.png" },
  { id: 21, name: "Sandeep", airline: "Vistara", img: "/assets/Sarah Aviation Placements/Sandeep.png" },
  { id: 22, name: "Shreya", airline: "Qatar Airways", img: "/assets/Sarah Aviation Placements/Shreya.png" },
  { id: 23, name: "Simran", airline: "Emirates", img: "/assets/Sarah Aviation Placements/Simran.png" },
  { id: 24, name: "Vikram", airline: "Air India", img: "/assets/Sarah Aviation Placements/Vikram.png" },
];

const PlacementPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-20 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Placement Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl"
          >
            Empowering dreams, one flight at a time. Meet our alumni flying high with leading global airlines.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 container mx-auto px-6 max-w-8xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {students.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden relative bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info Container */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-accent transition-colors">
                  {student.name}
                </h3>
                {/*hide airline name in students card if needed*/}
                <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider mt-1">
                  {student.airline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / Call to Action */}
      <section className="py-20 bg-white text-center px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              You Could Be Next!
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Start your journey with Sara Aviation Academy today and join the elite league of aviation professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition shadow-xl shadow-accent/30"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </section>
      <AirlinePartners title="Our Placement partners" />
    </div>
  );
};

export default PlacementPage;
