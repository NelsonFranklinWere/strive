import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Updated to new spec
        primary: {
          DEFAULT: '#0D1B2A', // Deep navy blue
          percale: '#1B263B',
          dark: '#0A141E',
        },
        secondary: {
          DEFAULT: '#4A00E0', // Royal violet
          light: '#6B2FFF',
          dark: '#3A00B3',
        },
        accent: {
          DEFAULT: '#00F5D4', // Aqua turquoise
          light: '#33F9E0',
          dark: '#00D4B8',
        },
        // Legacy colors (kept for compatibility)
        'quantum-cyan': '#00F5D4',
        'deep-sapphire': '#0D1B2A',
        'royal-purple': '#4A00E0',
        'neon-turquoise': '#00F5D4',
        // Text colors
        text: {
          white: '#FFFFFF',
          gray: '#B0BEC5',
        },
        // Gray Scale
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0D1B2A 0%, #4A00E0 100%)',
        'gradient-violet': 'linear-gradient(135deg, #4A00E0 0%, #0D1B2A 100%)',
        'gradient-aqua': 'linear-gradient(135deg, #00F5D4 0%, #4A00E0 100%)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(74, 0, 224, 0.3) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 245, 212, 0.2) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(74, 0, 224, 0.2) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 245, 212, 0.3) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 245, 212, 0.4)',
        'glow-purple': '0 0 30px rgba(74, 0, 224, 0.4)',
        'glow-aqua': '0 0 40px rgba(0, 245, 212, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(0, 245, 212, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

