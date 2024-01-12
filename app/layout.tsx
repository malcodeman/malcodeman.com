import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import { METADATA } from "./lib/constants";

import "./globals.css";

export const metadata = {
  ...METADATA,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:text-[#A7D5F2] dark:bg-[#202126]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
