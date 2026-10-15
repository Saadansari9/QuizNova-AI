import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft', 'monospace', 'sans-serif'],
      },
      colors: {
        primary: {
          bg: 'var(--primary-bg-color, #6366f1)',
          text: 'var(--primary-text-color, #ffffff)',
          shadow: 'var(--primary-box-shadow, #000000)',
        },
        secondary: {
          bg: 'var(--secondary-bg-color, #06b6d4)',
          text: 'var(--secondary-text-color, #000000)',
          shadow: 'var(--secondary-box-shadow, #000000)',
        },
        retro: {
          bg: '#0a0d14',
          card: '#121826',
          border: '#000000',
          yellow: '#facc15',
          pink: '#f43f5e',
          cyan: '#06b6d4',
          purple: '#a855f7',
          green: '#22c55e',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        cyber: {
          violet: '#8B5CF6',
          cyan: '#06B6D4',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          dark: '#0B0F19',
          card: '#111827',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
export default config;