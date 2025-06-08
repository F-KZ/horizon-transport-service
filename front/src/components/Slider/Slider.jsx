import React, { useState } from 'react';
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
    { component: <Taxi />, title: "Taxi" }
  ];

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

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
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
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-[#FFC727] scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <FaChevronLeft className="text-[#FFC727] text-xl sm:text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
      >
        <FaChevronRight className="text-[#FFC727] text-xl sm:text-2xl" />
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <div className="w-full">
              {slide.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider; 