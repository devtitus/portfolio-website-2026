/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				aurora: "aurora 8s ease-in-out infinite alternate",
				wave: "wave 2s ease-in-out infinite",
			},
			keyframes: {
				aurora: {
					"0%": {
						"background-position": "0% 50%",
						transform: "rotate(-5deg) scale(0.9)",
					},
					"25%": {
						"background-position": "50% 100%",
						transform: "rotate(5deg) scale(1.1)",
					},
					"50%": {
						"background-position": "100% 50%",
						transform: "rotate(-3deg) scale(0.95)",
					},
					"75%": {
						"background-position": "50% 0%",
						transform: "rotate(3deg) scale(1.05)",
					},
					"100%": {
						"background-position": "0% 50%",
						transform: "rotate(-5deg) scale(0.9)",
					},
				},
				wave: {
					"0%, 100%": {
						transform: "rotate(0deg)",
					},
					"10%, 30%, 50%, 70%, 90%": {
						transform: "rotate(-10deg)",
					},
					"20%, 40%, 60%, 80%": {
						transform: "rotate(10deg)",
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}