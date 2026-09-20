export interface EnvironmentItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const ENVIRONMENTS_DATA: EnvironmentItem[] = [
  {
    id: 'corporate',
    title: 'Corporate Offices',
    subtitle: 'Business Parks & Workplaces',
    description: 'Disciplined cleaning schedules, discreet security, and reliable electrical upkeep that help professional workspaces function smoothly and present a polished image.',
    image: '/images/environments/corporate.jpg',
    features: ['Workstation & meeting room upkeep', 'Front-desk visitor coordination', 'Restroom sanitization cycles'],
  },
  {
    id: 'residential',
    title: 'Residential Communities',
    subtitle: 'Gated Societies & High-Rise Apartments',
    description: 'Comprehensive day-to-day coordination for clubhouse maintenance, common-area cleanliness, perimeter security, and outdoor green care for community living.',
    image: '/images/environments/residential.jpg',
    features: ['Main-gate access verification', 'Lawn & garden landscape upkeep', 'Common area lighting & water checks'],
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    subtitle: 'Multi-Tenant Commercial Towers',
    description: 'Coordinated facility care for high-traffic entryways, elevators, corridors, and baseline infrastructure support tailored to tenant operating hours.',
    image: '/images/environments/commercial.jpg',
    features: ['Lobby & elevator foyer cleaning', 'Premise patrol rounds', 'Daily infrastructure inspections'],
  },
  {
    id: 'retail',
    title: 'Retail Properties',
    subtitle: 'Showrooms & Shopping Complexes',
    description: 'High-standard floor maintenance, sparkling shopfront glass, spotless customer restrooms, and vigilant access guidance for high-footfall shopping areas.',
    image: '/images/environments/retail.jpg',
    features: ['Continuous floor maintenance', 'Customer guidance support', 'Waste disposal coordination'],
  },
  {
    id: 'educational',
    title: 'Educational Institutions',
    subtitle: 'Schools, Colleges & Academic Centers',
    description: 'Safety-first perimeter oversight, campus sanitation, clean corridors, and tidy landscape grounds designed to support a safe and healthy learning environment.',
    image: '/images/environments/educational.jpg',
    features: ['Entry checkpoint vigilance', 'Classroom & hallway hygiene', 'Playground & outdoor greenery upkeep'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Institutional Facilities',
    subtitle: 'Clinics, Labs & Institutional Properties',
    description: 'Thorough sanitation routines, careful chemical handling, disciplined housekeeping, and organized front-of-house support for sensitive institutional environments.',
    image: '/images/environments/healthcare.jpg',
    features: ['Strict sanitation protocols', 'Discreet orderly staff conduct', 'Uninterrupted plumbing & power watch'],
  },
];
