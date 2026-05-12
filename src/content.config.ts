import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const categories = ['books', 'musings', 'memes', 'etc'] as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(categories),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string().optional()
  })
});

export const collections = { posts };
