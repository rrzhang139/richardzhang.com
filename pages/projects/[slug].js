import React from "react";
import LandingContainer from "../../components/Containers/LandingContainer";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <div>
      <LandingContainer classnames="mt-12 space-y-16">
        <div>
          <h1 className="text-2xl">{project.title}</h1>
          <p className="mt-4 italic">{project.description}</p>
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
      description: "USC's premier study group management app for its students.",
    },
  };
  return {
    // Passed to the page component as props
    props: { project: projectDetails[slug] },
  };
};

export { getStaticProps, getStaticPaths };
export default ProjectDetails;
