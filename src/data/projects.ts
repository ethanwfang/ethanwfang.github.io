export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'iLiterate',
    year: '2026',
    blurb:
      'A web-based language learning platform for second-generation readers rebuilding literacy in their native language. Personalized lessons, flashcards, and a speed reader powered by OpenAI, Gemini, and ElevenLabs on a Next.js + Supabase stack.',
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
