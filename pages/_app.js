import "../styles/globals.css";
import "../styles/fonts.css";
import Head from "next/head";
import Nav from "../components/Nav";
import { ThemeProvider } from "../components/ThemeContext";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  // Track client-side rendering
  const [mounted, setMounted] = useState(false);
  
  // Mark as mounted after component is rendered client-side
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <ThemeProvider>
      
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
      <div className="theme-sync min-h-screen pb-20 font-text text-neutral-900 dark:text-neutral-100 bg-eggshell dark:bg-midnight">
        <Nav />
        
        {/* Simple approach to prevent hydration issues: hide content until mounted */}
        <div className="theme-sync" style={{ visibility: mounted ? 'visible' : 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
