import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Can Toraman</title>
        <link
          rel="shortcut icon"
          href="https://img.icons8.com/color/48/000000/gandalf.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Can Toraman, computer science student @ University of Southern California. Welcome!"
        ></meta>
        <meta
          property="og:description"
          content="Can Toraman, computer science student @ University of Southern California. Welcome!"
          key="ogdesc"
        />
      </Head>
      <div
        className="min-h-screen text-black"
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
