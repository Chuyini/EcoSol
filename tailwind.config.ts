import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            'primary-1': '#389EE3',
            'primary-2': '#65B4E9',
            'secondary-1': '#A2D4F5',
            'secondary-2': '#EDF7FF',
            'neutral-1': '#F3F3F3',
         },
         saturate: {
            25: '.25',
            75: '.75',
         },
      },
   },
   plugins: [],
};
export default config;
