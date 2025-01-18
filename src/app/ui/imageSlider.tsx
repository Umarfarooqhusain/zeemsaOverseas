"use client";
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = ["/assets/hero2.jpg", "/assets/hero1.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Start fade-in
      }, 20); // Duration of the fade-out
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden mt-6 md:mt-0">
      <img
        src={images[currentIndex]}
        alt="Image Slider"
        className={`w-full h-auto transition-opacity duration-300 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default ImageSlider;
