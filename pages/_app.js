import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Richard Zhang</title>
        <link
          rel="shortcut icon"
          href="https://icons8.com/icon/BXHn8-pxp97I/man-with-chinese-cap"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="I write server-side code and design software systems."
        ></meta>
        <meta
          property="og:description"
          content="I write server-side code and design software systems."
          key="ogdesc"
        />
      </Head>
      <div className="min-h-screen pb-20 font-text text-neutral-900 bg-white">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
