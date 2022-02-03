import { extendTheme } from "@chakra-ui/react";

import { ChakraThemeConfig } from "./types";

const config: ChakraThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  ...config,
  styles: {
    global: {
      html: {
        scrollbarWidth: "thin",
        overflowX: "hidden",
      },
      "html::-webkit-scrollbar": {
        width: "8px",
      },
      "html::-webkit-scrollbar-thumb": {
        backgroundColor: "#72757b",
      },
    },
  },
});

export default theme;
