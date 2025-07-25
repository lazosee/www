import { SvelteDate } from "svelte/reactivity";

export const currentYear = $state<number>(new SvelteDate().getFullYear());