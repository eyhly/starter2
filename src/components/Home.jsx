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
      <div className="w-full hero h-screen bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
        <div className="w-full h-full flex items-center pl-10">
            <div 
            ref={contentRef}
            className={`relative z-5 flex flex-col items-center justify-center text-center text-white h-full px-4 gap-5 transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                <h1 className="text-3xl md:text-5xl font-bold uppercase">{data.home.title}</h1>
                <div className="w-3/4 h-1 mx-auto bg-red-800 mb-10 mt-5"></div>
                <p className="mt-6 max-w-4xl text-2xl">
                {data.home.desc}
                </p>
                <button className="more flex gap-2 items-center">
                 <FaWhatsapp/> More Information
                </button>
            </div>

            <div className="absolute bottom-[-8rem] left-0 right-0 px-4">
              <div className="bg-[#f4f2f8] py-6 px-4 rounded-lg shadow-md max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
                {data.services.map((service, index) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <div key={index} className="w-3/4 px-5 py-5 h-3/4">
                      <Icon className="text-red-600 text-5xl mx-auto mb-2" />
                      <h4 className="font-semibold text-3xl mb-5">{service.title}</h4>
                      <p className="text-2xl text-gray-600">{service.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
        </div>
      </div>
  )
}

export default Home