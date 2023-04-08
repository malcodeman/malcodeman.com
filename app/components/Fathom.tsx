"use client";
import { useEffect } from "react";
import { load } from "fathom-client";

import {
  FATHOM_INCLUDED_DOMAINS,
  FATHOM_SITE_ID,
  IS_PROD,
} from "../lib/constants";

function Fathom() {
  useEffect(() => {
    if (!IS_PROD) {
      load(FATHOM_SITE_ID, {
        includedDomains: FATHOM_INCLUDED_DOMAINS,
      });
    }
  }, []);

  return null;
}

export default Fathom;
