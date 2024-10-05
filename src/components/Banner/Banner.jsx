import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import bnr2 from "../../assets/images/banner/bar1.jpeg";
import bnr1 from "../../assets/images/banner/bnr2.png";
const Banner = () => {
  const [images, setImages] = useState([
    "https://plus.unsplash.com/premium_photo-1682145181120-73cfdfc8a36d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
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
        // x: '-200', // Slide out to the left
        opacity: 0
      });

      gsap.to(nextImage, {
        duration: 2, // Adjust slide duration
        ease: "power3.out", // Adjust easing function
        // x: 0, // Slide in from the right
        opacity: 1
      });

      currentImageIndex.current = nextImageIndex;
    };

    const intervalId = setInterval(animateSlide, 5000); // Adjust interval (ms)

    return () => clearInterval(intervalId);
  }, [images]);

  const sliderRef = useRef(null);

  return (
    <div className=" w-full h-[100%] sm:max-h-screen grid grid-cols-1 sm:grid-cols-5 py-5 gap-2 bg-white lg:px-12 md:px-8 px-4">
      <div className=" h-[500px] sm:h-full col-span-3 relative bg-white" ref={sliderRef}>
        {/* Decorative image and overlay */}
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt=""
            className={`  h-full object-cover object-center absolute inset-0 ${index === 0 ? '' : ' opacity-0' // Hide initial images off-screen
              }`}
          />
        ))}
      </div>
      {/* rigth side  */}
      <div className=" col-span-2 flex flex-col gap-2 h-full w-full relative bg-white">
        {/* Decorative image and overlay */}
        <div className="  ">
          <img src={bnr1} />
        </div>
        <div className="">
          <img src={bnr2} />
        </div>
      </div>
    </div>
  );
};



export default Banner