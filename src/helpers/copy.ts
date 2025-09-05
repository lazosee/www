export async function copy_to_clipboard(button: HTMLElement | Element, content: string) {
	try {
		await navigator.clipboard.writeText(content)
		button.textContent = 'Copied!'
		setTimeout(() => {
			button.textContent = 'Copy'
		}, 2000)
	} catch (err) {
		console.error('Failed to copy text: ', err)
		button.textContent = 'Failed to copy'
		setTimeout(() => {
			button.textContent = 'Copy'
		}, 2000)
	}
}
