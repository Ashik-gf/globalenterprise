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
    <div className="bg-white">
      <div className="relative bg-white" ref={sliderRef}>
        {/* Decorative image and overlay */}
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className={`h-full w-full object-cover object-center absolute inset-0 ${
              index === 0 ? '' : 'x-100%' // Hide initial images off-screen
            }`}
          />
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl "> <span className='text-orange-500'>Global</span> Enterprise</h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they're still in stock.
          </p>
          <Link
            to={'/'}
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </div>
  );
};



export default Banner