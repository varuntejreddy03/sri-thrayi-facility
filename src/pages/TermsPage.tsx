import React from 'react';
import { SEO } from '../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-obsidian text-ivory pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Terms of Service | Sri Thrayi Facility"
        description="Terms of service and engagement conditions for Sri Thrayi Facility."
        canonicalPath="/terms"
      />

      <div className="max-w-4xl mx-auto bg-charcoal-900 border border-charcoal-800 rounded-xl p-8 sm:p-12 space-y-8 text-softgrey text-sm leading-relaxed">
        <div>
          <span className="text-xs font-semibold tracking-widest text-gold uppercase">Operational Terms</span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mt-1 mb-2">Terms of Service</h1>
          <p className="text-xs text-softgrey">Last updated: September 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">1. Scope of Engagement</h2>
          <p>
            The information displayed on this website is for general informational purposes regarding professional facility management services offered by Sri Thrayi Facility in Hyderabad, Telangana. Final service scopes, operational rosters, and commercial conditions are formalized through customized written service agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">2. Service Boundaries</h2>
          <p>
            Sri Thrayi Facility provides routine facility maintenance, security vigilance support, housekeeping, landscaping, and plumbing/electrical inspections. Specialized high-voltage engineering, licensed statutory armed security, or major structural civil repairs are outside routine maintenance scopes and require separate technical coordination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl text-white">3. Governing Jurisdiction</h2>
          <p>
            Any engagements or legal disputes arising from operations are subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
          </p>
        </section>
      </div>
    </div>
  );
};
