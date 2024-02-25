import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': 'rgba(253, 251, 246, 1)',
      'black': 'rgba(36, 36, 34, 1)',
      'accent': 'rgba(74, 101, 163, 1)',
    },
    fontFamily: {
      'body': ['Avenir'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
