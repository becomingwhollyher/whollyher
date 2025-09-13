import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import CorePillars from '@/components/CorePillars';
import TeamSection from '@/components/TeamSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <AboutSection />
      <CorePillars />
      <TeamSection />
    </div>
  );
}
