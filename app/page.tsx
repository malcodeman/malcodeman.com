import Image from "next/image";
import Link from "next/link";
import { GiAstronautHelmet } from "react-icons/gi";

import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function Home() {
  return (
    <div>
      <header className="container mx-auto p-4 flex justify-between">
        <Link href="/" className="hidden sm:flex items-center">
          <GiAstronautHelmet size="16" className="mr-1 dark:text-[#F28444]" />
          malcodeman
        </Link>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <div className="container mx-auto p-4 grid gap-4 sm:grid-cols-[2fr_1fr]">
        <div className="bg-[#A7D5F2]/50 rounded-lg p-8 flex flex-col justify-between">
          <div className="mb-6 text-[#202126]">
            <h1 className="text-4xl mb-4">Hello, I’m Amer Karamustafić. 👋</h1>
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
          className="rounded-lg h-full object-cover"
          width="1080"
          height="1080"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
          priority
        />
      </div>
      <Projects />
      <div id="contact" className="container mx-auto p-4">
        <div className="rounded-lg p-8 bg-[#A7D5F2]/50">
          <div className="mb-6 text-[#202126]">
            <h1 className="text-4xl mb-4">Get in touch 🤙</h1>
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
