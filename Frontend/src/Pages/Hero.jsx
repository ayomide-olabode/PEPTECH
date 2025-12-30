import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2400',
      alt: 'Physics Laboratory Research'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2400',
      alt: 'Advanced Physics Equipment'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2400',
      alt: 'Quantum Physics Research'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400',
      alt: 'Space and Astrophysics'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2400',
      alt: 'Particle Physics'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-[#191970]/70 hover:bg-[#FFD700] text-white hover:text-[#191970] p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-20 group"
        aria-label="Previous slide"
      >
        <IoChevronBack className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-[#191970]/70 hover:bg-[#FFD700] text-white hover:text-[#191970] p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 z-20 group"
        aria-label="Next slide"
      >
        <IoChevronForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button> */}

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-[#FFD700] rounded-full'
                : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/60 hover:bg-white rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Gold accent border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] z-20"></div>
    </div>
  );
};

export default Hero;