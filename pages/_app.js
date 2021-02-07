import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Can Toraman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Can Toraman, computer science student @ University of Southern California. Intrested in education technologies, AI for autonomy, creative web development."
        ></meta>
        <meta
          property="og:description"
          content="Can Toraman, computer science student @ University of Southern California. Intrested in education technologies, AI for autonomy, creative web development."
          key="ogdesc"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
