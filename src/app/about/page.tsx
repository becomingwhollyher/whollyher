import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="section-padding max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About WhollyHer
        </h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            WhollyHer is more than a community—it&apos;s a sacred space where women 
            discover who they truly are and step boldly into their divine purpose. 
            We believe every woman is called to wholeness: complete in heart, 
            clear in purpose, and rooted in unshakeable truth.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We exist to redefine womanhood through healing, purpose, and faith. 
            Our mission is to create transformative spaces where women can heal 
            from past wounds, discover their divine calling, and walk confidently 
            in who God says they are.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            A world where every woman knows her worth, walks in her purpose, 
            and lives from a place of spiritual wholeness and divine alignment.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-8">
            <li>Provide safe spaces for healing and spiritual growth</li>
            <li>Offer mentorship and coaching for personal development</li>
            <li>Create community connections that last a lifetime</li>
            <li>Facilitate workshops and programs focused on wholeness</li>
            <li>Share resources for faith-based living and purpose discovery</li>
          </ul>
          
          <div className="text-center">
            <Link href="/community" className="btn-primary mr-4">
              Join Our Community
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
