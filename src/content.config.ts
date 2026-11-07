import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const contentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z
    .string()
    .or(z.date())
    .optional()
    .transform((val) => (val ? new Date(val) : undefined)),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  public: z.boolean().default(true),
});

const createCollection = (name: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${name}` }),
    schema: contentSchema,
  });

export const collections = {
  notes: createCollection('notes'),
  stuff: createCollection('stuff'),
  // projects: createCollection('projects'),
};
