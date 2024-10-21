"use client";
import { AstronautHelmetIcon } from "@/icons/AstronautHelmetIcon";
import { cn } from "@/lib/utils";
import { IconButton } from "@/ui/IconButton";
import Link from "next/link";
import { useState } from "react";
import { siGithub } from "simple-icons";
import SimpleIcon from "./SimpleIcon";

export function Header() {
  const [active, setActive] = useState("home");

  return (
    <header className="container mx-auto flex justify-between px-10 py-5">
      <Link href="/" className="hidden items-center sm:flex">
        <AstronautHelmetIcon size={16} className="mr-1 text-[#EB5E41]" />
        malcodeman
      </Link>
      <div className="flex items-center gap-6">
        <nav className="space-x-6">
          <Link
            href="/"
            className={cn({
              "text-[#EB5E41] underline transition-colors": active === "home",
            })}
            onClick={() => setActive("home")}
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className={cn({
              "text-[#EB5E41] underline transition-colors":
                active === "projects",
            })}
            onClick={() => setActive("projects")}
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className={cn({
              "text-[#EB5E41] underline transition-colors":
                active === "contact",
            })}
            onClick={() => setActive("contact")}
          >
            Contact
          </Link>
        </nav>
        <div className="h-6 w-[1px] bg-[#E9E8E6] dark:bg-[#2A2A28]" />
        <a
          href="https://github.com/malcodeman/malcodeman.com"
          target="_blank"
          aria-label="GitHub repository"
        >
          <IconButton variant="ghost">
            <SimpleIcon size={16} path={siGithub.path} />
          </IconButton>
        </a>
      </div>
    </header>
  );
}
