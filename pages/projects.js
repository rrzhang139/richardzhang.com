import Layout from "../components/Layout";
import ProjectCard from "../components/projectCard";

const data = [
  {
    title: "ethsign investment round",
    video: "https://www.youtube.com/embed/euTB_YxgDHQ",
  },
  {
    title: "cs @ usc trivia",
    video: "https://www.youtube.com/embed/0e6cmd5ixo4",
  },
  {
    title: "pacman!",
    video: "https://www.youtube.com/embed/Q3JROCcxbDg",
  },
  {
    title: "usc auv wet test",
    video: "https://www.youtube.com/embed/GGGy8LqsVnE",
  },
  {
    title: "space tunnel",
    video: "https://www.youtube.com/embed/WnApex72WQI",
  },
];
const projects = () => {
  return (
    <div className='box-border p-5'>
      <Layout>
        <div className='m-auto max-w-screen-lg pb-14'>
          <ul className='flex flex-wrap justify-center'>
            {data.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
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
