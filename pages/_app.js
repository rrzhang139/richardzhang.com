import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>Can Toraman</title>
        <link
          rel="shortcut icon"
          href="https://img.icons8.com/color/48/000000/gandalf.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="I write server-side code and design software systems. Welcome to my website!"
        ></meta>
        <meta
          property="og:description"
          content="I write server-side code and design software systems. Welcome to my website!"
          key="ogdesc"
        />
      </Head> */}
      <div
        className="min-h-screen pb-8 text-black"
        style={{
          fontFamily: "Nanum Gothic, sans-serif",
        }}
      >
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
