import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { SERVICES_DATA } from '../../data/services';

interface HeroProps {
  onRequestAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAssessment }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  const activeService = SERVICES_DATA[selectedServiceIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-left-anim', {
        y: 35,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out',
      });
      gsap.from('.hero-right-anim', {
        scale: 0.96,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-obsidian text-ivory overflow-hidden"
    >
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero-main.jpg"
          alt="Hyderabad Commercial Property"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        {/* Layered deep obsidian gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
        <div className="absolute inset-0 bg-grid-architectural opacity-30" />
      </div>

      {/* Ambient Gold Halo */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-gold/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Main Editorial Asymmetrical Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column (Editorial Typography & Action) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Location & Authority Tag */}
          <div className="hero-left-anim flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-800/90 border border-gold/40 text-gold text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md shadow-gold-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
              <span>Hyderabad • Integrated Facility Management</span>
            </span>
            <span className="hidden sm:inline text-xs text-softgrey/80">
              JNTU 9th Phase, Salivahana Colony
            </span>
          </div>

          {/* Large Bespoke Headline */}
          <div className="hero-left-anim space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.08] tracking-tight">
              Exceptional Facilities.
              <span className="block italic text-gold-gradient font-normal mt-1">
                Dependable Every Day.
              </span>
            </h1>
          </div>

          {/* Refined Supporting Paragraph */}
          <p className="hero-left-anim text-base sm:text-lg text-ivory/85 font-light leading-relaxed max-w-2xl">
            Sri Thrayi Facility delivers reliable security, electrical, plumbing, landscaping and housekeeping services that help properties operate safely, efficiently and professionally.
          </p>

          {/* High-Impact Actions Cluster */}
          <div className="hero-left-anim pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onRequestAssessment}
              className="px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-sm rounded shadow-gold-hover hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 group tracking-refined border border-gold/50"
            >
              <span>Request a Site Assessment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              to="/services"
              className="px-7 py-4 bg-charcoal-900/90 hover:bg-charcoal-800 text-ivory border border-gold/30 hover:border-gold font-semibold text-sm rounded transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Explore 5 Service Lines</span>
              <ChevronRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* 3 Core Trust Badges (No made up numbers, real operational standards) */}
          <div className="hero-left-anim pt-4 border-t border-charcoal-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-2.5 p-2 rounded bg-charcoal-900/60 border border-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Responsive Service</span>
                <span className="text-softgrey text-[11px]">Structured operational support</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded bg-charcoal-900/60 border border-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Trained Personnel</span>
                <span className="text-softgrey text-[11px]">Briefed on-site staff & conduct</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded bg-charcoal-900/60 border border-charcoal-800">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Consistent Standards</span>
                <span className="text-softgrey text-[11px]">Routine supervisor walkthroughs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Live Facility Discipline Showcase */}
        <div className="lg:col-span-5 hero-right-anim">
          <div className="relative rounded-2xl bg-charcoal-900/95 border border-gold/40 shadow-elevated-dark p-5 sm:p-6 backdrop-blur-xl">
            {/* Top Bar of Card */}
            <div className="flex items-center justify-between pb-3 border-b border-charcoal-700/80 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xs font-semibold text-white tracking-wider uppercase">
                  Facility Disciplines
                </span>
              </div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">
                Click to Preview
              </span>
            </div>

            {/* Discipline Selector Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {SERVICES_DATA.map((srv, idx) => {
                const isSelected = selectedServiceIndex === idx;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceIndex(idx)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-gold text-obsidian font-bold shadow-gold-subtle'
                        : 'bg-charcoal-800 text-softgrey hover:text-white hover:bg-charcoal-700'
                    }`}
                  >
                    {srv.title.replace(' Services', '')}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Discipline Image & Scope Card */}
            <div className="relative rounded-xl overflow-hidden h-60 sm:h-64 mb-4 border border-charcoal-700 group">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-obsidian-900/90 border border-gold/30 backdrop-blur-md">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg text-white font-medium">
                    {activeService.title}
                  </h3>
                  <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                    Discipline 0{selectedServiceIndex + 1}
                  </span>
                </div>
                <p className="text-[11px] text-softgrey line-clamp-2">
                  {activeService.shortDesc}
                </p>
              </div>
            </div>

            {/* Active Service Scope Preview */}
            <div className="space-y-2 mb-4">
              <span className="text-[11px] uppercase tracking-widest text-gold font-semibold block">
                Standard On-Site Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-ivory/80">
                {activeService.scope.slice(0, 4).map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    <span className="truncate">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Link for Selected Service */}
            <div className="pt-3 border-t border-charcoal-700 flex items-center justify-between">
              <Link
                to={`/services/${activeService.slug}`}
                className="text-xs font-semibold text-gold hover:text-gold-light inline-flex items-center gap-1 transition-colors"
              >
                <span>View {activeService.title} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={onRequestAssessment}
                className="text-xs font-medium text-softgrey hover:text-white underline"
              >
                Book Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Service Marquee / Architectural Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-10 border-t border-charcoal-800/80 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-softgrey">
          <span className="text-gold font-semibold uppercase tracking-widest text-[11px]">
            Core Disciplines:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-ivory/80">
            <span>Security Services</span>
            <span className="text-gold">•</span>
            <span>Electrical Services</span>
            <span className="text-gold">•</span>
            <span>Plumbing Services</span>
            <span className="text-gold">•</span>
            <span>Landscaping & Gardening</span>
            <span className="text-gold">•</span>
            <span>Housekeeping Services</span>
          </div>
          <span className="text-[11px] text-softgrey/60 hidden md:inline">
            Telangana Registered Facility Service
          </span>
        </div>
      </div>
    </section>
  );
};
