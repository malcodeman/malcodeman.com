import { useMediaQuery } from "@react-hookz/web";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ContactMe from "../components/ContactMe";
import Project from "../components/Project";

function Home() {
  const colorMode = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const PROJECTS = [
    {
      url: "https://www.resumebuilder.dev",
      title: "resumebuilder.dev",
      description:
        "Privacy-focused and login-free resume builder for developers.",
      bgColor: "bg-[#818C30]/50",
      picture: [
        {
          srcSet: `/resume_builder_dev_macbook_${colorMode}.png`,
          media: "(min-width: 1024px)",
          height: 2520,
          width: 4072,
        },
      ],
      image: {
        src: `/resume_builder_dev_iphone_${colorMode}.png`,
        height: 2028,
        width: 1059,
      },
    },
    {
      url: "https://www.bosnianswho.design",
      title: "bosnianswho.design",
      description:
        "A directory of inspiring Bosnians and Herzegovinians in the IT industry.",
      bgColor: "bg-[#D9AD77]/50",
      picture: [
        {
          srcSet: `/bosnians_who_design_macbook_${colorMode}.png`,
          media: "(min-width: 1024px)",
          height: 2520,
          width: 4072,
        },
      ],
      image: {
        src: `/bosnians_who_design_iphone_${colorMode}.png`,
        height: 2028,
        width: 1059,
      },
    },
  ];
  return (
    <>
      <Head>
        <title>malcodeman.com</title>
      </Head>
      <div>
        <header className="container mx-auto p-4 flex justify-between">
          <Link href="/" className="hidden sm:flex items-center" passHref>
            <div className="bg-[#F28444] h-4 w-4 rounded-full mr-1" />
            malcodeman
          </Link>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <div className="container mx-auto p-4 grid gap-4 sm:grid-cols-[2fr_1fr] mb-4">
          <div className="bg-[#A7D5F2]/50 rounded-lg p-8 flex flex-col justify-between">
            <div className="mb-4 text-[#202126]">
              <h1 className="text-4xl mb-4">
                Hello, I’m Amer Karamustafić. 👋
              </h1>
              <p>
                I’m a full-stack engineer working at fintech startup called
                Nuri. Currently living in Berlin 🐻.
              </p>
              <p>
                I like running 🏃‍♂️, hiking ⛰️ and writing code in dark theme.
              </p>
            </div>
            <ContactMe />
          </div>
          <Image
            src="/amer.jpg"
            alt=""
            className="rounded-lg h-full object-cover"
            width="1080"
            height="1080"
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1024px"
          />
        </div>
        <div
          id="projects"
          className="container mx-auto p-4 grid gap-4 sm:grid-cols-[1fr_1fr]"
        >
          {PROJECTS.map((item) => (
            <Project
              key={item.url}
              url={item.url}
              bgColor={item.bgColor}
              title={item.title}
              description={item.description}
              picture={item.picture}
              image={item.image}
            />
          ))}
        </div>
        <div id="contact" className="container mx-auto p-4">
          <div className="rounded-lg p-8 bg-[#A7D5F2]/50">
            <div className="mb-4 text-[#202126]">
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
    </>
  );
}

export default Home;
