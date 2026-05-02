import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickStart from '../components/home/QuickStart';
import CinematicBanner from '../components/home/CinematicBanner';
import PollingStation from '../components/home/PollingStation';
import CountingResults from '../components/home/CountingResults';
import RallyParticipation from '../components/home/RallyParticipation';
import StatsTicker from '../components/home/StatsTicker';
import WorldElectionsPreview from '../components/home/WorldElectionsPreview';
import CtaSection from '../components/home/CtaSection';

export default function HomePage() {
  useEffect(() => {
    document.title = 'ElectVerse — Democracy Education';
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <QuickStart />
      <CinematicBanner />
      <PollingStation />
      <CountingResults />
      <RallyParticipation />
      <StatsTicker />
      <WorldElectionsPreview />
      <CtaSection />
    </div>
  );
}
