/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '18px',
        lg: '20px',
      },
      colors: {
        green: 'hsl(75, 94%, 57%)',
        white: 'hsl(0, 0%, 100%)',
        grey: {
          light: 'hsl(0, 0%, 20%)',
          dark: 'hsl(0, 0%, 12%)',
        },
        'off-black': 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
