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
			// Fluid Typography Scale
			fontSize: {
				'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
				'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
				'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
				'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
				'fluid-xl': 'clamp(1.25rem, 1rem + 1.25vw, 1.5rem)',
				'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1.25vw, 2rem)',
				'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem)',
				'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)',
				'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 5rem)',
			},

			// Fluid Spacing Scale
			spacing: {
				'fluid-xs': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
				'fluid-sm': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
				'fluid-md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
				'fluid-lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)',
				'fluid-xl': 'clamp(2rem, 1.5rem + 2.5vw, 4rem)',
				'fluid-2xl': 'clamp(3rem, 2rem + 5vw, 6rem)',
			},

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
				},
				// Brand Colors
				'brand-blue': {
					DEFAULT: '#0057E0',
					light: '#2b7fff',
					dark: '#0042a8',
					glow: 'rgba(0, 87, 224, 0.3)',
				},
				// Glass Effects
				'glass': {
					bg: 'rgba(255, 255, 255, 0.04)',
					border: 'rgba(255, 255, 255, 0.08)',
					hover: 'rgba(255, 255, 255, 0.08)',
					highlight: 'rgba(255, 255, 255, 0.1)',
				},
			},

			// Backdrop Blur
			backdropBlur: {
				xs: '2px',
				'2xl': '16px',
			},

			// Custom Animations
			animation: {
				aurora: "aurora 8s ease-in-out infinite alternate",
				wave: "wave 2s ease-in-out infinite",
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'ambient-pulse': 'ambientPulse 8s ease-in-out infinite',
				'spin-slow': 'spin 20s linear infinite',
				'scroll-line': 'scrollLine 2s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
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
				fadeInUp: {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				ambientPulse: {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' },
				},
				scrollLine: {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { transform: 'translateY(10px)', opacity: '0' },
				},
				pulseGlow: {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' },
				},
			},

			// Font Families
			fontFamily: {
				primary: ['Excon', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				secondary: ['Satoshi', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},

			// Box Shadows for Glass
			boxShadow: {
				'glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 4px 24px rgba(0, 0, 0, 0.2)',
				'glass-hover': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 8px 32px rgba(0, 87, 224, 0.15), 0 0 0 1px rgba(0, 87, 224, 0.2)',
				'blue-glow': '0 0 40px rgba(0, 87, 224, 0.3)',
				'blue-glow-lg': '0 0 60px rgba(0, 87, 224, 0.5)',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/container-queries"),
	],
}