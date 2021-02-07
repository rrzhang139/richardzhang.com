import Link from "next/link";

const Intro = () => {
  const svgSize = 35;
  return (
    <nav className="m-auto font-yusei h-screen flex flex-col justify-center">
      <h1 className="text-4xl text-center pb-8">Can Toraman</h1>
      <img
        src="/assets/profile.jpg"
        width={180}
        height={180}
        className="rounded-full mx-auto h-min"
        alt="Can Toraman - Computer Science @ University of Southern California'23"
      />
      <p className="text-center py-6">
        <code className="text-center py-6 text-black text-opacity-70">
          Hey, mate!
          <br />
          computer science @{" "}
          <a
            href="https://www.usc.edu/"
            style={{ color: "#990000" }}
            className="text-opacity-100"
          >
            usc'23
          </a>
        </code>
      </p>
      <ul className="flex xs:flex-wrap xs:justify-center xs:text-center">
        <li className="mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto">
          <Link href="/about">
            <a>
              About <span>&rarr;</span>
            </a>
          </Link>
        </li>
        <li className="mx-4 xs:w-1/3 xs:py-3 md:py-0 md:w-auto">
          <Link href="/projects">
            <a>
              Projects <span>&rarr;</span>
            </a>
          </Link>
        </li>
        <li className="mx-4 xs:w-1/3 md:w-auto">
          <a href="/assets/Resume.pdf" download="Can Toraman Resume.pdf">
            Resume
            <span>&rarr;</span>
          </a>
        </li>
        <li className="mx-4 xs:w-1/3 md:w-auto">
          <Link href="/articles">
            <a>
              Articles <span>&rarr;</span>
            </a>
          </Link>
        </li>
      </ul>
      <p className="italic text-sm mt-4 mb-10 text-gray-500"></p>

      <ul className="flex justify-center flex-wrap">
        <li className="mx-2 flex">
          <a href="https://www.linkedin.com/in/cantoraman/" target="_blank">
            <img
              src="https://img.icons8.com/fluent/48/000000/linkedin.svg"
              height={svgSize}
              width={svgSize}
            />
          </a>
        </li>
        <li className="mx-2">
          <a href="https://github.com/cantoramann" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/github.svg"
              height={svgSize}
              width={svgSize}
            />
          </a>
        </li>
        <li className="mx-2 flex flex-row content-center">
          <a
            href="mailto:toraman@usc.edu"
            className="italic tracking-wide text-xl text-blue-400"
          >
            toraman@usc.edu
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Intro;
