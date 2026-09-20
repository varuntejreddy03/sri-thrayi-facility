import React from 'react';
import { SEO } from '../components/common/SEO';
import { COMPANY_CONFIG } from '../data/config';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-obsidian text-ivory pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Privacy Policy | Sri Thrayi Facility"
        description="Privacy policy and data protection practices of Sri Thrayi Facility, Hyderabad."
        canonicalPath="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto bg-charcoal-900 border border-charcoal-800 rounded-xl p-8 sm:p-12 space-y-8 text-softgrey text-sm leading-relaxed">
        <div>
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">Legal Disclosures</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mt-1 mb-2">Privacy Policy</h1>
          <p className="text-xs text-softgrey">Last updated: September 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">1. Introduction</h2>
          <p>
            Sri Thrayi Facility (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect contact information submitted through our website (<span className="text-gold">srithrayifacility.com</span>) in connection with facility management services in Hyderabad, Telangana.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">2. Information We Collect</h2>
          <p>
            When you request a site assessment or submit an inquiry via our contact form, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: Name, phone number, and email address</li>
            <li>Property details: Property name, property type, and general location within Hyderabad</li>
            <li>Service preferences: Requested disciplines (Security, Electrical, Plumbing, Landscaping, Housekeeping)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">3. How We Use Your Information</h2>
          <p>
            The collected information is solely utilized to respond to your facility management inquiry, arrange on-site inspections, prepare operational proposals, and communicate with you regarding service delivery. We do not sell or lease your personal information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">4. Contact & Inquiries</h2>
          <p>
            For any queries regarding this policy, you may contact our registered office:
          </p>
          <p className="text-xs text-ivory">
            {COMPANY_CONFIG.name}<br />
            {COMPANY_CONFIG.address.formatted}<br />
            Email: {COMPANY_CONFIG.contact.email} | Phone: {COMPANY_CONFIG.contact.phoneFormatted}
          </p>
        </section>
      </div>
    </div>
  );
};
