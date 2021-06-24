module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
       },
      borderWidth: {
        '1': '1px' 
      },
      colors: {
        bgDarkBlue: 'hsl(232, 19%, 15%)',
        cardDarkBlue: 'hsl(228, 28%, 20%)',
        white: 'hsl(0, 0%, 100%)',
        desaturatedBlue:  'hsl(228, 34%, 66%)',
        limeGreen: 'hsl(163, 72%, 41%)',
        brightRed: 'hsl(356, 69%, 56%)',
        toggleColorStart: 'hsl(210, 78%, 56%)',
        toggleColorEnd: 'hsl(146, 68%, 55%)',
        facebook: 'hsl(208, 92%, 47%)',
        twitter: 'hsl(203, 89%, 58%)',
        instagramStart: 'hsl(37, 97%, 70%)',
        instagramEnd: 'hsl(329, 70%, 58%)',
        transparent: 'transparent',
      },
      letterSpacing: {
        widest: '.4em'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
