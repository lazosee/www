export function getImageExtension(mimeType: string): string | null {
	switch (mimeType) {
		case 'image/jpeg':
			return 'jpeg'
		case 'image/png':
			return 'png'
		case 'image/gif':
			return 'gif'
		case 'image/svg+xml':
			return 'svg'
		case 'image/webp':
			return 'webp'
		case 'image/bmp':
			return 'bmp'
		case 'image/tiff':
			return 'tiff'
		default:
			return mimeType.split('/').pop()?.trim().toLocaleLowerCase() || 'png'
	}
}
