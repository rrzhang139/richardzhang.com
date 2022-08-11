import LandingContainer from "../../components/Containers/LandingContainer";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <LandingContainer classnames="mt-12 space-y-16">
      <div>
        <h1 className="text-2xl">Projects</h1>
        <p className="mt-4 italic">
          My production projects. These are not open source.
        </p>
      </div>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li key={index} className="block border-gray-300">
            <div className="max-w-xl space-y-1">
              <div>
                <h3 className="text-base">{project.title}</h3>
              </div>
              <p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <span className="text-xs hover:cursor-pointer">
                    {project.url.split("www.")[1].split(".com")[0] + ".com"}
                  </span>
                </a>
              </p>
              <p>
                <Link href={`/projects/${project.slug}`}>
                  <span className="text-xs hover:cursor-pointer">
                    Read details...
                  </span>
                </Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </LandingContainer>
  );
};

export const getServerSideProps = async () => {
  const projects = [
    {
      title: "Study group app for USC students",
      description: "USC's premier study group management app for its students.",
      url: "https://www.studyonusc.com",
      slug: "study-on-usc",
    },
  ];

  return { props: { projects } };
};

export default Projects;
