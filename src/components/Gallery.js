import React from 'react';
import images from '../data/images';

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-gray-100 shadow rounded overflow-hidden">
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
