/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Esto permite usar 'dark:' en clases
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"sans": ['"SF Pro Display"', 'sans-serif'], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-background': '#f8f5ff',
				'hub-border': '#d6d0ff',
				'hub-title': '#060b1e',
				'hub-subtitle': '#51558a',
				'hub-background-nav': '#efe9ff',
				'hub-inactive': '#8a87c3',
				'hub-text': '#ffffff',
				'icons': '#2ef2ff',
				// dark
				'hub-background-dark': '#050813',
				'hub-border-dark': '#23264a',
				'hub-title-dark': '#f3f4ff',
				'hub-subtitle-dark': '#aeb5ec',
				'hub-background-nav-dark': '#0e1125',
			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(135deg, #2ef2ff 0%, #ff4fd8 100%)',
				'body-grid':
					'radial-gradient(circle at 1px 1px, rgba(46,242,255,0.25) 1px, transparent 0)',
			},
		},

	},
	plugins: [require('tailwindcss-animate')],

}
