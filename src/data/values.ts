export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export const CORE_VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Trust',
    description: 'We earn long-term partnerships by delivering on everyday commitments with integrity, transparency, and dependable operational routines.',
  },
  {
    number: '02',
    title: 'Accountability',
    description: 'We take direct responsibility for our personnel, service quality, and rapid response to client feedback and facility needs.',
  },
  {
    number: '03',
    title: 'Professionalism',
    description: 'Our on-site teams are expected to maintain neat presentation, courteous communication, and respect for client premises at all times.',
  },
  {
    number: '04',
    title: 'Responsiveness',
    description: 'Facility requirements cannot wait. We structure supervisory escalation to address daily inquiries and requests without unnecessary delay.',
  },
  {
    number: '05',
    title: 'Respect',
    description: 'We respect property occupants, visitors, and our frontline staff, fostering a collaborative and dignity-driven operational culture.',
  },
  {
    number: '06',
    title: 'Continuous Improvement',
    description: 'Through regular site reviews and checklist inspections, we systematically refine routines to elevate everyday property standards.',
  },
];

export const OPERATING_PRINCIPLES = [
  {
    title: 'Dependable Operations',
    description: 'Clear routines and responsive coordination help everyday facility needs receive timely attention.',
  },
  {
    title: 'Service-Focused Teams',
    description: 'Personnel are expected to maintain professional conduct, communicate clearly and respect each client environment.',
  },
  {
    title: 'Integrated Support',
    description: 'Multiple essential services can be coordinated through one dependable facility-management partner.',
  },
  {
    title: 'Attention to Safety',
    description: 'Work practices should prioritize the safety of occupants, employees, visitors and property.',
  },
  {
    title: 'Flexible Service Planning',
    description: 'Service requirements can be planned around the size, operating hours and specific needs of each property.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Assessment',
    description: 'We understand the property, operating environment, footfall volume, and specific service priorities.',
  },
  {
    step: '02',
    title: 'Service Planning',
    description: 'We define the required personnel, routines, shift schedules, and daily communication processes.',
  },
  {
    step: '03',
    title: 'Mobilisation',
    description: 'We coordinate the team, on-site responsibilities, safety briefings, and equipment requirements.',
  },
  {
    step: '04',
    title: 'Ongoing Supervision',
    description: 'We maintain regular communication, review service delivery via checklists, and respond to evolving needs.',
  },
];
