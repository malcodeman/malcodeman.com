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
      <body className="bg-[#FDFDFC] text-[#21201C] dark:bg-[#111110] dark:text-[#EEEEEC]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
