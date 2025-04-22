import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json';

const Promo = () => {
  const [isVisibleTop, setIsVisibleTop] = useState(false);
  const [isVisibleBottom, setIsVisibleBottom] = useState(false);

  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleTop(true);
          topObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleBottom(true);
          bottomObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (topRef.current) {
      topObserver.observe(topRef.current);
    }
    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  const topPromo = data.promo.slice(0, 2);
  const bottomPromo = data.promo.slice(2);

  return (
    <div className="mt-10 mb-10 px-4">
      <div className="mb-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Best Promo</h1>
        <div className="w-24 h-1 bg-red-800 mt-4 mb-6"></div>
      </div>

      {/* Top Promo */}
      <div
        ref={topRef}
        className="flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-700"
      >
        {topPromo.map((promo, index) => (
          <img
            key={promo.alt}
            src={promo.image}
            alt={promo.alt}
            className={`w-full max-w-sm md:w-1/3 lg:w-1/4 transition-all duration-700 ${
              isVisibleTop
                ? index === 0
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-100 -translate-x-0 delay-200'
                : index === 0
                ? 'opacity-0 translate-x-20'
                : 'opacity-0 -translate-x-20'
            }`}
          />
        ))}
      </div>

      {/* Bottom Promo */}
      <div
        ref={bottomRef}
        className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-12 transition-all duration-700"
      >
        {bottomPromo.map((promo) => (
          <img
            key={promo.alt}
            src={promo.image}
            alt={promo.alt}
            className={`w-full max-w-sm sm:w-1/3 md:w-1/4 transition-all duration-700 ${
              isVisibleBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
