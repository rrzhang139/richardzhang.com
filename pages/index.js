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
            <li>
              <p>
                <a
                  className="hover:text-blue-400 transition-colors"
                  href="https://drive.google.com/file/d/17X9uwHjgCfKy9aiccMQ3WtmzpiiviAlu/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </p>
            </li>
          </ul>
          <div>
            <h3 style={{ fontSize: '16px', color: 'gray' }}>
              Hey, I&apos;m Richard. 
            </h3>
            <h3 className="my-2" style={{ fontSize: '14px', color: 'gray' }}> &gt; I like to think a lot. My biggest hope: mend connections in the digital world and among our human (and non-human) peers </h3>
          </div>
        </div>
        <hr className="my-5"></hr>
        <ul className="mt-12 text-sm list-disc list-inside space-y-10 tracking-wide">
          <li>
             What I&apos;m up to:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>- simulating softbodies at 
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://xiaolonw.github.io/index.html"
                  rel="noreferrer"
                  target="_blank"
                  > Wang Lab</a></li>
              <li>- 
                 <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://www.richardzhang.site/learning"
                  rel="noreferrer"
                  target="_blank"
                > math-maxxing</a></li>
              <li>- building 
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://github.com/rrzhang139/object-detect-robot"
                  rel="noreferrer"
                  target="_blank"
                > robots</a></li>
            </ul>
          </li>
          <li>
            Previously:
            <ul className="pl-10 list-inside space-y-2 pt-2">
              <li>
                🐹 Machine Learning Intern at {" "} 
                <a
                  className="underline hover:text-blue-400 transition-colors"
                  href="https://pika.art/"
                  rel="noreferrer"
                  target="_blank"
                >Pika</a>
              </li>
              <li>
                🧪 Research Assistant at UC Berkeley under Prof Yi Ma
                , diffusion models, multi-modalities
              </li>
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
                  href="https://coinbase.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Coinbase
                </a>
                , building scalable services for the crypto economy.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
