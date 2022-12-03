import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import * as Fathom from "fathom-client";

import theme from "../theme";

const FATHOM_SITE_ID = "DYETUSIG";
const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if (IS_PROD) {
      Fathom.load(FATHOM_SITE_ID, {
        url: "https://warbler.resumebuilder.dev/script.js",
        includedDomains: ["malcodeman.com", "www.malcodeman.com"],
      });
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
