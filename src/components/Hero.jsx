import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import heroVideo from '/newbg.mp4'; // optimized, compressed background video

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content: Centered Text, Ratings, Buttons */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-24 space-y-4 sm:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Premium Dental Care in <span className="text-orange-400">Abbottabad</span>
        </h1>
        {/* Star Ratings under headline */}
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xl sm:text-2xl" />
          ))}
          <span className="text-sm sm:text-lg text-gray-200">90+ Reviews</span>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
          Get expert care from <strong>Dr. Tahir Awan</strong> (BDS, Endodontist - IDH Islamabad) with painless treatments & modern equipment.
        </p>
        <div className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-6 mt-4">
          <motion.a
            href="tel:03005615535"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-base sm:text-lg font-semibold shadow-xl transform transition hover:scale-105 w-2/3 sm:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={20} /> Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/923005615535"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full text-base sm:text-lg font-semibold shadow-xl transform transition hover:scale-105 w-2/3 sm:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare size={20} /> Book on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}