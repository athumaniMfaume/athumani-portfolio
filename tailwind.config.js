/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070b14',
          900: '#0b1220',
          800: '#0f1729',
          700: '#172036',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          fuchsia: '#e879f9',
        },
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(167,139,250,0.18), transparent 45%), radial-gradient(circle at 50% 100%, rgba(232,121,249,0.12), transparent 50%)',
        'accent-gradient': 'linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #e879f9 100%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 30px rgba(167, 139, 250, 0.35)',
        card: '0 10px 30px rgba(0,0,0,0.35)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        floatY: 'floatY 3.5s ease-in-out infinite',
        pulseRing: 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
        gradientShift: 'gradientShift 6s ease infinite',
        spinSlow: 'spinSlow 12s linear infinite',
      },
    },
  },
  plugins: [],
};
