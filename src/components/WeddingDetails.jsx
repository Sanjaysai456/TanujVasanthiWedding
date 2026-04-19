import { motion } from 'framer-motion';

const WeddingDetails = () => {
  return (
    <section className="py-20 px-4 bg-dark relative flex items-center justify-center">
      <div className="absolute inset-0 border-[1px] border-gold/20 m-4 md:m-10 rounded-3xl pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-dark-card/80 p-8 md:p-16 rounded-2xl border-2 border-gold shadow-[0_0_30px_rgba(212,175,55,0.2)] text-center relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl text-gold mb-12 font-serif uppercase tracking-widest text-glow">The Big Day</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 border-b md:border-b-0 md:border-r border-gold/30">
            <h3 className="text-xl text-saffron uppercase mb-2 tracking-widest">When</h3>
            <p className="text-lg md:text-xl text-cream font-serif font-bold italic mb-1 text-gold/80">Thursday</p>
            <p className="text-2xl md:text-3xl text-cream font-serif font-bold">April 30</p>
            <p className="text-xl text-cream font-serif">2026</p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4">
            <h3 className="text-xl text-saffron uppercase mb-2 tracking-widest">At</h3>
            <p className="text-4xl md:text-5xl text-goldglow font-serif font-bold animate-pulse">7:38 PM</p>
            <p className="text-sm text-gold mt-2 uppercase tracking-widest italic">Muhurtham</p>
          </div>

          <div className="flex flex-col items-center p-4 border-t md:border-t-0 md:border-l border-gold/30">
            <h3 className="text-xl text-saffron uppercase mb-2 tracking-widest">Where</h3>
            <p className="text-xl md:text-2xl text-cream font-serif">Sri Convention (Mini Hall)</p>
            <p className="text-sm md:text-base text-cream/80 mt-2">Inner Ring Road, Phase-II</p>
            <p className="text-sm md:text-base text-cream/80">Guntur, Andhra Pradesh</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingDetails;
