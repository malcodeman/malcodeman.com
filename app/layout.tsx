import { ReactNode } from "react";

import Fathom from "./components/Fathom";
import { METADATA } from "../lib/constants";

import "../styles/globals.css";

export const metadata = {
  ...METADATA,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:text-[#A7D5F2] dark:bg-[#202126]">
        <Fathom />
        {children}
      </body>
    </html>
  );
}
