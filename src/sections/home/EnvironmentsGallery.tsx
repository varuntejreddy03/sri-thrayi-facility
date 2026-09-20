import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ENVIRONMENTS_DATA } from '../../data/environments';

export const EnvironmentsGallery: React.FC = () => {
  return (
    <section id="environments" className="py-24 sm:py-32 bg-obsidian text-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sector Suitability"
          title="Environments our service offering is designed to support."
          description="Every property type presents distinct operational rhythms and security needs. Our service scope adapts to the specific operating requirements of each facility."
          theme="dark"
          align="left"
          className="mb-16"
        />

        {/* Image-Led Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENVIRONMENTS_DATA.map((env) => (
            <div
              key={env.id}
              className="group relative rounded-xl overflow-hidden bg-charcoal-900 border border-charcoal-800 hover:border-gold/50 transition-all duration-300 flex flex-col shadow-elevated-dark"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={env.image}
                  alt={env.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                    {env.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-white font-medium">
                    {env.title}
                  </h3>
                </div>
              </div>

              {/* Text details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-softgrey leading-relaxed mb-5 font-light">
                  {env.description}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-charcoal-800 text-xs text-ivory/80">
                  {env.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
