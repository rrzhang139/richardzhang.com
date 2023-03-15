import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="max-w-2xl mx-auto px-5 md:px-0 mt-12">
        <div className="space-y-5">
          <h1 className="text-3xl font-black tracking-widest">Can Toraman</h1>
          <div>
            <h3 className="text-sm leading-loose">
              Computer science @ University of Southern California.
            </h3>
          </div>
          <ul className="text-xs flex gap-x-3 tracking-wide">
            <li className="">
              <p className="">toraman@usc.edu</p>
            </li>
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://github.com/cantoramann"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://twitter.com/cantoramann"
                  rel="noreferrer"
                  target="_blank"
                >
                  Twitter
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://linkedin.com/in/cantoraman"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
              </p>
            </li>
          </ul>
        </div>

        <ul className="mt-12 text-sm list-disc list-inside space-y-10 tracking-wide">
          <li>
            Currently:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>- Developing the future of ed-tech for devs.</li>
              <li>- Deep diving into distributed systems and cryptography.</li>
              {/* <li>
                - Founding engineer at{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.joinhaven.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Haven
                </a>
                , modernizing kitchen renovation (no kidding).
              </li> */}
            </ul>
          </li>
          <li>
            Previosuly:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                - Full-time zone infrastructure at{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://techcrunch.com/2022/03/17/getir-is-now-worth-nearly-12-billion-after-raising-another-768-million/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Getir
                </a>
                .
              </li>
              <li>
                - Founding team at{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.ethsign.xyz/"
                  rel="noreferrer"
                  target="_blank"
                >
                  EthSign
                </a>
                , the near future of document signing.
              </li>
              <li>
                - Software lead at{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://uscauv.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  USC AUV
                </a>
                , built autonomous systems underwater.
              </li>
            </ul>
          </li>
          <li>
            Some projects:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                -{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://github.com/cantoramann/cli-chat-client"
                  rel="noreferrer"
                  target="_blank"
                >
                  CLI chat
                </a>
                , anonymous chat on the command line.
              </li>
              <li>
                -{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.github.com/cantoramann/govecs"
                  rel="noreferrer"
                  target="_blank"
                >
                  govecs
                </a>
                , vectorization library for Go.
              </li>
              <li>
                -{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://github.com/cantoramann/lightos"
                  rel="noreferrer"
                  target="_blank"
                >
                  Lightos
                </a>
                , opinionated REST framework for Node.js.
              </li>
              <li>
                -{" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.studyonusc.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  studyonusc.com
                </a>
                , study group app for USC during Covid.
              </li>
            </ul>
          </li>
          <li>
            Very passionate about:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>- Tech & design</li>
              <li>- Photography, reading, traveling, hiking</li>
              <li>- Harry Potter fan theories</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
