export interface ResearchEntry {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  year: string;
}

export const research: ResearchEntry[] = [
  {
    title: 'Perpetual Text Generation',
    year: '2025',
    blurb:
      'Used temperature to try and dynamically push the model past the EOS token.',
    tags: ['LLMs', 'Decoding', 'Research'],
    href: 'https://d2jud02ci9yv69.cloudfront.net/2025-04-28-perpetual-text-129/blog/perpetual-text/',
  },
  {
    title: 'Q-Learned CNN Branch Selection',
    year: '2024',
    blurb:
      'Used a Q-learned agent to select the best branches in CNNs.',
    tags: ['Reinforcement Learning', 'CNNs', 'Efficiency'],
  },
];
