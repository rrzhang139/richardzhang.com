
// Create a new file for the Projects page
// ./pages/projects/index.js
import Head from "next/head";
import Image from "next/image";
import { Globe, Github } from 'lucide-react';

const createMarkup = (text) => {
  // Basic URL regex pattern
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  return text.split(urlRegex).map((part, i) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

const LinkButton = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

const ProjectCard = ({ name, date, description, link, source, imageUrl }) => (
  <div className="theme-sync bg-eggshell dark:bg-darkNavy rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    {imageUrl && (
      <div className="relative h-48">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
    )}
    <div className="theme-sync p-4 bg-eggshell dark:bg-darkNavy">
      <h3 className="theme-sync-text text-xl font-semibold mb-2 dark:text-neutral-100">{name}</h3>
      <p className="theme-sync-text text-gray-600 dark:text-gray-400 text-sm mb-2">{date}</p>
      <p className="theme-sync-text text-gray-700 dark:text-gray-300 mb-4">{createMarkup(description)}</p>
      <div className="theme-sync flex space-x-4 bg-eggshell dark:bg-darkNavy">
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
      name: "Real2Sim Manipulation",
      date: "June 2025",
      description: "Reproduced Real2sim project on so100 arm for lerobot hackathon. Achieved 80% success rate in sim, and successful demos in real. Kudos to Stone Tao for making this!",
      source: "https://github.com/rrzhang139/lerobot-sim2real/tree/main",
      imageUrl: "https://imgur.com/CcI2tZh.gif"
    },
    {
      name: "Peg Hit Ball Task in Maniskill using PPO",
      date: "June 2025",
      description: "",
      source: "https://github.com/rrzhang139/peg-hit-ball-task-ppo",
      link: "https://drive.google.com/file/d/1unKt4zSwKc119IFUXaVg6tXwC3QwywYf/view?usp=sharing",
      imageUrl: "https://imgur.com/MMZEsTh.gif"
    },
    {
      name: "Past-Token Prediction Simulation",
      date: "May 2025",
      description: "Implemented past-token prediction that improves the performance of long-context diffusion policies. Used Maniskill for simulation.",
      source: "https://github.com/rrzhang139/ptp_simulation",
      imageUrl: "/ptp.gif"
    },
    {
      name: "Soft Body Simulation",
      date: "Feb 2025",
      description: "Built differentiable physics simulator tasks for predicting soft body interactions using Nvidia Warp",
      source: "https://gist.github.com/rrzhang139/dd588820882f6351a2a906cef4a8b677",
      imageUrl: "https://imgur.com/zdish0y.gif"
    },
    {
      name: "Visuotactile Sensor",
      date: "Apr 2025",
      description: "Simple low-cost, DIY visual-based tactile sensor from scratch. Credits to Binghao for creating this!",
      link: "https://binghao-huang.github.io/3D-ViTac/",
      imageUrl: "/tactile.png"
    },
    {
      name: "Control Dynamics Simulator",
      date: "Mar 2025",
      description: "Basic simulation environment for popular control tasks",
      link: "https://control-dynamics-simulator.vercel.app/",
      source: "https://github.com/rrzhang139/control_dynamics_simulator",
      imageUrl: "https://imgur.com/npGp9HM.gif"
    },
    {
      name: "Posebot",
      date: "Dec 2024",
      description: "Pose and depth estimation for a 13-DoF open-source humanoid robot (https://zeroth.bot/). 1st Place at K-Hacks 0.2",
      source: "https://github.com/theswerd/basedbot/",
      imageUrl: "/posebot.gif"
    },
    {
      name: "Detection/Manipulation robot",
      date: "Aug 2024",
      description: "Object detection and manipulation robot using NVIDIA Jetson Xavier NX GPU. My first experience in robotics :)",
      source: "https://github.com/rrzhang139/object-detect-robot",
      imageUrl: "/manipulation.gif"
    },
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
      name: "EmberEvac",
      date: "Oct 2024",
      description: "Ember Evac is an intelligent evacuation assistance system that provides real-time, personalized guidance to residents during wildfire emergencies. Website description: https://devpost.com/software/n-7ljt9u",
      source: "https://github.com/AkashWudali12/CalHacks11.0",
      imageUrl: "/evac.png"
    },
  ];

  return (
    <div>
      <Head>
        <title>Projects | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Richard Zhang&apos;s projects and portfolio"
        />
      </Head>
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-12">
        <h1 className="text-3xl font-black tracking-widest mb-6 dark:text-neutral-100">Projects</h1>
        <p className="text-sm mb-8 dark:text-neutral-300">
          Here are some of the projects I&apos;ve worked on. Click on a project to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400 italic">No projects to display at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Projects;