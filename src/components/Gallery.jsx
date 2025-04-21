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
    <div className="px-8 py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Gallery</h2>
      <div className="w-1/4 h-1 mx-auto bg-red-800 mb-12"></div>

      <div
        ref={galleryRef}
        className={`grid grid-cols-1 md:grid-cols-4 gap-6 mx-30 mb-10 transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {data.gallery.map((galeri, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={galeri.image}
              alt={galeri.alt}
              className="rounded-md w-full h-48 object-cover shadow-md"
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">{galeri.title}</p>
          </div>
        ))}
      </div>
      <button className="more flex mx-220 gap-2 items-center">
        More Information
      </button>
    </div>


  );
};

export default Gallery;
