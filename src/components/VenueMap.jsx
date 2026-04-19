import { motion } from 'framer-motion';

const VenueMap = () => {
  return (
    <section className="py-20 px-4 bg-dark-card/50 relative border-y border-gold/20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gold mb-12 font-serif uppercase tracking-widest text-glow"
        >
          Getting There
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-96 rounded-xl overflow-hidden border-2 border-gold/50 relative group shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          <iframe 
             src="https://maps.google.com/maps?q=Shree%20Convention%20Best%20Function%20Hall%20Guntur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(0.6) sepia(0.8) hue-rotate(-30deg)' }} 
             allowFullScreen="" 
             loading="lazy">
          </iframe>
          <div className="absolute inset-0 bg-dark/20 pointer-events-none group-hover:bg-transparent transition duration-500"></div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="mt-8"
        >
          <a href="https://maps.app.goo.gl/cxgNCVReHU7sEoJQ7" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FF9933] text-dark font-bold tracking-widest uppercase rounded-full hover:shadow-[0_0_15px_rgba(255,223,0,0.6)] transition duration-300">
            Open in Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueMap;
