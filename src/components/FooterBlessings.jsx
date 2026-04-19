import { motion } from 'framer-motion';

const FooterBlessings = () => {
  return (
    <footer className="py-16 md:py-24 bg-dark text-center relative overflow-hidden">
      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-maroon/20 to-transparent z-0 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-2xl mx-auto px-4 relative z-10"
      >
        <div className="text-gold text-4xl mb-6">❂</div>
        <h3 className="text-3xl md:text-4xl text-cream font-serif italic mb-6">With Best Compliments From</h3>
        <p className="text-goldglow tracking-widest uppercase mb-8">Family & Friends</p>
        
        <p className="text-cream/70 font-sans font-light italic mb-12">
          "A successful marriage requires falling in love many times, always with the same person."
        </p>

        <div className="flex items-center justify-center gap-4 text-gold/50 text-sm">
          <span>{new Date().getFullYear()}</span>
          <span>•</span>
          <span>Om Namah Shivaya</span>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterBlessings;
