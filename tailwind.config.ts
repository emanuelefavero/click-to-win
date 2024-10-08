import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '4xs': '160px',
      '3xs': '240px',
      '2xs': '320px',
      xs: '375px',
    },

    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },

      keyframes: {
        slideFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },

      animation: {
        slideFromTop: 'slideFromTop 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
