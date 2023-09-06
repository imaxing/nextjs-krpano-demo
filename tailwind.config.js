/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [require('tailwindcss-safe-area')],
  theme: {
    color: { priamry: '#E6E9EE' },
    extend: {
      boxShadow: { debug: '0 0 0 1px #f40' }
    }
  }
}
