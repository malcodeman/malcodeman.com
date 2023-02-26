import { useMediaQuery } from "@react-hookz/web";
import Head from "next/head";
import Link from "next/link";
import {
  siGithub,
  siDevdotto,
  siDribbble,
  siStackoverflow,
} from "simple-icons/icons";

import SimpleIcon from "../components/SimpleIcon";

const LINKS = [
  {
    url: "https://github.com/malcodeman",
    icon: <SimpleIcon size={16} path={siGithub.path} />,
  },
  {
    url: "https://dev.to/malcodeman",
    icon: <SimpleIcon size={16} path={siDevdotto.path} />,
  },
  {
    url: "https://dribbble.com/malcodeman",
    icon: <SimpleIcon size={16} path={siDribbble.path} />,
  },
  {
    url: "https://stackoverflow.com/users/14981767/malcodeman",
    icon: <SimpleIcon size={16} path={siStackoverflow.path} />,
  },
];

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
          srcSet: `resume_builder_dev_macbook_${colorMode}.png`,
          media: "(min-width: 1024px)",
        },
      ],
      image: `resume_builder_dev_iphone_${colorMode}.png`,
    },
    {
      url: "https://www.bosnianswho.design",
      title: "bosnianswho.design",
      description:
        "A directory of inspiring Bosnians and Herzegovinians in the IT industry.",
      bgColor: "bg-[#D9AD77]/50",
      picture: [
        {
          srcSet: `bosnians_who_design_macbook_${colorMode}.png`,
          media: "(min-width: 1024px)",
        },
      ],
      image: `bosnians_who_design_iphone_${colorMode}.png`,
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
            <div className="dark:text-[#202126]">
              <h1 className="text-4xl mb-4">
                Hello, I’m Amer Karamustafić. 👋
              </h1>
              <p>
                I’m a full-stack engineer working at fintech startup called
                Nuri. Currently living in Berlin 🐻.
              </p>
              <p className="mb-4">
                I like running 🏃‍♂️, hiking ⛰️ and writing code in dark theme.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <a href="mailto:malcodeman@gmail.com">
                <button className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto font-semibold text-sm rounded-full bg-[#F28444] text-white">
                  Contact me
                </button>
              </a>
              <div className="flex justify-between sm:space-x-4">
                {LINKS.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-white dark:bg-[#202126]">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <img
            src="amer.jpg"
            alt=""
            className="rounded-lg h-full object-cover"
          />
        </div>
        <div className="container mx-auto p-4 grid gap-4 sm:grid-cols-[1fr_1fr]">
          {PROJECTS.map((item) => (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
              <div
                className={`flex flex-col p-8 rounded-lg h-full dark:text-white ${item.bgColor}`}
              >
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-sm mb-4 opacity-80">{item.description}</p>
                <picture className="rounded-lg object-cover mt-auto">
                  {item.picture.map((picture) => (
                    <source
                      key={picture.srcSet}
                      srcSet={picture.srcSet}
                      media={picture.media}
                    />
                  ))}
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg object-cover mt-auto"
                  />
                </picture>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
