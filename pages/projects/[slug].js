import React from "react";
import LandingContainer from "../../components/Containers/LandingContainer";

const ProjectDetails = ({ project }) => {
  return (
    <div>
      <LandingContainer classnames="mt-12 space-y-12">
        <div>
          <h1 className="text-2xl">{project.title}</h1>
          <p className="mt-2 ">{project.description}</p>
          <p className="mt-2">
            <a
              className="text-sm text-blue-500"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit page
            </a>
          </p>
        </div>

        <div>
          <div>
            <h3 className="mb-3 text-lg">Why?</h3>
            <p className="text-base text-justify">{project.why}</p>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-lg">UX Flow</h3>
          <ul className="space-y-4 text-sm list-decimal list-inside">
            {project.flow.map((flow, index) => (
              <li key={index}>{flow}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg">Technical Stack</h3>
          <ul className="flex flex-wrap gap-2 text-xs">
            {project.stack.map((stack, index) => (
              <li key={index} className="p-1 border rounded-md">
                {stack}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg">Technical Features</h3>
          <ul className="space-y-4 text-sm">
            {project.techFeatures.map((feature, index) => (
              <li key={index}>- {feature}</li>
            ))}
          </ul>
        </div>
      </LandingContainer>
    </div>
  );
};

const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "study-on-usc" } }],
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
const getStaticProps = async ({ params: { slug } }) => {
  const projectDetails = {
    "study-on-usc": {
      title: "Study on USC",
      description: "Study group app for USC students.",
      url: "https://www.studyonusc.com/",
      why: [
        "I implemented Study on USC for USC students to create study groups for their classes.",
        "Many classes were hybrid during the pandemic and it was harder to meet friends from the same class and study together.",
      ].join(" "),
      flow: [
        "Students register with their USC emails and verify identity with the code I send to their emails.",
        "Once they login, they enter their classes and instructors. If they cannot see a class, they can add it. Students who create the class are stored in the metadata to ensure community guidelines.",
        "Students then see the upcoming study groups for their classes and can join them.",
        "Once a new study group is added, everyone registered to the class receive an automated email notification.",
      ],
      stack: ["Node.js", "SvelteKit", "MongoDB", "SendGrid", "Vercel"],
      techFeatures: [
        "Custom 2FA with MongoDB and SendGrid",
        "Advanced use of the aggregate framework in MongoDB",
        "Custom token-based authentication. No JWT tokens were used for enhanced server-side security.",
      ],
    },
  };
  return {
    // Passed to the page component as props
    props: { project: projectDetails[slug] },
  };
};

export { getStaticProps, getStaticPaths };
export default ProjectDetails;
