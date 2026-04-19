import { motion } from 'framer-motion';

const CoupleSection = () => {
  return (
    <section className="py-24 px-4 bg-dark relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-dark-card to-dark z-0"></div>
      
      <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        
        {/* Groom */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full border-4 border-gold p-2 bg-dark-card shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-6 overflow-hidden">
            <div className="w-full h-full bg-cream/10 rounded-t-full flex items-end justify-center pb-4">
              <span className="text-8xl text-goldglow opacity-50">🤵</span>
            </div>
          </div>
          <h3 className="text-3xl text-goldglow font-serif mb-2 text-glow">Sai Tanuj</h3>
          <div className="text-cream/80 max-w-xs font-sans font-light text-sm mt-2">
            <p className="italic text-gold/70 mb-1">Son of</p>
            <p>Late Tirumalasetty Mukthi Vigneshwara Rao</p>
            <p>&</p>
            <p>Smt. Lalitha Shiva Jyothi</p>
          </div>
        </motion.div>

        {/* Center element */}
        <motion.div
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="flex md:hidden lg:flex flex-col items-center"
        >
          <span className="text-5xl text-saffron font-serif italic my-4">&</span>
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden lg:block"></div>
        </motion.div>

        {/* Bride */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full border-4 border-gold p-2 bg-dark-card shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-6 overflow-hidden">
            <div className="w-full h-full bg-cream/10 rounded-t-full flex items-end justify-center pb-4">
              <span className="text-8xl text-goldglow opacity-50">👰</span>
            </div>
          </div>
          <h3 className="text-3xl text-goldglow font-serif mb-2 text-glow">Vasanthee Devi</h3>
          <div className="text-cream/80 max-w-xs font-sans font-light text-sm mt-2">
            <p className="italic text-gold/70 mb-1">Daughter of</p>
            <p>Sri Peramsetty Nagasesha Prasad</p>
            <p>&</p>
            <p>Smt. Seethadevi</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoupleSection;
