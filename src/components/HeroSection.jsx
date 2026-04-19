import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="/mandap_bg.png" alt="Mandap Background" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="z-20 text-center px-4 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full"
        >
          <h2 className="text-lg md:text-2xl text-gold mb-6 tracking-[0.3em] uppercase font-sans font-light">With the grace of God</h2>
          
          <div className="flex flex-col items-center justify-center gap-4 my-8">
            <h1 className="text-6xl md:text-8xl font-bold text-goldglow text-glow font-serif m-0">Sai Tanuj</h1>
            <div className="text-4xl md:text-6xl text-cream font-serif italic font-light">&</div>
            <h1 className="text-6xl md:text-8xl font-bold text-goldglow text-glow font-serif m-0">Vasanthee Devi</h1>
          </div>

          <p className="text-xl md:text-2xl text-gold mt-12 tracking-widest uppercase font-sans font-light border-b border-t border-gold py-4 inline-block px-8">Are getting married</p>
        </motion.div>
      </div>

      {/* Floating Diyas */}
      <div className="absolute bottom-10 left-10 z-20 animate-float opacity-70">
        <div className="w-8 h-8 rounded-full bg-goldglow shadow-[0_0_20px_rgba(255,223,0,0.8)] filter blur-[2px]"></div>
      </div>
      <div className="absolute bottom-20 right-10 z-20 animate-float opacity-70" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 rounded-full bg-goldglow shadow-[0_0_20px_rgba(255,223,0,0.8)] filter blur-[2px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
