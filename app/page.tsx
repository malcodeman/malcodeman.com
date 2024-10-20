import Image from "next/image";
import Link from "next/link";
import { GiAstronautHelmet } from "react-icons/gi";

import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { Text } from "@/ui/Text";
import { Heading } from "@/ui/Heading";
import { GridItem } from "./components/GridItem";

function Home() {
  return (
    <div>
      <header className="container mx-auto flex justify-between p-4">
        <Link href="/" className="hidden items-center sm:flex">
          <GiAstronautHelmet size="16" className="mr-1 text-[#EB5E41]" />
          malcodeman
        </Link>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <div className="container mx-auto grid gap-4 p-4 sm:grid-cols-[2fr_1fr]">
        <GridItem className="flex flex-col justify-between">
          <div className="mb-6">
            <Heading className="mb-4">Hello, I’m Amer Karamustafić. 👋</Heading>
            <Text>
              I’m a full-stack engineer specializing in startups, open source
              and web3. Currently living in Berlin 🐻.
            </Text>
            <Text>
              I like running 🏃‍♂️, hiking ⛰️ and writing code in dark theme.
            </Text>
          </div>
          <ContactMe />
        </GridItem>
        <Image
          src="/amer.webp"
          alt=""
          className="h-full rounded-[20px] object-cover"
          width="1080"
          height="1080"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
          priority
        />
      </div>
      <Projects />
      <div id="contact" className="container mx-auto p-4">
        <GridItem>
          <div className="mb-6">
            <Heading className="mb-4">Get in touch 🤙</Heading>
            <Text>
              Feel free to reach out for collaborations or just a friendly
              hello.
            </Text>
          </div>
          <ContactMe />
        </GridItem>
      </div>
    </div>
  );
}

export default Home;
