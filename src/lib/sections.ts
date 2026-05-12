export const sections = [
  { slug: 'books', title: 'Books', description: 'Reading notes, quotes, and reflections.' },
  { slug: 'musings', title: 'Musings', description: 'Essays, thoughts, and thinking out loud.' },
  { slug: 'memes', title: 'Memes', description: 'Internet artifacts, jokes, and tiny amusements.' },
  { slug: 'etc', title: 'Etc.', description: 'Everything else worth saving.' }
] as const;

export type SectionSlug = (typeof sections)[number]['slug'];

export function sectionFor(slug: string) {
  return sections.find((section) => section.slug === slug);
}
