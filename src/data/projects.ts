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
    title: 'Vantura',
    year: '2026',
    blurb:
      "A morning briefing app that turns the news, sports, and stocks you follow into a short audio podcast you can listen to on your way out the door. Backed by ElevenLabs, Founder University, and CWRU.",
    blurbHtml:
      'A morning briefing app that turns the news, sports, and stocks you follow into a short audio podcast you can listen to on your way out the door. Backed by <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">ElevenLabs</a>, <a href="https://founder.university/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">Founder University</a>, and CWRU.',
    tags: ['AI', 'Startup'],
    href: 'https://vantura.ai',
    blogPost: '/vantura',
  },
  {
    title: 'iLiterate',
    year: '2026',
    blurb:
      'A language-learning site for second-generation readers rebuilding literacy in their native language — lessons, flashcards, and a speed reader, built on Next.js and Supabase with OpenAI, Gemini, and ElevenLabs.',
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
