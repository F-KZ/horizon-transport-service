import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import About from '../About/About';
import CapacitéTransport from '../About/CapacitéTransport';
import CapacitéNeufPersonnes from '../About/CapacitéNeufPersonnes';
import Taxi from '../About/Taxi';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { component: <About />, title: "À propos" },
    { component: <CapacitéTransport />, title: "Capacité Transport" },
    { component: <CapacitéNeufPersonnes />, title: "Capacité 9 Personnes" },
    { component: <Taxi />, title: "Taxi" },
  ];

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Gestion du swipe tactile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide(); // swipe gauche → slide suivant
      else prevSlide(); // swipe droite → slide précédent
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden touch-pan-y select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dots de navigation */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#FFC727] scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Flèches de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <FaChevronLeft className="text-[#FFC727] text-lg md:text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors"
      >
        <FaChevronRight className="text-[#FFC727] text-lg md:text-2xl" />
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="w-full px-4 sm:px-8 py-8 sm:py-12">
              {slide.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider; 