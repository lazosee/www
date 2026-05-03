// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare({}),
	// site: 'http://192.168.0.102:4321',
})
