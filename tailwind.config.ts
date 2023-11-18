import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { xs: '480px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1600px' },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  important: true,
  plugins: [],
};
export default config;
