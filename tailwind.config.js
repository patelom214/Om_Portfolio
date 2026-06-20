/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#06080f',
          900: '#0a0e1a',
          850: '#0d1224',
          800: '#11172d',
          700: '#1a2240',
        },
        ink: {
          100: '#f1f5f9',
          300: '#cbd5e1',
          500: '#8b95ab',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        aurora:
          'radial-gradient(40% 40% at 20% 20%, rgba(99,102,241,0.35) 0%, transparent 70%), radial-gradient(35% 35% at 80% 30%, rgba(34,211,238,0.28) 0%, transparent 70%), radial-gradient(45% 45% at 50% 85%, rgba(168,85,247,0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.5)',
        'glow-violet': '0 0 40px -10px rgba(168,85,247,0.5)',
      },
      animation: {
        'aurora-drift': 'aurora-drift 18s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'aurora-drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(3%, -4%) scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
