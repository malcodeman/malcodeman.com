import Image from "next/image";
import { Text } from "@/ui/Text";
import { Heading } from "@/ui/Heading";
import { Highlight } from "@/ui/Highlight";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import { GridItem } from "./components/GridItem";
import { Header } from "./components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mb-5 grid gap-5 px-5 sm:grid-cols-[2fr_1fr]">
        <GridItem className="flex flex-col justify-between">
          <div className="mb-6">
            <Heading className="mb-4">
              Hello, I&apos;m Amer Karamustafić. 👋
            </Heading>
            <Text>
              <Highlight
                query={["product engineer"]}
                text="I'm a product engineer specializing in startups, open source
              and web3. Currently living in Berlin 🐻."
              />
            </Text>
            <Text>
              I like running 🏃‍♂️, hiking ⛰️ and writing code in dark theme 🌙.
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
      <div id="contact" className="container mx-auto px-5 pb-5">
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
