import React from "react";

const ProjectCard = (props) => {
  return (
    <li className='mx-8 mb-6 w-96'>
      <div className='w-full flex flex-col'>
        <h2
          className='text-md text-gray-700 font-extrabold mb-3 tracking-wide'
          style={{ marginLeft: "10%" }}
        >
          {props.title}
        </h2>
        <iframe
          width='80%'
          height='240'
          src={props.url}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='mb-4 mx-auto rounded-xl'
        ></iframe>

        <p className='text-sm mb-5'>{props.description}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
