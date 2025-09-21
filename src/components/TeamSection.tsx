import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-[1870px] w-[90%] sm:w-[85%] mx-auto">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
          Meet the Team
        </h2>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-x-[2.5%] gap-y-8">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-[23%] min-w-[300px]"
            >
              <div className="relative aspect-square mx-auto">
                <Image
                  className="w-full h-full object-cover object-top rounded-full"
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  sizes="500px"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
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
