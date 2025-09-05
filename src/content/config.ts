import { defineCollection, z } from 'astro:content'

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			image: image(),
			published_at: z.date(),
			updated_at: z.date(),
			category: z.string(),
			tags: z.array(z.string()),
			draft: z.boolean(),
		}),
})

export const collections = { post }
