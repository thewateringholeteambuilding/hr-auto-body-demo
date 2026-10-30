/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:        'hsl(var(--cream) / <alpha-value>)',
        navy:         'hsl(var(--navy) / <alpha-value>)',
        'navy-light': 'hsl(var(--navy-light) / <alpha-value>)',
        accent:       'hsl(var(--accent) / <alpha-value>)',
        muted:        'hsl(var(--muted) / <alpha-value>)',
        border:       'hsl(var(--border) / <alpha-value>)',
        card:         'hsl(var(--card) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
