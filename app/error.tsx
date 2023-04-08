"use client";

import ErrorComponent from "./components/Error";
import { ErrorComponent as ErrorComponentType } from "../types";

function Error({ reset }: ErrorComponentType) {
  return <ErrorComponent reset={reset} />;
}

export default Error;
