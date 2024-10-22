import { Metadata } from "next";

export const IS_PROD = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

const TITLE = "malcodeman | Product engineer";
const DESCRIPTION =
  "I design slick interfaces that make finance and crypto look easy.";

export const METADATA: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.malcodeman.com",
    siteName: "malcodeman",
    images: [
      {
        url: "https://www.malcodeman.com/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
