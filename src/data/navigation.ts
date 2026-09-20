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
      { label: 'Security Services', path: '/services/security', desc: 'Access control & vigilance' },
      { label: 'Electrical Services', path: '/services/electrical', desc: 'System checks & minor repairs' },
      { label: 'Plumbing Services', path: '/services/plumbing', desc: 'Piping & fixture upkeep' },
      { label: 'Landscaping & Gardening', path: '/services/landscaping', desc: 'Lawn & green space care' },
      { label: 'Housekeeping Services', path: '/services/housekeeping', desc: 'Daily hygiene & sanitation' },
    ],
  },
  { label: 'Why Us', path: '/#why-us' },
  { label: 'Environments', path: '/#environments' },
  { label: 'Contact', path: '/contact' },
];
