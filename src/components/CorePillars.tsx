import React from 'react';
import Image from 'next/image';
import { corePillars } from '@/data';

const CorePillars: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Our Core Pillars
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          At WhollyHer, we help women heal, grow, and thrive through these
          pillars.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {corePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card max-w-xs mx-auto"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
