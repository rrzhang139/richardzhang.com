import Head from "next/head";
import Container from "../components/Container/Container";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="max-w-2xl mx-auto mt-8 tracking-wider font-text px-5 md:px-0">
        <h1 className="pb-9">Can Toraman</h1>
        <ul className="pl-10 text-sm list-disc list-inside space-y-10">
          <li>
            Distributed systems & cryptography. Almost done with{" "}
            <a
              className="underline"
              href="https://www.cs.usc.edu/"
              rel="noreferrer"
              target="_blank"
            >
              cs @ usc
            </a>
            .
          </li>
          <li>
            Previosuly:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                - zone infrastructure at{" "}
                <a
                  className="underline"
                  href="https://techcrunch.com/2022/03/17/getir-is-now-worth-nearly-12-billion-after-raising-another-768-million/"
                  rel="noreferrer"
                  target="_blank"
                >
                  getir
                </a>{" "}
                - youngest full-time dev.
              </li>
              <li>
                - founding team at{" "}
                <a
                  className="underline"
                  href="https://www.ethsign.xyz/"
                  rel="noreferrer"
                  target="_blank"
                >
                  ethsign
                </a>
                , the near future of document signing.
              </li>
            </ul>
          </li>
          <li>
            Some fun work:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                -{" "}
                <a
                  className="underline"
                  href="https://chatwithsatoshi.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  chat with satoshi
                </a>
                , chat with GPT-3 powered Satoshi Nakamoto.
              </li>
              <li>
                -{" "}
                <a
                  className="underline"
                  href="https://www.passwordgenerator.lol/"
                  rel="noreferrer"
                  target="_blank"
                >
                  lyrics password generator
                </a>
                , generate password from songs.
              </li>
            </ul>
          </li>
          <li>
            Open to chat about anything, and very passionate about:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>- software security</li>
              <li>- design, photography, reading, traveling, basketball</li>
              <li>- harry potter fan theories and movies in general</li>
            </ul>
          </li>
          <li className="gap-x-3">
            toraman@usc.edu,{" "}
            <a
              className="underline"
              href="https://github.com/cantoramann"
              rel="noreferrer"
              target="_blank"
            >
              github
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://twitter.com/cantoramann"
              rel="noreferrer"
              target="_blank"
            >
              twitter
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://linkedin.com/in/cantoraman"
              rel="noreferrer"
              target="_blank"
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
