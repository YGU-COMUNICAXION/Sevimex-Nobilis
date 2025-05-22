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
    }),
});

export const collections = {
  almacenamiento: productsCollection,
  ris: productsCollection,
  rispluspacs: productsCollection,
  portal: productsCollection,
  workstation: productsCollection,
};
