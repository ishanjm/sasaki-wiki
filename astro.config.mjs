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
					label: 'Japan Visa Categories',
					translations: {
						si: 'ජපන් වීසා වර්ග',
						ja: '日本の在留資格・ビザ',
					},
					items: [
						{
							label: 'Specified Skilled Worker (SSW)',
							translations: {
								si: 'විශේෂිත නිපුණතා සේවක (SSW)',
								ja: '特定技能（SSW）',
							},
							slug: 'visas/ssw',
						},
						{
							label: 'Student Visa (Ryugaku)',
							translations: {
								si: 'ශිෂ්‍ය වීසා (Student Visa)',
								ja: '留学ビザ',
							},
							slug: 'visas/student',
						},
						{
							label: 'Technical Intern Training (TITP)',
							translations: {
								si: 'තාක්ෂණික පුහුණුලාභී වැඩසටහන (TITP)',
								ja: '技能実習制度（TITP）',
							},
							slug: 'visas/titp',
						},
					],
				},
				{
					label: 'Guides & Procedures',
					translations: {
						si: 'මාර්ගෝපදේශ සහ ක්‍රියාපටිපාටිය',
						ja: '申請ガイド・手続き',
					},
					items: [
						{
							label: 'Visa Application Process',
							translations: {
								si: 'වීසා අයදුම් කිරීමේ පියවර',
								ja: 'ビザ申請・渡航プロセス',
							},
							slug: 'guides/visa-application-process',
						},
					],
				},
				{
					label: 'Requirements & Reference',
					translations: {
						si: 'අවශ්‍යතා සහ විමර්ශන',
						ja: '必要書類・リファレンス',
					},
					items: [
						{
							label: 'Required Documents Checklist',
							translations: {
								si: 'අවශ්‍ය ලියකියවිලි ලැයිස්තුව',
								ja: '必要書類チェックリスト',
							},
							slug: 'reference/document-checklist',
						},
					],
				},
			],
		}),
	],
});
