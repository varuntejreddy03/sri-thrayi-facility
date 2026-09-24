export interface NavLinkItem {
  label: string;
  path: string;
  children?: { label: string; path: string; desc?: string }[];
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'All Services', path: '/services', desc: 'Integrated facility overview' },
      { label: 'Security', path: '/services/security', desc: 'Access control & vigilance' },
      { label: 'Electrical', path: '/services/electrical', desc: 'System checks & minor repairs' },
      { label: 'Fire & Safety', path: '/services/fire', desc: 'Alarm, hydrant & safety audits' },
      { label: 'Plumbing', path: '/services/plumbing', desc: 'Piping & fixture upkeep' },
      { label: 'WTP & STP', path: '/services/wtp-stp', desc: 'Water & sewage treatment operations' },
      { label: 'Housekeeping', path: '/services/housekeeping', desc: 'Daily hygiene & sanitation' },
      { label: 'Landscape & Garden', path: '/services/landscaping', desc: 'Lawn & green space care' },
      { label: 'Pesticide & Pest Control', path: '/services/pesticide', desc: 'Fumigation & barrier treatment' },
      { label: 'Clubhouse & Amenities', path: '/services/clubhouse', desc: 'Pool, gym & amenity management' },
    ],
  },
  { label: 'Why Us', path: '/#why-us' },
  { label: 'Environments', path: '/#environments' },
  { label: 'Contact', path: '/contact' },
];
