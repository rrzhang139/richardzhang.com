import React, { useState } from 'react';

const CustomTimeline = ({ subjects }) => {
  const [highlightedTrack, setHighlightedTrack] = useState(null);

  // Sort subjects by start date
  const sortedSubjects = [...subjects].sort((a, b) => new Date(a.start) - new Date(b.start));

  const startDate = new Date(Math.min(...subjects.map(s => new Date(s.start))));
  const endDate = new Date(Math.max(...subjects.map(s => new Date(s.end))));

  const getTrackColor = (track) => {
    switch(track) {
      case 1: return 'bg-blue-500';
      case 2: return 'bg-green-500';
      case 3: return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onMouseEnter={() => setHighlightedTrack(1)}
          onMouseLeave={() => setHighlightedTrack(null)}
        >
          Pure Math
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onMouseEnter={() => setHighlightedTrack(2)}
          onMouseLeave={() => setHighlightedTrack(null)}
        >
          ML Theory
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onMouseEnter={() => setHighlightedTrack(3)}
          onMouseLeave={() => setHighlightedTrack(null)}
        >
          Applied Math
        </button>
      </div>
      <div className="relative border-l-2 border-gray-300 ml-4">
        {sortedSubjects.map((subject, index) => (
          <div key={index} className="mb-8 flex items-center">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white
                            ${getTrackColor(subject.track)}"
                 style={{ backgroundColor: highlightedTrack === null || subject.track === highlightedTrack ? 'currentColor' : '#CBD5E0' }}
            ></div>
            <div className="flex flex-col sm:flex-row items-start ml-6">
              <span className="text-sm font-normal leading-none text-gray-400 mb-1 sm:mb-0 sm:mr-4 w-24">
                {formatDate(subject.start)}
              </span>
              <a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium transition-colors duration-200 
                            ${highlightedTrack === null || subject.track === highlightedTrack 
                              ? 'text-gray-900 hover:text-blue-600' 
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