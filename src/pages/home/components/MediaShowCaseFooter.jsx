import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const media = [
  { title: "Tally Workshop", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
  { title: "SAP Training Lab", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
  { title: "Student Certification", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" },
  { title: "Corporate Seminar", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
  { title: "Campus Interaction", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
  { title: "Graduation Ceremony", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" },
];

export function MediaShowcaseFooter() {
  return (
    <footer className="w-full bg-navy text-white py-24 overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-4 block">Our Moments</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Media <span className="text-gold">Showcase</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="px-8 md:px-0 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={32}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1280: { slidesPerView: 4.5 }
          }}
          className="showcase-swiper !pb-20 !px-8 md:!px-16"
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group cursor-pointer transition-all duration-500 border border-white/10 hover:border-gold/30 shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent p-8 flex flex-col justify-end">
                  <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">IPA KERALA</p>
                  <h3 className="text-xl font-black text-white leading-tight group-hover:text-gold transition-colors duration-300 uppercase tracking-tighter">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .showcase-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.2;
        }
        .showcase-swiper .swiper-pagination-bullet-active {
          background: #C5A059;
          opacity: 1;
          width: 32px;
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}} />
    </footer>
  );
}


