module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#18181b', // dark grey
        foreground: '#ededed',
        primary: '#23272f', // slightly lighter dark grey
        accent: '#2d2f36',
        card: '#23272f',
        border: '#31313a',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}; 