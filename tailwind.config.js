/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
			container: {
				center: true,
				padding: '1rem',
			},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		fontFamily: {
			primary: ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: "#0c0c0c",
        secondary: "#1a1a1a",
				accent: {
					DEFAULT: '#ffffff',
					hover: '#f2f2f2',
				}
			},
      animation: {
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      keyframes: {
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
		},
	},
	plugins: [require("tailwindcss-animate")]
}

