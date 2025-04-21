import React, { useEffect, useRef, useState } from 'react';
import data from '../data/data.json'

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

  const topPromo = data.promo.slice(0, 2)
  const bottomPromo = data.promo.slice(2)

  return (
    <div className="mt-50 mb-5">
      <div className="mb-20 gap-5 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Best Promo</h1>
        <div className="w-1/4 h-1 mx-auto bg-red-800 mb-12"></div>
      </div>

      <div ref={topRef} className="flex justify-around px-10">
        {topPromo.map((promo, index) => (
          <img
            key={promo.alt}
            src={promo.image}
            alt={promo.alt}
            width="45%"
            className={`transition-all duration-700 ${
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

      <div
        ref={bottomRef}
        className="flex justify-around mt-10 mx-10 transition-all duration-700"
      >
        {bottomPromo.map((promo) => (
          <img
            key={promo.alt}
            src={promo.image}
            alt={promo.alt}
            width="30%"
            className={`transition-all duration-700 ${
              isVisibleBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
