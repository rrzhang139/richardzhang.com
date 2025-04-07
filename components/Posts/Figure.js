import Image from 'next/image';

const Figure = ({ src, alt, caption, width = 2048, height = 0 }) => {

  const imageStyle = {
    height: height ? `${height}px` : 'auto',
    width: '100%',
    objectFit: 'contain'
  };

  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={src} 
          alt={alt || caption || "Image"} 
          width={width} 
          height={height}
          style={imageStyle}
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