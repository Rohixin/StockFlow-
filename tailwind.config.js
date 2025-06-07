// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode based on the 'dark' class on the html tag
  content: [
    // These paths tell Tailwind CSS where to scan for class names
    // so it can generate the corresponding CSS.
    // It MUST include all files where you use Tailwind classes.
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For Next.js App Router pages and layouts
    './src/**/*.{js,ts,jsx,tsx,mdx}', // For components and other files inside the 'src' directory
  ],
  theme: {
    extend: {
      colors: {
        // Your custom NeoFinance color palette
        'dark-navy': '#0e1117',
        'light-gray': '#e5e7eb',
        'cyan-blue-300': '#3abff8',
        'cyan-blue-400': '#0e90d8',
        'pink-300': '#f472b6',
        'pink-400': '#e3389b',
        'green-500': '#22c55e',
        'red-500': '#ef4444',
        'charcoal-800': '#1f2937',
        'dark-navy-700': '#1a222c',
        'charcoal-900': '#243042',
        'cyan-blue-200': '#a7d9f7',
        'blue-900/30': 'rgba(23, 37, 84, 0.3)',
        'blue-900/20': 'rgba(23, 37, 84, 0.2)',
        'orange-900/30': 'rgba(120, 53, 15, 0.3)',
        'orange-900/20': 'rgba(120, 53, 15, 0.2)',
      },
      // Custom keyframes for animations
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSubtle: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.8' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pop-in': 'popIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
