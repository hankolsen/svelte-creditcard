import { writable, Writable } from 'svelte/store';

export const name: Writable<string> = writable('');
export const number: Writable<string> = writable(undefined);
export const cvv: Writable<number> = writable(undefined);
export const expireMonth: Writable<number> = writable(undefined);
export const expireYear: Writable<number> = writable(undefined);
export const isFlipped: Writable<boolean> = writable(undefined);
export const showLogo: Writable<boolean> = writable(true);
