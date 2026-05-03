import type { APIContext } from 'astro'
import { env } from 'cloudflare:workers'

export const GET = async (context: APIContext) => {
	try {
		const res = await fetch('https://api.github.com/repos/lazosee/www/dispatches', {
			method: 'POST',
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${env.GITHUB_WWW_REPO_TOKEN}`,
				'Content-Type': 'application/json',
				'User-Agent': 'lazaro-osee-website',
			},
			body: JSON.stringify({ event_type: 'rebuild-site' }),
		})
		console.log(await res.text())
		if (res.ok) {
			return new Response(JSON.stringify({ success: true }), {
				headers: { 'Content-Type': 'application/json' },
			})
		} else {
			return new Response(JSON.stringify({ success: false }), {
				headers: { 'Content-Type': 'application/json' },
			})
		}
	} catch (error) {
		console.error(error)

		return new Response(JSON.stringify({ success: false, error }), {
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
