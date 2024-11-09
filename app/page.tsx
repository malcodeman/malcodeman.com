import { Text } from "@/ui/Text";
import { Heading } from "@/ui/Heading";
import { Highlight } from "@/ui/Highlight";
import ContactMe from "./components/ContactMe";
import { GridItem } from "./components/GridItem";
import { Header } from "./components/Header";
import { PROJECTS } from "./lib/constants";
import Project from "./components/Project";
import { ContactMeBodyParagraph } from "./components/ContactMeBodyParagraph";

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
            <ContactMeBodyParagraph />
          </div>
          <ContactMe />
        </GridItem>
        <picture>
          <source srcSet="/amer_desktop.webp" media="(min-width: 640px)" />
          <img
            src="/amer_mobile.webp"
            alt=""
            className="aspect-square h-full w-full rounded-[20px] object-cover"
          />
        </picture>
      </div>
      <div
        id="projects"
        className="container mx-auto mb-5 grid gap-5 px-5 sm:grid-cols-[1fr_1fr]"
      >
        {PROJECTS.map((item) => (
          <Project
            key={item.url}
            url={item.url}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
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
