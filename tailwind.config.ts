import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondary: '#0b3961',
            primary: '#13c6e4',
          },
        },
        dark: {
          colors: {
            primary: '#0b3961',
            secondary: '#13c6e4',
          },
        },
      },
    }),
  ],
};
export default config;
