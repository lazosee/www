export function formatDate(date: Date): string {
	return date.toLocaleDateString(undefined, {
		dateStyle: 'medium',
		timeZone: 'UTC',
	})
}

export function epochMilli(date: Date) {
	return date.getTime()
}

export function compareDates(a: Date, b: Date) {
	return a.getTime() === b.getTime()
}
