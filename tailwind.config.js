module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
    },
    backgroundImage: {
      fr1: "url('../public/foodriddle.jpg')",
      fr2: "url('../public/bgimg.png')",
      fr3: "url('../public/image.png')",
    },
    extend: {
      screens: {
        tablet: '800px',
        // => @media (min-width: 640px) { ... }
      },
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
