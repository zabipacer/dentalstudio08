import React from 'react';
import { motion } from 'framer-motion';
import { FaAmbulance } from 'react-icons/fa';

export default function EmergencyBanner() {
  return (
    <section
      id="emergency-banner"
      className="bg-gradient-to-br from-orange-500 to-yellow-600 py-16 lg:py-24"
      aria-labelledby="emergency-banner-title"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
        {/* Text Column */}
        <motion.div
          className="text-center lg:text-left flex-1 text-white mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="emergency-banner-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Dental Emergency?
            <br />
            We Can Help!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Fast, expert care for tooth pain, broken crowns, and more. Available 24/7.
          </p>
          <a
            href="https://wa.me/923005615535"
            className="inline-flex items-center justify-center px-8 py-4 bg-black bg-opacity-75 hover:bg-opacity-90 text-orange-400 font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Book Emergency Slot
          </a>
        </motion.div>

        {/* Icon/Image Column */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <FaAmbulance className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-black" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}