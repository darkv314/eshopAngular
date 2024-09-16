import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}', // Main application paths
    './projects/eshop-components/src/**/*.{html,ts}', // Library paths
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
