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
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
};
