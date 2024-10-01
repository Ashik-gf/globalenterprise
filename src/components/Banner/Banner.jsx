import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [images, setImages] = useState([
    'https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg',
    'https://as2.ftcdn.net/v2/jpg/01/92/15/43/1000_F_192154302_BkzcnmB3sLNObIYT6P8JNwCF0xfqdO8f.jpg'
    // Add more image URLs here
  ]);
  const currentImageIndex = useRef(0);

  useEffect(() => {
    const animateSlide = () => {
      const imageElements = sliderRef.current.querySelectorAll('img');
      const currentImage = imageElements[currentImageIndex.current];
      const nextImageIndex = (currentImageIndex.current + 1) % images.length;
      const nextImage = imageElements[nextImageIndex];

      gsap.to(currentImage, {
        duration: 2, // Adjust slide duration
        ease: "power3.out", // Adjust easing function
        // x: '-1240', // Slide out to the left
        opacity:0
      });

      gsap.to(nextImage, {
        duration: 2, // Adjust slide duration
        ease: "power3.out", // Adjust easing function
        x: 0, // Slide in from the right
        opacity:1
      });

      currentImageIndex.current = nextImageIndex;
    };

    const intervalId = setInterval(animateSlide, 5000); // Adjust interval (ms)

    return () => clearInterval(intervalId);
  }, [images]);

  const sliderRef = useRef(null);

  return (
    <div className=" w-full sm:max-h-[600px] grid grid-cols-5 py-5 bg-white">
       <div className=" border-2 col-span-3 relative bg-white" ref={sliderRef}>
        {/* Decorative image and overlay */}
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className={` h-full object-cover object-center absolute inset-0 ${
              index === 0 ? '' : ' opacity-0' // Hide initial images off-screen
            }`}
          />
        ))}
      </div>
{/* rigth side  */}
      <div className=" col-span-2 h-[500px] w-full relative border-2 border-red-500 bg-white">
        {/* Decorative image and overlay */}
        this 
      </div>
    </div>
  );
};



export default Banner