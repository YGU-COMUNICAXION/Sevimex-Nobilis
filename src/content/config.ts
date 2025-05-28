import { defineCollection, reference, z } from "astro:content";

const productsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      largeDescription: z.string(),
      image: image(),
      category: z.string(),
      features: z.string().array(),
      url: z.string(),
      order: z.number().optional(),
    }),
});

export const collections = {
  almacenamiento: productsCollection,
  pacs: productsCollection,
  portal: productsCollection,
  ris: productsCollection,
  risPacs: productsCollection,
  workstation: productsCollection,
};
