import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),

    platform: z.string(),
    stack: z.string(),
    website: z.string().nullable(),
    github: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
