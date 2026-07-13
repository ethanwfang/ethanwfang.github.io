export interface Project {
  title: string;
  blurb: string;
  blurbHtml?: string;
  tags: string[];
  href?: string;
  year: string;
  blogPost?: string;
}

export const projects: Project[] = [
  {
    title: 'iLiterate',
    year: '2026',
    blurb:
      "As a second generation immigrant, I speak my native language (Mandarin) but struggle to read fluently. I built iLiterate as an easy way for other second gen immigrants to develop their reading skills.",
    tags: ['Next.js', 'Supabase', 'LLMs'],
    href: 'https://iliterate.org',
  },
  {
    title: 'XRDimage',
    year: '2023',
    blurb:
      'Python package that identifies alpha and beta rings in noisy X-ray diffraction images so researchers can run downstream analysis. Published to PyPI.',
    tags: ['Python', 'PyPI', 'Scientific Computing'],
    href: 'https://pypi.org/project/XRDimage/',
  },
];
