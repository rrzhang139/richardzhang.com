import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container/Container";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: "Password Generator",
      desc: "Lyrics based password generator",
      url: "https://www.passwordgenerator.lol/",
    },
    {
      name: "Portable Rate Limiter",
      desc: "Rate limiter and log store that uses the sliding window log algorithm.",
      url: "https://github.com/cantoramann/node-redis-rate-limtier",
    },
    {
      name: "Lightos",
      desc: "Extensible, production-ready skeleton for Express servers.",
      url: "#",
    },
    {
      name: "Study on USC",
      desc: "Study group notification app for USC students.",
      url: "https://www.studyonusc.com/",
    },
  ];
  return (
    <div>
      <Head></Head>
      <Container title="Can Toraman">
        <div className="font-text text-base leading-7 tracking-wider space-y-16">
          <p>
            I write server-side code and design software systems. I'm a senior
            studying computer science at the University of Southern California.
            Currently, I am focused on cryptography, zero knowledge, and
            blockchain infrastructure.
          </p>

          <ul className="flex flex-wrap gap-2 text-xs text-neutral-100">
            <li className="hover:bg-stone-700 hover:cursor-pointer p-1 rounded-sm transition-colors ease-in">
              <a
                href="https://github.com/cantoramann"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="hover:bg-stone-700 hover:cursor-pointer p-1 rounded-sm transition-colors ease-in">
              <a
                href="https://twitter.com/cantoramann"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <p className="p-1">toraman@usc.edu (feel free to reach out!)</p>
            </li>
          </ul>

          <div>
            <h3 className="font-mavenp text-2xl mb-4 text-stone-500 selection:bg-neutral-200">
              Experience
            </h3>
            <div className="text-sm space-y-4">
              <p>Getir, backend of delivery zones</p>
              <p>EthSign, early founding member</p>
              <p>USC Autonomous Underwater Vehicle, software lead...</p>
            </div>
          </div>
          <div>
            <h3 className="font-mavenp text-2xl mb-4 text-stone-500 selection:bg-neutral-200">
              Projects
            </h3>
            <div className="mt-3 grid md:grid-cols-2 gap-x-12  gap-y-8">
              {projects.map((p) => {
                return (
                  <div className="">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-fit group"
                    >
                      <h4 className="text-base mb-1 group-hover:font-bold transition-all ease-in">
                        {p.name}
                      </h4>
                      <p className="text-stone-400 text-sm group-hover:text-stone-600 transition-colors ease-in">
                        Lyrics based password generator.
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
