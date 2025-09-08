import type { APIRoute } from 'astro'
import { resend } from '../../../server/resend'

type Req = {
	name: string
	to_emails: string | string[]
}

export const POST: APIRoute = async ({ request }) => {
	const { name, to_emails }: Req = await request.json()

	const { data, error } = await resend.emails.send({
		from: 'LAZARO <newsletter@lazaroosee.xyz>',
		to: to_emails,
		replyTo: ['support@lazaroosee.xyz'],
		bcc: [],
		cc: [],
		subject: `Welcome aboard, ${name}!`,
		headers: {},
		tags: [{ name: 'key', value: 'value' }],
		text: 'Subject: Welcome Aboard, Arthur! \n\nHi Arthur! \n\nWe’re absolutely thrilled to have you join our newsletter family! Get ready for some amazing content, exclusive deals, and all the exciting updates we have in store for you. In the meantime, feel free to check out my website here to see what we’ve been up to!\n\nThanks for joining us, and happy reading!',
		attachments: [
			{ filename: 'avatar.png', path: 'https://avatars.githubusercontent.com/u/132367324?v=4' },
		],
		html: '<strong>It works!</strong>',
	})

	if (error) {
		return Response.json({ ...error }, { status: 500, statusText: error.name })
	}
	return Response.json(data, { status: 200 })
}
