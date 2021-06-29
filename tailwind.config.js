module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: 'class', // or 'media' or 'class'
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
        paleBlue: 'hsl(225, 100%, 98%)',
        darkBlueGrey: 'hsl(228, 12%, 44%)',
        veryDarkBlue: 'hsl(230, 17%, 14%)',
        greyBlue: 'hsl(227, 47%, 96%)',
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
      },
      boxShadow: {
        shadowdark: '2px 2px 19px 2px rgba(255,255,255,0.20);',
        shadowlight: '2px 2px 19px 2px rgba(0,0,0,0.56)'
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover'],
      boxShadow: ['dark'],
      filter: ['dark'],
      invert: ['dark']
    },
  },
  plugins: [
  ],
}
