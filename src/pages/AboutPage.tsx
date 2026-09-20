import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { GoldDivider } from '../components/common/GoldDivider';
import { CORE_VALUES } from '../data/values';
import { Shield, Target, Eye, Building, MapPin, Users, HeartHandshake } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

interface ContextType {
  openAssessmentModal: () => void;
}

export const AboutPage: React.FC = () => {
  const { openAssessmentModal } = useOutletContext<ContextType>();

  return (
    <div className="bg-obsidian text-ivory pt-24 pb-16">
      <SEO
        title="About Us | Sri Thrayi Facility - Hyderabad"
        description="Learn about Sri Thrayi Facility: our mission, vision, core operating values, and disciplined approach to property maintenance across Hyderabad."
        canonicalPath="/about"
      />

      {/* About Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-commercial.jpg"
            alt="Corporate architecture in Hyderabad"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian" />
          <div className="absolute inset-0 bg-grid-architectural opacity-30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-charcoal-800 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-4">
            Our Identity & Commitments
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Disciplined Facility Care.{' '}
            <span className="text-gold-gradient italic block sm:inline">Built on Trust.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-softgrey font-light leading-relaxed">
            Sri Thrayi Facility delivers integrated property management services tailored for corporate offices, residential communities, and commercial facilities across Hyderabad.
          </p>
        </div>
      </section>

      {/* Company Introduction & Philosophy */}
      <section className="py-16 sm:py-24 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
                Company Introduction
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 font-normal leading-tight">
                A dependable approach to everyday property operations.
              </h2>
              <GoldDivider />
              <p className="text-base text-charcoal-700 leading-relaxed font-light">
                At Sri Thrayi Facility, we believe that effective facility management is measured by consistency. Clean corridors, secure premises, reliable electrical points, uninterrupted plumbing, and manicured green grounds should function seamlessly day after day without demanding the constant attention of property owners or facility executives.
              </p>
              <p className="text-base text-charcoal-700 leading-relaxed font-light">
                Our organization coordinates five essential disciplines under a cohesive operational structure. By instituting transparent shift supervision, trained frontline staff, and clear escalation channels, we help properties maintain high standards of safety, hygiene, and curb appeal.
              </p>

              <div className="pt-2 p-5 rounded-lg bg-ivory-100 border border-ivory-300">
                <p className="font-serif text-xl text-obsidian-900 italic mb-1">
                  “{COMPANY_CONFIG.tagline}”
                </p>
                <p className="text-xs text-charcoal-600">
                  The foundational commitment guiding our supervisory staff and site personnel every day.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-elevated border border-ivory-300">
                <img
                  src="/images/operations-team.jpg"
                  alt="Facility operations team review"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/40 rounded-xl" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-obsidian-900/90 text-white backdrop-blur-sm border border-gold/30 text-xs">
                  <div className="flex items-center gap-2 text-gold font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hyderabad Corporate Operations</span>
                  </div>
                  <p className="text-softgrey">
                    Centrally based at JNTU 9th Phase, serving properties across the greater Hyderabad metropolitan area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-charcoal-900 text-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-charcoal-800 border border-gold/30 shadow-elevated-dark flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-obsidian border border-gold/40 flex items-center justify-center text-gold mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">
                  Our Mission
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                  Purposeful Service Delivery
                </h3>
                <p className="text-base text-softgrey font-light leading-relaxed">
                  “To deliver dependable facility services that support safe, clean, functional and professionally maintained environments.”
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal-700 text-xs text-softgrey">
                Focus on disciplined routines, clear accountability, and responsive support.
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-xl bg-charcoal-800 border border-gold/30 shadow-elevated-dark flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-obsidian border border-gold/40 flex items-center justify-center text-gold mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">
                  Our Vision
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                  Long-Term Partnership
                </h3>
                <p className="text-base text-softgrey font-light leading-relaxed">
                  “To become a trusted facility-management partner known for consistent service, responsible teams and long-term client relationships.”
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-charcoal-700 text-xs text-softgrey">
                Focus on enduring trust, trained staff conduct, and operational integrity.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-obsidian text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Operating Values"
            title="Principles that guide our daily performance."
            description="Our service delivery is shaped by six fundamental values that every team member is expected to demonstrate on-site."
            theme="dark"
            align="left"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.number}
                className="p-8 rounded-xl bg-charcoal-900 border border-charcoal-800 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl text-gold font-light block mb-4">
                    {val.number}
                  </span>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-softgrey leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal-800/80 text-[11px] text-gold uppercase tracking-wider">
                  Standard of Conduct
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Approach People, Property & Safety */}
      <section className="py-20 sm:py-28 bg-ivory text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
              Operational Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 mt-2 mb-4">
              How we approach people, property, safety and consistency.
            </h2>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-white border border-ivory-300">
              <Users className="w-8 h-8 text-gold-deep mb-4" />
              <h3 className="font-serif text-xl text-obsidian font-medium mb-2">People</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We prioritize personnel briefing, polite communication, proper attire, and respectful conduct across every residential and corporate environment.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-ivory-300">
              <Building className="w-8 h-8 text-gold-deep mb-4" />
              <h3 className="font-serif text-xl text-obsidian font-medium mb-2">Property</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                We treat client premises with stewardship, protecting infrastructure from avoidable damage through systematic preventive checks.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-ivory-300">
              <Shield className="w-8 h-8 text-gold-deep mb-4" />
              <h3 className="font-serif text-xl text-obsidian font-medium mb-2">Safety</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Safe handling of cleaning materials, awareness of wet floors, and caution around electrical switches ensure occupant and worker wellbeing.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-ivory-300">
              <HeartHandshake className="w-8 h-8 text-gold-deep mb-4" />
              <h3 className="font-serif text-xl text-obsidian font-medium mb-2">Consistency</h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                Quality shouldn’t depend on guesswork. Standardized shift handovers, logbooks, and supervisor walkthroughs sustain predictable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20 bg-charcoal-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Discuss Your Facility Requirements
          </h2>
          <p className="text-softgrey text-base mb-8 max-w-xl mx-auto font-light">
            Contact our Hyderabad operations team to schedule an initial site walkthrough and review how our five service lines can support your property.
          </p>
          <button
            onClick={openAssessmentModal}
            className="px-8 py-3.5 bg-gold text-obsidian font-bold text-sm rounded shadow-gold-hover hover:bg-gold-light transition-all"
          >
            Request a Site Assessment
          </button>
        </div>
      </section>
    </div>
  );
};
