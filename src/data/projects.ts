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
      "As a second-generation immigrant, I speak Mandarin but struggle to read it fluently. I built iLiterate to help other second-generation immigrants develop reading skills in their native language — lessons, flashcards, and a speed reader, built on Next.js and Supabase with OpenAI, Gemini, and ElevenLabs.",
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
