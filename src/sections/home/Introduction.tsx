import React from 'react';
import { GoldDivider } from '../../components/common/GoldDivider';
import { Check, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';

export const Introduction: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-ivory-50 via-ivory to-ivory-100 text-charcoal relative overflow-hidden border-t border-gold/20">
      {/* Architectural subtle watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-deep uppercase">
              <span className="w-2 h-[1px] bg-gold-deep" />
              <span>Operational Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-obsidian-900 leading-[1.15] tracking-tight">
              Your property deserves more than routine maintenance.
            </h2>

            <GoldDivider withDiamond={true} />

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-light">
              We coordinate essential facility services through disciplined processes, responsive support and careful attention to everyday operations. From protecting people and premises to maintaining clean, functional and welcoming environments, our teams help clients focus on what matters most.
            </p>

            <div className="pt-2 space-y-3.5">
              {[
                'Structured shift management and clear daily checklists',
                'Supervisory oversight to ensure consistent service delivery',
                'Single-point operational contact for five essential disciplines',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 text-gold-deep flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-charcoal-800 font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-ivory-300 flex items-center gap-3 text-xs text-charcoal-600">
              <ShieldCheck className="w-5 h-5 text-gold-deep shrink-0" />
              <p>
                Serving commercial, residential, and corporate facilities across Hyderabad, Telangana.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Photo Framing with Luxury Tagline Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-card border border-ivory-300 bg-white p-2 sm:p-3">
              <div className="relative rounded-xl overflow-hidden h-[400px] sm:h-[460px]">
                <img
                  src="/images/facility-intro.jpg"
                  alt="Professional facility operations staff working in a modern commercial office"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
              </div>

              {/* Tagline Card Overlay with Gold Foil Border */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-charcoal-900/95 backdrop-blur-md border border-gold/40 text-ivory shadow-elevated-dark">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-gold font-semibold uppercase tracking-widest">
                    Corporate Identity
                  </span>
                  <span className="text-[10px] text-softgrey">Hyderabad, Telangana</span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-white italic">
                  “{COMPANY_CONFIG.tagline}”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
