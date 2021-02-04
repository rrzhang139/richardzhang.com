import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Can Toraman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col justify-center">
        <Intro />
      </div>
    </div>
  );
}
