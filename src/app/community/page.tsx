import React from 'react';
import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Become part of a sisterhood that believes in your healing, celebrates 
            your growth, and walks alongside you on your journey to wholeness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What to Expect
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Weekly community gatherings and support groups
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Monthly workshops on healing and personal development
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                One-on-one mentorship opportunities
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Access to exclusive resources and content
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Prayer support and spiritual guidance
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Community Values
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Safe Space:</strong> Judgment-free environment for sharing and growth
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Authenticity:</strong> Real conversations about real struggles
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Faith-Centered:</strong> Grounded in biblical principles and truth
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <strong>Empowerment:</strong> Building each other up and celebrating wins
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Take the first step toward wholeness and join a community of women 
            who are committed to healing, growth, and living in their divine purpose.
          </p>
          <div className="space-x-4">
            <Link href="/get-started" className="btn-primary">
              Join Now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
