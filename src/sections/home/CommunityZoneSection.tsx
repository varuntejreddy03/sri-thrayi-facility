import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Pause,
  Shield,
  Zap,
  Flame,
  Droplets,
  Filter,
  Sparkles,
  Trees,
  Bug,
  Building,
  ShieldCheck,
  ChevronRight,
  Compass,
} from 'lucide-react';
import gsap from 'gsap';

interface CommunityZoneProps {
  onRequestAssessment: () => void;
}

interface CommunityZoneElement {
  id: number;
  label: string;
  sketchTitle: string;
  role: string;
  desc: string;
  category: string;
  serviceLink: string;
  coords: { x: number; y: number };
  tag: string;
  highlightText: string;
}

const COMMUNITY_ELEMENTS: CommunityZoneElement[] = [
  {
    id: 1,
    label: 'Security Services',
    sketchTitle: 'Security & Access Control',
    role: '24/7 Gate Vigilance & Vehicle Verification',
    desc: 'Entrance and exit monitoring, visitor registers, perimeter rounds, and rapid incident escalation safeguarding premises.',
    category: 'Security Services',
    serviceLink: '/services/security',
    coords: { x: 39, y: 72 },
    tag: 'Zone 01 · Main Gatehouse',
    highlightText: 'Automated barrier access, visitor logs & round-the-clock guards',
  },
  {
    id: 2,
    label: 'Electrical Services',
    sketchTitle: 'Electrical & Power Systems',
    role: 'LT Panels, DG Backup & Lighting Maintenance',
    desc: 'Daily visual checks of main distribution boards, preventive maintenance, lighting fixture care, and generator readiness.',
    category: 'Electrical Services',
    serviceLink: '/services/electrical',
    coords: { x: 84, y: 68 },
    tag: 'Zone 02 · Substation & DG',
    highlightText: 'Distribution board checks, backup DG readiness & surge protection',
  },
  {
    id: 3,
    label: 'Fire & Safety Systems',
    sketchTitle: 'Fire & Safety Systems',
    role: 'Hydrant Riser, FACP Panels & Extinguisher Audits',
    desc: 'Automated jockey pump testing, sprinkler line pressure checks, smoke detector cleaning, and emergency drill coordination.',
    category: 'Fire & Safety',
    serviceLink: '/services/fire',
    coords: { x: 70, y: 26 },
    tag: 'Zone 03 · Fire & Emergency',
    highlightText: 'Certified fire line pressure audits & automated smoke alarms',
  },
  {
    id: 4,
    label: 'Plumbing Services',
    sketchTitle: 'Plumbing & Water Systems',
    role: 'Piping Networks, Leak Inspections & Booster Care',
    desc: 'Proactive upkeep of water supply lines, drainage networks, overhead tanks, sumps, and sanitary fixtures preventing water damage.',
    category: 'Plumbing Services',
    serviceLink: '/services/plumbing',
    coords: { x: 27, y: 46 },
    tag: 'Zone 04 · Water Supply & Pumps',
    highlightText: 'Booster pump pressure regulation & leak-free pipeline upkeep',
  },
  {
    id: 5,
    label: 'WTP & STP Management',
    sketchTitle: 'WTP & STP Operations',
    role: 'Water Treatment, Aeration & Effluent Recycling',
    desc: 'Round-the-clock biological and chemical plant technicians ensuring odor-free operation and treated water reuse for irrigation.',
    category: 'WTP & STP Operations',
    serviceLink: '/services/wtp-stp',
    coords: { x: 44, y: 81 },
    tag: 'Zone 05 · Treatment Plant',
    highlightText: 'Daily BOD/COD testing, aeration blowers & recycled water reuse',
  },
  {
    id: 6,
    label: 'Housekeeping Services',
    sketchTitle: 'Housekeeping & Sweeping',
    role: 'Mechanized Boulevard Sweeping & Janitorial Care',
    desc: 'High-suction mechanized street sweepers, corridor buffing, hourly washroom sanitization, and responsible waste management.',
    category: 'Housekeeping Services',
    serviceLink: '/services/housekeeping',
    coords: { x: 61, y: 72 },
    tag: 'Zone 06 · Mechanized Sweeping',
    highlightText: 'Heavy-duty suction road sweeper & spotless common areas',
  },
  {
    id: 7,
    label: 'Landscape & Garden',
    sketchTitle: 'Landscape & Garden',
    role: 'Lawn Upkeep, Boulevard Palms & Hedge Sculpting',
    desc: 'Scheduled watering, soil aeration, pruning, and horticultural care that keep community greenery vibrant and beautifully presented.',
    category: 'Landscape & Garden',
    serviceLink: '/services/landscaping',
    coords: { x: 15, y: 60 },
    tag: 'Zone 07 · Green Belts & Lawns',
    highlightText: 'Scheduled irrigation, organic plant nutrition & hedge shaping',
  },
  {
    id: 8,
    label: 'Pesticide & Pest Control',
    sketchTitle: 'Pesticide & Fumigation',
    role: 'Thermal Fogging, Anti-Larval & Perimeter Barrier',
    desc: 'Safe, odorless government-approved pest management protecting premises from termites, mosquitoes, and rodents.',
    category: 'Pesticide & Pest Control',
    serviceLink: '/services/pesticide',
    coords: { x: 50, y: 56 },
    tag: 'Zone 08 · Pest Suppression',
    highlightText: 'Anti-larval thermal fogging & non-toxic termite suppression',
  },
  {
    id: 9,
    label: 'Clubhouse & Amenities',
    sketchTitle: 'Clubhouse & Amenities',
    role: 'Swimming Pool, Gym & Community Enclaves',
    desc: 'Twice-daily pool chemical balancing, gym equipment sanitization, sports court upkeep, and banquet event coordination.',
    category: 'Clubhouse & Amenities',
    serviceLink: '/services/clubhouse',
    coords: { x: 7, y: 74 },
    tag: 'Zone 09 · Lifestyle Clubhouse',
    highlightText: 'Twice-daily pool chlorine testing & pristine fitness facilities',
  },
];

