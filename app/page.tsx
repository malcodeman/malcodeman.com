import Image from "next/image";
import Link from "next/link";
import { GiAstronautHelmet } from "react-icons/gi";

import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function Home() {
  return (
    <div>
      <header className="container mx-auto flex justify-between p-4">
        <Link href="/" className="hidden items-center sm:flex">
          <GiAstronautHelmet size="16" className="mr-1 dark:text-[#F28444]" />
          malcodeman
        </Link>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <div className="container mx-auto grid gap-4 p-4 sm:grid-cols-[2fr_1fr]">
        <div className="flex flex-col justify-between rounded-lg bg-[#A7D5F2]/50 p-8">
          <div className="mb-6 text-[#202126]">
            <h1 className="mb-4 text-4xl">Hello, I’m Amer Karamustafić. 👋</h1>
            <p>
              I’m a full-stack engineer specializing in startups, open source
              and web3. Currently living in Berlin 🐻.
            </p>
            <p>I like running 🏃‍♂️, hiking ⛰️ and writing code in dark theme.</p>
          </div>
          <ContactMe />
        </div>
        <Image
          src="/amer.webp"
          alt=""
          className="h-full rounded-lg object-cover"
          width="1080"
          height="1080"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
          priority
        />
      </div>
      <Projects />
      <div id="contact" className="container mx-auto p-4">
        <div className="rounded-lg bg-[#A7D5F2]/50 p-8">
          <div className="mb-6 text-[#202126]">
            <h1 className="mb-4 text-4xl">Get in touch 🤙</h1>
            <p>
              Feel free to reach out for collaborations or just a friendly
              hello.
            </p>
          </div>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default Home;
