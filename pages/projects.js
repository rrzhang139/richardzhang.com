import Link from "next/link";
import Nav from "../components/Nav";

const projects = [
  {
    title: "Study On USC!",
    stack: [
      "Node.js",
      "MongoDB",
      "SvelteKit",
      "Vercel",
    ],
    desc: "USC's app to inform classmates about the upcoming study sessions.",
    github: "Please contact",
    demo: "https://www.studyonusc.com",
  },
];

const Projects = () => {
  return (
    <section className="space-y-32">
      <Nav />
      <div className="max-w-5xl mx-auto">
        <ul className="space-y-14">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="px-4 mx-auto xl:mx-0 w-fit max-w-2xl space-y-5">
                <div className="space-y-3 border-l pl-5">
                  <h2 className="text-lg">
                    {project.title}
                  </h2>
                  <p className="text-sm">
                    {project.desc}
                  </p>
                  <ul className="text-xs self-center justify-start flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li className="">{tech}</li>
                    ))}
                  </ul>
                  <p className="flex space-x-4 text-sm">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="text-yellow-400 border-yellow-400"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      className="text-yellow-400 border-yellow-400"
                    >
                      Website
                    </a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
