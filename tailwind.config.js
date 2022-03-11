const {
  colors: defaultColors
} = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    content: [
    ],
    css: [
        './src/assets/styles/custom.css'
    ],
    options: {
      safelist: [
      ],
      safelistPatterns: [
      ],
      keyframes: true,
      fontFace: true,
    },
    extract: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  },
  important: true,
  theme: {
    screens: { //we might need to redefine it to set max-width as well for each breakpoint
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px"
    },
    colors: {
      transparent: "transparent",
      current: 'currentColor',
      white: {
        50: "#FFFFFF"
      },
      black: {
        50: "#141414"
      },
      primary: {
        50: "#FFDB0A"
      },
      blue: {
        50: "#3D61B0"
      },
      grey: {
        50: "#F6FAFC"
      },
      red: {
        50: "#FF6142"
      },
      navyBlue: {
        50: "#26458C"
      },
      darkGrey: {
        50: "#333333"
      }

    },

    extend: { //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: { //if we'll not get a set of spacing values used globally across the project at the beginning of the development,
        // then there'll be only 1 option left for the developers and that will be to specify 1 naming convention standard
        // and keep defining new spacing variants along the development life cycle just to be able to use them as tw classes into the project,
        // also we cannot edit the values of the existing variant
        // just to maintain the sorting acc. to the values as it will ruin the wrok done by then,
        // ps: spacing includes width and height too ps: If multiple developers will be working on the same project then
        // they might define same variant twice with same or different names which will be a big issue here, need to discuss this with Kapil

        4.5: "18px",
        7.75: "31px",
        9.5: "38px",
        11.5: "46px", //divide the required value by 4 to get the key name (46/4 = 11.5)
        13: "52px",
        15: "60px",
        18.5: "74px",
        19.25: "77px",
        20.5: "82px",
        21.25: "85px",
        25.5: "98px",
        29: "116px",
        35: "140px",
        36.5: "146px",
        57.5: "230px",
        61: "244px",
        65: "260px",


      },
      borderWidth: { //we can probably ask Kapil to share the values atleast for border width specially if they're rarely used (for buttons etc.)
        // '0': 0,
        // '1': "1px",
        // 'DEFAULT': "1px",
        // '2': "2px",
        // '4': "4px",
        // '8': "8px",
      },
      borderRadius: { //same as border width
        '5-5xl': "34px",
        // none: "0rem",
        // sm: "0.125rem",
        // DEFAULT: "0.25rem",
        // md: "0.5rem",
        // lg: "1rem",
        // full: "10rem"
      },
    },

    fontSize: { // `[fontSize, { letterSpacing, lineHeight }]`

      'ft1': ['12px', { //Poppins Regular
        letterSpacing: '0em',
        lineHeight: '18px', //need to ask Kapil what is the unit of the 'line spacing' given in the design?
      }],
      'ft2': ['14px', {
        letterSpacing: '0em',
        lineHeight: '21px',
      }],
      'ft3': ['15px', { //Button-Text-Menu-Inactive, Button-Text-Blue, Button-Text-White, Poppins Semibold -15px
        letterSpacing: '0em',
        lineHeight: '23px',
      }],
      'ft4': ['16px', { //Body-Text-NBlue-SBold, Poppins bold
        letterSpacing: '0em',
        lineHeight: '25px',
      }],
      'ft5': ['16px', { //Body-Text-Black , Body-Text-Medium-Black, Body-Text-White
        letterSpacing: '0em',
        lineHeight: '22px',
      }],
      'ft6': ['18px', { //H5,
        letterSpacing: '0em',
        lineHeight: '27px',
      }],
      'ft7': ['22px', { //Poppins Medium
        letterSpacing: '0em',
        lineHeight: '33px',
      }],
      'ft8': ['24px', { //H4
        letterSpacing: '0em',
        lineHeight: '35px',
      }],
      'ft9': ['34px', { //H3
        letterSpacing: '0em',
        lineHeight: '62px',
      }],
      'ft10': ['38px', { //Poppins Bold
        letterSpacing: '0em',
        lineHeight: '57px',
      }],
      'ft11': ['44px', { //H1
        letterSpacing: '0em',
        lineHeight: '62px',
      }],

      // 'xs': ['0.75rem', {
      //   letterSpacing: '0em',
      //   lineHeight: '1.125rem',
      // }],
      // 'sm': ['0.875rem', {
      //   letterSpacing: '0em',
      //   lineHeight: '1.313rem',
      // }],
      // 'base': ['1rem', {
      //   letterSpacing: '0em',
      //   lineHeight: '1.5rem',
      // }],
      // 'lg': ['1.125rem', {
      //   letterSpacing: '0em',
      //   lineHeight: '1.688rem',
      // }],
      // 'xl': ['1.25rem', { // mobile has line hight 1.3 on zepplin; check with desigm
      //   letterSpacing: '0em',
      //   lineHeight: '2rem',
      // }],
      // '2xl': ['1.75rem', {
      //   letterSpacing: '0em',
      //   lineHeight: '2.125rem',
      // }],
      // '3xl': ['1.88rem', { // mobile has line hight 1.33 on zepplin; check with desigm
      //   letterSpacing: '0em',
      //   lineHeight: '2.5rem',
      // }],
      // '4xl': ['2.25rem', {
      //   letterSpacing: '0.063em',
      //   lineHeight: '2.938rem',
      // }],
      // '5xl': ['3rem', {
      //   letterSpacing: '-2.1px',
      //   lineHeight: '3.750rem',
      // }],
      // '6xl': ['4rem', {
      //   letterSpacing: '-3.2px',
      //   lineHeight: '4.875rem',
      // }]
    },


    fontFamily: {
      PoppinsBold: [
        "Poppins-Bold", 'sans-serif'
      ],
      PoppinsSemiBold: [
        "Poppins-SemiBold", 'sans-serif'
      ],
      PoppinsRegular: [
        "Poppins-Regular", 'sans-serif'
      ],
      PoppinsMedium: [
        "Poppins-Medium", 'sans-serif'
      ],
    },


    boxShadow: { //same as whatever is written in comments for 'spacing'
      // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      xs: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
      xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
      DEFAULT: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      '2xl': "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 3px 0 rgba(0, 0, 0, 0.5)",
      lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
      md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
      outline: "0px 0px 0px 3px rgba(0, 0, 0, 0.5)"
    },
    // backgroundImage: theme => ({
    //   'hero-pattern': "url('/wp-content/themes/kinesis_v3_theme/assets/images/PersonalFullWidth.jpg')",
    // }),
  },
  variants: { //this probably needs a little study to find out if atleast the mainstream css properties are available for these
    // 4 functions mentioned below by default, if there are any properties which are important and are not accessible by default,
    // then they must be specified here in the beginning of the project development cycle only,
    // this is also supposed to be common for almost all the projects so this needs to be primarily done once and for all
    width: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "group-hover"],
    transform: ["responsive", "hover", "focus", "group-hover"],
    scale: ["responsive", "hover", "focus", "group-hover"],
    extend: {
      animation: ['hover', 'focus', 'group-hover'],
      grayscale: ['hover', 'focus', 'group-hover'],
    }
  },
  plugins: [],
  darkMode: 'class'

  //Also there are a lot and lot of more properties which are used in projects and which need to/can be specified her in this file,
  // because to fully use tailwind we DO need to specify them here otherwise custom classes would have to be used.
  // Identify them either along with the development process and keep adding them one by one as per the requirement by following defined standards,
  // or identify and mention them at the extreme start of the project only

}
