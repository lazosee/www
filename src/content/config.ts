import { defineCollection, reference, z } from 'astro:content'

const category = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		icon: z.string(),
	}),
})

const post = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			image: image(),
			published_at: z.date(),
			updated_at: z.date(),
			category: z.string(reference('category')),
			tags: z.array(z.string()),
			draft: z.boolean(),
			related: z.array(z.string(reference('post'))).optional(),
		}),
})

export const collections = { post, category }
