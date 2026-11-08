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
				src: './src/assets/logo.jpeg',
			},
			favicon: '/images/logo.jpeg',
			customCss: ['./src/styles/custom.css'],
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
				{
					tag: 'script',
					content: `
						window.addEventListener('DOMContentLoaded', () => {
							if (document.querySelector('.sasaki-floating-whatsapp')) return;
							const a = document.createElement('a');
							a.className = 'sasaki-floating-whatsapp';
							a.href = 'https://wa.me/94705116951?text=' + encodeURIComponent('Hello Sasaki Foreign Employment Agency, I would like to inquire about Japan visa programs.');
							a.target = '_blank';
							a.rel = 'noopener noreferrer';
							a.setAttribute('aria-label', 'Chat on WhatsApp');
							a.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.22C8.84 7.22 8.52 7.3 8.25 7.59C7.98 7.88 7.21 8.6 7.21 10.07C7.21 11.54 8.28 12.95 8.43 13.15C8.58 13.35 10.34 16.22 13.13 17.3C15.22 18.11 15.83 17.86 16.36 17.78C17.07 17.67 18.1 17.02 18.35 16.3C18.6 15.58 18.6 14.97 18.52 14.84C18.44 14.71 18.24 14.64 17.94 14.49C17.64 14.34 16.17 13.62 15.9 13.52C15.63 13.42 15.43 13.37 15.23 13.67C15.03 13.97 14.46 14.64 14.28 14.84C14.11 15.04 13.93 15.07 13.63 14.92C13.33 14.77 12.37 14.45 11.23 13.43C10.35 12.65 9.75 11.68 9.58 11.38C9.4 11.08 9.56 10.92 9.71 10.77C9.85 10.64 10.02 10.42 10.17 10.24C10.32 10.07 10.37 9.94 10.47 9.74C10.57 9.54 10.52 9.37 10.45 9.22C10.37 9.07 9.8 7.64 9.55 7.07C9.32 6.52 9.08 6.6 8.91 6.59C8.75 6.58 8.55 6.58 8.35 6.58L9.04 7.22Z"/></svg><span>WhatsApp Us</span>';
							document.body.appendChild(a);
						});
					`,
				},
			],
			social: [
				{ icon: 'external', label: 'WhatsApp', href: 'https://wa.me/94705116951' },
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
							label: 'About Sasaki Foreign Employment Agency',
							translations: {
								si: 'සසාකි විදේශ රැකියා නියෝජිතායතනය පිළිබඳව',
								ja: 'ササキ海外雇用エージェンシーについて',
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
						{
							label: 'Engineer / Specialist in Humanities',
							translations: {
								si: 'ඉංජිනේරු සහ මානව ශාස්ත්‍ර (Gijinkoku)',
								ja: '技術・人文知識・国際業務',
							},
							slug: 'visas/engineer-humanities',
						},
						{
							label: 'Caregiving (Kaigo) Track',
							translations: {
								si: 'සත්කාරක (Kaigo) විශේෂ අංශය',
								ja: '介護（Kaigo）特別分野',
							},
							slug: 'visas/caregiving-kaigo',
						},
					],
				},
				{
					label: 'Candidate Guides',
					translations: {
						si: 'අපේක්ෂක මාර්ගෝපදේශ',
						ja: '就労・渡航ガイド',
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
						{
							label: 'SLBFE Clearance Guide',
							translations: {
								si: 'විදේශ සේවා කාර්යාංශ (SLBFE) අනුමැතිය',
								ja: 'SLBFE公認登録手続き',
							},
							slug: 'guides/slbfe-process',
						},
						{
							label: 'Interview Prep & Etiquette',
							translations: {
								si: 'සම්මුඛ පරීක්ෂණ සූදානම සහ ආචාරධර්ම',
								ja: '面接対策・ビジネスマナー',
							},
							slug: 'guides/interview-etiquette',
						},
						{
							label: 'Life & Living Costs in Japan',
							translations: {
								si: 'ජපානයේ ජීවිතය සහ මාසික වියදම්',
								ja: '日本での生活と生活コスト',
							},
							slug: 'guides/life-in-japan',
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
							label: 'Eligibility Self-Assessment',
							translations: {
								si: 'සුදුසුකම් ස්වයං ඇගයීම් සටහන',
								ja: '適性診断マトリクス',
							},
							slug: 'reference/eligibility-matrix',
						},
						{
							label: 'Required Documents Checklist',
							translations: {
								si: 'අවශ්‍ය ලියකියවිලි ලැයිස්තුව',
								ja: '必要書類チェックリスト',
							},
							slug: 'reference/document-checklist',
						},
						{
							label: 'Frequently Asked Questions (FAQ)',
							translations: {
								si: 'නිතර අසන ප්‍රශ්න (FAQ)',
								ja: 'よくある質問（FAQ）',
							},
							slug: 'reference/faq',
						},
					],
				},
			],
		}),
	],
});
