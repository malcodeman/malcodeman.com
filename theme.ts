import { extendTheme } from "@chakra-ui/react";

import { ChakraThemeConfig } from "./types";

const config: ChakraThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

export default theme;
