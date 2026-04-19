import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-30T19:38:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center p-4 w-20 h-20 md:w-32 md:h-32 bg-dark-card rounded-full border-[1.5px] border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
        <span className="text-2xl md:text-4xl text-goldglow font-serif font-bold">{timeLeft[interval]}</span>
        <span className="text-[10px] md:text-xs text-saffron uppercase tracking-widest mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <section className="py-16 bg-dark flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-4 md:gap-8"
      >
        {timerComponents.length ? timerComponents : <span className="text-4xl text-goldglow font-serif">The celebrations have begun!</span>}
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
