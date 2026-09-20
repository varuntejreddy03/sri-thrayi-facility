import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PROCESS_STEPS } from '../../data/values';

export const HowWeWork: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-ivory-100 via-ivory to-ivory-200 text-charcoal relative overflow-hidden border-t border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Implementation Roadmap"
          title="How we onboard and support your property."
          description="A structured four-phase transition ensuring clean handover, well-briefed teams, and ongoing accountability."
          theme="light"
          align="left"
          className="mb-16"
        />

        {/* Four-Step Process with Gold Progress Line */}
        <div className="relative">
          {/* Desktop Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 -translate-y-7 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-ivory-300 shadow-sm hover:shadow-warm-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-charcoal-900 border-2 border-gold text-gold font-serif text-lg font-bold flex items-center justify-center mb-6 shadow-sm">
                    {item.step}
                  </div>

                  <h3 className="font-serif text-xl text-obsidian font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ivory-200 text-[11px] font-semibold tracking-wider text-gold-deep uppercase">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
