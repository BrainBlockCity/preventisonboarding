/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neuromorphic: {
          bg: 'var(--neuromorphic-bg)',
          shadow: {
            light: 'rgba(255, 255, 255, 0.8)',
            dark: 'rgba(163, 177, 198, 0.6)'
          }
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
};