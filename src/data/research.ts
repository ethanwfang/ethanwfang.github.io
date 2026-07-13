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
      'Used dynamic temperature adjustments to try to push language models past their natural stopping point — detecting emergent EOS tokens, backstepping, and annealing the temperature back to baseline to keep generation coherent.',
    tags: ['LLMs', 'Decoding', 'Research'],
    href: 'https://d2jud02ci9yv69.cloudfront.net/2025-04-28-perpetual-text-129/blog/perpetual-text/',
  },
  {
    title: 'Q-Learned CNN Branch Selection',
    year: '2024',
    blurb:
      'Used a Q-learned agent to dynamically select the best convolutional branches in a CNN at inference time, trading FLOPs for accuracy on a per-sample basis.',
    tags: ['Reinforcement Learning', 'CNNs', 'Efficiency'],
  },
];
