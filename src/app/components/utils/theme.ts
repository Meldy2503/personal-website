// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Poppins } from "@next/font/google";

// 2. Add your color modeRoboto config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const nextFont = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#fff",
      150: "#fafafc",
      200: "rgba(255,255,255,1)",
      220: "rgb(240, 240, 246, 0.9)",
      250: "#f4f4f6",
      300: " #f0f0f6",
      320: " #e0e0e6",
      350: "#8c8c8e",
      380: "#7b7a7a",
      400: "#5c5c6f",
      450: "#2b2b36",
      500: "#252532",
      550: "#1e1e28",
      600: "#20202a",
      650: "#2c2c38",
      700: "#23232d",
      720: "rgba(43,43,53,.98)",
      750: "#191923",
      800: "#ffc107",
      850: "#dd6b21",
      900: "#cacace",
      950: "#363643",
      960: "rgba(30,30,40,0.95)",
      980: "rgba(45,45,58,0.8)",
      990: "rgba(45,45,58,0.7)",
      970: "rgba(45,45,58,0.15)",
    },
  },
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
});

export default theme;
