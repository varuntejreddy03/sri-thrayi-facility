export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  heroDesc: string;
  image: string;
  iconName: string;
  featured?: boolean;
  scope: string[];
  challenges: { title: string; desc: string }[];
  approach: string[];
  suitableEnvironments: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'security',
    slug: 'security',
    title: 'Security Services',
    shortDesc: 'Professional security support focused on vigilance, access control, visitor assistance and a reassuring on-site presence.',
    heroHeadline: 'Vigilant, Disciplined On-Site Security Support',
    heroDesc: 'Dependable front-of-property presence and visitor access coordination designed to keep occupants, visitors, and facility premises safeguarded day and night.',
    image: '/images/services/security.jpg',
    iconName: 'Shield',
    featured: true,
    scope: [
      'Entrance and exit monitoring & gate control',
      'Visitor guidance and register management',
      'Access-control support and vehicle verification',
      'Patrol assistance and perimeter rounds',
      'Incident reporting and timely escalation',
      'Professional front-of-property presence',
    ],
    challenges: [
      {
        title: 'Unchecked Premise Access',
        desc: 'Unregulated footfalls and undocumented visitor entries can create security risks for commercial and residential premises.',
      },
      {
        title: 'Lack of Timely Incident Reporting',
        desc: 'Small operational oversights go unnoticed without structured patrol rounds and verified daily logs.',
      },
      {
        title: 'Inconsistent Guard Demeanor',
        desc: 'Visitors require a polite, alert, and disciplined front-of-house presence that reflects positively on the property.',
      },
    ],
    approach: [
      'Site briefing to map out entry, exit, and vulnerable perimeter checkpoints.',
      'Deployment of neatly uniformed personnel trained in visitor assistance and etiquette.',
      'Regular logbook recording and supervision for shift handovers and escalation.',
      'Periodic supervisory site visits to maintain standards and address property feedback.',
    ],
    suitableEnvironments: [
      'Corporate Offices & Tech Parks',
      'Gated Residential Communities',
      'Commercial Towers',
      'Retail & Shopping Centers',
      'Institutional Campuses',
    ],
  },
  {
    id: 'electrical',
    slug: 'electrical',
    title: 'Electrical Services',
    shortDesc: 'Responsive electrical support for routine inspections, minor repairs, fault reporting and the dependable operation of essential systems.',
    heroHeadline: 'Dependable Electrical Maintenance & System Upkeep',
    heroDesc: 'Systematic visual checks, routine lighting maintenance, and responsive troubleshooting to ensure smooth, safe everyday electrical operations across your premises.',
    image: '/images/services/electrical.jpg',
    iconName: 'Zap',
    scope: [
      'Routine visual inspections of distribution panels & LT switchgear',
      'Minor electrical maintenance and replacements',
      'Lighting and fixture operational support',
      'Fault identification, logging and prompt reporting',
      'Preventive maintenance scheduling and check routines',
      'Diesel generator (DG) routine checks and backup coordination',
    ],
    challenges: [
      {
        title: 'Frequent Lighting Downtime',
        desc: 'Burnt-out common area lights and malfunctioning fixtures reduce safety and impact property presentation.',
      },
      {
        title: 'Unnoticed Panel Overheating',
        desc: 'Lack of routine visual inspections can let minor loose wiring turn into disruptive power faults.',
      },
      {
        title: 'Slow Response to Everyday Faults',
        desc: 'Occupants face downtime when small electrical glitches are not rectified within predictable turnarounds.',
      },
    ],
    approach: [
      'Structured daily walkthroughs of main distribution boards, common area lighting, and backup switchgear.',
      'Immediate attention to minor repairs like switches, MCBs, fixtures, and socket replacements.',
      'Systematic fault logging with immediate escalation to licensed specialists for high-voltage requirements.',
      'Preventive maintenance checklists to prevent repetitive electrical disruptions.',
    ],
    suitableEnvironments: [
      'Commercial Office Buildings',
      'Residential Apartment Complexes',
      'Retail Stores & Showrooms',
      'Warehouses & Logistical Hubs',
      'Educational Institutions',
    ],
  },
  {
    id: 'fire',
    slug: 'fire',
    title: 'Fire & Safety Systems',
    shortDesc: 'Comprehensive fire protection support: alarm checks, hydrant pressure testing, extinguisher audits, and emergency readiness routines.',
    heroHeadline: 'Vigilant Fire Safety & Emergency Preparedness',
    heroDesc: 'Dedicated inspections, certified fire fighting pump testing, smoke detector audits, and evacuation drill coordination keeping your premises safe and compliant.',
    image: '/images/services/fire.jpg',
    iconName: 'Flame',
    scope: [
      'Fire alarm control panel (FACP) status logging & zone testing',
      'Fire hydrant line pressure monitoring & jockey pump testing',
      'Fire extinguisher inspections, weight verification & refilling schedules',
      'Sprinkler system visual audits and valve condition checks',
      'Smoke and heat detector cleaning & functional testing',
      'Emergency evacuation signage checks & mock drill coordination',
    ],
    challenges: [
      {
        title: 'Depressurized Hydrant Lines',
        desc: 'Undetected pipeline leaks or non-functional jockey pumps can leave fire hydrants dry during sudden emergencies.',
      },
      {
        title: 'Expired Fire Extinguishers',
        desc: 'Without regular auditing, chemical extinguishers lose pressure or pass expiration dates without notice.',
      },
      {
        title: 'False Alarms & Sensor Faults',
        desc: 'Dust-laden smoke detectors trigger frequent false alarms, leading occupants to disregard emergency warnings.',
      },
    ],
    approach: [
      'Daily visual inspection and logging of main fire alarm panels and pressure gauges.',
      'Weekly automated run-testing of diesel and electric fire hydrant booster pumps.',
      'Quarterly physical weight and seal auditing of all ABC and CO2 fire extinguishers.',
      'Comprehensive fire evacuation mapping and regular staff safety briefing routines.',
    ],
    suitableEnvironments: [
      'Commercial High-Rise Towers',
      'Gated Villa & Apartment Communities',
      'Industrial Warehouses & Factories',
      'Educational & Institutional Campuses',
      'Hospitals & Healthcare Centers',
    ],
  },
  {
    id: 'plumbing',
    slug: 'plumbing',
    title: 'Plumbing Services',
    shortDesc: 'Practical plumbing maintenance and responsive assistance for leaks, fixtures, water systems and everyday facility requirements.',
    heroHeadline: 'Practical Plumbing Care & Water System Maintenance',
    heroDesc: 'Proactive upkeep of water supply lines, drainage networks, sanitary fixtures, and booster systems to prevent property damage and ensure uninterrupted water flow.',
    image: '/images/services/plumbing.jpg',
    iconName: 'Droplets',
    scope: [
      'Leak inspection and minor repair support',
      'Tap, flush valve, and fixture maintenance',
      'Drainage issue reporting and block resolution',
      'Water-system checks and tank level observation',
      'Preventive plumbing attention for common areas',
      'Coordination of larger civil repair requirements',
    ],
    challenges: [
      {
        title: 'Water Wastage and Seepage',
        desc: 'Undetected pipe leakages waste precious water and cause unsightly structural seepage and wall dampness.',
      },
      {
        title: 'Sanitary Fixture Malfunctions',
        desc: 'Faulty flush valves and leaking taps in high-traffic restrooms inconvenience employees and visitors.',
      },
      {
        title: 'Drainage Clogs & Backflow',
        desc: 'Unmonitored storm drains and kitchen waste traps can lead to foul odours and localized flooding during rains.',
      },
    ],
    approach: [
      'Routine monitoring of overhead tanks, sump levels, pumps, and central supply pipelines.',
      'Prompt replacement of worn-out washers, cartridge valves, traps, and pipe joints.',
      'Scheduled cleaning and desilt inspection of floor traps and rainwater gullies.',
      'Detailed log of water readings and plumbing maintenance interventions.',
    ],
    suitableEnvironments: [
      'High-Rise Residential Complexes',
      'Corporate Towers & Business Centers',
      'Commercial Retail Spaces',
      'Hospitals & Diagnostic Centers',
      'Educational Facilities',
    ],
  },
  {
    id: 'wtp-stp',
    slug: 'wtp-stp',
    title: 'WTP & STP Management',
    shortDesc: 'End-to-end operation of Water Treatment Plants and Sewage Treatment Plants ensuring water safety, recycling compliance, and odor-free operation.',
    heroHeadline: 'Reliable WTP & STP Plant Operations & Water Stewardship',
    heroDesc: 'Certified environmental facility operators managing aeration blowers, dosing pumps, RO membranes, and treated water reuse for sustainable community irrigation and flushing.',
    image: '/images/services/wtp-stp.jpg',
    iconName: 'Filter',
    scope: [
      'Daily water testing (pH, TDS, chlorine residual, dissolved oxygen)',
      'Aeration tank blower monitoring and dissolved oxygen control',
      'Coagulant, chlorine, and chemical dosing management',
      'Filter backwashing (sand, carbon, and ultrafiltration media)',
      'Sludge handling, dewatering, and disposal coordination',
      'Treated effluent recycling monitoring for flushing and landscape irrigation',
    ],
    challenges: [
      {
        title: 'Foul Odors & Bacterial Imbalance',
        desc: 'Inadequate aeration or irregular biological dosing causes microbial die-off, leading to offensive neighborhood odors.',
      },
      {
        title: 'PCB Environmental Non-Compliance',
        desc: 'Discharging improperly treated effluent violates Pollution Control Board (PCB) norms and risks heavy penalties.',
      },
      {
        title: 'Equipment Corrosion & Pump Failure',
        desc: 'Corrosive sewage gases quickly deteriorate unmaintained submersible pumps, blowers, and valves.',
      },
    ],
    approach: [
      'Round-the-clock shift-based monitoring by trained biological and chemical plant technicians.',
      'Strict chemical dosing regimes to maintain optimal MLSS (Mixed Liquor Suspended Solids) levels.',
      'Daily logging of water quality parameters with periodic accredited laboratory testing reports.',
      'Preventive maintenance schedules for air blowers, dosing pumps, and motorized scrapers.',
    ],
    suitableEnvironments: [
      'Large Gated Townships & Villa Communities',
      'Commercial IT Campuses & Tech Parks',
      'Hospitality Resorts & Hotels',
      'Industrial Parks & Manufacturing Units',
      'High-Density Apartment Complexes',
    ],
  },
  {
    id: 'housekeeping',
    slug: 'housekeeping',
    title: 'Housekeeping Services',
    shortDesc: 'Structured cleaning and upkeep for offices, common areas, residential properties and commercial facilities.',
    heroHeadline: 'Rigorous, Hygienic Housekeeping & Janitorial Care',
    heroDesc: 'Disciplined cleaning routines, sanitized washrooms, spotless corridors, and responsible waste management that sustain a clean, hygienic, and welcoming property.',
    image: '/images/services/housekeeping.jpg',
    iconName: 'Sparkles',
    scope: [
      'Common-area cleaning and corridor buffing',
      'Office cleaning support and workstation dusting',
      'Washroom deep upkeep and sanitization checks',
      'Floor and surface care with appropriate cleaning agents',
      'Waste handling, segregation, and disposal support',
      'Scheduled cleaning routines for daily, weekly, and monthly tasks',
    ],
    challenges: [
      {
        title: 'Inconsistent Hygiene Standards',
        desc: 'High-footfall washrooms and lobbies quickly deteriorate without strict hourly checklists and supervision.',
      },
      {
        title: 'Surface Wear & Scuffs',
        desc: 'Improper chemicals or abrasive tools damage polished granite, tiles, glass partitions, and wooden furniture.',
      },
      {
        title: 'Poor Waste Management',
        desc: 'Delayed trash clearance results in unpleasant odors and pest attractants in service corridors.',
      },
    ],
    approach: [
      'Deployment of uniformed housekeeping personnel equipped with high-grade cleaning tools and color-coded microfiber cloths.',
      'Rigorous daily cleaning schedules for lobbies, corridors, glass surfaces, and stairwells.',
      'Hourly washroom checklist management with replenishment of hand washes and paper consumables.',
      'Proper waste segregation and hygienic transfer to centralized collection points.',
    ],
    suitableEnvironments: [
      'Corporate Workplaces & Co-working Hubs',
      'Residential Apartment Towers & Clubhouses',
      'Commercial Showrooms & Retail Malls',
      'Diagnostic Centers & Clinics',
      'Financial Institutions & Banks',
    ],
  },
  {
    id: 'landscaping',
    slug: 'landscaping',
    title: 'Landscape & Garden',
    shortDesc: 'Planned care for lawns, plants and outdoor spaces to create greener, healthier and more welcoming environments.',
    heroHeadline: 'Lush, Well-Maintained Outdoor & Green Spaces',
    heroDesc: 'Scheduled watering, soil aeration, pruning, and horticultural care that keep commercial lawns, courtyards, and potted plants vibrant and beautifully presented.',
    image: '/images/services/landscaping.jpg',
    iconName: 'Trees',
    scope: [
      'Lawn mowing and green carpet garden upkeep',
      'Plant care, de-weeding, and soil nourishment',
      'Hedge trimming, shaping, and pruning',
      'Outdoor-area cleanliness and leaf waste clearing',
      'Seasonal maintenance planning and replanting assistance',
      'Landscape presentation for main entrances and pathways',
    ],
    challenges: [
      {
        title: 'Patchy Lawns and Overgrowth',
        desc: 'Unattended lawns quickly develop brown patches, wild weeds, and unkempt hedges that harm building aesthetics.',
      },
      {
        title: 'Inconsistent Watering Schedules',
        desc: 'Plants wither in heat without a regular, calibrated morning and evening watering regime.',
      },
      {
        title: 'Seasonal Plant Diseases',
        desc: 'Ornamental greenery can succumb to common pests and soil nutrient depletion if not diagnosed early.',
      },
    ],
    approach: [
      'Structured daily watering and seasonal fertilization schedules tailored to plant species.',
      'Routine edging, hedge trimming, and clearing of dry leaves along walkways.',
      'Application of organic compost and soil aeration to stimulate healthy root growth.',
      'Dedicated focus on entrance planter boxes and focal landscape zones for a lasting impression.',
    ],
    suitableEnvironments: [
      'Corporate Campuses & IT Parks',
      'Gated Community Lawns & Parks',
      'Commercial Property Frontages',
      'Institutions & University Grounds',
      'Hospitality & Wellness Centres',
    ],
  },
  {
    id: 'pesticide',
    slug: 'pesticide',
    title: 'Pesticide & Pest Control',
    shortDesc: 'Safe, certified pest management and fumigation protecting residential, commercial and landscape areas from termites, mosquitoes, and rodents.',
    heroHeadline: 'Targeted, Odor-Safe Pest Management & Fumigation',
    heroDesc: 'Systematic perimeter treatments, herbal gel applications, anti-larval spraying, and rodent barrier management creating pest-free, hygienic living and working environments.',
    image: '/images/services/pesticide.jpg',
    iconName: 'Bug',
    scope: [
      'Thermal fogging & anti-larval treatment for mosquito suppression',
      'Herbal gel baiting for cockroaches in pantries and kitchens',
      'Subterranean termite inspections and drill-and-inject barrier treatments',
      'Rodent bait stations and tamper-proof perimeter traps',
      'Bed bug and wood borer specialized eradication treatments',
      'Scheduled preventive treatments with certified non-toxic chemicals',
    ],
    challenges: [
      {
        title: 'Mosquito Breeding in Greenery & Storm Drains',
        desc: 'Stagnant rainwater in planter trays and drainage gullies creates mosquito breeding swarms that risk community health.',
      },
      {
        title: 'Pantry & Food Area Infestations',
        desc: 'Cockroaches and ants easily colonize kitchen cabinets, cafeteria drains, and waste disposal rooms without regular treatment.',
      },
      {
        title: 'Structural Termite Damage',
        desc: 'Undetected subterranean termites quietly destroy wooden doorframes, false ceilings, and interior fixtures from within.',
      },
    ],
    approach: [
      'Comprehensive property inspection to identify entry harborage points, food sources, and breeding hotspots.',
      'Deployment of eco-friendly, odorless, government-approved chemical treatments safe for children and pets.',
      'Routine evening thermal fogging across community pathways, garden bushes, and drainage networks.',
      'Detailed service logs detailing chemical formulations, dilution ratios, and upcoming booster visit dates.',
    ],
    suitableEnvironments: [
      'Residential Villa Communities & Apartments',
      'Corporate Cafeterias & Commercial Offices',
      'Food Processing & Hospitality Units',
      'Schools, Daycares & Campuses',
      'Warehouses & Logistics Hubs',
    ],
  },
  {
    id: 'clubhouse',
    slug: 'clubhouse',
    title: 'Clubhouse & Amenities Management',
    shortDesc: 'Dedicated hospitality and maintenance management for community clubhouses, gymnasiums, sports courts, pools, and guest lounges.',
    heroHeadline: 'Premium Clubhouse & Lifestyle Amenity Management',
    heroDesc: 'Trained concierge staff, certified pool lifeguards/technicians, sports court upkeep, and spotless banquet preparation keeping community amenities operating at 5-star standards.',
    image: '/images/services/clubhouse.jpg',
    iconName: 'Building',
    scope: [
      'Swimming pool filtration, chemical balancing (chlorine/pH) & tile vacuuming',
      'Gymnasium equipment sanitation, lubrication, and safety inspections',
      'Badminton, squash, and tennis court surface cleaning & net upkeep',
      'Concierge reception, guest assistance, and facility booking management',
      'Event hall and banquet area turnaround cleaning & audio-visual support',
      'Restroom, shower, and locker room hourly hygiene sanitization',
    ],
    challenges: [
      {
        title: 'Pool Water Cloudiness & Chemical Imbalance',
        desc: 'Heavy weekend swimmer loads cause cloudy water and algae growth without precise twice-daily chemical calibration.',
      },
      {
        title: 'Gym Machine Wear & Safety Hazards',
        desc: 'Unchecked cable pulleys and sweat-damaged fitness upholstery compromise member safety and satisfaction.',
      },
      {
        title: 'Disorganized Resident Booking Conflicts',
        desc: 'Party halls and court reservations require transparent coordination to prevent scheduling overlaps and disputes.',
      },
    ],
    approach: [
      'Certified pool operators conducting twice-daily chemical testing and automated bottom suction cleaning.',
      'Hourly sanitization logs for high-touch gym handles, cardio consoles, and locker room benches.',
      'Digital booking log assistance for banquet halls, guest rooms, and indoor sporting facilities.',
      'Proactive vendor coordination for fitness machinery servicing, court recoating, and sound system maintenance.',
    ],
    suitableEnvironments: [
      'Gated Villa Townships & Luxury Enclaves',
      'High-Rise Residential Condominiums',
      'Corporate Employee Recreation Centers',
      'Private Sports & Recreational Clubs',
      'Gated Community Resident Associations',
    ],
  },
];
