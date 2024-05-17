import React, { useState, useEffect, useRef } from "react";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const prevImage = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (transitioning) {
      timeoutRef.current = window.setTimeout(() => {
        setTransitioning(false);
      }, 3500);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [transitioning]);

  useEffect(() => {
    intervalRef.current = window.setInterval(nextImage, 2000); // Change image every 2 seconds
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className={`carousel ${transitioning ? "transition" : ""}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={`/${src}`} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
      <button className="carousel-button left" onClick={prevImage}>&lt;</button>
      <button className="carousel-button right" onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageCarousel;
