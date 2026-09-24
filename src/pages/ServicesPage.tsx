import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SERVICES_DATA } from '../data/services';
import { Shield, Zap, Flame, Droplets, Filter, Sparkles, Trees, Bug, Building, ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ContextType {
  openAssessmentModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-gold" />,
  Zap: <Zap className="w-6 h-6 text-gold" />,
  Flame: <Flame className="w-6 h-6 text-gold" />,
  Droplets: <Droplets className="w-6 h-6 text-gold" />,
  Filter: <Filter className="w-6 h-6 text-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold" />,
  Trees: <Trees className="w-6 h-6 text-gold" />,
  Bug: <Bug className="w-6 h-6 text-gold" />,
  Building: <Building className="w-6 h-6 text-gold" />,
};

export const ServicesPage: React.FC = () => {
  const { openAssessmentModal } = useOutletContext<ContextType>();

  return (
    <div className="bg-obsidian text-ivory pt-24 pb-16">
      <SEO
        title="Facility Services | Sri Thrayi Facility - Hyderabad"
        description="Comprehensive facility management services in Hyderabad: Security, Electrical, Fire Safety, Plumbing, WTP & STP, Housekeeping, Landscape & Garden, Pesticide, and Clubhouse Management."
        canonicalPath="/services"
      />

      {/* Services Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-commercial.jpg"
            alt="Commercial facility architecture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian" />
          <div className="absolute inset-0 bg-grid-architectural opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-charcoal-800 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-4">
            Integrated Service Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Essential Facility Support.{' '}
            <span className="text-gold-gradient italic block sm:inline">Coordinated & Dependable.</span>
          </h1>
          <p className="text-base sm:text-lg text-softgrey font-light max-w-2xl mx-auto leading-relaxed">
            Consolidate property upkeep through one disciplined partner. We provide specialized personnel, routines, and supervisory management across nine integrated disciplines.
          </p>
        </div>
      </section>

      {/* 9 Service Detailed Showcases */}
      <section className="py-16 sm:py-24 bg-white text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-elevated border border-ivory-300 group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 p-3 rounded-lg bg-charcoal-900/90 border border-gold/40 backdrop-blur-sm">
                      {iconMap[service.iconName]}
                    </div>
                    <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-xl pointer-events-none" />
                  </div>
                </div>

                {/* Text Details Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-deep uppercase">
                    <span>Service Category 0{index + 1}</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 font-normal leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-charcoal-700 leading-relaxed font-light">
                    {service.heroDesc}
                  </p>

                  {/* Scope Highlights */}
                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-widest text-gold-deep font-semibold mb-3">
                      Scope of Responsibilities:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-800">
                      {service.scope.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Environments */}
                  <div className="pt-3 border-t border-ivory-200 text-xs text-charcoal-600">
                    <span className="font-medium text-charcoal-800">Recommended for: </span>
                    <span>{service.suitableEnvironments.join(', ')}</span>
                  </div>

                  {/* CTA link to dedicated sub-page */}
                  <div className="pt-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-charcoal-900 text-gold hover:bg-obsidian hover:text-gold-light font-semibold text-xs tracking-refined transition-all shadow-sm"
                    >
                      <span>Explore Dedicated {service.title} Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration Benefits Section */}
      <section className="py-20 sm:py-28 bg-charcoal-900 text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase">
              Operational Synergy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-2 mb-4">
              Why integrate facility services with Sri Thrayi Facility?
            </h2>
            <p className="text-softgrey text-base font-light leading-relaxed">
              Managing separate individual vendors for security, housekeeping, plumbing, electrical, and gardening leads to conflicting schedules and fragmented accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-charcoal-800 border border-charcoal-700">
              <Layers className="w-7 h-7 text-gold mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Single Point of Contact</h3>
              <p className="text-xs sm:text-sm text-softgrey leading-relaxed font-light">
                One supervisory management tier coordinates daily shift rosters, supplies, attendance, and emergency responses across all service verticals.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-charcoal-800 border border-charcoal-700">
              <CheckCircle2 className="w-7 h-7 text-gold mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Synchronized Operations</h3>
              <p className="text-xs sm:text-sm text-softgrey leading-relaxed font-light">
                Housekeeping schedules harmonize with security access gates and maintenance walkthroughs, ensuring seamless non-disruptive facility support.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-charcoal-800 border border-charcoal-700">
              <Shield className="w-7 h-7 text-gold mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Unified Accountability</h3>
              <p className="text-xs sm:text-sm text-softgrey leading-relaxed font-light">
                Feedback regarding any aspect of property presentation or service delivery is addressed centrally without finger-pointing between separate subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-obsidian text-center border-t border-charcoal-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Request an Integrated Proposal
          </h2>
          <p className="text-softgrey text-sm sm:text-base font-light mb-8 leading-relaxed">
            Tell us which services your Hyderabad property requires. We will conduct a thorough site walkthrough to prepare a clear service plan.
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
