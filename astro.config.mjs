// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.sasakinihon.lk',
	integrations: [
		starlight({
			title: {
				en: 'Sasaki Foreign Employment Agency',
				si: 'සසාකි විදේශ රැකියා නියෝජිතායතනය',
				ja: 'ササキ海外雇用エージェンシー',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				si: {
					label: 'සිංහල',
					lang: 'si',
					dir: 'ltr',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
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
			sidebar: [
				{
					label: 'Company Profile',
					translations: {
						si: 'ආයතනික තොරතුරු',
						ja: '企業情報',
					},
					items: [
						{
							label: 'About Sasaki Nihon',
							translations: {
								si: 'සසාකි නිහොන් පිළිබඳව',
								ja: 'ササキ日本アカデミーについて',
							},
							slug: 'company/about',
						},
						{
							label: 'Language Courses',
							translations: {
								si: 'ජපන් භාෂා පාඨමාලා',
								ja: '日本語教育コース',
							},
							slug: 'company/courses',
						},
						{
							label: 'Contact & Location',
							translations: {
								si: 'සම්බන්ධතා සහ ලිපිනය',
								ja: 'お問い合わせ・所在地',
							},
							slug: 'company/contact',
						},
					],
				},
				{
					label: 'Guides',
					translations: {
						si: 'මාර්ගෝපදේශ',
						ja: 'ガイド',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Example Guide',
							translations: {
								si: 'ආදර්ශ මාර්ගෝපදේශය',
								ja: 'サンプルガイド',
							},
							slug: 'guides/example',
						},
					],
				},
				{
					label: 'Reference',
					translations: {
						si: 'විමර්ශන',
						ja: 'リファレンス',
					},
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
