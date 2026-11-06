// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sasaki Foreign Employment Agency',
			logo: {
				src: './public/images/logo.png',
			},
			favicon: '/images/logo.png',
			head: [
				{
					tag: 'script',
					content: `
						(() => {
							try {
								const storedTheme = localStorage.getItem('starlight-theme');
								if (!storedTheme) {
									localStorage.setItem('starlight-theme', 'light');
									document.documentElement.dataset.theme = 'light';
								}
							} catch {}
						})();
					`,
				},
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
