import React from 'react';
import { useParams, Link, Navigate, useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SERVICES_DATA } from '../data/services';
import { GoldDivider } from '../components/common/GoldDivider';
import { Shield, Zap, Droplets, Trees, Sparkles, ArrowRight, CheckCircle, AlertTriangle, Building2 } from 'lucide-react';

interface ContextType {
  openAssessmentModal: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-7 h-7 text-gold" />,
  Zap: <Zap className="w-7 h-7 text-gold" />,
  Droplets: <Droplets className="w-7 h-7 text-gold" />,
  Trees: <Trees className="w-7 h-7 text-gold" />,
  Sparkles: <Sparkles className="w-7 h-7 text-gold" />,
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openAssessmentModal } = useOutletContext<ContextType>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  return (
    <div className="bg-obsidian text-ivory pt-24 pb-16">
      <SEO
        title={`${service.title} in Hyderabad | Sri Thrayi Facility`}
        description={service.shortDesc}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Hero for Individual Service */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian" />
          <div className="absolute inset-0 bg-grid-architectural opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 p-2.5 rounded-full bg-charcoal-800/90 border border-gold/40 text-gold mb-6 backdrop-blur-sm">
            {iconMap[service.iconName]}
            <span className="text-xs font-semibold uppercase tracking-widest pr-2">
              Sri Thrayi Facility Service
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-xl text-softgrey font-light max-w-2xl mx-auto leading-relaxed mb-8">
            {service.heroDesc}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openAssessmentModal}
              className="px-7 py-3 bg-gold text-obsidian font-bold text-xs uppercase tracking-widest rounded shadow-gold-hover hover:bg-gold-light transition-all"
            >
              Request Assessment for {service.title}
            </button>
            <Link
              to="/services"
              className="px-6 py-3 bg-charcoal-800 border border-charcoal-600 text-ivory hover:border-gold font-semibold text-xs tracking-widest uppercase rounded transition-all"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Scope Section */}
      <section className="py-20 sm:py-28 bg-white text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Realistic Scope Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest text-gold-deep uppercase">
                Detailed Scope
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-obsidian-900 font-normal leading-tight">
                Realistic, transparent service delivery.
              </h2>
              <GoldDivider />
              <p className="text-base text-charcoal-700 leading-relaxed font-light">
                We believe in clearly defining operational responsibilities. Our {service.title.toLowerCase()} are executed by briefed on-site staff with supervisory check routines.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-ivory-50 border border-ivory-300 flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Working Approach */}
              <div className="pt-8 border-t border-ivory-200">
                <h3 className="font-serif text-2xl text-obsidian font-medium mb-4">
                  Our Working Approach
                </h3>
                <div className="space-y-3">
                  {service.approach.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-700">
                      <span className="w-5 h-5 rounded-full bg-charcoal-900 text-gold text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Challenges Addressed & Property Environments */}
            <div className="lg:col-span-5 space-y-8">
              {/* Challenges Card */}
              <div className="p-7 rounded-xl bg-charcoal-900 text-ivory border border-charcoal-800 shadow-elevated">
                <h3 className="font-serif text-xl text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-gold" />
                  <span>Common Facility Issues We Prevent</span>
                </h3>
                <div className="space-y-4">
                  {service.challenges.map((c, idx) => (
                    <div key={idx} className="border-b border-charcoal-800 pb-3 last:border-0 last:pb-0">
                      <h4 className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                        {c.title}
                      </h4>
                      <p className="text-xs text-softgrey leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Environments Card */}
              <div className="p-7 rounded-xl bg-ivory-100 border border-ivory-300">
                <h3 className="font-serif text-xl text-obsidian mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gold-deep" />
                  <span>Suitable Property Types</span>
                </h3>
                <ul className="space-y-2 text-xs text-charcoal-700">
                  {service.suitableEnvironments.map((env, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                      <span>{env}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-20 bg-charcoal-900 text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8">
            Complementary Facility Disciplines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.slug}`}
                className="group p-5 rounded-xl bg-charcoal-800 border border-charcoal-700 hover:border-gold/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2 w-fit rounded bg-obsidian border border-gold/30 mb-3 text-gold">
                    {iconMap[item.iconName]}
                  </div>
                  <h3 className="font-serif text-lg text-white group-hover:text-gold transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-softgrey line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-gold font-semibold mt-4 group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Site Assessment CTA */}
      <section className="py-16 bg-obsidian text-center border-t border-charcoal-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-white mb-3">
            Plan {service.title} for Your Hyderabad Property
          </h2>
          <p className="text-softgrey text-sm mb-6 max-w-xl mx-auto font-light leading-relaxed">
            Contact Sri Thrayi Facility to assess your premise requirements and receive a structured operational scope.
          </p>
          <button
            onClick={openAssessmentModal}
            className="px-8 py-3.5 bg-gold text-obsidian font-bold text-xs uppercase tracking-widest rounded shadow-gold-hover hover:bg-gold-light transition-all"
          >
            Request a Site Assessment
          </button>
        </div>
      </section>
    </div>
  );
};
