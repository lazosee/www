import { component, defineMarkdocConfig, nodes } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
	variables: {
		environment: process.env.IS_PROD ? 'prod' : 'dev',
	},
	tags: {
		callout: {
			render: component('./src/components/Callout.astro'),
			attributes: {
				type: {
					type: 'String',
					default: 'note',
					matches: ['note', 'tip', 'warning', 'danger', 'info'],
				},
				title: { type: 'String', required: false },
			},
			children: ['paragraph', 'tag', 'text'],
		},
		'csv-table': {
			render: component('./src/components/CsvTable.astro'),
			attributes: {},
			children: ['inline'],
		},
		cite: {
			render: component('./src/components/Cite.astro'),
			attributes: {
				title: {
					type: 'String',
					required: true,
				},
			},
		},
		'package-install': {
			render: component('./src/components/PackageInstall.astro'),
			attributes: {
				managers: {
					type: 'Object',
					required: true,
				},
			},
			selfClosing: true,
		},
		youtube: {
			render: component('./src/components/Youtube.astro'),
			selfClosing: true,
			attributes: {
				videoId: {
					type: 'String',
					required: true,
				},
				title: {
					type: 'String',
					required: false,
				},
			},
		},
		image: {
			render: component('./src/components/Image.astro'),
			selfClosing: true,
			attributes: {
				...nodes.image.attributes,
				src: {
					type: 'String',
					required: true,
				},
				alt: {
					type: 'String',
					required: true,
				},
				width: {
					type: 'String',
				},
				height: {
					type: 'String',
				},
				'data-caption': {
					type: 'String',
				},
				'aria-label': {
					type: 'String',
				},
			},
		},
	},
	nodes: {
		document: {
			render: '',
		},
		fence: {
			render: component('./src/components/Fence.astro'),
			attributes: {
				language: { type: 'String', required: true },
				content: { type: 'String', required: true },
				path: { type: 'String', required: false },
			},
			children: ['text'],
		},
		image: {
			render: component('./src/components/Image.astro'),
			attributes: {
				...nodes.image.attributes,
				src: {
					type: 'String',
					required: true,
				},
				alt: {
					type: 'String',
					required: true,
				},
				width: {
					type: 'String',
				},
				height: {
					type: 'String',
				},
				'data-caption': {
					type: 'String',
				},
			},
		},
		blockquote: {
			render: component('./src/components/Blockquote.astro'),
			attributes: nodes.blockquote.attributes,
		},
		code: {
			render: component('./src/components/InlineCode.astro'),
			attributes: {
				content: {
					type: 'String',
				},
			},
		},
	},
})
