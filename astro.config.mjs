// @ts-check
import { defineConfig } from 'astro/config'

import markdoc from '@astrojs/markdoc'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [markdoc()],
	adapter: vercel(),
})
