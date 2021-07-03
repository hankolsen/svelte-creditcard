import { derived, Readable, writable, Writable } from 'svelte/store';
import getCreditCardIssuer from './getCardIssuer/getCardIssuer';
import getFormattedCardNumber from './getFormattedCardNumber/getFormattedCardNumber';

export const name: Writable<string> = writable('');
export const number: Writable<string> = writable(undefined);
export const cvv: Writable<number> = writable(undefined);
export const expireMonth: Writable<number> = writable(undefined);
export const expireYear: Writable<number> = writable(undefined);
export const isFlipped: Writable<boolean> = writable(undefined);
export const showLogo: Writable<boolean> = writable(true);
export const issuer: Readable<string> = derived(number, getCreditCardIssuer);
export const formattedNumber = derived(
  [number, issuer],
  getFormattedCardNumber,
);
export const logoSrc = derived([issuer, showLogo], ([$issuer, $showLogo]) => {
  if ($showLogo && $issuer) {
    return `logos/${$issuer}.svg`;
  }
});