const iconMap: Record<number, React.ReactNode> = {
  1: <Shield className="w-3.5 h-3.5" />,
  2: <Zap className="w-3.5 h-3.5" />,
  3: <Flame className="w-3.5 h-3.5" />,
  4: <Droplets className="w-3.5 h-3.5" />,
  5: <Filter className="w-3.5 h-3.5" />,
  6: <Sparkles className="w-3.5 h-3.5" />,
  7: <Trees className="w-3.5 h-3.5" />,
  8: <Bug className="w-3.5 h-3.5" />,
  9: <Building className="w-3.5 h-3.5" />,
};

export const CommunityZoneSection: React.FC<CommunityZoneProps> = ({ onRequestAssessment }) => {
  const [activeId, setActiveId] = useState<number>(6); // Start focused on Road Cleaning Machine
  const [isTourActive, setIsTourActive] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const tourTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeElement = COMMUNITY_ELEMENTS.find((el) => el.id === activeId) || COMMUNITY_ELEMENTS[0];

  useEffect(() => {
    if (!isTourActive) {
      if (tourTimerRef.current) clearInterval(tourTimerRef.current);
      return;
    }

    tourTimerRef.current = setInterval(() => {
      setActiveId((prev) => (prev % COMMUNITY_ELEMENTS.length) + 1);
    }, 4200);

    return () => {
      if (tourTimerRef.current) clearInterval(tourTimerRef.current);
    };
  }, [isTourActive]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.cz-anim', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSelectElement = (id: number) => {
    setActiveId(id);
    setIsTourActive(false);
  };

  const toggleTour = () => {
    setIsTourActive((prev) => !prev);
  };

  return (
    <section
      id="community-zone"
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-obsidian-950 text-ivory overflow-hidden border-t border-charcoal-800"
    >
      {/* Background Architectural Grid and Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-architectural opacity-25" />
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[350px] bg-gold/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 cz-anim">
          <span className="inline-block px-3.5 py-1 rounded-full bg-charcoal-800 text-gold text-xs font-semibold tracking-widest uppercase border border-gold/30 mb-3">
            Interactive Community Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            We Manage <span className="text-gold-gradient italic">Every Corner</span> of Your Property
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-softgrey max-w-xl mx-auto font-light leading-relaxed">
            Directly modeled from our operational layout: inspect how our teams maintain villas, avenue sweepers, glass towers, and rooftop mechanical systems simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ── LEFT COLUMN: Tour Controls & 9-Point Legend ── */}
          <div className="lg:col-span-5 space-y-5 cz-anim">

            {/* "Touch to Enter / Explore Community Zone" Tour Control Bar */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-charcoal-900/90 border border-gold/35 shadow-gold-subtle">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isTourActive ? 'bg-emerald-400' : 'bg-gold'} opacity-75`} />
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isTourActive ? 'bg-emerald-500' : 'bg-gold'}`} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
                    <span>Touch to Explore Community Zone</span>
                    <Sparkles className="w-3 h-3 text-gold" />
                  </p>
                  <p className="text-[10px] text-softgrey">
                    {isTourActive ? 'Live walkthrough running (9 sketch points)' : 'Click any point to inspect operations'}
                  </p>
                </div>
              </div>

              <button
                onClick={toggleTour}
                className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-gold text-xs font-semibold border border-gold/40 flex items-center gap-1.5 transition-all shadow-sm"
                title={isTourActive ? 'Pause community tour' : 'Play community tour'}
              >
                {isTourActive ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-gold" />
                    <span>Tour</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive 9-Item Numbered Legend matching user's sketch */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-softgrey">
                <span className="font-semibold text-gold">9 Monitored Facility Points:</span>
                <span className="font-mono text-gold/80">Active: #{activeId}</span>
              </div>

              {/* 2-column grid with clear readable labels (never cut off) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                {COMMUNITY_ELEMENTS.map((item) => {
                  const isSelected = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectElement(item.id)}
                      className={`text-left p-2.5 rounded-xl border transition-all text-xs flex items-center gap-2.5 group ${
                        isSelected
                          ? 'bg-gold/15 border-gold text-white shadow-gold-subtle ring-1 ring-gold/40'
                          : 'bg-charcoal-900/60 border-charcoal-800 text-softgrey hover:text-white hover:border-gold/40'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-gold text-obsidian shadow-sm'
                            : 'border border-gold/60 text-gold group-hover:border-gold group-hover:bg-gold/10'
                        }`}
                      >
                        {item.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-semibold text-ivory group-hover:text-gold transition-colors leading-tight">
                          {item.sketchTitle}
                        </div>
                        <div className="text-[9px] text-softgrey/70 truncate mt-0.5">
                          {item.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onRequestAssessment}
                className="px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-obsidian font-bold text-xs sm:text-sm rounded-lg shadow-gold-hover hover:brightness-105 transition-all flex items-center gap-2 group border border-gold/50"
              >
                <span>Request Site Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to={activeElement.serviceLink}
                className="px-4 py-3 rounded-lg border border-charcoal-700 hover:border-gold/50 text-ivory/80 hover:text-gold text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <span>Explore {activeElement.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-gold" />
              </Link>
            </div>

          </div>

          {/* ── RIGHT COLUMN: 100% Unobstructed Visual Scene + Dedicated Inspector Dock ── */}
          <div className="lg:col-span-7 cz-anim space-y-4">

            {/* Architectural Display Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-charcoal-950 shadow-elevated-dark group">

              {/* Top Scene HUD Header */}
              <div className="absolute top-0 left-0 right-0 z-30 px-4 py-2.5 bg-gradient-to-b from-obsidian/90 via-obsidian/60 to-transparent flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] tracking-widest uppercase font-semibold text-white">
                    Integrated Community Scene
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-charcoal-800/90 text-gold border border-gold/30 font-mono">
                    All 9 Sketch Points Active
                  </span>
                </div>

                <div className="text-[10px] text-softgrey tracking-wider hidden sm:block">
                  Click any numbered pin to inspect
                </div>
              </div>

              {/* Master Visual Scene - 100% Full View Without Any Obstructing Overlay */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src="/images/hero-community.jpg"
                  alt="Sri Thrayi Integrated Community Zone"
                  className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-[1.01]"
                />

                {/* Atmospheric Tint & Corner Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-obsidian/30 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 pointer-events-none rounded-2xl" />

                {/* Subtle Moving Radar Scan Bar */}
                <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none animate-[pulse_4s_ease-in-out_infinite]" />

                {/* ── ALL 9 INTERACTIVE PINS (100% UNBLOCKABLE & CLEARLY VISIBLE) ── */}
                {COMMUNITY_ELEMENTS.map((item) => {
                  const isSelected = item.id === activeId;
                  return (
                    <div
                      key={item.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer transition-transform duration-300 hover:scale-125"
                      style={{
                        left: `${item.coords.x}%`,
                        top: `${item.coords.y}%`,
                      }}
                      onClick={() => handleSelectElement(item.id)}
                    >
                      {/* Pulse Ripple when selected */}
                      {isSelected && (
                        <div className="absolute -inset-3 rounded-full bg-gold/40 animate-ping pointer-events-none" />
                      )}

                      {/* Hotspot Pin Button */}
                      <button
                        className={`relative flex items-center justify-center transition-all duration-300 rounded-full shadow-lg ${
                          isSelected
                            ? 'w-8 h-8 sm:w-9 sm:h-9 bg-gold text-obsidian ring-4 ring-gold/50 scale-110 shadow-gold-hover'
                            : 'w-6 h-6 sm:w-7 sm:h-7 bg-charcoal-900/90 hover:bg-gold hover:text-obsidian text-gold border border-gold/70 backdrop-blur-md'
                        }`}
                        aria-label={`Inspect ${item.label}`}
                      >
                        <span className="text-[11px] sm:text-xs font-black leading-none">
                          {item.id}
                        </span>
                      </button>

                      {/* Pin Label Tag */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider whitespace-nowrap pointer-events-none transition-all duration-300 shadow-md ${
                          isSelected
                            ? 'bg-obsidian/95 text-gold border border-gold/60 opacity-100 scale-100'
                            : 'bg-obsidian/75 text-white/80 opacity-0 group-hover:opacity-100 scale-90'
                        }`}
                      >
                        {item.sketchTitle}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Scene Status Strip */}
              <div className="px-4 py-2 bg-charcoal-900 border-t border-charcoal-800 flex items-center justify-between text-[10px] text-softgrey">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Sri Thrayi 360° Community Ecosystem</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-softgrey/70">
                    Hyderabad & Telangana
                  </span>
                  <span className="text-gold font-mono font-bold">
                    Zone 0{activeElement.id} of 09 Selected
                  </span>
                </div>
              </div>

            </div>

            {/* ── DEDICATED INSPECTOR CONSOLE (BELOW IMAGE - NEVER COVERS ANY PIN) ── */}
            <div className="p-4 sm:p-5 rounded-2xl bg-charcoal-900/95 border border-gold/40 shadow-elevated-dark backdrop-blur-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left details */}
                <div className="space-y-1.5 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-obsidian flex items-center justify-center text-xs font-black shrink-0 shadow-sm">
                      {iconMap[activeElement.id]}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold font-mono">
                      {activeElement.tag}
                    </span>
                    <span className="text-softgrey/60 text-[10px]">·</span>
                    <span className="text-xs sm:text-sm font-serif text-white tracking-wide font-medium">
                      {activeElement.role}
                    </span>
                  </div>

                  <p className="text-xs text-softgrey leading-relaxed">
                    {activeElement.desc}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium pt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{activeElement.highlightText}</span>
                  </div>
                </div>

                {/* Right Action buttons */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2.5 shrink-0 border-t sm:border-t-0 sm:border-l border-charcoal-700/60 pt-3 sm:pt-0 sm:pl-5">
                  <Link
                    to={activeElement.serviceLink}
                    className="px-4 py-2 rounded-lg bg-gold/15 hover:bg-gold text-gold hover:text-obsidian text-xs font-bold border border-gold/50 transition-all flex items-center gap-1.5 group/btn shadow-sm"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <button
                    onClick={onRequestAssessment}
                    className="text-[11px] text-softgrey hover:text-white underline underline-offset-2 transition-colors"
                  >
                    Book Site Assessment
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* ── Sub-Section Services Ticker Strip ── */}
        <div className="border-t border-charcoal-800/80 bg-obsidian-900/60 rounded-xl mt-10 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-softgrey">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-wider">
              9 Integrated Disciplines:
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
