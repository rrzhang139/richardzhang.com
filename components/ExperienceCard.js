import React from "react";

const ExperienceCard = ({ exp }) => {
  return (
    <div className="mb-12">
      <div className="intro font-light">
        <p className="font-bold text-lg">{exp.title}</p>
        <p className="text-sm pb-1">{exp.position}</p>
        <p className="text-xs pb-4">{exp.timeline}</p>
        <div className="top-notes text-xs text-pink-600 pb-4">
          {exp.topNotes.map((note) => {
            return <p>{note}</p>;
          })}
        </div>
      </div>
      <div className="description font-light ml-6 max-w-screen-sm	">
        <p className="mb-3 text-sm">{exp.description}</p>
        <div className="bottom-notes text-sm text-blue-400">
          {exp.bottomNotes &&
            exp.bottomNotes.map((note) => {
              const url = `${note.split("&")[1]}`;
              return (
                <p>
                  <a
                    href={`${url.includes(".com") ? "" : "mailto:"}${url}`}
                    target="_blank"
                  >
                    {note.split("*")[0]}
                  </a>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
