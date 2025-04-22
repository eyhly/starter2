import React, { useEffect, useRef, useState } from 'react'
import data from "../data/data.json";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="px-4 py-16 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Our Gallery</h2>
      <div className="w-24 h-1 mx-auto bg-red-800 mb-12"></div>

      <div
        ref={galleryRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {data.gallery.map((galeri, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={galeri.image}
              alt={galeri.alt}
              className="rounded-md w-full h-40 sm:h-48 object-cover shadow-md"
            />
            <p className="mt-4 text-base sm:text-lg font-semibold text-gray-700">{galeri.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white rounded-full text-sm sm:text-base transition">
          More Information
        </button>
      </div>
    </div>
  );
};

export default Gallery;
