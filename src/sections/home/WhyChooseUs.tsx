import React, { useState } from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { OPERATING_PRINCIPLES } from '../../data/values';
import { Shield, Users, Layers, AlertCircle, CalendarCheck, CheckCircle2 } from 'lucide-react';

const principleIcons = [
  <Layers className="w-5 h-5 text-gold" />,
  <Users className="w-5 h-5 text-gold" />,
  <Shield className="w-5 h-5 text-gold" />,
  <AlertCircle className="w-5 h-5 text-gold" />,
  <CalendarCheck className="w-5 h-5 text-gold" />,
];

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-obsidian-900 text-ivory relative overflow-hidden border-t border-charcoal-800">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 bg-grid-fine-dark opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Operating Foundation"
          title="Built around consistency, safety and accountability."
          description="We do not make inflated promises or rely on unverified claims. Our operational approach is grounded in five transparent operating standards."
          theme="dark"
          align="left"
          className="mb-16"
        />

        {/* Desktop Horizontal / Interactive Tabbed Experience */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Principle Selector List */}
          <div className="col-span-5 space-y-3">
            {OPERATING_PRINCIPLES.map((principle, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-charcoal-800 border-gold shadow-gold-subtle text-white'
                      : 'bg-charcoal-900/70 border-charcoal-700/60 text-softgrey hover:text-ivory hover:border-charcoal-600'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg mt-0.5 ${isActive ? 'bg-obsidian text-gold' : 'bg-charcoal-800'}`}>
                    {principleIcons[idx]}
                  </div>
                  <div>
                    <h3 className={`font-serif text-lg font-medium ${isActive ? 'text-gold' : 'text-white'}`}>
                      {principle.title}
                    </h3>
                    <p className="text-xs text-softgrey line-clamp-1 mt-1 font-light">
                      {principle.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card for the Active Principle */}
          <div className="col-span-7">
            <div className="h-full min-h-[440px] rounded-2xl bg-charcoal-850 border border-gold/30 p-8 sm:p-10 flex flex-col justify-between shadow-elevated-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-obsidian border border-gold/40">
                    {principleIcons[activeTab]}
                  </div>
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                    Operating Principle 0{activeTab + 1}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-tight">
                  {OPERATING_PRINCIPLES[activeTab].title}
                </h3>

                <p className="text-lg text-ivory/90 font-light leading-relaxed mb-8">
                  {OPERATING_PRINCIPLES[activeTab].description}
                </p>

                <div className="space-y-3.5 border-t border-charcoal-700 pt-6">
                  <div className="flex items-center gap-2.5 text-sm text-softgrey">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Clear supervisory escalation hierarchy for all on-site staff</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-softgrey">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Regular site inspection logs shared directly with property management</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-softgrey">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>Strict compliance with client safety and premises rules</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-charcoal-700/80 flex items-center justify-between text-xs text-gold">
                <span>Sri Thrayi Facility Operating Standard</span>
                <span className="text-softgrey">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical List */}
        <div className="lg:hidden space-y-4">
          {OPERATING_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-charcoal-800 border border-charcoal-700 text-ivory"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded bg-obsidian border border-gold/30">
                  {principleIcons[idx]}
                </div>
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-serif text-xl text-white mb-2">{principle.title}</h3>
              <p className="text-sm text-softgrey leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
