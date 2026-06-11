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
      'Research on extending LLM generation past the natural stopping point. Introduces a method that detects emergent EOS tokens, backsteps, and applies dynamic temperature adjustment — doubled for exploration, then annealed back to baseline. Pushes Llama2-7B-chat ~1,000 additional coherent tokens past where it would otherwise halt.',
    tags: ['LLMs', 'Decoding', 'Research'],
    href: 'https://d2jud02ci9yv69.cloudfront.net/2025-04-28-perpetual-text-129/blog/perpetual-text/',
  },
  {
    title: 'Q-Learned CNN Branch Selection',
    year: '2024',
    blurb:
      'Reinforcement-learning agent that dynamically selects convolutional branches at inference time, trading FLOPs for accuracy on a per-sample basis. Trained with Q-learning over a branching CNN backbone.',
    tags: ['Reinforcement Learning', 'CNNs', 'Efficiency'],
  },
];
