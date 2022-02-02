import React from "react";
import Image from "next/image";

const ExperienceCard = ({ exp }) => {
  return (
    <div className='mb-12'>
      <div className='intro'>
        <Image src={exp.image} alt='experience' width='48' height='48' />
        <p className='text-lg'>{exp.title}</p>
        <p className='text-xs pb-3'>{exp.timeline}</p>
        <p className='text-sm'>{exp.position}</p>
        <a
          href={exp.website}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-blue-400'
        >
          visit website
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
