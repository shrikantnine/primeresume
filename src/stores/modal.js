import { writable } from 'svelte/store';

export const signInOpen = writable(false);

export function openSignIn() {
  signInOpen.set(true);
}

export function closeSignIn() {
  signInOpen.set(false);
}
