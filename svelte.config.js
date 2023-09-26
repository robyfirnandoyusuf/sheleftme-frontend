import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// paths: {
		// 	base: '/var/www/html/sheleft.me', // Example base path
		// },
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
		}),
		prerender: {
			entries: ['/', '/about'],
			// Configure how to handle missing IDs
			handleMissingId: 'ignore', // or 'fail', 'warn', etc.
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
