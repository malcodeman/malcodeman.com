import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>malcodeman.com</title>
      </Head>
      <div>
        <header className="container mx-auto px-4 py-4 flex justify-between">
          <Link href="/" className="flex items-center" passHref>
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
            <div className="">
              <h1 className="text-4xl mb-4">
                Hello, I’m Amer Karamustafić. 👋
              </h1>
              <p>
                I’m a full-stack engineer working at fintech startup called
                Nuri. Currently living in Berlin.
              </p>
              <p className="mb-4">
                I like running, hiking and writing code in dark theme.
              </p>
            </div>
            <div>
              <a href="mailto:malcodeman@gmail.com">
                <button className="px-4 py-2 font-semibold text-sm bg-[#F28444] text-white rounded-full">
                  Contact me
                </button>
              </a>
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
