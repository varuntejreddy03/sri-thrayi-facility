import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Droplets, Trees, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { SERVICES_DATA, type ServiceItem } from '../../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5 text-gold" />,
  Zap: <Zap className="w-5 h-5 text-gold" />,
  Droplets: <Droplets className="w-5 h-5 text-gold" />,
  Trees: <Trees className="w-5 h-5 text-gold" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold" />,
};

export const ServicesSection: React.FC = () => {
  const featuredService = SERVICES_DATA[0]; // Security Services
  const otherServices = SERVICES_DATA.slice(1);

  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Integrated Service Portfolio"
          title="Essential services. One dependable partner."
          description="We coordinate five core facility disciplines with dedicated on-site personnel, standardized inspection routines, and proactive property care."
          theme="light"
          align="left"
          className="mb-16"
        />

        {/* Varied Editorial Layout: 1 Hero Card + 4 Balanced Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Service Card (Lead on Left) */}
          <div className="lg:col-span-5 flex">
            <div className="group relative w-full rounded-2xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold/50 transition-all duration-300 shadow-elevated-dark flex flex-col justify-between">
              {/* Image with subtle zoom on hover */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={featuredService.image}
                  alt={featuredService.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-obsidian-900/90 border border-gold/40 backdrop-blur-sm">
                  {iconMap[featuredService.iconName]}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded bg-gradient-to-r from-gold to-gold-light text-obsidian text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  Core Discipline
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-ivory">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 group-hover:text-gold transition-colors">
                    {featuredService.title}
                  </h3>
                  <p className="text-softgrey text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {featuredService.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                      Standard Scope of Work:
                    </span>
                    {featuredService.scope.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-ivory/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/services/${featuredService.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-light group/link border-t border-charcoal-700/80 pt-4"
                >
                  <span>Explore Security Scope & Protocols</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Supporting 4 Services Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="group relative rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-300 hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-warm-card flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded bg-charcoal-900/90 border border-gold/40 text-gold backdrop-blur-sm">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-obsidian font-medium mb-2 group-hover:text-gold-deep transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-4 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-1.5 mb-5 text-xs text-charcoal-700">
                      {service.scope.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-gold-deep font-bold mt-0.5">•</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-deep hover:text-obsidian group/link border-t border-ivory-200 pt-3"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-charcoal-800 text-charcoal-800 font-semibold text-xs uppercase tracking-widest hover:bg-obsidian hover:text-white transition-all"
          >
            <span>Compare All 5 Service Scopes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
