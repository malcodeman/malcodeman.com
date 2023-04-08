"use client";

import Error from "./components/Error";
import { ErrorComponent } from "../types";

function GlobalError({ reset }: ErrorComponent) {
  return (
    <html>
      <body>
        <Error reset={reset} />
      </body>
    </html>
  );
}

export default GlobalError;
