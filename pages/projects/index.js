
// Create a new file for the Projects page
// ./pages/projects/index.js
import Head from "next/head";
import Image from "next/image";
import { Globe, Github } from 'lucide-react';

const LinkButton = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

const ProjectCard = ({ name, date, description, link, source, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    {imageUrl && (
      <div className="relative h-48">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
    )}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">{date}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        {link && (
          <LinkButton href={link} icon={<Globe size={18} />} text="Website" />
        )}
        {source && (
          <LinkButton href={source} icon={<Github size={18} />} text="Source" />
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      name: "NumpyViz",
      date: "July 2024",
      description: "Code visualizer that renders dynamic visualizations for Numpy operations.",
      source: "https://github.com/rrzhang139/numpyviz",
      imageUrl: "/numpyviz.png"
    },
    {
      name: "Ten-One-One",
      date: "June 2024",
      description: "AI-driven Rapid Incident System designed to revolutionize emergency response. The system leverages AI to track and respond to incidents in real-time, ensuring a faster and more efficient emergency response process.",
      link: "https://tenone.one/",
      source: "https://github.com/carraya/berkeley-ai-2024",
      imageUrl: "/tenoneone.png",
    },
    {
      name: "VNL-testbed",
      date: "May 2024",
      description: "A vision+language testing playground. Observing object-centric, disentangled representations using a pretrained hierarchical slot attention model with increasing frozen slots.",
      source: "https://github.com/michael-psenka/vnl-testbed",
      imageUrl: "/slot.png"
    },
    {
      name: "Material Texture Transfer",
      date: "May 2024",
      description: "Extracting object specific properties for material texture transfer. Integrated Segment-Anything to retain tiny detail features, tiny optimization tricks such as feeding depth map into control net for enhanced depth. Code and inspiration forked from https://github.com/ttchengab/zest_code",
      source: "https://github.com/rrzhang139/zest_code",
      imageUrl: "/material.png"
    },
    {
      name: "Debate-AI",
      date: "Nov 2023",
      description: "Real-time chat interface for users to engage in a debate with an AI agent. It allows users to submit debate topics to two autonomous agents taking each side.",
      source: "https://github.com/rrzhang139/Debate-AI",

    },
  ];

  return (
    <div>
      <Head>
        <title>Projects | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Richard Zhang's projects and portfolio"
        />
      </Head>
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-12">
        <h1 className="text-3xl font-black tracking-widest mb-6">Projects</h1>
        <p className="text-sm mb-8">
          Here are some of the projects I've worked on. Click on a project to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-gray-600 italic">No projects to display at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Projects;