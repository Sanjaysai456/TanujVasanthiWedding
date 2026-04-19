import { motion } from 'framer-motion';
import { FaHeart, FaSun, FaBus, FaPrayingHands, FaGlassCheers, FaOm } from 'react-icons/fa';

const events = [
  { date: "April 26", time: "Morning", title: "Pellikoduku Ceremony", icon: <FaSun /> },
  { date: "April 27", time: "Evening", title: "Mehendi & Bangles Ceremony", icon: <FaHeart /> },
  { date: "April 28", time: "Morning", title: "Haldi Ceremony", icon: <FaSun /> },
  { date: "April 29", time: "Morning", title: "Temple Visit", icon: <FaOm /> },
  { date: "April 29", time: "Evening", title: "Guest Transportation (Buses Start)", icon: <FaBus /> },
  { date: "May 2", time: "Morning", title: "Satyanarayana Swamy Vratam", icon: <FaPrayingHands /> },
  { date: "May 2", time: "Evening", title: "Reception", icon: <FaGlassCheers /> },
];

const EventCard = ({ event, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`flex md:hidden flex-col items-center w-full mb-10`}
    >
      <div className="bg-dark-card border border-gold p-6 rounded-xl w-[90%] text-center shadow-[0_0_15px_rgba(212,175,55,0.1)] relative mt-6">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-maroon rounded-full border-2 border-gold text-goldglow flex items-center justify-center text-xl">
          {event.icon}
        </div>
        <h4 className="text-gold font-sans uppercase tracking-wider text-sm mt-4">{event.date} - {event.time}</h4>
        <h3 className="text-2xl text-cream font-serif mt-2">{event.title}</h3>
      </div>
    </motion.div>
  );
};

const EventCardDesktop = ({ event, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`hidden md:flex items-center justify-between w-full mb-12 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div className="w-[45%]"></div>
      <div className="relative flex items-center justify-center w-12 h-12 bg-maroon rounded-full border-2 border-gold text-goldglow text-xl z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
        {event.icon}
      </div>
      <div className={`w-[45%] ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className="bg-dark-card/80 border border-gold/50 p-6 rounded-xl hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition duration-300">
          <h4 className="text-gold font-sans uppercase tracking-wider text-sm">{event.date} • {event.time}</h4>
          <h3 className="text-3xl text-cream font-serif mt-2">{event.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const EventsTimeline = () => {
  return (
    <section className="py-20 px-4 bg-dark relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <p className="text-[20rem] md:text-[40rem] font-serif text-saffron m-0">ॐ</p>
      </div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-goldglow font-serif uppercase tracking-widest text-glow"
        >
          Festivities
        </motion.h2>
        <div className="h-1 w-24 bg-maroon mx-auto mt-4 rounded"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Center line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark via-gold to-dark -translate-x-1/2"></div>
        
        {events.map((event, index) => (
          <div key={index}>
            <EventCard event={event} index={index} />
            <EventCardDesktop event={event} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsTimeline;
