export abstract class Share {
	link: string
	constructor(link: string) {
		this.link = link
	}
	abstract facebook(): string
	abstract linkedin(): string
	abstract twitter(postText?: string): string
	abstract bluesky(postText?: string): string
	abstract telegram(postText?: string): string
	abstract pinterest(imageSource: string): string
	abstract email(
		recipient: string,
		subject?: string,
		cc?: string,
		bcc?: string,
		body?: string
	): string
}

export class SharePost extends Share {
	constructor(link: string) {
		super(link)
	}
	facebook(): string {
		return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.link)}`
	}
	linkedin(): string {
		return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.link)}`
	}
	twitter(postText?: string): string {
		const text = postText ? `${encodeURIComponent(postText)} ` : ''
		return `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(this.link)}`
	}
	bluesky(postText?: string): string {
		const text = postText ? `${postText} ` : ''
		return `https://bsky.app/intent/compose?text=${encodeURIComponent(text + this.link)}`
	}
	telegram(postText?: string): string {
		const text = postText ? `${postText} ` : ''
		return `https://t.me/share/url?url=${this.link}&text=${encodeURIComponent(text)}`
	}
	pinterest(imageSource: string): string {
		return `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(this.link)}&media=${encodeURIComponent(imageSource)}`
	}
	email(recipient: string, subject?: string, cc?: string, bcc?: string, body?: string): string {
		const params = new URLSearchParams()
		if (subject) params.append('subject', subject)
		if (cc) params.append('cc', cc)
		if (bcc) params.append('bcc', bcc)
		if (body) params.append('body', body)
		return `mailto:${recipient}?${params.toString()}`
	}
}

export type SharePlatform = 'facebook' | 'linkedin' | 'twitter' | 'bluesky' | 'telegram'
// | 'pinterest'
// | 'email'

export function sharePost(link: string) {
	const share = new SharePost(link)
	return [
		{
			platform: 'facebook',
			link: share.facebook(),
		},
		{
			platform: 'linkedin',
			link: share.linkedin(),
		},
		{
			platform: 'twitter',
			link: share.twitter('Check out this Awesome Post I found online'),
		},
		{
			platform: 'bluesky',
			link: share.bluesky('Check out this Awesome Post I found online'),
		},
		{
			platform: 'telegram',
			link: share.telegram('Check out this Awesome Post I found online'),
		},
	] as { platform: SharePlatform; link: string }[]
}
