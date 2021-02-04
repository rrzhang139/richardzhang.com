import { useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/projectCard";

const data = [
  {
    title: "EthSign Demo Presentation",
    type: "Web",
    video: "ethsign.mp4",
    description:
      "This video is an excerpt from an investment presentation, taken in June 2020. Participants are my co-founders Potter, Xin, and Jack.",
  },
  {
    title: "CS@USC Trivia Web App",
    type: "Web",
    video: "303project.mp4",
    description:
      "This is a final project written in PHP, vanilla JS and MySQL for Full-Stack Web Deveopment class. CS @ USC is a platform where students and prospective students can post questions about the faculty and classes. Every member can take random quizzes about classes.",
  },
  {
    title: "Pacman",
    type: "Game",
    video: "pacman.mp4",
    description:
      "An intensive lab for game development course ITP 380. First time implementing an AI-based decision making algorithm - naturally a simple one, with Euclidean heuristic.",
  },
  {
    title: "Space Tunnel",
    type: "Game",
    video: "lab7.mp4",
    description:
      "The first three dimensional game I implemented as a part of my class ITP 380.",
  },
  {
    title: "Computer Vision Test Video",
    type: "Computer Vision",
    video: "auv.mp4",
    description:
      "A regular test phase for our USC AUV robot close before the annual RoboSub tournament.",
  },
];
const projects = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="box-border p-5">
      <Layout>
        <div className="m-auto max-w-screen-lg pb-14">
          <ul className="filter flex flex-row justify-center flex-wrap mb-8 mx-0 px-0 text-center text-xs uppercase">
            <li className="mx-4 mb-4 bg-gray-100">
              <div className="p-2 border border-black border-opacity-30 w-20">
                all
              </div>
            </li>
            <li className="mx-4 mb-4 bg-gray-100">
              <div className="p-2 border border-black border-opacity-30 w-20">
                web
              </div>
            </li>
            <li className="mx-4 mb-4 bg-gray-100">
              <div className="p-2 border border-black border-opacity-30 w-20">
                games
              </div>
            </li>
            <li className="mx-4 mb-4 bg-gray-100">
              <div className="p-2 border border-black border-opacity-30 w-20 min-w-max">
                computer vision
              </div>
            </li>
          </ul>
          <p className="text-xs text-center mb-10">
            <span className="text-gray-500">
              Filter coming when needed, not necessary for now though.
            </span>
            <br />
            Only selected projects. Have a bit more on{" "}
            <a
              href="https://github.com/cantoramann"
              className="text-blue-400 underline"
            >
              GitHub
            </a>
            . For more, please contact me.
          </p>

          <ul className="flex flex-wrap justify-center">
            {/* <li className="mx-8 mb-6 w-96">
              <div className="border w-full	p-3 font-yusei flex flex-col">
                <h2 className="underline ml-3">EthSign Demo Presentation</h2>
                <h3 className="text-sm border w-max	p-1 flex flex-row self-end mb-4 mr-5 mt-4">
                  <span>
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyLjUgMyBDIDcuMjc2OTgyIDMgMyA3LjI3Njk4NjIgMyAxMi41IEMgMyAxNy43MjMwMTQgNy4yNzY5ODIgMjIgMTIuNSAyMiBDIDE3LjcyMzAxOCAyMiAyMiAxNy43MjMwMTQgMjIgMTIuNSBDIDIyIDcuMjc2OTg2MiAxNy43MjMwMTggMyAxMi41IDMgeiBNIDM3LjUgMyBDIDMyLjI3Njk4MiAzIDI4IDcuMjc2OTg2MiAyOCAxMi41IEMgMjggMTcuNzIzMDE0IDMyLjI3Njk4MiAyMiAzNy41IDIyIEMgNDIuNzIzMDE4IDIyIDQ3IDE3LjcyMzAxNCA0NyAxMi41IEMgNDcgNy4yNzY5ODYyIDQyLjcyMzAxOCAzIDM3LjUgMyB6IE0gMTIuNSA3IEMgMTUuNTYxMjU5IDcgMTggOS40Mzg3NDI4IDE4IDEyLjUgQyAxOCAxNS41NjEyNTcgMTUuNTYxMjU5IDE4IDEyLjUgMTggQyA5LjQzODc0MTEgMTggNyAxNS41NjEyNTcgNyAxMi41IEMgNyA5LjQzODc0MjggOS40Mzg3NDExIDcgMTIuNSA3IHogTSAzNy41IDcgQyA0MC41NjEyNTkgNyA0MyA5LjQzODc0MjggNDMgMTIuNSBDIDQzIDE1LjU2MTI1NyA0MC41NjEyNTkgMTggMzcuNSAxOCBDIDM0LjQzODc0MSAxOCAzMiAxNS41NjEyNTcgMzIgMTIuNSBDIDMyIDkuNDM4NzQyOCAzNC40Mzg3NDEgNyAzNy41IDcgeiBNIDM3LjUgMjggQyAzMi4yNzY5ODIgMjggMjggMzIuMjc2OTg2IDI4IDM3LjUgQyAyOCA0Mi43MjMwMTQgMzIuMjc2OTgyIDQ3IDM3LjUgNDcgQyA0Mi43MjMwMTggNDcgNDcgNDIuNzIzMDE0IDQ3IDM3LjUgQyA0NyAzMi4yNzY5ODYgNDIuNzIzMDE4IDI4IDM3LjUgMjggeiBNIDM3LjUgMzIgQyA0MC41NjEyNTkgMzIgNDMgMzQuNDM4NzQzIDQzIDM3LjUgQyA0MyA0MC41NjEyNTcgNDAuNTYxMjU5IDQzIDM3LjUgNDMgQyAzNC40Mzg3NDEgNDMgMzIgNDAuNTYxMjU3IDMyIDM3LjUgQyAzMiAzNC40Mzg3NDMgMzQuNDM4NzQxIDMyIDM3LjUgMzIgeiI+PC9wYXRoPjwvc3ZnPg=="
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  </span>
                  web
                </h3>
                <video
                  width="320"
                  height="240"
                  controls
                  className="m-auto mb-7"
                >
                  <source src="/assets/videos/ethsign.mp4" type="video/mp4" />
                </video>
                <p className="font-sans text-center px-2 mb-2 font-light">
                  This video is an excerpt from an investment presentation,
                  taken in June 2020. Participants are co-founders Potter, Xin,
                  and technical lead Jack.
                </p>
              </div>
            </li> */}
            {data.map((project) => (
              <Project
                title={project.title}
                type={project.type}
                url={project.video}
                description={project.description}
              />
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default projects;
