import React from "react";

const ExperienceCard = ({ exp }) => {
  return (
    <div className='mb-12'>
      <div className='intro'>
        <img src={exp.image} className='w-10' />
        <p className='text-lg tracking-wide'>{exp.title}</p>
        <p className='text-xs pb-3'>{exp.timeline}</p>
        <p className='text-sm'>{exp.position}</p>
        <a href={exp.website} target='_blank' className='text-sm text-blue-400'>
          visit website
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
