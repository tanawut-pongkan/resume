import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1100px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(220 20% 97%)',
        foreground: 'hsl(224 71% 4%)',
        muted: {
          DEFAULT: 'hsl(215 16% 84%)',
          foreground: 'hsl(215 23% 34%)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          foreground: 'hsl(224 71% 4%)',
        },
        border: 'hsl(215 20% 82%)',
        input: 'hsl(214 32% 91%)',
        ring: 'hsl(226 71% 55%)',
        accent: {
          light: 'hsl(226 71% 93%)',
          DEFAULT: 'hsl(226 71% 55%)',
          dark: 'hsl(226 71% 42%)',
          foreground: 'hsl(226 71% 98%)',
        },
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        subtle: '0 24px 48px -36px rgba(15, 23, 42, 0.45)',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      spacing: {
        section: '4.5rem',
        'section-md': '3.5rem',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

