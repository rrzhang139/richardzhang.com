
// Create a new file for the Teaching/Lectures page
// ./pages/teaching/index.js
import Head from "next/head";
import { Play } from 'lucide-react';

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

// Function to extract video ID and determine platform
const getVideoEmbedUrl = (url) => {
  // YouTube URL patterns
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  
  if (youtubeMatch) {
    return {
      platform: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
      id: youtubeMatch[1]
    };
  }
  
  // Vimeo URL patterns
  const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
  const vimeoMatch = url.match(vimeoRegex);
  
  if (vimeoMatch) {
    return {
      platform: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
      id: vimeoMatch[1]
    };
  }
  
  // If no match, return null
  return null;
};

const LectureCard = ({ name, date, description, videoUrl }) => {
  const videoInfo = getVideoEmbedUrl(videoUrl);
  
  return (
    <div className="theme-sync bg-eggshell dark:bg-darkNavy rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {videoInfo ? (
        <div className="relative aspect-video">
          <iframe
            src={videoInfo.embedUrl}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : (
        // Fallback if video URL is not recognized
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <Play className="mx-auto mb-2 text-gray-400" size={32} />
            <p className="text-gray-500 text-sm">Video not available</p>
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-xs"
              >
                Watch externally
              </a>
            )}
          </div>
        </div>
      )}
      
      <div className="theme-sync p-4 bg-eggshell dark:bg-darkNavy">
        <h3 className="theme-sync-text text-xl font-semibold mb-2 dark:text-neutral-100">{name}</h3>
        <p className="theme-sync-text text-gray-600 dark:text-gray-400 text-sm mb-2">{date}</p>
        <p className="theme-sync-text text-gray-700 dark:text-gray-300">{createMarkup(description)}</p>
      </div>
    </div>
  );
};

const Teaching = () => {
  const lectures = [
    {
      name: "Flow Matching",
      date: "Aug 2025",
      description: "A comprehensive introduction to flow matching, covering the basics of flow matching andthe math behind it.",
      videoUrl: "https://youtu.be/DvfFjBh3bx0"
    },
    // Add more lectures here
  ];

  return (
    <div>
      <Head>
        <title>Teaching | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Richard Zhang's lectures and teaching materials"
        />
      </Head>
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-12">
        <h1 className="text-3xl font-black tracking-widest mb-6 dark:text-neutral-100">Teaching</h1>
        <p className="text-sm mb-8 dark:text-neutral-300">
          I really like to learn random things and teach them. Purely selfish acts of internalizing my knowledge.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {lectures.map((lecture, index) => (
            <LectureCard key={index} {...lecture} />
          ))}
        </div>

        {lectures.length === 0 && (
          <p className="text-gray-600 dark:text-gray-400 italic">No lectures to display at the moment. Check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default Teaching;