module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyFrames: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(5deg)',
          },
          '75%': {
            transform: 'rotate(-5deg)',
          },
        },
      },
      width: {
        100: '33rem',
      },
      screens: {
        frsignup: '550px',
        // => @media (min-width: 550px) { ... }
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
      backgroundImage: {
        fr1: "url('../public/foodriddle.jpg')",
        fr2: "url('../public/bgimg.png')",
        fr3: "url('../public/image.png')",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        comforter: ['Patrick Hand'],
      },
    },
  },
};
