import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'ds1.jpg',
  'ds2.jpg',
  'ds3.jpg',
  'ds4.jpg',
  'ds5.jpg',
  'ds6.jpg',
  'ds7.jpg',
  'ds8.jpg',
  'ds9.jpg',
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12">
      <div className="max-w-6xl mx-auto relative overflow-hidden">
        {/* Sliding container showing 3 images */}
        <motion.div
          className="flex"
          animate={{ x: `-${(current * 100) / 3}%` }}
          transition={{ duration: 0.8 }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-1/3 px-2">
              <img
                src={src}
                alt={`Clinic slide ${idx + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-gradient-to-br from-orange-400 to-yellow-600"
              />
            </div>
          ))}
        </motion.div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-orange-400 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-orange-400 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'bg-gradient-to-r from-orange-400 to-yellow-600'
                  : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}