import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { COMPANY_CONFIG } from '../../data/config';

interface HeroProps {
  onRequestAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAssessment }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = COMPANY_CONFIG.contact.whatsappRaw || COMPANY_CONFIG.contact.phoneRaw;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Sri Thrayi Facility team, I would like to inquire about your facility management services.'
  )}`;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-content-anim', {
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-badge-anim', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'back.out(1.4)',
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToCommunity = () => {
    const el = document.getElementById('community-zone');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-obsidian text-ivory overflow-hidden"
    >
      {/* Background Architectural Grid and Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-architectural opacity-25" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/10 blur-[170px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6">

        {/* ── Main Hero Visual Frame ── */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/30 shadow-elevated-dark group bg-charcoal-950">
          
          {/* Master Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] overflow-hidden">
            <img
              src="/images/hero-chatgpt.png"
              alt="Sri Thrayi Facility - Trust to Deliver. Committed to Excellence."
              className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
            />

            {/* Gradient Overlays for Readability and Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/40 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/25 rounded-2xl sm:rounded-3xl pointer-events-none" />

            {/* ── Desktop Overlay Bottom Action Bar (Hidden on mobile) ── */}
            <div className="hidden sm:block absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20">
              <div className="max-w-3xl space-y-4">

                <div className="hero-content-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian/85 border border-gold/40 text-gold backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
                    Integrated Facility Management · Hyderabad
                  </span>
                </div>

                <h1 className="hero-content-anim font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight drop-shadow-md">
                  We Manage <span className="text-gold-gradient italic">Every Corner</span> of Your Property
                </h1>

                <p className="hero-content-anim text-xs sm:text-base text-ivory/90 font-light max-w-2xl leading-relaxed drop-shadow">
                  Consolidate your security, electrical, plumbing, housekeeping, fire safety, landscaping, and community amenities through one disciplined partner.
                </p>

                {/* CTAs */}
                <div className="hero-content-anim flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={onRequestAssessment}
                    className="px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-xs sm:text-sm rounded-lg shadow-gold-hover hover:brightness-105 transition-all flex items-center gap-2 group border border-gold/50"
                  >
                    <span>Request Site Assessment</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 sm:py-3.5 rounded-lg bg-obsidian/90 hover:bg-obsidian border border-emerald-500/50 hover:border-emerald-400 text-ivory text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Us</span>
                  </a>

                  <button
                    onClick={scrollToCommunity}
                    className="px-5 py-3 sm:py-3.5 rounded-lg bg-charcoal-900/80 hover:bg-charcoal-800 border border-gold/30 hover:border-gold/60 text-gold text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Community Ecosystem</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* ── Mobile Dedicated Content Card (Clean, Unblocked 3D Crest) ── */}
          <div className="sm:hidden p-5 bg-charcoal-950 border-t border-gold/25 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-gold/35 text-gold text-[10px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Integrated Facility Management</span>
            </div>

            <h1 className="font-serif text-2xl font-normal text-white leading-snug tracking-tight">
              We Manage <span className="text-gold-gradient italic">Every Corner</span> of Your Property
            </h1>

            <p className="text-xs text-softgrey font-light leading-relaxed">
              Consolidate your security, electrical, plumbing, housekeeping, fire safety, landscaping, and community amenities through one disciplined partner.
            </p>

            {/* Mobile Touch-Friendly CTAs */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onRequestAssessment}
                className="w-full py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-xs rounded-lg shadow-gold-hover flex items-center justify-center gap-2 border border-gold/50"
              >
                <span>Request Site Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-lg bg-charcoal-900 border border-emerald-500/40 text-ivory text-xs font-semibold flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={scrollToCommunity}
                  className="py-2.5 rounded-lg bg-charcoal-900 border border-gold/30 text-gold text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <span>Explore Tour</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom HUD Bar */}
          <div className="px-4 sm:px-6 py-3 bg-charcoal-900 border-t border-charcoal-800 flex flex-wrap items-center justify-between gap-3 text-xs text-softgrey">
            <div className="flex items-center gap-2 text-ivory/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certified Operations · 9 Integrated Disciplines</span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="text-gold font-medium">Premium Residences</span>
              <span className="text-charcoal-600">·</span>
              <span className="text-gold font-medium">Commercial Towers</span>
              <span className="text-charcoal-600">·</span>
              <span className="text-gold font-medium">Modern Amenities</span>
            </div>
          </div>

        </div>

      </div>

      {/* ── Sub-Hero Services Ticker Strip ── */}
      <div className="relative z-10 border-t border-charcoal-800/80 bg-obsidian-950/90 backdrop-blur-md mt-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] text-softgrey">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-wider">
              9 Offered Disciplines:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-ivory/80">
            {[
              'Security',
              'Electrical',
              'Fire & Safety',
              'Plumbing',
              'WTP & STP',
              'Housekeeping',
              'Landscape & Garden',
              'Pesticide & Pest Control',
              'Clubhouse & Amenities',
            ].map((name, i, arr) => (
              <React.Fragment key={name}>
                <span className="hover:text-gold transition-colors cursor-default">
                  {name}
                </span>
                {i < arr.length - 1 && <span className="text-charcoal-600">·</span>}
              </React.Fragment>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-gold text-[10px] uppercase tracking-wider font-semibold">
            <span>24/7 Operations Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
