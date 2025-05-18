import React, { useState } from 'react';

const CustomTimeline = ({ subjects, theme }) => {
  const [highlightedTrack, setHighlightedTrack] = useState(null);

  // Sort subjects by start date
  const sortedSubjects = [...subjects].sort((a, b) => new Date(a.start) - new Date(b.start));

  const startDate = new Date(Math.min(...subjects.map(s => new Date(s.start))));
  const endDate = new Date(Math.max(...subjects.map(s => new Date(s.end))));

  const getTrackColor = (track) => {
    switch(track) {
      case 1: return 'bg-blue-600';
      case 2: return 'bg-blue-400';
      case 3: return 'bg-teal-500';
      case 4: return 'bg-teal-300';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="mt-8 flex">
      {/* Fixed sidebar with buttons */}
      <div className="fixed flex flex-col space-y-4 left-4 top-1/2 transform -translate-y-1/2">
        <button
          className={`px-4 py-2 text-white rounded hover:bg-gray-600 ${highlightedTrack === 1 ? 'bg-blue-600' : 'bg-gray-500'}`}
          onClick={() => setHighlightedTrack(highlightedTrack === 1 ? null : 1)}
        >
          Pure Math
        </button>
        <button
          className={`px-4 py-2 text-white rounded hover:bg-gray-600 ${highlightedTrack === 2 ? 'bg-blue-400' : 'bg-gray-500'}`}
          onClick={() => setHighlightedTrack(highlightedTrack === 2 ? null : 2)}
        >
          ML Theory
        </button>
        <button
          className={`px-4 py-2 text-white rounded hover:bg-gray-600 ${highlightedTrack === 3 ? 'bg-teal-500' : 'bg-gray-500'}`}
          onClick={() => setHighlightedTrack(highlightedTrack === 3 ? null : 3)}
        >
          Applied Math
        </button>
        <button
          className={`px-4 py-2 text-white rounded hover:bg-gray-600 ${highlightedTrack === 4 ? 'bg-teal-300' : 'bg-gray-500'}`}
          onClick={() => setHighlightedTrack(highlightedTrack === 4 ? null : 4)}
        >
          Other
        </button>
      </div>

      {/* Timeline content */}
      <div className={`relative border-l-2 ml-32 flex-grow ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`}>
        {sortedSubjects.map((subject, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white
                            ${getTrackColor(subject.track)}"
                 style={{ backgroundColor: highlightedTrack === null || subject.track === highlightedTrack ? 'currentColor' : '#CBD5E0' }}
            ></div>
            <div className="flex flex-col sm:flex-row items-start ml-6">
              <span className={`text-sm font-normal leading-none mb-1 sm:mb-0 sm:mr-4 w-24 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {formatDate(subject.start)}
              </span>
              <a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-200 
                            ${highlightedTrack === null || subject.track === highlightedTrack 
                              ? theme === 'dark' 
                                ? 'text-white hover:text-blue-400' 
                                : 'text-gray-900 hover:text-blue-600' 
                              : theme === 'dark' 
                                ? 'text-gray-500' 
                                : 'text-gray-400'}`}
              >
                {subject.content}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTimeline;