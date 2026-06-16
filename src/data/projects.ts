export interface Project {
  title: string;
  blurb: string;
  blurbHtml?: string;
  tags: string[];
  href?: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: 'Vantura',
    year: '2025',
    blurb:
      'Get a head start on your mornings with a hyper-customized morning briefing. Receive a carousel on news, sports, and stocks you follow, with an audio podcast that you can listen to on the go. Backed by ElevenLabs, Founder University, and CWRU.',
    blurbHtml:
      'Get a head start on your mornings with a hyper-customized morning briefing. Receive a carousel on news, sports, and stocks you follow, with an audio podcast that you can listen to on the go. Backed by <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">ElevenLabs</a>, <a href="https://founder.university/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">Founder University</a>, and CWRU.',
    tags: ['AI', 'Startup'],
    href: 'https://vantura.ai',
  },
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
