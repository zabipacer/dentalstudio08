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
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content: Centered Text, Ratings, Buttons */}
      <div className="relative z-10 text-center px-6 lg:px-24 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Premium Dental Care in <span className="text-orange-400">Abbottabad</span>
        </h1>
        {/* Star Ratings under headline */}
        <div className="flex items-center justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-2xl" />
          ))}
          <span className="text-lg text-gray-200">90+ Reviews</span>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Get expert care from <strong>Dr. Tahir Awan</strong> (BDS, Endodontist - IDH Islamabad) with painless treatments & modern equipment.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="tel:03005615535"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-lg font-semibold shadow-xl transform transition hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <Phone size={24} /> Call Now
          </motion.a>
          <motion.a
            href="https://wa.me/923005615535"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full text-lg font-semibold shadow-xl transform transition hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            <MessageSquare size={24} /> Book on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// Dependencies:
// npm install framer-motion lucide-react react-icons
// Tailwind CSS: Ensure 'brightness' utilities and object-cover classes are enabled for video handling.