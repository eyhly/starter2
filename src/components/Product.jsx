import React, { useEffect, useRef, useState } from 'react'
import data from '../data/data.json';

const Product = () => {
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
    <div className="text-center py-30 bg-white">
  <h1 className="text-4xl font-bold mb-2">Product Suzuki</h1>
   <div className="w-1/4 h-1 mx-auto bg-red-800 mb-12"></div>

  <div ref={contentRef}
        className={`flex flex-wrap justify-center gap-6 px-4 transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

    {data.products.map((product, i) => (
    <div className="bg-white rounded-xl shadow-md p-6 w-150 hover:shadow-xl transition-all duration-300">
      <div key={i} className="bg-white p-4 rounded shadow">
        <img src={product.image} alt={product.title} className="w-full h-auto mb-4 mt-4" />
        <h3  className="text-3xl font-bold mb-4 mt-4">{product.title}</h3>
        <p className="text-gray-600 text-2xl mt-4 mb-4">{product.price} <br /> {product.description}</p> 
        <button className="more-pro gap-5 mt-4">
          See More 
        </button>      
      </div>
    </div>
    ))}


  </div>
</div>
  )
}

export default Product