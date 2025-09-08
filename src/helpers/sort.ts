import type { CollectionEntry } from 'astro:content'

export function sortPostsByCategory(
	category: string,
	posts: (CollectionEntry<'post'>['data'] & { slug: string })[]
) {
	return posts.filter((post) => (post.category = category))
}
