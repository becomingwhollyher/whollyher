import React from 'react';
import Link from 'next/link';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl section-padding">
        <div className="w-full">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
            WhollyHer: Redefining{' '}
            <strong className="text-purple-600">womanhood</strong> through healing,
            purpose, and faith.
          </h1>

          <p className="w-3/4 mt-4 text-3xl text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            This is a sacred space for women becoming:{' '}
            <strong className="text-purple-600">
              whole in heart, clear in purpose, and rooted in truth.
            </strong>{' '}
            We are women who are no longer waiting to be chosen or defined by
            roles — we are walking boldly in who God says we already are. We
            prioritize healing, spiritual clarity, emotional strength, and
            divine alignment.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link href="/get-started" className="btn-primary">
              Start Your Healing Journey
            </Link>

            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
