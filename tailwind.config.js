/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        casino: {
          dark: '#ffffff',
          deep: '#f8fafc',
          surface: '#ffffff',
          surfaceHover: '#f1f5f9',
          border: '#e2e8f0',
          borderHover: '#cbd5e1',
          neon: '#b02a8e',
          neonGlow: 'rgba(176, 42, 142, 0.35)',
          neonViolet: '#7c3aed',
          gold: '#d4af37',
          ink: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-md': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(176, 42, 142, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(176, 42, 142, 0.7), 0 0 60px rgba(124, 58, 237, 0.35)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 24px rgba(176, 42, 142, 0.35)',
        'neon-lg': '0 0 48px rgba(176, 42, 142, 0.5)',
        'gold': '0 0 24px rgba(212, 175, 55, 0.35)',
        'deep': '0 20px 40px -10px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
