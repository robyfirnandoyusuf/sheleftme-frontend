// store.js
import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const quotes = writable([]);
export const scriptsLoaded = writable(false);