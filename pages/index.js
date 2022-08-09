import Head from "next/head";
import Link from "next/link";
import LandingContainer from "../components/Containers/LandingContainer";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <LandingContainer classnames="mt-10">
        <h2 className="text-4xl text-left">Hey, this is Can.</h2>
        <p className="text-lg">
          I write server-side code and design software systems.
        </p>
        <p className="text-lg">
          I study computer science at the{" "}
          <a
            href="https://www.cs.usc.edu"
            target="_blank"
            rel="noopener"
            className="text-blue-400 text-decoration-line"
          >
            University of Southern California
          </a>
          . I will graduate in May 2023.
        </p>
        <p className="text-lg">
          I was a founding member at{" "}
          <a
            href="https://www.ethsign.xyz"
            target="_blank"
            rel="noopener"
            className="text-blue-400"
          >
            EthSign
          </a>
          . Later, I worked full-time on the backend of delivery zones at{" "}
          <a
            href="https://www.getir.com"
            target="_blank"
            rel="noopener"
            className="text-blue-400"
          >
            Getir
          </a>
          .
        </p>
      </LandingContainer>
      <LandingContainer classnames="py-7">
        <div className="flex flex-wrap space-x-3 text-blue-400">
          <a
            className="hover:cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/cantoramann"
          >
            Twitter (dm me!)
          </a>
          <a
            className="hover:cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/cantoramann"
          >
            GitHub
          </a>
          <a
            className="hover:cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/cantoraman/"
          >
            LinkedIn
          </a>
        </div>
      </LandingContainer>
    </div>
  );
}
