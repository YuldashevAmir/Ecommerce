/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			fontSize: {
				base: '14px',
				lg: '16px',
				xl: '24px',
				'2xl': '32px',
				subHeading: '36px',
				heading: '48px',
			},
			borderRadius: {
				sm: '4px',
			},
			colors: {
				primary: '#ffffff',
				primary1: '#363738',
				secondary: '#F5F5F5',
				secondary1: '#FEFAF1',
				secondary2: '#DB4444',
				button1: '#00FF66',
				button2: '#DB4444',
				hoverButton1: '#E07575',
				background: '#ffffff',
				text: '#FAFAFA',
				text1: '#7D8184',
				text2: '#000000',
				border: 'rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
}
