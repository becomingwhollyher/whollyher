import React from 'react';
import TeamSection from '@/components/TeamSection';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Amazing Team
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the incredible women who make WhollyHer a place of transformation, 
            healing, and divine purpose. Each team member brings unique gifts and 
            a heart for empowering women.
          </p>
        </div>
        
        <TeamSection />
      </div>
    </div>
  );
}
