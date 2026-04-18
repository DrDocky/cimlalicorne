/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          sage: '#4a6741',
          'sage-light': '#6b9467',
          'sage-pale': '#e8f0e6',
          cream: '#f7f4ee',
          'cream-dark': '#ede8dc',
          charcoal: '#1a1f1a',
          mist: '#6b7280',
          rust: '#c0392b',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          playfair: ['Playfair Display', 'Georgia', 'serif'],
        }
      },
    },
    plugins: [],
  }