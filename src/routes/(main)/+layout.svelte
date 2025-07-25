<script lang="ts">
	import '../../app.css';
	import navList from '$lib/data/nav-list.json' with { type: 'json' };
	import { MainHeader, MainFooter } from '$lib/components';

	let { children } = $props();
</script>

<div
	class="relative flex h-full min-h-screen w-screen flex-col overflow-x-hidden bg-slate-100 dark:bg-slate-950"
>
	<MainHeader {navList} />
	{@render children()}
	<MainFooter />
</div>
