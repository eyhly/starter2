import React, { useEffect, useRef, useState } from 'react';
import background from "/images/bg.webp"; 
import { FaComments, FaCreditCard, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';
import { FaHandHoldingHand } from 'react-icons/fa6';
import data from "../data/data.json";

const Home = () => {
  const iconMap = {
    FaComments: FaComments,
    FaInfoCircle: FaInfoCircle,
    FaCreditCard: FaCreditCard,
    FaHandHoldingHand: FaHandHoldingHand
  };

  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-4 md:px-10"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          ref={contentRef}
          className={`z-10 flex flex-col items-center text-center text-white h-full justify-center gap-5 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase leading-tight">
            {data.home.title}
          </h1>
          <div className="w-1/2 sm:w-1/3 h-1 bg-red-800 mb-4 mt-2"></div>
          <p className="text-sm sm:text-base md:text-xl max-w-md sm:max-w-xl md:max-w-3xl">
            {data.home.desc}
          </p>
          <button className="more flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm sm:text-base md:text-lg transition">
            <FaWhatsapp className="text-lg" /> More Information
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#f4f2f8] py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={index} className="flex flex-col items-center justify-center bg-white p-6 rounded shadow-md">
                <Icon className="text-red-600 text-3xl sm:text-4xl mb-3" />
                <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-2">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
