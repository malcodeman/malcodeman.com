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
  return (
    <>
      <Head>
        <title>malcodeman.com</title>
      </Head>
      <div>
        <header className="container mx-auto px-4 py-4 flex justify-between">
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
        <div className="container mx-auto px-4 py-4 grid gap-4 sm:grid-cols-[2fr_1fr]">
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
      </div>
    </>
  );
}

export default Home;
