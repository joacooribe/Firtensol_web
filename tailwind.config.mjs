/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#003B71',
        'primary-light': '#1e5a91',
        accent: '#8CB9E5',
        'text-dark': '#1a202c',
        'text-muted': '#4a5568',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
