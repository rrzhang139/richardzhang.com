import React from 'react';
import Image from 'next/image';

const ImageRow = ({ images, caption }) => {
  return (
    <figure className="my-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {images.map((image, index) => (
          <div key={index} className="flex-1 min-w-0">
            <Image
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageRow; 