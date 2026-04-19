import { motion } from 'framer-motion';

const LandingAnimation = ({ onEnter }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-dark relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        <div className="text-goldglow text-6xl md:text-8xl mb-6 font-serif opacity-80 animate-glow">ॐ</div>
        <img src="/lord_ganesha.png" alt="Lord Ganesha" className="w-64 h-64 md:w-96 md:h-96 object-contain mb-12 drop-shadow-2xl" />
        <button 
          onClick={onEnter}
          className="seal-button px-8 py-4 rounded-full text-dark font-bold text-xl tracking-widest uppercase cursor-pointer z-50 relative"
        >
          Open Invitation
        </button>
      </motion.div>
      
      {/* Falling petals background */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          className="absolute w-4 h-4 bg-maroon rounded-full opacity-50 blur-[1px] animate-petal"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default LandingAnimation;
