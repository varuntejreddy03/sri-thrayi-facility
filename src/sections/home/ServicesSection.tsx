import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Flame, Droplets, Filter, Sparkles, Trees, Bug, Building, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { SERVICES_DATA, type ServiceItem } from '../../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5 text-gold" />,
  Zap: <Zap className="w-5 h-5 text-gold" />,
  Flame: <Flame className="w-5 h-5 text-gold" />,
  Droplets: <Droplets className="w-5 h-5 text-gold" />,
  Filter: <Filter className="w-5 h-5 text-gold" />,
  Sparkles: <Sparkles className="w-5 h-5 text-gold" />,
  Trees: <Trees className="w-5 h-5 text-gold" />,
  Bug: <Bug className="w-5 h-5 text-gold" />,
  Building: <Building className="w-5 h-5 text-gold" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Integrated Service Portfolio"
          title="Essential services. One dependable partner."
          description="We coordinate nine integrated facility disciplines with dedicated on-site personnel, standardized inspection routines, and proactive property care."
          theme="light"
          align="left"
          className="mb-14 sm:mb-16"
        />

        {/* Balanced 3x3 Grid for all 9 Services (Zero Empty Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className="group relative rounded-2xl overflow-hidden bg-ivory-50 border border-ivory-300 hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-warm-card flex flex-col justify-between"
            >
              {/* Image & Icon Header */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/25 to-transparent" />
                
                {/* Discipline Category Icon */}
                <div className="absolute top-3.5 left-3.5 p-2 rounded-lg bg-charcoal-900/90 border border-gold/40 text-gold backdrop-blur-sm shadow-sm">
                  {iconMap[service.iconName]}
                </div>

                {/* Index Pill */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded bg-charcoal-900/80 border border-gold/30 text-[10px] font-mono text-gold font-bold">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-obsidian font-medium mb-2.5 group-hover:text-gold-deep transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-5 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Standard Scope Items */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-gold-deep font-bold block">
                      Core Operations:
                    </span>
                    {service.scope.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center justify-between text-xs font-semibold text-gold-deep hover:text-obsidian group/link border-t border-ivory-200 pt-4 transition-colors"
                >
                  <span>View Service Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-charcoal-800 text-charcoal-800 font-semibold text-xs uppercase tracking-widest hover:bg-obsidian hover:text-white transition-all shadow-sm hover:shadow"
          >
            <span>Compare All 9 Integrated Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
