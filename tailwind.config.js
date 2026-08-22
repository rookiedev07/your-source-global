export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#F0F3F8',
          100: '#DFE5F0',
          200: '#C1CCDE',
          300: '#9EADC7',
          400: '#6F83A7',
          500: '#4B6187',
          600: '#33476E',
          700: '#223356',
          800: '#1B2A4A',
          900: '#121C33',
          950: '#0A101E',
        },
        slate: {
          DEFAULT: '#7D8286',
          50: '#F6F7F8',
          100: '#ECEEF0',
          200: '#D9DCE0',
          300: '#BFC4C9',
          400: '#9DA3A8',
          500: '#7D8286',
          600: '#62676B',
          700: '#4C5155',
          800: '#363A3D',
          900: '#212426',
          950: '#121415',
        },
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          muted: '#F1F5F9',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-sm': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
        h1: ['3rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.015em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', letterSpacing: '-0.005em', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em', fontWeight: '400' }],
        small: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        eyebrow: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.15em', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      }
    },
  },
  plugins: [],
}
