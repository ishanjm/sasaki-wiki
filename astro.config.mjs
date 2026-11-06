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
