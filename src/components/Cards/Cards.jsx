import React from 'react';

export const Cards = ({ img, title }) => {
  return (
    <div className="w-full max-w-xs mx-auto p-4 mb-8">
      <div className="relative">
        <img className="w-full h-auto" src={img} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
          <h3 className="text-white text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
};


