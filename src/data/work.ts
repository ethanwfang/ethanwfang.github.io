export interface WorkEntry {
  role: string;
  org: string;
  period: string;
  location?: string;
  domain?: string;
  mark?: string;
  href?: string;
}

export const work: WorkEntry[] = [
  {
    role: 'Lead Quantitative Analytics Associate',
    org: 'KeyBank',
    period: '2026 — Present',
    location: 'Cleveland, OH',
    domain: 'key.com',
  },
  {
    role: 'Research Assistant',
    org: 'Case Western Reserve University',
    period: '2022 — 2026',
    location: 'Cleveland, OH',
    domain: 'case.edu',
    href: 'https://case.edu',
  },
  {
    role: 'Growth',
    org: 'Clarity',
    period: '2025 — 2026',
    domain: 'clarity-markets.com',
    href: 'https://www.clarity-markets.com/',
  },
  {
    role: 'Quantitative Analytics Intern',
    org: 'KeyBank',
    period: '2025 — 2026',
    location: 'Cleveland, OH',
    domain: 'key.com',
  },
  {
    role: 'Engineer Intern',
    org: 'MISCO Refractometer',
    period: '2024',
    domain: 'misco.com',
  },
];
