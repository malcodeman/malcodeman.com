import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="og:description" content="malcodeman.com" />
          <meta name="description" content="malcodeman.com" />
          <meta property="og:image" content="opengraph.png" />
        </Head>
        <body className="dark:text-[#A7D5F2] dark:bg-[#202126]">
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
