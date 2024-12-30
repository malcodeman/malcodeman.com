"use client";
import { AstronautHelmetIcon } from "@/icons/AstronautHelmetIcon";
import { cn } from "@/lib/utils";
import { IconButton } from "@/ui/IconButton";
import Link from "next/link";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { REPO_URL } from "@/lib/constants";
import { useFavicon } from "@/hooks/useFavicon";

export function Header() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();
  const [favicon, setFavicon] = useState("/favicon_dark.ico");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    setFavicon(theme === "light" ? "/favicon_dark.ico" : "/favicon_light.ico");
  }

  useFavicon(favicon);

  return (
    <header className="container mx-auto flex justify-between px-10 py-5">
      <Link href="/" className="hidden items-center sm:flex">
        <AstronautHelmetIcon
          size={16}
          className="mr-1 text-[#92310a] dark:text-[#fdba74]"
        />
        malcodeman
      </Link>
      <div className="flex items-center gap-6">
        <nav className="space-x-6">
          <Link
            href="/"
            className={cn({
              "text-[#92310a] underline transition-colors dark:text-[#fdba74]":
                active === "home",
            })}
            onClick={() => setActive("home")}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className={cn({
              "text-[#92310a] underline transition-colors dark:text-[#fdba74]":
                active === "projects",
            })}
            onClick={() => setActive("projects")}
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className={cn({
              "text-[#92310a] underline transition-colors dark:text-[#fdba74]":
                active === "contact",
            })}
            onClick={() => setActive("contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden h-6 w-[1px] bg-[#E9E8E6] dark:bg-[#2A2A28] sm:block" />
        <div className="hidden sm:flex">
          <IconButton
            variant="ghost"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
          <a href={REPO_URL} target="_blank">
            <IconButton variant="ghost" aria-label="GitHub repository">
              <SiGithub />
            </IconButton>
          </a>
        </div>
      </div>
    </header>
  );
}
