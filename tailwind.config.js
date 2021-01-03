const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const mdx = require("@mdx-js/mdx");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

module.exports = {
  darkMode: "media",
  purge: {
    content: [
      "components/**/*.{js,ts,jsx,tsx}",
      "pages/**/*.{js,ts,jsx,tsx,mdx}",
      "next.config.js",
      "lib/**/*.js",
    ],
    options: {
      extractors: [
        {
          extensions: ["mdx"],
          extractor: (content) => {
            content = mdx.sync(content);

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) ||
              [];

            return broadMatches.concat(innerMatches);
          },
        },
      ],
    },
  },

  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            h1: {
              fontFamily: theme("fontFamily.display"),
              backgroundImage: `linear-gradient(to bottom right, ${theme(
                "colors.purple.400"
              )},${theme("colors.teal.400")})`,
              backgroundClip: "text",
              color: theme("colors.transparent"),
              "&::selection": {
                color: theme("colors.yellow.600"),
              },
            },
            p: {
              "&::selection": {
                color: theme("colors.yellow.600"),
              },
            },
            a: {
              textDecoration: "none",
              display: "inline-block",
              color: theme("colors.purple.600"),
              transform: `rotate(${theme("rotate.-2")})`,
              transitionProperty: theme("transitionProperty.transition"),
              transitionDuration: theme("transitionDuration.150"),
              "&::selection": {
                color: theme("colors.yellow.600"),
              },
              "&:hover": {
                transform: `rotate(${theme("rotate.0")})`,
              },
              "&:before": {
                transitionProperty: theme("transitionProperty.transition"),
                transitionDuration: theme("transitionDuration.150"),
                position: "absolute",
                backgroundImage: `linear-gradient(to bottom right, ${theme(
                  "colors.purple.400"
                )},${theme("colors.teal.400")})`,
                opacity: theme("opacity.25"),
                top: theme("spacing.4"),
                left: theme("spacing.2"),
                height: "50%",
                width: theme("width.full"),
                content: "''",
                zIndex: "-1",
              },
              "&:hover:before": {
                opacity: theme("opacity.50"),
              },
            },
            code: {
              fontWeight: "600",
              backgroundColor: theme("colors.gray.200"),
              borderRadius: rem(6),
              padding: rem(6),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              color: theme("colors.purple.300"),
            },
            code: {
              backgroundColor: theme("colors.gray.700"),
              color: theme("colors.gray.100"),
            },
            pre: {
              backgroundColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
    fontFamily: {
      mono: "JetBrains Mono",
      display: "MuseoModerno",
      "hand-writing": "Code Saver",
      sans: "Trispace",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      yellow: colors.yellow,
      teal: colors.teal,
      purple: colors.purple,
      code: {
        green: "#b5f4a5",
        yellow: "#ffe484",
        purple: "#d9a9ff",
        red: "#ff8383",
        blue: "#93ddfd",
        white: "#fff",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["selection"],
      textColor: ["selection"],
      boxShadow: ["dark"],
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant, e }) => {
      addVariant("selection", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`;
        });
      });
    }),
  ],
};
