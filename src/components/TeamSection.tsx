import React from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Meet the Team
        </h2>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs"
            >
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  className="w-full h-full object-cover rounded-full"
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  sizes="192px"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
