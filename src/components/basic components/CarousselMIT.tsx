'use client'

import React, { useRef } from 'react';

const CarouselMIT: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full overflow-hidden custom-scrollbar">
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
      >
        {/* Add your images here */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 bg-gray-300 flex   items-center justify-center"
          >
            <img
              src={`https://via.placeholder.com/128?text=${index + 1}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={scrollLeft}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
           &#10094;
        </button>
        <button
          onClick={scrollRight}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
                &#10095;
        </button>
      </div>
    </div>
  );
};

export default CarouselMIT;
