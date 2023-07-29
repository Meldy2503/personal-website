// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand: {
      // background: linear-gradient(159deg,#252532 0%,#23232d 100%);
      100: "#fff",
      150: "#fafafc",
      200: "rgba(255,255,255,1)",
      250: "#f4f4f6",
      300: " #f0f0f6",
      350: "#8c8c8e",
      400: "#5c5c6f",
      450: "#2b2b36",
      500: "#252532",
      550: "#1e2828",
      600: "#20202a",
      650: "#1e1e28",
      700: "#23232d",
      750: "#191923",
      800: "#ffc107",
      850: "#f46258",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Ubuntu, sans-serif",
  },
});

export default theme;