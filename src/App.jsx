import { useState } from 'react';
import LandingAnimation from './components/LandingAnimation';
import HeroSection from './components/HeroSection';
import WeddingDetails from './components/WeddingDetails';
import EventsTimeline from './components/EventsTimeline';
import CoupleSection from './components/CoupleSection';
import VenueMap from './components/VenueMap';
import CountdownTimer from './components/CountdownTimer';
import FooterBlessings from './components/FooterBlessings';

function App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    // Attempt to play a subtle background music if provided
    setEntered(true);
  };

  return (
    <div className="bg-dark min-h-screen font-serif text-cream overflow-hidden">
      {!entered ? (
        <LandingAnimation onEnter={handleEnter} />
      ) : (
        <main>
          <HeroSection />
          <CoupleSection />
          <WeddingDetails />
          <CountdownTimer />
          <EventsTimeline />
          <VenueMap />
          <FooterBlessings />
        </main>
      )}
    </div>
  );
}

export default App;
