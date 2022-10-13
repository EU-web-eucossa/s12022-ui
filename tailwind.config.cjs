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
				sans: ['Inter', 'sans-serif'],
				rubik: ['Rubik', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				'c-text': ['Crimson Text', 'sans-serif']
			}
		}
	},
	plugins: []
};
