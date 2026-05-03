import type { Link, SocialLink } from '@/types/global'

export const nav_links = {
	Home: '/',
	Blueprints: '/blueprints',
	Sketches: '/sketches',
	Contact: '/contact',
} satisfies Link

// TODO: Add actual social links
export const social_links = {
	Github: '#',
	LinkedIn: '#',
	Twitter: '#',
	Instagram: '#',
	Bluesky: '#',
} satisfies SocialLink
