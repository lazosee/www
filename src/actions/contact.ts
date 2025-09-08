import { z } from 'astro/zod'
import { defineAction } from 'astro:actions'

export const contact = defineAction({
	accept: 'form',
	input: z.object({
		fullname: z
			.string({ message: 'Name must be a text of 3 to 100 characters long' })
			.min(3, { message: 'Name must be at least 3 characters' })
			.max(100, { message: 'Name must be less than 100 characters' }),
		email: z
			.string({ message: 'Email must be a valid email address' })
			.email({ message: 'Email must be a valid address' }),
		subject: z
			.string({ message: 'Subject must be a text of 4 to 200 characters long' })
			.min(4, { message: 'Subject must be at least 4 characters' })
			.max(200, { message: 'Subject must be less than 200 characters' }),
		message: z
			.string({ message: 'Message must be a text of 12 or more characters long' })
			.min(12, { message: 'Message must be at least 12 characters long' }),
	}),
	handler: async (input, context) => {
		const data: typeof input = {
			...input,
			fullname: input.fullname.trim(),
			email: input.email.trim(),
			subject: input.subject.trim(),
			message: input.message.trim(),
		}

		// TODO: Send email to support@lazaroosee.xyz
		console.log(data /*, context*/)
	},
})
