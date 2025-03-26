import Image from 'next/image';

const Figure = ({ src, alt, caption, width = 2048, height = 1170 }) => {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={src} 
          alt={alt || caption || "Image"} 
          width={width} 
          height={height}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-neutral-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;