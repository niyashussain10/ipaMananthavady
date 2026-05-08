import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { newsArticles } from "../data/newsData";

const placeholderImg = "https://i.pinimg.com/1200x/c8/d9/c8/c8d9c805c637845b37f69ad1291df5a2.jpg";


const categories = ["All", "Industry", "Academy", "Careers"];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredNews = activeCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="pt-48 pb-20 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Stay informed with the latest insights, academy highlights, and career opportunities in the dynamic world of aviation.
          </motion.p>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-10  container mx-auto px-1 max-w-7xl">
        {/* Category Filters */}
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:justify-center justify-start gap-2 md:gap-5 mb-8 pb-1 scrollbar-hide px-2 md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-accent text-white shadow-lg shadow-accent/30" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-gray-400 text-xs font-medium mb-3 tracking-wide">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button 
                      onClick={() => setSelectedArticle(item)}
                      className="text-primary font-bold text-sm inline-flex items-center gap-2 group/btn hover:text-accent transition-colors"
                    >
                      Read Story
                      <svg 
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal Section */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-primary/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur shadow-md p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="overflow-y-auto">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 sm:p-10">
                  <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                    {selectedArticle.category}
                  </span>
                  <p className="text-gray-400 text-xs font-medium mb-2 tracking-wide">
                    {selectedArticle.date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>{selectedArticle.excerpt}</p>
                    <p>
                      More details and the full story will be available soon. Sara Aviation Academy is committed to keeping you updated with the latest in aviation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter / CTA Section */}
      {/* <section className="py-24 bg-gray-50 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-primary">Get the Latest Updates</h2>
          <p className="text-gray-600">
            Subscribe to our newsletter to receive the latest aviation industry news and Sara Aviation Academy announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default NewsPage;
