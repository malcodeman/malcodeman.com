import { Metadata } from "next";
import { Project } from "@/types";

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

export const PROJECTS: Project[] = [
  {
    url: "https://www.resumebuilder.dev",
    title: "resumebuilder.dev",
    description:
      "Privacy-focused and login-free resume builder for developers.",
    imageSrc: ["/resume_builder_mobile.webp", "/resume_builder_desktop.webp"],
  },
  {
    url: "https://www.lurkstation.com",
    title: "lurkstation.com",
    description: "Content oriented reddit client.",
    imageSrc: ["/lurkstation_mobile.webp", "/lurkstation_desktop.webp"],
  },
];

export const REPO_URL = "https://github.com/malcodeman/malcodeman.com";
