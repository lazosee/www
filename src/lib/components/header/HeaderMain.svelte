<script lang="ts">
	import type { NavItem } from '$lib/types/data/nav';
	import type { ClickEvent } from '$lib/types/events';

	type Props = {
		navList: NavItem[];
	};

	const { navList }: Props = $props();
	let nav = $state<HTMLElement | null>(null);

	function menu_click(e: ClickEvent) {
		if (nav != null) {
			console.log(nav);
			nav.classList.toggle('hidden');
			nav.classList.toggle('flex');
		}
	}
</script>

<header class="relative flex w-full flex-row items-center justify-between p-2 px-4 bg-blend-darken bg-slate-100 dark:bg-slate-900">
	<a href="/" class="font-poppins">
		<span class="font-poppins text-2xl font-semibold">lazaro osee</span>
	</a>
	<nav
		bind:this={nav}
		class="
            md:flex md:flex-row absolute inset-0 z-50 hidden h-[98svh] w-full flex-col items-center justify-start bg-slate-500 dark:bg-slate-950
            md:relative md:ml-auto md:h-auto md:w-auto md:inset-auto md:bg-slate-100 md:dark:bg-slate-900 md:justify-between md:mr-4
        "
	>
		<div class="relative m-2 flex w-full flex-row items-center justify-between md:hidden">
			<a href="/" class="mx-2 font-poppins">
				<span class="font-poppins text-2xl font-semibold">lazaro osee</span>
			</a>
			<button
				onclick={menu_click}
				class="align-center mx-2 justify-center"
				aria-label="menu button"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
				>
			</button>
		</div>
		<div class="flex flex-col w-full m-2 p-1 justify-start items-center md:flex-row md:w-auto md:mr-auto md:m-0 md:p-2">
            {#each navList as nav (nav.url)}
                <a href={nav.url} class="m-1 flex items-center justify-center p-1">
                    {nav.label}
                </a>
            {/each}
        </div>
        <div class="hidden md:block md:ml-16">
            <a href="mailto:oseelazaro@gmail.com" class="py-2 px-3 border-none rounded-3xl bg-slate-950 dark:bg-slate-100 text-slate-100 dark:text-slate-950 font-semibold font-poppins">
                Get In Touch
            </a>
        </div>
	</nav>
	<div class="block md:hidden">
		<button
			onclick={menu_click}
			class="align-center mx-2 flex justify-center"
			aria-label="menu button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-menu-icon lucide-menu"
			>
				<path d="M4 12h16" />
				<path d="M4 18h16" />
				<path d="M4 6h16" />
			</svg>
		</button>
	</div>
</header>
