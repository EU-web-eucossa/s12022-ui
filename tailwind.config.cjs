/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
		'./src/**/*.js',
		'./src/**/*.ts',
		'./src/**/*.tsx',
		'*.html'
	],
	theme: {
		extend: {
			fontFamily: {
				exo: [ 'Exo', 'sans-serif'],
			},
			colors: {
				primary: '#F58634',
				black: '#02111B',
				error: '#5A0001',
				placeholder: '#B2B2B2',
				success: '#4CB944'
			}
		},
		screens:{
			'xs': '320px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
			'4xl': '2560px',
			'5xl': '3840px',
			'6xl': '7680px',
			'7xl': '15360px',
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
};
