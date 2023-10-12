import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        bg_200: '#161616',
        bg_300: '#2c2c2c',
        primary: '#ffa500',
        primary_200: '#dd8900',
        primary_300: '#904a00',
        accent: '#ff6200',
        accent_200: '#fffca0',
        text: '#FFFFFF',
        text_200: '#e0e0e0',
      },
    },
  },
  plugins: [],
};
export default config;
