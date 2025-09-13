import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 dark:bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Who we are
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-300">
            WhollyHer is a community dedicated to helping women thrive in every
            aspect of life — spiritually, mentally, emotionally, and
            professionally. We create spaces for growth, conversations that
            heal, and opportunities that empower women to walk boldly in
            purpose.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/community"
              className="inline-block rounded-sm bg-purple-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-800 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-56 w-full sm:h-full">
        <Image
          alt="Excited friends portrait"
          src="/images/growth.jpg"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default AboutSection;
