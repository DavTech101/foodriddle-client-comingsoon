module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          faint: '#eaeaea',
        },
        blue: {
          baby: '#0070f3',
        },
        red: {
          burger: '#B91646',
          coral: '#c46f4f',
          ligt: '#c48c78',
        },
        green: {
          forest: '#899c85',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
