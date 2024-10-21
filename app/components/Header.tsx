"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { GiAstronautHelmet } from "react-icons/gi";

export function Header() {
  const [active, setActive] = useState("home");

  return (
    <header className="container mx-auto flex justify-between px-10 py-5">
      <Link href="/" className="hidden items-center sm:flex">
        <GiAstronautHelmet size="16" className="mr-1 text-[#EB5E41]" />
        malcodeman
      </Link>
      <nav className="space-x-6">
        <Link
          href="/"
          className={cn({
            "text-[#EB5E41] underline": active === "home",
          })}
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          href="/#projects"
          className={cn({
            "text-[#EB5E41] underline": active === "projects",
          })}
          onClick={() => setActive("projects")}
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className={cn({
            "text-[#EB5E41] underline": active === "contact",
          })}
          onClick={() => setActive("contact")}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
