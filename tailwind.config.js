/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
        },
        surface: '#111111',
        card: '#1A1A1A',
        border: '#2A2A2A',
        accent: {
          pink: '#F70000',
          'pink-light': '#FF3333',
          purple: '#FF3333',
          gray: '#7D7C7C',
          red: '#F70000',
        },
        text: {
          primary: '#E6E6E5',
          light: '#E6E6E5',
          muted: '#A7A7A7',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-smooth': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(247, 0, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(247, 0, 0, 0.9)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
