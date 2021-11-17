module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
      nicely: ['"Montagu Slab"'],
    },
    backgroundImage: {
      foodriddle: "url('../public/foodriddle.jpg')",
    },
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
