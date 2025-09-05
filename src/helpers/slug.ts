export function slugify(text: string): string {
	return text
		.toString()
		.normalize('NFD') // Normalizes the string to decompose combined graphemes into a base character and a combining character (e.g., 'é' -> 'e' + '´')
		.replace(/[\u0300-\u036f]/g, '') // Removes diacritics (the combining characters)
		.toLowerCase() // Converts to lowercase
		.trim() // Removes leading and trailing whitespace
		.replace(/\s+/g, '-') // Replaces spaces with hyphens
		.replace(/[^\w-]+/g, '') // Removes all non-word characters except hyphens
		.replace(/--+/g, '-') // Replaces multiple consecutive hyphens with a single one
}
