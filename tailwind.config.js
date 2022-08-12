module.exports = {
  purge: {
    enabled: false,
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
    screens: { // specifying screens is mandatory in every tailwind.config file
      xs: "480px",   //min-width 480px
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1024px",
      '2xl': "1280px",
      '3xl': "1440px",
    },
    colors: {
      transparent: "transparent",
      current: 'currentColor',
      white: "#FFFFFF",
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
        50: "#F6FAFC",
        100: "#5B5B5B",
        200: "#3D545B",
        300: "#CED5D6CC",
        400: "#F4F5F5",
        500: "#F5F3F3",
      },
      red: {
        50: "#FF6142"
      },
      navyBlue: {
        50: "#26458C"
      },
      darkGrey: {
        50: "#333333"
      },
      magenta: "#FF0083",
      green: {
        50: "#DBEC79",
      }

    },

    fontSize: { // `[fontSize, { letterSpacing, lineHeight }]`
      'ft1': ['14px', {
        letterSpacing: '0em',
        lineHeight: '17.92px',
      }],
      'ft2': ['14px', {
        letterSpacing: '0em',
        lineHeight: '18px',
      }],
      'ft3': ['24.81px', {
        letterSpacing: '0em',
        lineHeight: '23.77px',
      }],
      'ft4': ['14px', {
        letterSpacing: '0em',
        lineHeight: '16.8px',
      }],
      'ft5': ['12.63px', {
        letterSpacing: '0em',
        lineHeight: '16.17px',
      }],
      'ft6': ['10.02px', {
        letterSpacing: '0em',
        lineHeight: '12.82px',
      }],
      'ft7': ['12.02px', {
        letterSpacing: '0em',
        lineHeight: '16.83px',
      }],
      'ft8': ['10.02px', {
        letterSpacing: '0em',
        lineHeight: '14.03px',
      }],
      'ft9': ['14.03px', {
        letterSpacing: '0em',
        lineHeight: '17.95px',
      }],
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


    boxShadow: {
    },

    backgroundImage: theme => ({
      'dummy': "url('/public/images/Mask-Group-3.png')", //tailwind class => bg-dummy
    }),

    extend: { //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: { //common for width, height, padding, margin
        "99px": "99px",
        "31px": "31px",
        62.5: "250px",
        "18per": "18%",
        "82per": "82%",
        4.5: "18px",
        "7.58px": "7.58px",
        "238.84px": "238.84px",
        "109.94px": "109.94px",
        "39.81px": "39.81px",
      },
      borderWidth: {

      },
      borderRadius: { //same as border width
        '5-5xl': "34px",
      },
    },
  },

  variants: { //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
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
  darkMode: false
}
