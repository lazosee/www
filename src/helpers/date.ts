export function formatDate(date: Date): string {
	return date.toLocaleDateString(undefined, {
		dateStyle: 'medium',
		timeZone: 'UTC',
	})
}
