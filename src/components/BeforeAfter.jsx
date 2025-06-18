import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Array of before/after image pairs and process videos
const transformations = [
  {
    before: '/before1.jpg',
    after: '/after1.jpg',
    video: '/process1.mp4',
    altBefore: 'Before treatment - misaligned teeth',
    altAfter: 'After treatment - perfect smile',
  },
  {
    before: '/before4.jpg',
    after: '/after4.jpg',
    video: '/process1.mp4',
    altBefore: 'Before treatment - stained teeth',
    altAfter: 'After treatment - bright white smile',
  },
  {
    before: '/before 3.jpg',
    after: '/after3.jpg',
    video: '/process1.mp4',
    altBefore: 'Before treatment - chipped tooth',
    altAfter: 'After treatment - restored tooth',
  },
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef(null);

  const { before, after, video, altBefore, altAfter } = transformations[currentIndex];

  const handleSliderChange = (e) => setSliderValue(e.target.value);

  const prevSlide = () => {
    setSliderValue(50);
    setCurrentIndex((idx) => (idx - 1 + transformations.length) % transformations.length);
  };
  const nextSlide = () => {
    setSliderValue(50);
    setCurrentIndex((idx) => (idx + 1) % transformations.length);
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6" id="transformations" aria-labelledby="transformations-title">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          id="transformations-title"
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Real Patient Transformations
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Discover how our expert team at Dental Studio Clinic, Faisalabad, has helped patients achieve stunning, confident smiles. Browse multiple transformations and witness life-changing results.
        </motion.p>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevSlide} className="p-2 text-white hover:text-orange-400 focus:outline-none">
            <FaChevronLeft size={24} />
          </button>
          <span className="text-gray-400">
            {currentIndex + 1} / {transformations.length}
          </span>
          <button onClick={nextSlide} className="p-2 text-white hover:text-orange-400 focus:outline-none">
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Before / After Slider */}
        <div ref={containerRef} className="relative w-full overflow-hidden rounded-2xl shadow-2xl mb-8">
          <img
            src={after}
            alt={altAfter}
            className="w-full h-72 object-contain block"
            loading="lazy"
          />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${sliderValue}%` }}
          >
            <img
              src={before}
              alt={altBefore}
              className="w-full h-72 object-contain block"
              loading="lazy"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
            className="absolute bottom-4 left-1/2 w-3/4 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            aria-label="Slide to compare before and after"
          />
          <div className="absolute inset-y-0 left-[50%] w-px bg-orange-400"></div>
        </div>

        {/* Process Video */}
        <motion.div
          className="mt-6 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <video
            src={video}
            controls
            className="w-full aspect-[9/16] rounded-2xl shadow-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="https://wa.me/923005615535"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Your Smile Makeover
            <span className="ml-2">➔</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
