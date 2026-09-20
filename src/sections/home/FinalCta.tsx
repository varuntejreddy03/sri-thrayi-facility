import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../data/config';

interface FinalCtaProps {
  onRequestAssessment: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onRequestAssessment }) => {
  const whatsappUrl = `https://wa.me/91${COMPANY_CONFIG.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello Sri Thrayi Facility team, I would like to discuss facility management services for our property in Hyderabad.'
  )}`;

  return (
    <section className="py-24 sm:py-32 bg-charcoal-900 border-t border-charcoal-800 text-ivory relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block px-3.5 py-1 rounded-full bg-charcoal-800 border border-gold/30 text-xs font-semibold tracking-widest text-gold uppercase mb-4">
          Start the Conversation
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mt-2 mb-4 leading-tight">
          Let’s create a better-managed facility.
        </h2>

        <p className="text-base sm:text-lg text-softgrey font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell us about your property and the services you require. Our Hyderabad operations team will contact you to understand your requirements and organize a site walkthrough.
        </p>

        {/* 3 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRequestAssessment}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-sm rounded shadow-gold-hover hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 group tracking-refined border border-gold/50"
          >
            <span>Request a Site Assessment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-ivory border border-charcoal-600 hover:border-gold/60 font-semibold text-sm rounded transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call: {COMPANY_CONFIG.contact.phoneFormatted}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 font-semibold text-sm rounded transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
