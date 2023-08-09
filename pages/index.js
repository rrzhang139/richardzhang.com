import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="max-w-2xl mx-auto px-5 md:px-0 mt-12">
        <div className="space-y-5">
          <h1 className="text-3xl font-black tracking-widest">Richard Zhang</h1>
          <ul className="text-xs flex gap-x-3 tracking-wide">
            <li className="">
              <p className="">rzhang139@gmail.com</p>
            </li>
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://github.com/rrzhang139"
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
                  href="https://twitter.com/rzhang139"
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
                  href="https://www.linkedin.com/in/richard-zhang139/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Linkedin
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://richord.notion.site/richord-s-Library-c1fcad85012c4d3abd26503147a1253c"
                  rel="noreferrer"
                  target="_blank"
                >
                  Library
                </a>
              </p>
            </li>
          </ul>
          <div>
            <h3 className="text-sm leading-loose">
              Hi I'm Richard Zhang, or "Richord" as my twitter reply-guys call me.
            </h3>
          </div>
        </div>
        <hr className="my-5"></hr>
        <ul className="mt-12 text-sm list-disc list-inside space-y-10 tracking-wide">
          <li>
             What I&apos;m up to:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>- cryptography</li>
              <li>- p2p/distributed protocols</li>
              <li>- exploring AI alignment and interpretability </li>
            </ul>
          </li>
          <li>
            Previously:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                📜 Engineering/Infrastructure at {" "} 
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://scroll.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Scroll
                </a>
                , building distributed infrastructure and protocols.
              </li>
              <li>
                🌱 Developer/co-founder for {" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.carbonlink.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Carbonlink. 
                </a>
                , a carbon offsetting platform for consumers.
              </li>
              <li>
                🧿 Software Engineer Intern at {" "}
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://uscauv.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Coinbase
                </a>
                , building scalable services for the crypto economy.
              </li>
            </ul>
          </li>
          {/* <li>
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
          </li> */}
        </ul>
      </div>
    </div>
  );
}
