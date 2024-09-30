import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { METADATA } from "./lib/constants";

import "./globals.css";

export const metadata = {
  ...METADATA,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-[#202126] dark:text-[#A7D5F2]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
